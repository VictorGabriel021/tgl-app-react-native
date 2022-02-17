export interface IBodyRegister {
  name: string;
  email: string;
  password: string;
}

interface User {
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  id: number;
}

interface Token {
  type: string;
  token: string;
  expires_at: string;
}

export interface ICreateUserResponse {
  user: User;
  token: Token;
}
