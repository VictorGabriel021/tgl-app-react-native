import instance from "../axios.config";

import { IBets } from "./interface";

import { IBetResponse, IBetRequestBody } from "@shared/interfaces";

const bets = (): IBets => {
  async function newBet(body: IBetRequestBody): Promise<IBetResponse> {
    return instance.post("/bet/new-bet", body);
  }

  return { newBet };
};

export default bets;
