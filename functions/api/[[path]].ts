// Cloudflare Pages Functions: proxy /api/* to your backend
export async function onRequest({ request, params, env }: any) {
  const incomingUrl = new URL(request.url);

  // BACKEND_ORIGIN must be set in Cloudflare Pages → Settings → Functions → Environment variables (Bindings)
  // e.g. https://safetysync-ai-web.onrender.com
  const backendOrigin = env.BACKEND_ORIGIN as string;
  if (!backendOrigin) {
    return new Response("Missing BACKEND_ORIGIN binding", { status: 500 });
  }

  // Build target URL: {BACKEND_ORIGIN}/api/<path>?<query>
  const target = new URL(backendOrigin);
  const tail = (params?.path as string) || "";
  target.pathname = `/api/${tail}`;
  target.search = incomingUrl.search;

  // Forward the original request (method/headers/body). Cloudflare will drop hop-by-hop headers.
  const init: RequestInit = {
    method: request.method,
    headers: request.headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
    redirect: "follow",
  };

  // Do the fetch to your backend
  const resp = await fetch(new Request(target.toString(), init));

  // Return the backend response as-is (you can tweak headers here if needed)
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: resp.headers,
  });
}
