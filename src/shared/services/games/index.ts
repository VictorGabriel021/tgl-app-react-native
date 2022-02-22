import instance from "../axios.config";

import { IGames } from "./interface";

import { IGamesResponse } from "@shared/interfaces";

const games = (): IGames => {
  async function listGames(): Promise<IGamesResponse> {
    return instance.get("/cart_games");
  }

  return { listGames };
};

export default games;
