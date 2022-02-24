import instance from "../axios.config";

import {
  IUserProfileResponse,
  IBodyRegister,
  ICreateUserResponse,
  IBodyEdit,
  IUserEditResponse,
} from "@shared/interfaces";

import { IRegister } from "./interfaces";

const user = (): IRegister => {
  async function createUser(body: IBodyRegister): Promise<ICreateUserResponse> {
    return instance.post("/user/create", body);
  }

  async function updateMyUser(body: IBodyEdit): Promise<IUserEditResponse> {
    return instance.put("/user/update", body);
  }

  async function myAccount(): Promise<IUserProfileResponse[]> {
    return instance.get("/user/my-account");
  }

  return { createUser, updateMyUser, myAccount };
};

export default user;
