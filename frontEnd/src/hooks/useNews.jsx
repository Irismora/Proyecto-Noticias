import { useEffect, useState } from "react";
import { getAllNewsService } from "../service";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        const data = await getAllNewsService();

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  const addNew = (data) => {
    setNews([data, ...news]);
  };

  const removeNoticia = (id) => {
    setNews(news.filter((noticia) => noticia.id !== id));
  };

  return { news, loading, error, removeNoticia, addNew };
};

export default useNews;
