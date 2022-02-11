import { Text } from "react-native";

import AuthPresentation from "../../../components/Auth/AuthPresentation";
import AuthCard from "../../../components/Card/Card";

const Register = () => {
  return (
    <>
      <AuthPresentation />
      <AuthCard title="Registration" buttonText="Register">
        <Text>Register</Text>
      </AuthCard>
    </>
  );
};

export default Register;
