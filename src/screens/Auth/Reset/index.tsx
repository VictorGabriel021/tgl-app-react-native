import { useForm } from "react-hook-form";

import { InputContainer } from "../styles";

import { emailValidation } from "../../../helpers/formValidation";

import AuthCard from "../../../components/Card/Card";
import InputController from "../../../components/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/@types";
import { useNavigation } from "@react-navigation/native";

interface IFormReset {
  email: string;
  password: string;
}

const ResetScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormReset>();

  const onSubmit = (data: IFormReset) => {
    console.log(data);
  };

  type rootScreenProp = StackNavigationProp<
    RootStackParamList,
    "DrawerNavigator"
  >;

  const navigation = useNavigation<rootScreenProp>();

  return (
    <AuthCard
      title="Reset password"
      titleRedirect="Back"
      buttonText="Send link"
      onNavigation={() => navigation.navigate("Login")}
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
