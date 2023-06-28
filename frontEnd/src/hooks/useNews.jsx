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

  const addNew = (newItem) => {
    setNews([newItem, ...news]);
  };

  return { news, loading, error, addNew };
};

export default useNews;
