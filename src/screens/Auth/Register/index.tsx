import { Text } from "react-native";

import AuthCard from "../../../components/Card/Card";

import { Input, InputContainer } from "../components/Input/styles";

const Register = () => {
  return (
    <AuthCard title="Registration" buttonText="Register" onSumbit={() => {}}>
      <InputContainer>
        <Text>Name</Text>
        <Input />
      </InputContainer>
      <InputContainer>
        <Text>Email</Text>
        <Input />
      </InputContainer>
      <InputContainer>
        <Text>Password</Text>
        <Input />
      </InputContainer>
    </AuthCard>
  );
};

export default Register;
