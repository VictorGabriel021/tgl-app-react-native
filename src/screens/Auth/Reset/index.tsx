import { useState } from "react";

import { useForm } from "react-hook-form";

import { InputContainer } from "../styles";

import { emailValidation } from "../../../helpers/formValidation";

import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";
import LoadingInfo from "../../../components/LoadingInfo";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { AuthParamList } from "../../../navigation/@types";

import { auth } from "../../../shared/services";

import TextSubmitForm from "../../../components/Auth/TextSubmitForm";

import { toastShowError } from "../../../helpers/toastInfo";

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
      toastShowError("User not found in database!");
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
