import { FlatList, View } from "react-native";

import { LoterryListItemContainer } from "./styles";

import React, { useCallback, useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import LotteryBetFilter from "@screens/Lottery/Bet/Filter";

import { IGamesResponse, IGame, IBetListResponse } from "@shared/interfaces";

import { bets, games } from "@shared/services";

import { LoadingInfo, ErrorMessage } from "@components/index";

import LotteryListItem from "./Item";

import { saveFilterInfo } from "@store/filterSlice";

const LotteryListScreen = () => {
  const [betList, setBetList] = useState<IBetListResponse[]>([]);
  const [gamesList, setGamesList] = useState<IGamesResponse>();
  const [gameSelectedList, setGameSelectedList] = useState<string[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [isLoadingBetList, setIsloadingBetList] = useState(false);
  const dispatch = useDispatch();

  const { listBet } = bets();
  const { listGames } = games();

  const getGameList = useCallback(async (types?: string[]) => {
    setIsloadingBetList(true);
    let params: any = "";
    if (!!types) {
      params = {
        type: types,
      };
    }
    try {
      const response: any = await listBet(params);
      setBetList(response.data);
    } catch (error) {
      setBetList([]);
    }
    setIsloadingBetList(false);
  }, []);

  const selectFilterHandler = (game: IGame) => {
    let types: string[];

    if (gameSelectedList.includes(game.type)) {
      setGameSelectedList((prev) => {
        types = prev.filter((item) => item !== game.type);
        getGameList(types);
        return types;
      });
    } else {
      setGameSelectedList((prev) => {
        types = [...prev, game.type];
        getGameList(types);
        return types;
      });
    }
  };

  useEffect(() => {
    getGameList();
  }, [getGameList]);

  useEffect(() => {
    const getGamesData = async () => {
      setIsloading(true);
      try {
        const response: any = await listGames();
        setGamesList(response.data);
        dispatch(saveFilterInfo(response.data));
      } catch (error) {}
      setIsloading(false);
    };
    getGamesData();
  }, []);

  if (isLoading) {
    return <LoadingInfo size="large" />;
  }

  if (!gamesList) {
    return <ErrorMessage message="Error loading betting filter information" />;
  }

  let header = (
    <View style={{ marginBottom: 20 }}>
      <LotteryBetFilter
        gamesList={gamesList}
        gameSelected={gameSelectedList}
        selectFilterHandler={selectFilterHandler}
      />
    </View>
  );

  let content = (
    <FlatList
      ListHeaderComponent={header}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
      data={betList}
      renderItem={(itemData) => {
        const gameColor = gamesList.types.find(
          (game) => game.id === itemData.item.game_id
        )!.color;
        return (
          <LotteryListItem
            key={itemData.item.id}
            bet={itemData.item}
            color={gameColor}
          />
        );
      }}
    />
  );

  if (isLoadingBetList) {
    content = (
      <>
        {header}
        <LoadingInfo size="large" />
      </>
    );
  }

  if (
    (betList.length === 0 && gameSelectedList.length === 0) ||
    gameSelectedList.length > 1
  ) {
    content = (
      <>
        {header}
        <ErrorMessage message="Não existem apostas para serem filtradas!" />
      </>
    );
  }

  if (betList.length === 0 && gameSelectedList.length === 1) {
    content = (
      <>
        {header}
        <ErrorMessage message="Não existem apostas registradas para esse jogo!" />
      </>
    );
  }

  return <LoterryListItemContainer>{content}</LoterryListItemContainer>;
};

export default LotteryListScreen;
