import { TouchableOpacity } from "react-native";

import {
  LotteryBetActionButton,
  LotteryBetActionButtonContainer,
  LotteryBetActionButtonText,
  LotteryBetBtnAddToCart,
  LotteryBetBtnAddToCartText,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

import { completeGame, clearGame } from "@store/betSlice";

import { useDispatch } from "react-redux";

type Props = {
  range: number;
  maxNumber: number;
};

const ActionsButtons = ({ range, maxNumber }: Props) => {
  const dispatch = useDispatch();

  const completeGameHandler = () => {
    dispatch(completeGame({ range, maxNumber }));
  };

  const clearGameHandler = () => {
    dispatch(clearGame());
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
      <TouchableOpacity activeOpacity={0.8}>
        <LotteryBetBtnAddToCart>
          <AntDesign name="shoppingcart" size={22} color="white" />
          <LotteryBetBtnAddToCartText>Add to cart</LotteryBetBtnAddToCartText>
        </LotteryBetBtnAddToCart>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <LotteryBetBtnAddToCart>
          <LotteryBetBtnAddToCartText>Go to cart</LotteryBetBtnAddToCartText>
        </LotteryBetBtnAddToCart>
      </TouchableOpacity>
    </>
  );
};

export default ActionsButtons;
