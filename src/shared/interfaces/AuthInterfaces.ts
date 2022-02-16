export interface IBodyAuth {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string;
  token_created_at: string;
  created_at: string;
  updated_at: string;
  picture?: any;
}

interface Token {
  type: string;
  token: string;
  expires_at: string;
}

export interface ILoginResponse {
  user: User;
  token: Token;
}

export const defaultValuesILoginResponse = {
  user: {
    id: 0,
    email: "",
    is_admin: 0,
    name: "",
    token: "",
    token_created_at: "",
    created_at: "",
    updated_at: "",
    picture: "",
  },
  token: {
    type: "",
    token: "",
    expires_at: "",
  },
};
