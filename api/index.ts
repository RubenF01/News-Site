import axios from "axios";

export const getArticlesByCategory = async (
  category: string,
  country = "do"
) => {
  const { data } = await axios.get(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&category=${category}&country=us`
  );
  return data;
};
