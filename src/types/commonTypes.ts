export interface University {
  alpha_two_code: string;
  name: string;
  country: string;
  domains: string[];
  web_pages: string[];
  "state-province": string;
  deleting?: boolean; // Optional flag to control animation
}
