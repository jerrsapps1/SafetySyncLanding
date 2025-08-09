import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isCI = !!process.env.CI || !!process.env.CLOUDFLARE || !!process.env.CF_PAGES;

export default defineConfig(async () => {
  const plugins = [react()];

  // Only load Replit plugins when NOT building on CI/Cloudflare
  if (!isCI) {
    try {
      const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default ?? (await import("@replit/vite-plugin-runtime-error-modal"));
      plugins.push(runtimeErrorOverlay());

      if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
        const { cartographer } = await import("@replit/vite-plugin-cartographer");
        plugins.push(cartographer());
      }
    } catch {
      // silently skip if plugins aren't installed outside Replit
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: { strict: true, deny: ["**/.*"] },
    },
  };
});
