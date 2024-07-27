// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getConfig } from "./server/context";

export function middleware(request: NextRequest) {
  const config = JSON.stringify(getConfig(request));
  const response = NextResponse.next();
  response.headers.set("x-global-config", config);
  return response;
}

export const config = {
  matcher: "/",
};
