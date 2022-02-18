import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { ForgetPasswordText, InputContainer } from "../styles";

import { useForm } from "react-hook-form";

import { Entypo } from "@expo/vector-icons";

import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";
import TextSubmitForm from "../../../components/Auth/TextSubmitForm";
import LoadingInfo from "../../../components/LoadingInfo";

import { emailValidation } from "../../../helpers/formValidation";

import { useDispatch } from "react-redux";
import { login } from "../../../store/authSlice";

import { auth } from "../../../shared/services";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../../../navigation/@types";

import { toastShowError } from "../../../helpers/toastInfo";

interface IFormLogin {
  email: string;
  password: string;
}

const initialValuesForm: IFormLogin = { email: "", password: "" };

type rootScreenProp = StackNavigationProp<AuthParamList, "Home">;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    defaultValues: initialValuesForm,
  });

  const dispatch = useDispatch();

  const { loginUser } = auth();

  const navigation = useNavigation<rootScreenProp>();

  const onSubmit = async (dataForm: IFormLogin) => {
    setIsLoading(true);
    try {
      const response: any = await loginUser(dataForm);
      dispatch(login(response.data));
      reset(initialValuesForm);
    } catch (error: any) {
      toastShowError("Invalid password or email!");
    }
    setIsLoading(false);
  };

  return (
    <AuthCard
      title="Authentication"
      titleRedirect="Sign Up"
      onNavigation={() => navigation.replace("Register")}
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
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.replace("Reset")}
      >
        <ForgetPasswordText>I forget my password</ForgetPasswordText>
      </TouchableOpacity>
      {isLoading && <LoadingInfo />}
      {!isLoading && (
        <TextSubmitForm buttonText="Log In" onSumbit={handleSubmit(onSubmit)} />
      )}
    </AuthCard>
  );
};

export default LoginScreen;
