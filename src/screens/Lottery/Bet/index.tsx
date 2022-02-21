import { ScrollView, TouchableOpacity } from "react-native";

import {
  LotteryBetContainerScroll,
  LotteryBetContainer,
  LotteryBetTitleContainer,
  LotteryBetTitleText,
  LotteryBetTitleTextBold,
  LotteryBetChooseGame,
  LotteryBetText,
  LotteryBetFilterContainer,
  LotteryBetFilterBtn,
  LotteryBetFilterBtnText,
  LotteryBetDescriptionContainer,
  LotteryBetDescription,
  LotteryBetNumberContainer,
  LotteryBetNumberContent,
  LotteryBetNumber,
  LotteryBetActionButtonContainer,
  LotteryBetActionButton,
  LotteryBetActionButtonText,
  LotteryBetBtnAddToCart,
  LotteryBetBtnAddToCartText,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

const LotteryBetScreen = () => {
  return (
    <LotteryBetContainerScroll>
      <ScrollView>
        <LotteryBetContainer>
          <LotteryBetTitleContainer>
            <LotteryBetTitleTextBold>NEW BET</LotteryBetTitleTextBold>
            <LotteryBetTitleText>FOR MEGA-SENA</LotteryBetTitleText>
          </LotteryBetTitleContainer>

          <LotteryBetChooseGame>
            <LotteryBetText>Choose a game</LotteryBetText>
          </LotteryBetChooseGame>

          <LotteryBetFilterContainer>
            <LotteryBetFilterBtn>
              <LotteryBetFilterBtnText numberOfLines={2}>
                Lotofácil
              </LotteryBetFilterBtnText>
            </LotteryBetFilterBtn>
            <LotteryBetFilterBtn>
              <LotteryBetFilterBtnText numberOfLines={2}>
                Mega Sena
              </LotteryBetFilterBtnText>
            </LotteryBetFilterBtn>
            <LotteryBetFilterBtn>
              <LotteryBetFilterBtnText numberOfLines={2}>
                Lotomania
              </LotteryBetFilterBtnText>
            </LotteryBetFilterBtn>
          </LotteryBetFilterContainer>

          <LotteryBetDescriptionContainer>
            <LotteryBetText>Fill your bet</LotteryBetText>
            <LotteryBetDescription>
              Fill your bet Mark as many numbers as you want up to a maximum of
              50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20
              numbers drawn.
            </LotteryBetDescription>
          </LotteryBetDescriptionContainer>

          <LotteryBetNumberContainer>
            <LotteryBetNumberContent>
              <LotteryBetNumber>01</LotteryBetNumber>
            </LotteryBetNumberContent>
          </LotteryBetNumberContainer>

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
