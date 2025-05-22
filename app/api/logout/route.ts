import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookieStore = await cookies();

  cookieStore.delete("auth_token");

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
