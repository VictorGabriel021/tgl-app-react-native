import { ScrollView } from "react-native";

import LotteryBall from "../Ball";

import { LotteryBetNumberScreen, LotteryBetNumberContainer } from "./styles";

type Props = {
  range: number;
  maxNumber: number;
};

const LotteryBetNumbers = ({ range, maxNumber }: Props) => {
  let numbersList = [];

  for (let i = 1; i <= range; i++) {
    numbersList.push(i);
  }

  return (
    <LotteryBetNumberScreen>
      <ScrollView nestedScrollEnabled>
        <LotteryBetNumberContainer>
          {numbersList.map((num) => {
            return <LotteryBall key={num} maxNumber={maxNumber} number={num} />;
          })}
        </LotteryBetNumberContainer>
      </ScrollView>
    </LotteryBetNumberScreen>
  );
};

export default LotteryBetNumbers;
