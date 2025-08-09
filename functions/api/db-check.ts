// GET https://safetysync.ai/api/db-check
// Requires: NEON_DATABASE_URL (Postgres) in Pages env vars
import { neon } from "@neondatabase/serverless";

export const onRequest: PagesFunction = async ({ env }) => {
  try {
    const url = env.NEON_DATABASE_URL as string | undefined;
    if (!url) {
      return new Response(JSON.stringify({ ok: false, error: "NEON_DATABASE_URL not set" }), {
        status: 500,
        headers: { "content-type": "application/json", "cache-control": "no-store" },
      });
    }

    const sql = neon(url);
    // Lightweight, read-only probe
    const rows = await sql`select 'ok' as status, now() as db_time`;

    return new Response(JSON.stringify({ ok: true, result: rows[0] }), {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), {
      status: 500,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  }
};
