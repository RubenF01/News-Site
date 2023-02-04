import { format } from "date-fns";
import type { Category } from "@/types";

export const categories: Category[] = [
  { label: "business", color: "#607D8B" },
  { label: "entertainment", color: "##F44336" },
  { label: "politics", color: "#3F51B5" },
  { label: "science", color: "#4CAF50" },
  { label: "technology", color: "#9C27B0" },
  { label: "world", color: "#2196F3" },
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

export const truncateString = (str: string, length: "short" | "long") => {
  if (!str) return;

  if (length === "short") {
    if (str.length > 140) {
      str = str.substring(0, 140);

      if (str.slice(-1) === ".") {
        return str;
      } else {
        return str + "...";
      }
    }
    return str;
  } else if (length === "long") {
    if (str.length > 500) {
      str = str.substring(0, 500);

      if (str.slice(-1) === ".") {
        return str;
      } else {
        return str + "...";
      }
    }
    return str;
  }
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
