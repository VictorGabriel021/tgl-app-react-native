import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { InputContainer } from "../styles";

import { useForm } from "react-hook-form";

import { Entypo } from "@expo/vector-icons";

import { emailValidation } from "../../../helpers/formValidation";

import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/@types";
import { useNavigation } from "@react-navigation/native";

import { user } from "../../../shared/services";
import { useDispatch } from "react-redux";
import { login } from "../../../store/authSlice";
import Toast from "react-native-tiny-toast";

interface IFormRegister {
  name: string;
  email: string;
  password: string;
}

const RegisterScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const initialValuesForm: IFormRegister = {
    name: "",
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormRegister>({ defaultValues: initialValuesForm });

  const { createUser } = user();

  const dispatch = useDispatch();

  const onSubmit = async (dataForm: IFormRegister) => {
    try {
      const response: any = await createUser(dataForm);
      dispatch(login(response.data));
      reset(initialValuesForm);
      navigation.navigate("DrawerNavigator");
      Toast.showSuccess("Usuário cadastrado com sucesso!", {
        position: Toast.position.BOTTOM,
        containerStyle: { backgroundColor: "green" },
        textStyle: { color: "white", fontSize: 16 },
        imgStyle: { tintColor: "white", height: 35, width: 35 },
      });
    } catch (error: any) {
      Toast.showSuccess("Este e-mail já está cadastrado no sistema", {
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

  return (
    <AuthCard
      title="Registration"
      titleRedirect="Back"
      buttonText="Register"
      onNavigation={() => navigation.replace("Login")}
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
