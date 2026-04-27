import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("auth");

  if (!auth && request.nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}