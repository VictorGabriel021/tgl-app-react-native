import { IBodyAuth, ILoginResponse } from "../../interfaces";
import instance from "../axios.config";
import { IAuth } from "./interfaces";

const auth = (): IAuth => {
  async function loginUser(body: IBodyAuth): Promise<ILoginResponse> {
    return instance.post("/login", body);
  }

  return { loginUser };
};

export default auth;
