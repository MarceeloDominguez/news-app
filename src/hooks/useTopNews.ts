import { useState, useEffect } from "react";
import { Article } from "../interfaces/newsInterface";
import { API_KEY } from "../util/apikey";

export const useTopNews = () => {
  const [topNews, setTopNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setError(false);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=20&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setTopNews(data.articles);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { topNews, isLoading: loading, isError: error };
};
