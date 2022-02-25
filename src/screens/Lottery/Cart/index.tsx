import { ScrollView, TouchableOpacity, Alert } from "react-native";

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
  ErrorContainer,
  ErrorText,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import { Colors } from "@constants/index";

import { toastShowSuccess, toastShowWarning } from "@helpers/toastInfo";

import { bets } from "@shared/services";

import { RootState } from "@store/store";
import { removeFromCart, clearCart } from "@store/cartSlice";

import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

import { LotteryParamList } from "@navigation/@types";

type rootScreenProp = StackNavigationProp<LotteryParamList, "LotteryList">;

const LotteryCartScreen = () => {
  const { games, totalCart } = useSelector((state: RootState) => state.cart);
  const { min_cart_value } = useSelector((state: RootState) => state.filter);

  const dispatch = useDispatch();
  const { newBet } = bets();

  const navigation = useNavigation<rootScreenProp>();

  const removeFromCartHandler = (id: number, price: number) => {
    Alert.alert(
      "Você tem certeza?",
      "Você realmente deseja deletar esta aposta?",
      [
        {
          text: "Não",
          style: "default",
        },
        {
          text: "Sim",
          onPress: () => dispatch(removeFromCart({ id, price })),
          style: "destructive",
        },
      ]
    );
  };

  const saveCartHandler = async () => {
    if (totalCart < min_cart_value) {
      toastShowWarning(
        `O valor mínimo para apostar é R$ ${min_cart_value.toFixed(2)}!`
      );
      return;
    }
    const body = games.map((game) => {
      return { game_id: game.game_id, numbers: game.numbers };
    });

    await newBet({ games: body });
    dispatch(clearCart());
    navigation.replace("LotteryList");
    toastShowSuccess(`Apostas cadastradas com sucesso !`);
  };

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

          {games.length === 0 && (
            <ErrorContainer>
              <ErrorText>Nenhuma aposta foi adicionada ao carrinho!</ErrorText>
            </ErrorContainer>
          )}
          {games.length > 0 &&
            games.map((bet) => {
              return (
                <ListContainer key={bet.id}>
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={removeFromCartHandler.bind(
                      null,
                      bet.id,
                      bet.gameType.price
                    )}
                  >
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

        <SaveContainer activeOpacity={0.6} onPress={saveCartHandler}>
          <SaveText>Save</SaveText>
          <AntDesign name="arrowright" size={28} color={Colors.primary} />
        </SaveContainer>
      </ScrollView>
    </CardContainer>
  );
};

export default LotteryCartScreen;
