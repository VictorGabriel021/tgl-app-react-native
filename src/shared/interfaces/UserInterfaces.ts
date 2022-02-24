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

export interface BetType {
  id: number;
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUserProfileResponse {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token?: any;
  token_created_at?: any;
  created_at: Date;
  updated_at: Date;
  bets: BetType[];
  picture?: any;
}
