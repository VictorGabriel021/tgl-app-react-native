import {
  IBodyRegister,
  ICreateUserResponse,
  IUserProfileResponse,
} from "@shared/interfaces";

export interface IRegister {
  createUser: ({
    name,
    email,
    password,
  }: IBodyRegister) => Promise<ICreateUserResponse>;

  myAccount: () => Promise<IUserProfileResponse[]>;
}
