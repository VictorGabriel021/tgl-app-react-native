import { TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { addAndRemoveNumberManually } from "@store/betSlice";
import { RootState } from "@store/store";

import { LotteryBetNumberContent, LotteryBetNumber } from "./styles";

import { toastShowWarning } from "@shared/helpers/toastInfo";

type Props = {
  maxNumber: number;
  number: number;
};

const LotteryBall = ({ maxNumber, number }: Props) => {
  const { numbers: selectedNumbers } = useSelector(
    (state: RootState) => state.bet
  );

  const dispatch = useDispatch();

  const selectNumberHandler = async (num: number) => {
    if (
      selectedNumbers.length < maxNumber ||
      (selectedNumbers.length === maxNumber && selectedNumbers.includes(num))
    ) {
      dispatch(addAndRemoveNumberManually(num));
    } else {
      toastShowWarning(`Você já selecionou ${maxNumber} números!`);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={selectNumberHandler.bind(null, number)}
    >
      <LotteryBetNumberContent active={selectedNumbers.includes(number)}>
        <LotteryBetNumber>
          {number.toString().padStart(2, "0")}
        </LotteryBetNumber>
      </LotteryBetNumberContent>
    </TouchableOpacity>
  );
};

export default LotteryBall;
