import { Text } from "react-native";

import AuthCard from "../../../components/Card/Card";
import { Input, InputContainer } from "../components/Input/styles";

const Recover = () => {
  return (
    <AuthCard title="Reset password" buttonText="Send link" onSumbit={() => {}}>
      <InputContainer>
        <Text>Email</Text>
        <Input />
      </InputContainer>
    </AuthCard>
  );
};

export default Recover;
