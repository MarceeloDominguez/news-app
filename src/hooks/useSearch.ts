import { useEffect, useState } from "react";
import { Article } from "../interfaces/newsInterface";
import { API_KEY } from "../util/apikey";

export const useSearch = (value: string, language: string) => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchNews = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}&page=1&pageSize=20&language=${language}`
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchNews();
  }, [language]);

  return { searchNews, news, loading, error };
};
