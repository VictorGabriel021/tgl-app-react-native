import { IBetResponse, IBetRequestBody } from "@shared/interfaces";

export interface IBets {
  newBet: (body: IBetRequestBody) => Promise<IBetResponse>;
}
