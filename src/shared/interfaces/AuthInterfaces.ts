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
  token_created_at: Date;
  created_at: Date;
  updated_at: Date;
  picture?: any;
}

interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

export interface ILoginResponse {
  user: User;
  token: Token;
}
