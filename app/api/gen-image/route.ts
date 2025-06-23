export async function POST(req: Request) {
  const body = await req.json();

  // "open ai"
  const accountId = "4fbdcb87ed5985b6279ad89f2253ee80";
  const apiToken = "qNaZl5ykz-VKlZVUzaLx7h-cZrHMYHJ_2F9fc00c";

  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
