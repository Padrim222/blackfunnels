export interface Platform {
  google: string;
  meta: string;
  other: string;
}

export interface Feature {
  feature: string;
  otherPrice: string;
  included: boolean;
  platforms: Platform;
}