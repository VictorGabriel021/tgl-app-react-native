import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { InputContainer } from "../styles";

import { useForm } from "react-hook-form";

import { Entypo } from "@expo/vector-icons";

import { emailValidation } from "../../../helpers/formValidation";

import AuthCard from "../../../components/Card/Card";
import InputController from "../../../components/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/@types";
import { useNavigation } from "@react-navigation/native";

interface IFormRegister {
  name: string;
  email: string;
  password: string;
}

const RegisterScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();

  const onSubmit = (data: IFormRegister) => {
    console.log(data);
  };

  type rootScreenProp = StackNavigationProp<
    RootStackParamList,
    "DrawerNavigator"
  >;

  const navigation = useNavigation<rootScreenProp>();

  return (
    <AuthCard
      title="Registration"
      titleRedirect="Back"
      buttonText="Register"
      onNavigation={() => navigation.navigate("Login")}
      onSumbit={handleSubmit(onSubmit)}
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
    </AuthCard>
  );
};

export default RegisterScreen;
