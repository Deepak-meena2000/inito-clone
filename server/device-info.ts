import MobileDetect from "mobile-detect";
import { NextRequest } from "next/server";
import { checkRNWebView } from "./util";

export const deviceInfo = (request: NextRequest) => {
  const userAgent = request.headers.get("user-agent") || "";
  const md = new MobileDetect(userAgent);
  return {
    isMobile: md.mobile() ? true : false,
    isTablet: md.tablet() ? true : false,
    isDesktop: !md.mobile() && !md.tablet() ? true : false,
    isRNWebView: checkRNWebView(request),
  };
};
