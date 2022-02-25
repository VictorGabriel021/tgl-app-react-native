export type AuthParamList = {
  Home: undefined;
  Login: undefined;
  Reset: undefined;
  ChangePassword: { resetToken: string };
  Register: undefined;
};

export type LotteryParamList = {
  LotteryList: undefined;
  LotteryBet: undefined;
  LotteryCart: undefined;
};

export type UserParamList = {
  UserProfile: undefined;
  UserEdit: undefined;
};

export type DrawerParamList = {
  Lottery: undefined;
  User: undefined;
};
