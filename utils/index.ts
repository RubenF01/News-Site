import { format } from "date-fns";

export const categories = [
  "business",
  "entertainment",
  "politics",
  "science",
  "technology",
  "world",
];

export const truncateString = (str: string) => {
  if (!str) return;
  if (str.length > 140) {
    str = str.substring(0, 140);

    if (str.slice(-1) === ".") {
      return str;
    } else {
      return str + "...";
    }
  }
  return str;
};

export const formatDate = (date: string) => {
  if (!date) return;
  const oldDate = new Date(date);
  const formattedDate = format(oldDate, "MMMM dd, yyyy");

  return formattedDate;
};
