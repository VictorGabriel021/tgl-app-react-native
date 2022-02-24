import { Button } from "react-native";

import {
  ProfileContainer,
  ProfileImg,
  ProfileInfo,
  ProfileText,
} from "./styles";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { RootState } from "@store/store";

import { dateBrazil } from "@helpers/date";

import { user } from "@shared/services";

import { IUserProfileResponse } from "@shared/interfaces";

const UserProfileScreen = () => {
  const { user: userInfo } = useSelector((state: RootState) => state.auth);
  const { myAccount } = user();

  const [userData, setUserData] = useState<IUserProfileResponse>();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response: any = await myAccount();
        setUserData(response.data);
      } catch (error) {}
    };
    getUserInfo();
  }, []);

  const style = {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
  };

  return (
    <ProfileContainer style={style}>
      {userData?.picture && (
        <ProfileImg
          source={{
            uri: userData.picture,
          }}
        />
      )}
      {!userData?.picture && (
        <ProfileImg source={require("@assets/images/user.jpg")} />
      )}

      <ProfileInfo>
        <ProfileText>{userInfo.name}</ProfileText>
        <ProfileText>{userInfo.email}</ProfileText>
        <ProfileText>
          Quantidade de apostas realizadas: {userData?.bets.length}
        </ProfileText>
        <ProfileText>
          Data de cadastro: {dateBrazil(new Date(userInfo.created_at))}
        </ProfileText>
      </ProfileInfo>
      <Button title="Editar" onPress={() => {}} />
    </ProfileContainer>
  );
};

export default UserProfileScreen;
