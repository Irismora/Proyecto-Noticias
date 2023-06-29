import { useEffect, useState } from "react";
import { getAllNewsService } from "../service";

const useNews = (idid) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
  const data = id
          ? await getUserNewsService(id)
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

<<<<<<< HEAD
  const removeNoticia = (id) => {
    setNews(news.filter((noticia) => noticia.id !== id));
  };

  return { news, loading, error, removeNoticia, addNew };
=======
  return { news, loading, error, addNew };
};
/* Permite agregar un elemento lista de noticias */
/* Permite agregar un elemento lista de noticias */
export default useNews;
