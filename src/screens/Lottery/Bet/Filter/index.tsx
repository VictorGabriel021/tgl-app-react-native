import {
  LotteryBetFilterContainer,
  LotteryBetFilterBtn,
  LotteryBetFilterBtnText,
} from "./styles";

import { IGame, IGamesResponse } from "@shared/interfaces";

type Props = {
  gamesList: IGamesResponse;
  gameSelected: string[];
  selectFilterHandler: (game: IGame) => void;
};

const LotteryBetFilter = ({
  gamesList,
  gameSelected,
  selectFilterHandler,
}: Props) => {
  return (
    <LotteryBetFilterContainer>
      {gamesList.types.map((game) => {
        return (
          <LotteryBetFilterBtn
            key={game.id}
            activeOpacity={0.5}
            onPress={selectFilterHandler.bind(null, game)}
            color={game.color}
            active={gameSelected.includes(game.type)}
          >
            <LotteryBetFilterBtnText
              color={game.color}
              active={gameSelected.includes(game.type)}
              numberOfLines={2}
            >
              {game.type}
            </LotteryBetFilterBtnText>
          </LotteryBetFilterBtn>
        );
      })}
    </LotteryBetFilterContainer>
  );
};

export default LotteryBetFilter;
