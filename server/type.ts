export interface Config {
  common: CommonTypes;
  tenant: Tenant;
  cookies?: string;
}
export interface Tenant {
  brand: string;
  url: string;
}

export interface CommonTypes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isRNWebView: boolean;
}
