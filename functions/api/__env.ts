export const onRequest: PagesFunction = async (ctx) => {
  const origin = (ctx.env as any)?.BACKEND_ORIGIN || "";
  return new Response(
    JSON.stringify({
      ok: true,
      hasBackendOrigin: Boolean(origin),
      backendOrigin: origin
    }),
    { headers: { "content-type": "application/json" } }
  );
};
