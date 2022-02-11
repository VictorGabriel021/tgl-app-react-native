import { Text } from "react-native";

import AuthPresentation from "../../../components/Auth/AuthPresentation";
import AuthCard from "../../../components/Card/Card";

const Recover = () => {
  return (
    <>
      <AuthPresentation />
      <AuthCard title="Reset password" buttonText="Send link">
        <Text>Recover</Text>
      </AuthCard>
    </>
  );
};

export default Recover;
