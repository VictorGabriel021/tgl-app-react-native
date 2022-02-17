import { useState } from "react";
import { useForm } from "react-hook-form";

import { InputContainer } from "../styles";

import { emailValidation } from "../../../helpers/formValidation";

import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../../navigation/@types";

import { auth } from "../../../shared/services";

import Toast from "react-native-tiny-toast";
import ChangePasswordScreen from "../ChangePassword";

interface IFormReset {
  email: string;
  password: string;
}

const ResetScreen = () => {
  const initialValuesForm = { email: "" };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormReset>({ defaultValues: initialValuesForm });

  const { resetPassword } = auth();
  const [resetToken, setResetToken] = useState("");

  const onSubmit = async (dataForm: IFormReset) => {
    try {
      const response: any = await resetPassword(dataForm);
      setResetToken(response.data.token);
      reset(initialValuesForm);
    } catch (error: any) {
      Toast.showSuccess(error, {
        position: Toast.position.BOTTOM,
        containerStyle: { backgroundColor: "red" },
        textStyle: { color: "white", fontSize: 16 },
        imgSource: require("../../../assets/images/error-icon.png"),
        imgStyle: { tintColor: "white", height: 35, width: 35 },
      });
    }
  };

  type rootScreenProp = StackNavigationProp<
    RootStackParamList,
    "DrawerNavigator"
  >;

  const navigation = useNavigation<rootScreenProp>();

  if (resetToken.length > 0) {
    return <ChangePasswordScreen resetToken={resetToken} />;
  }

  return (
    <AuthCard
      title="Reset password"
      titleRedirect="Back"
      buttonText="Send link"
      onNavigation={() => navigation.replace("Login")}
      onSumbit={handleSubmit(onSubmit)}
    >
      <InputContainer>
        <InputController
          label="Email"
          name="email"
          error={errors.email}
          errorMessage={errors.email?.message}
          control={control}
          rules={{
            required: "Este campo é obrigatório",
            pattern: {
              value: emailValidation,
              message: "Email inválido",
            },
          }}
        />
      </InputContainer>
    </AuthCard>
  );
};

export default ResetScreen;
