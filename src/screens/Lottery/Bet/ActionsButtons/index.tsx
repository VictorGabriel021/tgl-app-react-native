import { TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import {
  LotteryBetActionButton,
  LotteryBetActionButtonContainer,
  LotteryBetActionButtonText,
  LotteryBetBtnAddToCart,
  LotteryBetBtnAddToCartText,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { toastShowWarning, toastShowSuccess, isEqualBet } from "@shared/helpers/index";

import { RootState } from "@store/store";
import { addToCart } from "@store/cartSlice";
import { completeGame, clearGame } from "@store/betSlice";

import { IGame } from "@shared/interfaces";

type Props = {
  gameSelected: IGame;
  range: number;
  maxNumber: number;
};

const ActionsButtons = ({ gameSelected, range, maxNumber }: Props) => {
  const { numbers } = useSelector((state: RootState) => state.bet);
  const { games } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const completeGameHandler = () => {
    dispatch(completeGame({ range, maxNumber }));
  };

  const clearGameHandler = () => {
    dispatch(clearGame());
  };

  const { id: game_id, price, color, type } = gameSelected;

  const addToCartHandler = () => {
    if (numbers.length < maxNumber) {
      let missingNumber: any = maxNumber - numbers.length;
      missingNumber =
        missingNumber === 1
          ? missingNumber + " número"
          : missingNumber + " números";
      toastShowWarning(`É necessário selecionar mais ${missingNumber}`);
      return;
    }

    const betItem = {
      id: Math.random(),
      game_id,
      numbers: [...numbers].sort((x: number, y: number) => x - y),
      gameType: {
        type,
        price,
        color,
      },
    };

    if (isEqualBet(games, betItem)) {
      toastShowWarning("Não é possível adicionar o mesmo jogo de loteria!");
      return;
    }
    dispatch(addToCart({ betItem, price }));
    clearGameHandler();
    toastShowSuccess("A aposta foi adicionada no carrinho!", true);
  };

  return (
    <>
      <LotteryBetActionButtonContainer>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{ width: "48%" }}
          onPress={completeGameHandler}
        >
          <LotteryBetActionButton>
            <LotteryBetActionButtonText>
              Complete game
            </LotteryBetActionButtonText>
          </LotteryBetActionButton>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{ width: "48%" }}
          onPress={clearGameHandler}
        >
          <LotteryBetActionButton>
            <LotteryBetActionButtonText>Clear game</LotteryBetActionButtonText>
          </LotteryBetActionButton>
        </TouchableOpacity>
      </LotteryBetActionButtonContainer>
      <TouchableOpacity activeOpacity={0.8} onPress={addToCartHandler}>
        <LotteryBetBtnAddToCart>
          <AntDesign name="shoppingcart" size={22} color="white" />
          <LotteryBetBtnAddToCartText>Add to cart</LotteryBetBtnAddToCartText>
        </LotteryBetBtnAddToCart>
      </TouchableOpacity>
    </>
  );
};

export default ActionsButtons;
