import axios from "axios";

export const getTopArticles = async () => {
  const { data } = await axios.get(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_API_KEY}&category=world&country=do`
  );
  return data;
};