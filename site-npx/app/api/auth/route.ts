import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.SITE_PASSWORD) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", "true", {
      httpOnly: true,
      secure: false, // IMPORTANT for local dev
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ error: "Invalid" }, { status: 401 });
}