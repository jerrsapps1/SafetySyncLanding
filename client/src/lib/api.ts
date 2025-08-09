export async function api(path: string, init?: RequestInit) {
  const res = await fetch(`/api${path.startsWith("/") ? path : `/${path}`}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return res.json();
}

// Example:
// const health = await api("/health");
