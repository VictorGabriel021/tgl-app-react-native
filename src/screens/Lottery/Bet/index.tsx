import { ScrollView, TouchableOpacity } from "react-native";

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
  LotteryBetActionButtonContainer,
  LotteryBetActionButton,
  LotteryBetActionButtonText,
  LotteryBetBtnAddToCart,
  LotteryBetBtnAddToCartText,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { IGame, IGamesResponse } from "@shared/interfaces";

import { games } from "@shared/services";

import LotteryBetFilter from "./Filter";

import LotteryBetNumbers from "./Numbers";

import ErrorMessage from "@components/ErrorMessage";
import LoadingInfo from "@components/LoadingInfo";

const LotteryBetScreen = () => {
  const { listGames } = games();

  const [gamesList, setGamesList] = useState<IGamesResponse>();
  const [gameSelected, setGameSelected] = useState<IGame>();
  const [isLoading, setIsloading] = useState(false);

  const selectFilterHandler = (game: IGame) => {
    setGameSelected(game);
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
          <LotteryBetActionButtonContainer>
            <TouchableOpacity activeOpacity={0.4} style={{ width: "48%" }}>
              <LotteryBetActionButton>
                <LotteryBetActionButtonText>
                  Complete game
                </LotteryBetActionButtonText>
              </LotteryBetActionButton>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={{ width: "48%" }}>
              <LotteryBetActionButton>
                <LotteryBetActionButtonText>
                  Clear game
                </LotteryBetActionButtonText>
              </LotteryBetActionButton>
            </TouchableOpacity>
          </LotteryBetActionButtonContainer>
          <TouchableOpacity activeOpacity={0.8}>
            <LotteryBetBtnAddToCart>
              <AntDesign name="shoppingcart" size={22} color="white" />
              <LotteryBetBtnAddToCartText>
                Add to cart
              </LotteryBetBtnAddToCartText>
            </LotteryBetBtnAddToCart>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <LotteryBetBtnAddToCart>
              <LotteryBetBtnAddToCartText>
                Go to cart
              </LotteryBetBtnAddToCartText>
            </LotteryBetBtnAddToCart>
          </TouchableOpacity>
        </LotteryBetContainer>
      </ScrollView>
    </LotteryBetContainerScroll>
  );
};

export default LotteryBetScreen;
