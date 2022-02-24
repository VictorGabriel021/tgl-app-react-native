import {
  ListContainer,
  ListBar,
  ListInfo,
  ListItemContainer,
  ListItemPrice,
  ListItemText,
} from "@screens/Lottery/Cart/styles";

import { IBetListResponse } from "@shared/interfaces";

import { dateBrazil } from "@helpers/date";

type Props = {
  bet: IBetListResponse;
  color: string;
};

const LotteryListItem = ({ bet, color }: Props) => {
  return (
    <ListContainer>
      <ListBar color={color} />
      <ListInfo>
        <ListItemText>{bet.choosen_numbers}</ListItemText>
        <ListItemContainer>
          <ListItemPrice>{dateBrazil(bet.created_at)} -</ListItemPrice>
          <ListItemPrice>R$ {bet.price.toFixed(2)}</ListItemPrice>
        </ListItemContainer>
        <ListItemText color={color}>{bet.type.type}</ListItemText>
      </ListInfo>
    </ListContainer>
  );
};

export default LotteryListItem;
