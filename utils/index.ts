import { format } from "date-fns";

export const categories = [
  "business",
  "entertainment",
  "politics",
  "science",
  "technology",
  "world",
];

export const countries = [
  { label: "Canada", value: "ca" },
  { label: "Chile", value: "cl" },
  { label: "Colombia", value: "co" },
  { label: "Dominican Republic", value: "do" },
  { label: "Mexico", value: "mx" },
  { label: "Puerto Rico", value: "pr" },
  { label: "Spain", value: "es" },
  { label: "United Kingdom", value: "uk" },
  { label: "United States", value: "us" },
  { label: "Venezuela", value: "ve" },
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

const placeholderImgSrc = [
  "/article_placeholder.png",
  "/article_placeholder2.png",
];

export const randomImgSrc = () => {
  const randomIndex = Math.floor(Math.random() * placeholderImgSrc.length);
  return placeholderImgSrc[randomIndex];
};
