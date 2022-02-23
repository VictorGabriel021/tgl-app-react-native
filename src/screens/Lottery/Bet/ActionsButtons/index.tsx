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

import { toastShowWarning, toastShowSuccess } from "@helpers/toastInfo";
import { isEqualBet } from "@helpers/bet";

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
      let oneNumber = "1 more number";
      let moreNumber = `${missingNumber} more numbers`;
      missingNumber = missingNumber === 1 ? oneNumber : moreNumber;
      toastShowWarning(`It's necessary to select ${missingNumber}`);
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
      toastShowWarning("Can't add the same bet");
      return;
    }
    dispatch(addToCart({ betItem, price }));
    clearGameHandler();
    toastShowSuccess("The bet has been added to the cart", true);
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
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <LotteryBetBtnAddToCart>
          <LotteryBetBtnAddToCartText>Go to cart</LotteryBetBtnAddToCartText>
        </LotteryBetBtnAddToCart>
      </TouchableOpacity>
    </>
  );
};

export default ActionsButtons;
