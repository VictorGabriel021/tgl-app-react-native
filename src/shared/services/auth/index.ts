import instance from "../axios.config";

import {
  IBodyAuth,
  IBodyChangePassword,
  IBodyResetPassword,
  IChangePasswordResponse,
  ILoginResponse,
  IResetResponse,
} from "@shared/interfaces";

import { IAuth } from "./interfaces";

const auth = (): IAuth => {
  async function loginUser(body: IBodyAuth): Promise<ILoginResponse> {
    return instance.post("/login", body);
  }

  async function resetPassword(
    body: IBodyResetPassword
  ): Promise<IResetResponse> {
    return instance.post("/reset", body);
  }

  async function changePassword(
    resetToken: string,
    body: IBodyChangePassword
  ): Promise<IChangePasswordResponse> {
    return instance.post(`/reset/${resetToken}`, body);
  }

  return { loginUser, resetPassword, changePassword };
};

export default auth;
