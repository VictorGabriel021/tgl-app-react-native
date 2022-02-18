import { Text } from "react-native";

import { InputContent, Input, ErrorMessage } from "./styles";

import { useController } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  error: any;
  errorMessage: any;
  control: any;
  rules?: any;
  secureTextEntry?: boolean;
};

const InputController = ({
  label,
  name,
  error,
  errorMessage,
  control,
  rules,
  secureTextEntry,
}: Props) => {
  const { field } = useController({
    control,
    name,
    rules,
  });

  return (
    <InputContent>
      <Text>{label}*</Text>
      {!!error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        onChangeText={field.onChange}
        value={field.value}
        secureTextEntry={secureTextEntry}
      />
    </InputContent>
  );
};

export default InputController;
