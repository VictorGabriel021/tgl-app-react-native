import { IBodyAuth, ILoginResponse } from "../../interfaces";
import instance from "../axios.config";
import { IAuth } from "./interfaces";

const auth = (): IAuth => {
  async function login(body: IBodyAuth): Promise<ILoginResponse> {
    return instance.post("/login", body);
  }

  return { login };
};

export default auth;
