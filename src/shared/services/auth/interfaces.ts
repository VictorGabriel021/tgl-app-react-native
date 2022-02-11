import { IBodyAuth, ILoginResponse } from "../../interfaces";

export interface IAuth {
  login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
}
