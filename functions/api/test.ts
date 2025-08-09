// Responds at: https://<your-domain>/api/test
export const onRequest: PagesFunction = async ({ request }) => {
  const ua = request.headers.get("user-agent") || "unknown";
  return new Response(
    JSON.stringify({
      ok: true,
      message: "Backend test via Cloudflare Pages Functions",
      ua,
      time: new Date().toISOString(),
    }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
      },
    }
  );
};
