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

  const removeNoticia = (id) => {
    setNews(news.filter((noticia) => noticia.id !== id));
  };

<<<<<<< HEAD
  return { news, loading, error, removeNoticia, addNew };
=======
  return { news, loading, error, addNew };
};
/* Permite agregar un elemento lista de noticias */
<<<<<<< HEAD
/* Permite agregar un elemento lista de noticias */
=======
>>>>>>> 0042847 (ListNewsSinToken)
export default useNews;
