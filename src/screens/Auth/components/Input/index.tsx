import { Text } from "react-native";

import { Input, InputContainer, ErrorMessage } from "./styles";

import { Props } from "../../../../@types/InputControllerTypes";

import { useController } from "react-hook-form";

const InputController = ({
  label,
  name,
  error,
  errorMessage,
  control,
  rules,
  secureTextEntry,
  keyboardType,
}: Props) => {
  const { field } = useController({
    control,
    name,
    rules,
  });

  return (
    <InputContainer>
      <Text>{label}*</Text>
      {!!error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        onChangeText={field.onChange}
        value={field.value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </InputContainer>
  );
};

export default InputController;
