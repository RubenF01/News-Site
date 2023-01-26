import axios from "axios";

export const getArticlesByCategory = async (
  category: string,
  country: string
) => {
  const { data } = await axios.get(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&category=${category}&country=${country}`
  );
  return data;
};
