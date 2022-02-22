import { RootState } from "@store/store";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";

import {
  LotteryBetNumberContainer,
  LotteryBetNumberContent,
  LotteryBetNumber,
} from "./styles";

type Props = {
  range: number;
};

const LotteryBetNumbers = ({ range }: Props) => {
  const { numbers: selectedNumbers } = useSelector(
    (state: RootState) => state.bet
  );

  let number: any = 1;
  let numbersList = [];
  while (number <= range) {
    if (number < 10) {
      number = "0" + number;
    }
    numbersList.push(number);
    number++;
  }

  return (
    <View style={{ height: 250 }}>
      <ScrollView nestedScrollEnabled>
        <LotteryBetNumberContainer>
          {numbersList.map((num) => {
            return (
              <LotteryBetNumberContent
                key={num}
                active={selectedNumbers.includes(+num)}
              >
                <LotteryBetNumber>{num}</LotteryBetNumber>
              </LotteryBetNumberContent>
            );
          })}
        </LotteryBetNumberContainer>
      </ScrollView>
    </View>
  );
};

export default LotteryBetNumbers;
