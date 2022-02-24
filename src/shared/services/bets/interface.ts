import {
  IBetResponse,
  IBetRequestBody,
  IBetListResponse,
} from "@shared/interfaces";

export interface IBets {
  listBet: (params: any) => Promise<IBetListResponse[]>;
  newBet: (body: IBetRequestBody) => Promise<IBetResponse>;
}
