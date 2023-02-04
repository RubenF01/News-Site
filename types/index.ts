export interface Article {
  description: string;
  title: string;
  link: string;
  category: string[];
  image_url: string;
  creator: string[];
  pubDate: string;
}

export interface CategoryQueryResult {
  data: { results: Article[] };
  status: "idle" | "error" | "loading" | "success";
}

export interface Category {
  label: string;
  color: string;
}

export type CategoryOption =
  | "top"
  | "business"
  | "entertainment"
  | "politics"
  | "science"
  | "technology"
  | "world";
