import devices from "@/shared/constants/device";
import { NextRequest } from "next/server";

export function getConfigFromHeaders(headersList: Headers) {
  const config = headersList.get("x-global-config");
  return config ? JSON.parse(config) : {};
}

export const checkRNWebView = (request: NextRequest) => {
  const {
    nextUrl: { search },
  } = request;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const { device, utm_medium } = params || {};
  const { WEBVIEW, ANDROID, IOS } = devices;

  const isRNWebView =
    (utm_medium === WEBVIEW && (device === ANDROID || device === IOS)) || false;
  return isRNWebView;
};
