export async function postConsent(action: 'accept_all'|'reject_all'|'save', categories: any, page?: string) {
  try {
    await fetch(`${import.meta.env.VITE_API_URL || ''}/api/consent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ action, categories, page, sessionId: getSessionId() }),
    });
  } catch {}
}

function getSessionId() {
  const k = 'ssai.sid';
  let v = localStorage.getItem(k);
  if (!v) { v = Math.random().toString(36).slice(2); localStorage.setItem(k, v); }
  return v;
}