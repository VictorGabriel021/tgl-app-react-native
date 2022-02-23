export type Cart = {
  games: BetGame[];
  totalCart: number;
};

export type BetGame = {
  id: number;
  game_id: number;
  numbers: number[];
  gameType: {
    type: string;
    price: number;
    color: string;
  };
};

export const defaultValuesCart = {
  games: [],
  totalCart: 0,
};
