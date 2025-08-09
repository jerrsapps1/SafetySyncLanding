import fetch from "node-fetch";

const url = process.env.WARMUP_URL || "https://safetysync-ai-web-v2.onrender.com/api/ping";

async function keepAlive() {
  try {
    const res = await fetch(url);
    console.log(`[Warmup] Pinged ${url} - Status: ${res.status}`);
  } catch (err) {
    console.error("[Warmup] Error pinging:", err);
  }
}

// Run immediately and every 4 minutes
keepAlive();
setInterval(keepAlive, 4 * 60 * 1000);
