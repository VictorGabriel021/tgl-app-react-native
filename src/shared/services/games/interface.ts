import { IGamesResponse } from "@shared/interfaces";

export interface IGames {
  listGames: () => Promise<IGamesResponse>;
}
