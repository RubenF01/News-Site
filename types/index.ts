export interface Article {
  description: string;
  title: string;
  url: string;
  category: string[];
  image_url: string;
  creator: string[];
  pubDate: string;
}

export interface CategoryQueryResult {
  data: { results: Article[] };
  status: "idle" | "error" | "loading" | "success";
}
