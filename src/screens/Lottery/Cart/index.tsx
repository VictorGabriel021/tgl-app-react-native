import { Text, ScrollView, TouchableOpacity } from "react-native";

import {
  CardContainer,
  CardContent,
  TotalCartContainer,
  CartTitle,
  ListContainer,
  ListBar,
  ListInfo,
  ListItemText,
  ListItemContainer,
  ListItemPrice,
  TotalCart,
  SaveContainer,
  SaveText,
} from "./styles";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import { Colors } from "@constants/index";

import { useSelector } from "react-redux";

import { RootState } from "@store/store";

const LotteryCartScreen = () => {
  const { games, totalCart } = useSelector((state: RootState) => state.cart);

  return (
    <CardContainer
      style={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
      }}
    >
      <ScrollView>
        <CardContent>
          <CartTitle>CART</CartTitle>

          {games.length === 0 && <Text>Error</Text>}
          {games.length > 0 &&
            games.map((bet) => {
              return (
                <ListContainer key={bet.id}>
                  <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
                    <Ionicons name="trash-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <ListBar color={bet.gameType.color} />
                  <ListInfo>
                    <ListItemText>{bet.numbers.join(", ")}</ListItemText>
                    <ListItemContainer>
                      <ListItemText color={bet.gameType.color}>
                        {bet.gameType.type}
                      </ListItemText>
                      <ListItemPrice>
                        R$ {bet.gameType.price.toFixed(2)}
                      </ListItemPrice>
                    </ListItemContainer>
                  </ListInfo>
                </ListContainer>
              );
            })}

          <TotalCartContainer>
            <CartTitle>CART</CartTitle>
            <TotalCart>TOTAL: R$ {totalCart.toFixed(2)} </TotalCart>
          </TotalCartContainer>
        </CardContent>

        <SaveContainer activeOpacity={0.6} onPress={() => {}}>
          <SaveText>Save</SaveText>
          <AntDesign name="arrowright" size={28} color={Colors.primary} />
        </SaveContainer>
      </ScrollView>
    </CardContainer>
  );
};

export default LotteryCartScreen;
