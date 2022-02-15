import AuthCard from "../../../components/Card/Card";

import { useForm } from "react-hook-form";

import InputController from "../components/Input";
import { useState } from "react";

interface IFormLogin {
  email: string;
  password: string;
}

const Login = () => {
  //const [hidePassword, setHidePassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const onSubmit = (data: IFormLogin) => {
    console.log(data);
  };

  return (
    <AuthCard
      title="Authentication"
      buttonText="Log In"
      onSumbit={handleSubmit(onSubmit)}
    >
      <InputController
        label="Email"
        name="email"
        error={errors.email}
        errorMessage={errors.email?.message}
        control={control}
        rules={{
          required: "Este campo é obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email inválido",
          },
        }}
      />
      <InputController
        label="Password"
        name="password"
        secureTextEntry={true}
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
    </AuthCard>
  );
};

export default Login;
