import Moment from "moment";

export const dateBrazil = (date: Date) => {
  return Moment(date).format("D/MM/YYYY");
};
