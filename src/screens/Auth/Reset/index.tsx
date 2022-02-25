import { useState } from "react";

import { useForm } from "react-hook-form";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { InputContainer } from "../styles";

import { emailValidation, toastShowError } from "@helpers/index";

import {
  AuthCard,
  InputController,
  LoadingInfo,
  TextSubmitForm,
} from "@components/index";

import { AuthParamList } from "@navigation/@types";

import { auth } from "@shared/services";

interface IFormReset {
  email: string;
}

const initialValuesForm = { email: "" };

type rootScreenProp = StackNavigationProp<AuthParamList, "ChangePassword">;

const ResetScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormReset>({ defaultValues: initialValuesForm });

  const navigation = useNavigation<rootScreenProp>();

  const { resetPassword } = auth();

  const onSubmit = async (dataForm: IFormReset) => {
    setIsLoading(true);
    try {
      const response: any = await resetPassword(dataForm);
      reset(initialValuesForm);
      navigation.navigate("ChangePassword", {
        resetToken: response.data.token,
      });
    } catch (error: any) {
      toastShowError("Usuário não encontrado em nossa base de dados!");
    }
    setIsLoading(false);
  };

  return (
    <AuthCard
      title="Reset password"
      titleRedirect="Back"
      onNavigation={() => navigation.replace("Login")}
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
      {isLoading && <LoadingInfo />}
      {!isLoading && (
        <TextSubmitForm
          buttonText="Send Link"
          onSumbit={handleSubmit(onSubmit)}
        />
      )}
    </AuthCard>
  );
};

export default ResetScreen;
