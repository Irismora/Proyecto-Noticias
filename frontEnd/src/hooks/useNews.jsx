import { useContext, useEffect, useState } from "react";
import { getAllNewsService } from "../service";
import { getUserNewsService } from "../service";
import { AuthContext } from "../context/AuthContext";

const useNews = (id) => {
  const { token } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
  const data = id
          ? await getUserNewsService(token)
          : await getAllNewsService();

        

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [id]);

  const addNew = (data) => {
    setNews([data, ...news]);
  };

  const removeNoticia = (id) => {
    setNews(news.filter((noticia) => noticia.id !== id));
  };

  return {news, loading, error, addNew, removeNoticia};
};
/* Permite agregar un elemento lista de noticias */
export default useNews;

