export interface IGame {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

export interface IGamesResponse {
  min_cart_value: number;
  types: IGame[];
}
