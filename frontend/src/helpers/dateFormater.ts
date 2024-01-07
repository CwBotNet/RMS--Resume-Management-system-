import moment from "moment";

export const dateFormate = (date: string) => {
  let newDate = moment(date).fromNow();
  return newDate;
};
