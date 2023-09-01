export interface UserProfile {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface ReqResPageAPI {
  page: number;
  per_page: number;
  total: number;
  data: Array<UserProfile>;
  support: Support;
}
