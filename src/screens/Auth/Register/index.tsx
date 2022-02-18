import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { InputContainer } from "../styles";

import { useForm } from "react-hook-form";

import { Entypo } from "@expo/vector-icons";

import { emailValidation } from "../../../helpers/formValidation";

import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";
import TextSubmitForm from "../../../components/Auth/TextSubmitForm";
import LoadingInfo from "../../../components/LoadingInfo";

import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../../../navigation/@types";
import { useNavigation } from "@react-navigation/native";

import { user } from "../../../shared/services";

import { useDispatch } from "react-redux";

import { login } from "../../../store/authSlice";

import { toastShowError, toastShowSuccess } from "../../../helpers/toastInfo";

interface IFormRegister {
  name: string;
  email: string;
  password: string;
}

const initialValuesForm: IFormRegister = {
  name: "",
  email: "",
  password: "",
};

type rootScreenProp = StackNavigationProp<AuthParamList, "Login">;

const RegisterScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormRegister>({ defaultValues: initialValuesForm });

  const { createUser } = user();

  const dispatch = useDispatch();

  const navigation = useNavigation<rootScreenProp>();

  const onSubmit = async (dataForm: IFormRegister) => {
    setIsLoading(true);
    try {
      const response: any = await createUser(dataForm);
      dispatch(login(response.data));
      reset(initialValuesForm);
      setIsLoading(false);
      toastShowSuccess("Successful registered user!");
    } catch (error: any) {
      setIsLoading(false);
      toastShowError("This email is already registered in the system!");
    }
  };

  return (
    <AuthCard
      title="Registration"
      titleRedirect="Back"
      onNavigation={() => navigation.replace("Login")}
    >
      <InputContainer>
        <InputController
          label="Name"
          name="name"
          error={errors.name}
          errorMessage={errors.name?.message}
          control={control}
          rules={{
            required: "Este campo é obrigatório",
            minLength: {
              value: 4,
              message: "Deve ter no mínimo 4 caracteres",
            },
          }}
        />
      </InputContainer>
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
      {isLoading && <LoadingInfo />}
      {!isLoading && (
        <TextSubmitForm
          buttonText="Register"
          onSumbit={handleSubmit(onSubmit)}
        />
      )}
    </AuthCard>
  );
};

export default RegisterScreen;
