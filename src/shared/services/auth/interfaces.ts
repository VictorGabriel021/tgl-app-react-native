import {
  IBodyAuth,
  IBodyChangePassword,
  IBodyResetPassword,
  IChangePasswordResponse,
  ILoginResponse,
  IResetResponse,
} from "@shared/interfaces";

export interface IAuth {
  loginUser: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
  resetPassword: ({ email }: IBodyResetPassword) => Promise<IResetResponse>;
  changePassword: (
    resetToken: string,
    { password }: IBodyChangePassword
  ) => Promise<IChangePasswordResponse>;
}
