import { BetGame } from "@store/@types/CartTypes";

export const isEqualBet = (betList: BetGame[], betItem: BetGame) => {
  let selectedNumberGame = [...betItem.numbers];

  let isEqual = false;
  for (let itemArray in betList) {
    let newBetList = [...betList[itemArray].numbers];

    isEqual = newBetList.every((item: number, index: number) => {
      return item === selectedNumberGame[index];
    });

    if (isEqual) {
      return isEqual;
    }
  }
  return isEqual;
};
