import { User } from "@shared/interfaces/AuthInterfaces";

export type Auth = {
  user: User;
  token: string;
  isAuthenticated: boolean;
  didTryAutoLogin: boolean;
};

export const defaultValuesAuth = {
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
  token: "",
  isAuthenticated: false,
  didTryAutoLogin: false,
};
