import { useEffect, useState } from "react";
import { getAllNewsService } from "../service";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const removeNoticia = (id) => {
    setNews(news.filter((noticia) => noticia.id !== id));
  };

  const addNew = (newItem) => {
    setNews([newItem, ...news]);
  };

  return { news, loading, error, removeNoticia, addNew };
};

export default useNews;
