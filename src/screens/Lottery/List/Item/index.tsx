import {
  ListContainer,
  ListBar,
  ListInfo,
  ListItemContainer,
  ListItemPrice,
  ListItemText,
} from "@screens/Lottery/Cart/styles";

import { IBetListResponse } from "@shared/interfaces";

import { dateBrazil, convertPriceForReal } from "@shared/helpers/index";

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
          <ListItemPrice>{convertPriceForReal(bet.price)}</ListItemPrice>
        </ListItemContainer>
        <ListItemText color={color}>{bet.type.type}</ListItemText>
      </ListInfo>
    </ListContainer>
  );
};

export default LotteryListItem;
