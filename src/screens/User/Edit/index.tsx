import { TouchableOpacity } from "react-native";

import {
  UserEditButton,
  UserEditButtonText,
  UserEditContainer,
} from "./styles";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import { InputController, LoadingInfo } from "@components/index";

import { emailValidation, toastShowSuccess } from "@helpers/index";

import { InputContainer } from "@screens/Auth/styles";

import { RootState } from "@store/store";
import { updateUser } from "@store/authSlice";

import { user } from "@shared/services";

interface IFormEdit {
  name: string;
  email: string;
}

const initialValuesForm: IFormEdit = {
  name: "",
  email: "",
};

const style = {
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 5,
};

const UserEditScreen = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEdit>({ defaultValues: initialValuesForm });

  const { email, name } = useSelector((state: RootState) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { updateMyUser } = user();

  const onSubmit = async (dataForm: IFormEdit) => {
    setIsLoading(true);
    try {
      const response: any = await updateMyUser(dataForm);
      dispatch(updateUser(response.data));
      setIsLoading(false);
      toastShowSuccess("Usuário alterado com sucesso !");
    } catch (error: any) {}
    setIsLoading(false);
  };

  useEffect(() => {
    setValue("email", email);
    setValue("name", name);
  }, [email, name, setValue]);

  return (
    <UserEditContainer style={style}>
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
      <TouchableOpacity activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
        <UserEditButton>
          {isLoading && <LoadingInfo color="white" />}
          {!isLoading && <UserEditButtonText>Salvar</UserEditButtonText>}
        </UserEditButton>
      </TouchableOpacity>
    </UserEditContainer>
  );
};

export default UserEditScreen;
