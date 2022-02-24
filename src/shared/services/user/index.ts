import instance from "../axios.config";

import {
  IUserProfileResponse,
  IBodyRegister,
  ICreateUserResponse,
} from "@shared/interfaces";

import { IRegister } from "./interfaces";

const user = (): IRegister => {
  async function createUser(body: IBodyRegister): Promise<ICreateUserResponse> {
    return instance.post("/user/create", body);
  }

  async function myAccount(): Promise<IUserProfileResponse[]> {
    return instance.get("/user/my-account");
  }

  return { createUser, myAccount };
};

export default user;
