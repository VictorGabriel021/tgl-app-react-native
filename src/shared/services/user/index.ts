import instance from "../axios.config";

import { IBodyRegister, ICreateUserResponse } from "../../interfaces";
import { IRegister } from "./interfaces";

const user = (): IRegister => {
  async function createUser(body: IBodyRegister): Promise<ICreateUserResponse> {
    return instance.post("/user/create", body);
  }

  return { createUser };
};

export default user;
