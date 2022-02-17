import { IBodyRegister, ICreateUserResponse } from "../../interfaces";

export interface IRegister {
  createUser: ({
    name,
    email,
    password,
  }: IBodyRegister) => Promise<ICreateUserResponse>;
}
