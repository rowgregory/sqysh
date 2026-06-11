const BASE = "https://api.printful.com";

export const pf = async (
  path: string,
  init?: RequestInit,
  retries = 3,
): Promise<any> => {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_TOKEN!}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (res.status === 429 && retries > 0) {
    // Printful tells you how long to wait — honor it
    const retryAfter = Number(res.headers.get("Retry-After")) || 30;
    await new Promise((r) => setTimeout(r, (retryAfter + 1) * 1000));
    return pf(path, init, retries - 1);
  }

  if (!res.ok)
    throw new Error(`Printful ${path} → ${res.status} ${await res.text()}`);
  return res.json();
};
