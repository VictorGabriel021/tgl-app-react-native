import { ScrollView, View } from "react-native";

import {
  LotteryBetNumberContainer,
  LotteryBetNumberContent,
  LotteryBetNumber,
} from "./styles";

type Props = {
  range: number;
};

const LotteryBetNumbers = ({ range }: Props) => {
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
              <LotteryBetNumberContent key={num}>
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
