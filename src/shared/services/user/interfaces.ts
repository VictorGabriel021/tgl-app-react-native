import { IBodyRegister, ICreateUserResponse } from "@shared/interfaces";

export interface IRegister {
  createUser: ({
    name,
    email,
    password,
  }: IBodyRegister) => Promise<ICreateUserResponse>;
}
