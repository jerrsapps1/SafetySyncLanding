// Responds at: https://<your-domain>/api/health
export const onRequest: PagesFunction = async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      service: "pages-functions",
      time: new Date().toISOString(),
    }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store", // ensure never cached
      },
    }
  );
};
