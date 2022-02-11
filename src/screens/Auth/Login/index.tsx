import { Text } from "react-native";

import AuthPresentation from "../../../components/Auth/AuthPresentation";
import AuthCard from "../../../components/Card/Card";

const Login = () => {
  return (
    <>
      <AuthPresentation />
      <AuthCard buttonText="Log In">
        <Text>Login</Text>
      </AuthCard>
    </>
  );
};

export default Login;
