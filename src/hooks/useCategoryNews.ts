import { useState, useEffect } from "react";
import { Article } from "../interfaces/newsInterface";
import { API_KEY } from "../util/apikey";

export const useCategoryNews = (category: string) => {
  const [newsByCategory, setNewsByCategory] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=20&category=${category}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNewsByCategory(data.articles);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return { newsByCategory, loading, error };
};
