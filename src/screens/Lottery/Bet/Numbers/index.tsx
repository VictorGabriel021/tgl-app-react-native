import { ScrollView, TouchableOpacity, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { addAndRemoveNumberManually } from "@store/betSlice";
import { RootState } from "@store/store";

import {
  LotteryBetNumberContainer,
  LotteryBetNumberContent,
  LotteryBetNumber,
} from "./styles";

import { toastShowWarning } from "@helpers/toastInfo";

type Props = {
  range: number;
  maxNumber: number;
};

const LotteryBetNumbers = ({ range, maxNumber }: Props) => {
  const { numbers: selectedNumbers } = useSelector(
    (state: RootState) => state.bet
  );

  const dispatch = useDispatch();

  let number: any = 1;
  let numbersList = [];

  while (number <= range) {
    numbersList.push(number);
    number++;
  }

  const selectNumberHandler = (num: number) => {
    if (
      selectedNumbers.length < maxNumber ||
      (selectedNumbers.length === maxNumber && selectedNumbers.includes(num))
    ) {
      dispatch(addAndRemoveNumberManually(num));
    } else {
      toastShowWarning(`You've selected ${maxNumber} numbers!`);
    }
  };

  return (
    <View style={{ height: 250, marginVertical: 15 }}>
      <ScrollView nestedScrollEnabled>
        <LotteryBetNumberContainer>
          {numbersList.map((num) => {
            let number = num;
            if (num < 10) {
              number = "0" + num;
            }
            return (
              <TouchableOpacity
                key={num}
                activeOpacity={0.5}
                onPress={selectNumberHandler.bind(null, num)}
              >
                <LotteryBetNumberContent active={selectedNumbers.includes(num)}>
                  <LotteryBetNumber>{number}</LotteryBetNumber>
                </LotteryBetNumberContent>
              </TouchableOpacity>
            );
          })}
        </LotteryBetNumberContainer>
      </ScrollView>
    </View>
  );
};

export default LotteryBetNumbers;
