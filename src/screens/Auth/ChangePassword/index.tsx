import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { useForm } from "react-hook-form";

import { InputContainer } from "../styles";

import { Entypo } from "@expo/vector-icons";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { AuthParamList } from "@navigation/@types";

import { toastShowError, toastShowSuccess } from "@shared/helpers/toastInfo";

import {
  AuthCard,
  InputController,
  TextSubmitForm,
  LoadingInfo,
} from "@components/index";

import { auth } from "@shared/services";

interface IFormChangePassword {
  password: string;
  confirmPassword: string;
}

const initialValuesForm = { password: "", confirmPassword: "" };

type rootScreenProp = StackNavigationProp<AuthParamList, "Login">;
type ChangePasswordScreenRouteProp = RouteProp<AuthParamList, "ChangePassword">;

const ChangePasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IFormChangePassword>({ defaultValues: initialValuesForm });

  const { changePassword } = auth();

  const navigation = useNavigation<rootScreenProp>();
  const route = useRoute<ChangePasswordScreenRouteProp>();

  const onSubmit = async ({
    password,
    confirmPassword,
  }: IFormChangePassword) => {
    if (password !== confirmPassword) {
      setError("password", {
        type: "validate",
        message: "As senhas não correspondem",
      });
      setError("confirmPassword", {
        type: "validate",
        message: "As senhas não correspondem",
      });
      return;
    }
    setIsLoading(true);
    try {
      const resetToken = route.params.resetToken;
      await changePassword(resetToken, { password });
      reset(initialValuesForm);
      navigation.replace("Login");
      toastShowSuccess("Senha alterada !");
    } catch (error: any) {
      toastShowError("Erro ao salvar os dados!");
    }
    setIsLoading(false);
  };

  return (
    <AuthCard
      title="Reset password"
      titleRedirect="Back"
      onNavigation={() => navigation.goBack()}
    >
      <InputContainer>
        <InputController
          label="Password"
          name="password"
          secureTextEntry={hidePassword}
          error={errors.password}
          errorMessage={errors.password?.message}
          control={control}
          rules={{
            required: "Este campo é obrigatório",
            minLength: {
              value: 4,
              message: "Deve ter no mínimo 4 caracteres",
            },
          }}
        />
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setHidePassword(!hidePassword)}
        >
          {hidePassword ? (
            <Entypo name="eye" size={24} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="black" />
          )}
        </TouchableOpacity>
      </InputContainer>
      <InputContainer>
        <InputController
          label="Confirm Password"
          name="confirmPassword"
          secureTextEntry={hideConfirmPassword}
          error={errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          control={control}
          rules={{
            required: "Este campo é obrigatório",
            minLength: {
              value: 4,
              message: "Deve ter no mínimo 4 caracteres",
            },
          }}
        />
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
        >
          {hideConfirmPassword ? (
            <Entypo name="eye" size={24} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="black" />
          )}
        </TouchableOpacity>
      </InputContainer>
      {isLoading && <LoadingInfo />}

      {!isLoading && (
        <TextSubmitForm buttonText="Save" onSumbit={handleSubmit(onSubmit)} />
      )}
    </AuthCard>
  );
};

export default ChangePasswordScreen;
