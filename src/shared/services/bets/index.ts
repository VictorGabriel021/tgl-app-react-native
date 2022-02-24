import instance from "../axios.config";

import { IBets } from "./interface";

import {
  IBetResponse,
  IBetRequestBody,
  IBetListResponse,
} from "@shared/interfaces";

const bets = (): IBets => {
  async function listBet(params: any): Promise<IBetListResponse[]> {
    return instance.get("/bet/all-bets", { params });
  }

  async function newBet(body: IBetRequestBody): Promise<IBetResponse> {
    return instance.post("/bet/new-bet", body);
  }

  return { listBet, newBet };
};

export default bets;
