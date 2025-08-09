// Cloudflare Pages Functions: proxy /api/* to your backend
export async function onRequest({ request, params, env }: any) {
  const url = new URL(request.url);
  const tail = (params?.path as string) || "";

  // ---- Self-tests (hit these from the browser) ----
  if (tail === "ping") {
    return new Response("pong", { status: 200 });
  }
  if (tail === "__env") {
    // Return whether BACKEND_ORIGIN is visible to this function
    return Response.json({
      ok: true,
      hasBackendOrigin: Boolean(env.BACKEND_ORIGIN),
      backendOriginSample: env.BACKEND_ORIGIN?.slice(0, 40) || null,
    });
  }
  // -------------------------------------------------

  const backendOrigin = env.BACKEND_ORIGIN as string | undefined;
  if (!backendOrigin) {
    return Response.json(
      {
        ok: false,
        error: "Missing BACKEND_ORIGIN binding. Add it in Pages → Settings → Variables & Secrets.",
        hint: "Set BACKEND_ORIGIN to your backend base URL, e.g. https://safetysync-ai-web.onrender.com",
      },
      { status: 500 },
    );
  }

  // Compose target URL: {BACKEND_ORIGIN}/api/<tail>?<query>
  const target = new URL(backendOrigin);
  target.pathname = `/api/${tail}`;
  target.search = url.search;

  // Forward original request
  const init: RequestInit = {
    method: request.method,
    headers: request.headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
    redirect: "follow",
  };

  const resp = await fetch(new Request(target.toString(), init));

  // Pass through response (you can adjust headers here if needed)
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: resp.headers,
  });
}
