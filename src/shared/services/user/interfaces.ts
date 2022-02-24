import {
  IBodyRegister,
  IBodyEdit,
  ICreateUserResponse,
  IUserProfileResponse,
  IUserEditResponse,
} from "@shared/interfaces";

export interface IRegister {
  createUser: ({
    name,
    email,
    password,
  }: IBodyRegister) => Promise<ICreateUserResponse>;

  updateMyUser: ({ email, name }: IBodyEdit) => Promise<IUserEditResponse>;

  myAccount: () => Promise<IUserProfileResponse[]>;
}
