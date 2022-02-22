import { ScrollView } from "react-native";

import {
  LotteryBetFilterContainer,
  LotteryBetFilterBtn,
  LotteryBetFilterBtnText,
} from "./styles";

import { IGame, IGamesResponse } from "@shared/interfaces";

type Props = {
  gamesList: IGamesResponse;
  gameSelected: IGame;
  selectFilterHandler: (game: IGame) => void;
};

const LotteryBetFilter = ({
  gamesList,
  gameSelected,
  selectFilterHandler,
}: Props) => {
  return (
    <ScrollView>
      <LotteryBetFilterContainer>
        {gamesList.types.map((game) => {
          return (
            <LotteryBetFilterBtn
              key={game.id}
              activeOpacity={0.5}
              onPress={selectFilterHandler.bind(null, game)}
              color={game.color}
              active={gameSelected?.id === game.id}
            >
              <LotteryBetFilterBtnText
                color={game.color}
                active={gameSelected?.id === game.id}
                numberOfLines={2}
              >
                {game.type}
              </LotteryBetFilterBtnText>
            </LotteryBetFilterBtn>
          );
        })}
      </LotteryBetFilterContainer>
    </ScrollView>
  );
};

export default LotteryBetFilter;
