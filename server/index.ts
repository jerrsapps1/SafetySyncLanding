import express, { type Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple API request logging (only /api/*)
app.use((req, res, next) => {
  const start = Date.now();
  const routePath = req.path;
  let capturedJson: Record<string, any> | undefined;

  const originalJson = res.json.bind(res);
  (res as any).json = (body: any, ...args: any[]) => {
    capturedJson = body;
    return originalJson(body, ...args);
  };

  res.on("finish", () => {
    if (routePath.startsWith("/api")) {
      const duration = Date.now() - start;
      let line = `${req.method} ${routePath} ${res.statusCode} in ${duration}ms`;
      if (capturedJson) {
        try {
          line += ` :: ${JSON.stringify(capturedJson)}`;
        } catch {}
      }
      if (line.length > 80) line = line.slice(0, 79) + "…";
      log(line);
    }
  });

  next();
});

(async () => {
  // Register your API routes
  const server = await registerRoutes(app);

  // Global error handler for API routes
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    // Log and rethrow for visibility in logs
    try { log(`ERROR ${status}: ${message}`); } catch {}
    throw err;
  });

  // Dev vs Prod behavior
  if (app.get("env") === "development") {
    // In dev, use Vite middleware (after routes so it doesn't hijack /api)
    await setupVite(app, server);
  } else {
    // In production on Render, only serve static files if they exist locally.
    // (Your frontend is built/deployed on Cloudflare Pages, so this usually won't exist.)
    const staticDir = path.resolve(process.cwd(), "dist/public");
    if (fs.existsSync(staticDir)) {
      serveStatic(app);
      log("Serving static files from dist/public");
    } else {
      log("No dist/public found. Skipping static files (Cloudflare serves the frontend).");
    }
  }

  // Start the server — Render exposes process.env.PORT
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    { port, host: "0.0.0.0", reusePort: true },
    () => log(`Server listening on port ${port}`)
  );
})();
