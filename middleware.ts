import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  
  // Extract subdomain from hostname
  // Format: subdomain.domain.com or subdomain.localhost:3000
  const parts = hostname.split(".");
  let subdomain = "";
  
  // For localhost, subdomain might be at the start: subdomain.localhost:3000
  // For production, it's: subdomain.domain.com
  if (hostname.includes("localhost")) {
    // Check if there's a subdomain before localhost
    if (parts.length > 1 && parts[0] !== "localhost") {
      subdomain = parts[0];
    }
  } else {
    // Production domain - subdomain is typically the first part
    if (parts.length >= 3) {
      subdomain = parts[0];
    }
  }
  
  // Add subdomain to headers so we can access it in the app
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-subdomain", subdomain);
  
  // Add subdomain to URL search params for easy access
  if (subdomain) {
    url.searchParams.set("subdomain", subdomain);
  }
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
