// Keep the Render instance warm by pinging the API every 4 minutes.
// Uses Node 18+ built-in fetch (no dependency needed).

const warmupUrl =
  process.env.WARMUP_URL ||
  "https://safetysync-ai-web-v2.onrender.com/api/ping";

async function keepAlive() {
  try {
    const res = await fetch(warmupUrl, { method: "GET" });
    console.log(`[Warmup] Ping ${warmupUrl} → ${res.status}`);
  } catch (err) {
    console.error("[Warmup] Error:", err);
  }
}

// Run immediately, then every 4 minutes
keepAlive();
setInterval(keepAlive, 4 * 60 * 1000);
