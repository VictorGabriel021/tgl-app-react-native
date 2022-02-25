import { ScrollView, View } from "react-native";

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

import ActionsButtons from "./ActionsButtons";

import { ErrorMessage, LoadingInfo } from "@components/index";

import { clearGame } from "@store/betSlice";
import { saveFilterInfo } from "@store/filterSlice";

import { useDispatch } from "react-redux";

const LotteryBetScreen = () => {
  const [gamesList, setGamesList] = useState<IGamesResponse>();
  const [gameSelected, setGameSelected] = useState<IGame>();
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();
  const { listGames } = games();

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
        dispatch(saveFilterInfo(response.data));
      } catch (error) {}
      await dispatch(clearGame());
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
            <LotteryBetTitleText>FOR {gameSelected.type}</LotteryBetTitleText>
          </LotteryBetTitleContainer>
          <LotteryBetChooseGame>
            <LotteryBetText>Choose a game</LotteryBetText>
          </LotteryBetChooseGame>
          <LotteryBetFilter
            gamesList={gamesList}
            gameSelected={[gameSelected.type]}
            selectFilterHandler={selectFilterHandler}
          />

          <LotteryBetDescriptionContainer>
            <View style={{ marginVertical: 10 }}>
              <LotteryBetText>Game Price</LotteryBetText>
              <LotteryBetDescription>
                R$ {gameSelected.price.toFixed(2)}
              </LotteryBetDescription>
            </View>

            <LotteryBetText>Fill your bet</LotteryBetText>
            <LotteryBetDescription>
              {gameSelected.description}
            </LotteryBetDescription>
          </LotteryBetDescriptionContainer>
          {gameSelected && (
            <LotteryBetNumbers
              range={gameSelected.range}
              maxNumber={gameSelected.max_number}
            />
          )}
          <ActionsButtons
            gameSelected={gameSelected}
            range={gameSelected.range}
            maxNumber={gameSelected.max_number}
          />
        </LotteryBetContainer>
      </ScrollView>
    </LotteryBetContainerScroll>
  );
};

export default LotteryBetScreen;
