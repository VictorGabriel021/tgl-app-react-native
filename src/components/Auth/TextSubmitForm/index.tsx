import { TouchableOpacity } from "react-native";

import { CardTextAction, CardTextActionContainer } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { Colors } from "@constants/index";

type Props = {
  buttonText: string;
  onSumbit: () => void;
};

const TextSubmitForm = ({ buttonText, onSumbit }: Props) => {
  return (
    <CardTextActionContainer>
      <TouchableOpacity activeOpacity={0.4} onPress={onSumbit}>
        <CardTextAction>
          {buttonText}
          <AntDesign name="arrowright" size={24} color={Colors.secondary} />
        </CardTextAction>
      </TouchableOpacity>
    </CardTextActionContainer>
  );
};

export default TextSubmitForm;
