import { useState } from "react";

import { TouchableOpacity } from "react-native";

import { ForgetPasswordText, InputContainer } from "../styles";

import { useForm } from "react-hook-form";

import { Entypo } from "@expo/vector-icons";

import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";

import { emailValidation } from "../../../helpers/formValidation";

import { useDispatch } from "react-redux";
import { login } from "../../../store/authSlice";

import { auth } from "../../../shared/services";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/@types";

import Toast from "react-native-tiny-toast";

interface IFormLogin {
  email: string;
  password: string;
}

const initialValuesForm: IFormLogin = { email: "", password: "" };

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const {
    control,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    defaultValues: initialValuesForm,
  });

  const dispatch = useDispatch();

  const { loginUser } = auth();

  type rootScreenProp = StackNavigationProp<
    RootStackParamList,
    "DrawerNavigator"
  >;

  const navigation = useNavigation<rootScreenProp>();

  const onSubmit = async (dataForm: IFormLogin) => {
    try {
      const response: any = await loginUser(dataForm);
      dispatch(login(response.data));
      reset(initialValuesForm);
      navigation.navigate("DrawerNavigator");
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

  return (
    <AuthCard
      title="Authentication"
      titleRedirect="Sign Up"
      buttonText="Log In"
      onNavigation={() => navigation.replace("Register")}
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
    </AuthCard>
  );
};

export default LoginScreen;
