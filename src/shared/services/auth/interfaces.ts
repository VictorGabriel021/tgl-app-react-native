import { IBodyAuth, ILoginResponse } from "../../interfaces";

export interface IAuth {
  loginUser: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
}
