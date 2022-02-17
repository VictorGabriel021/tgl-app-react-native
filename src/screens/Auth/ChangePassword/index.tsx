import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import Toast from "react-native-tiny-toast";
import AuthCard from "../../../components/Auth/Card/Card";
import InputController from "../../../components/Auth/Input";
import { RootStackParamList } from "../../../navigation/@types";
import { auth } from "../../../shared/services";
import { InputContainer } from "../styles";

type rootScreenProp = StackNavigationProp<
  RootStackParamList,
  "DrawerNavigator"
>;

interface IFormChangePassword {
  password: string;
  confirmPassword: string;
}

type Props = {
  resetToken: string;
};

const ChangePasswordScreen = ({ resetToken }: Props) => {
  const initialValuesForm = { password: "", confirmPassword: "" };
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IFormChangePassword>({ defaultValues: initialValuesForm });

  const { changePassword } = auth();
  const navigation = useNavigation<rootScreenProp>();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

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

    try {
      await changePassword(resetToken, { password });
      reset(initialValuesForm);
      navigation.navigate("Login");
      Toast.showSuccess("Senha alterada com sucesso!", {
        position: Toast.position.BOTTOM,
        containerStyle: { backgroundColor: "green" },
        textStyle: { color: "white", fontSize: 16 },
        imgStyle: { tintColor: "white", height: 35, width: 35 },
      });
    } catch (error: any) {
      Toast.showSuccess("Erro ao salvar os dados", {
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
      title="Reset password"
      titleRedirect="Back"
      buttonText="Send link"
      onNavigation={() => navigation.replace("Reset")}
      onSumbit={handleSubmit(onSubmit)}
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
    </AuthCard>
  );
};

export default ChangePasswordScreen;
