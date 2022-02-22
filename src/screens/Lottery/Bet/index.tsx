import { ScrollView } from "react-native";

import { useEffect, useState } from "react";

import {
  LotteryBetContainerScroll,
  LotteryBetContainer,
  LotteryBetTitleContainer,
  LotteryBetTitleText,
  LotteryBetTitleTextBold,
  LotteryBetChooseGame,
  LotteryBetText,
  LotteryBetDescriptionContainer,
  LotteryBetDescription,
} from "./styles";

import { IGame, IGamesResponse } from "@shared/interfaces";

import { games } from "@shared/services";

import LotteryBetFilter from "./Filter";

import LotteryBetNumbers from "./Numbers";

import ErrorMessage from "@components/ErrorMessage";
import LoadingInfo from "@components/LoadingInfo";

import ActionsButtons from "./ActionsButtons";

import { clearGame } from "@store/betSlice";

import { useDispatch } from "react-redux";

const LotteryBetScreen = () => {
  const dispatch = useDispatch();

  const { listGames } = games();

  const [gamesList, setGamesList] = useState<IGamesResponse>();
  const [gameSelected, setGameSelected] = useState<IGame>();
  const [isLoading, setIsloading] = useState(false);

  const selectFilterHandler = (game: IGame) => {
    if (gameSelected !== game) {
      dispatch(clearGame());
      setGameSelected(game);
    }
  };

  useEffect(() => {
    const getGamesData = async () => {
      setIsloading(true);
      try {
        const response: any = await listGames();
        setGamesList(response.data);
        setGameSelected(response.data.types[0]);
      } catch (error) {}
      setIsloading(false);
    };
    getGamesData();
  }, []);

  if (isLoading) {
    return <LoadingInfo size="large" />;
  }

  if (!gamesList || !gameSelected) {
    return <ErrorMessage />;
  }

  return (
    <LotteryBetContainerScroll>
      <ScrollView scrollEnabled>
        <LotteryBetContainer>
          <LotteryBetTitleContainer>
            <LotteryBetTitleTextBold>NEW BET</LotteryBetTitleTextBold>
            <LotteryBetTitleText>FOR {gameSelected?.type}</LotteryBetTitleText>
          </LotteryBetTitleContainer>
          <LotteryBetChooseGame>
            <LotteryBetText>Choose a game</LotteryBetText>
          </LotteryBetChooseGame>
          <LotteryBetFilter
            gamesList={gamesList}
            gameSelected={gameSelected}
            selectFilterHandler={selectFilterHandler}
          />
          <LotteryBetDescriptionContainer>
            <LotteryBetText>Fill your bet</LotteryBetText>
            <LotteryBetDescription>
              {gameSelected?.description}
            </LotteryBetDescription>
          </LotteryBetDescriptionContainer>
          {gameSelected && <LotteryBetNumbers range={gameSelected.range} />}
          <ActionsButtons
            range={gameSelected.range}
            maxNumber={gameSelected.max_number}
          />
        </LotteryBetContainer>
      </ScrollView>
    </LotteryBetContainerScroll>
  );
};

export default LotteryBetScreen;
