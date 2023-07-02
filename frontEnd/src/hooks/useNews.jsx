import { useEffect, useState } from "react";
import { getAllNewsService } from "../service";

const useNews = (id) => {
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

<<<<<<< HEAD
=======

>>>>>>> 5ab62fe538df466cce713fe02adac75cfe13e63c
  const addNew = (data) => {
    setNews([data, ...news]);
  };

<<<<<<< HEAD
  const removeNoticia = (id) => {
    setNews(news.filter((noticia) => noticia.id !== id));
  };
=======
  return { news, loading, error, addNew };

>>>>>>> 5ab62fe538df466cce713fe02adac75cfe13e63c

<<<<<<< HEAD
  return { news, loading, error, removeNoticia, addNew };
=======
  return { news, loading, error, addNew };
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 417ce9bd4e1a49ab7a3b724217a95d727e782d32
};
/* Permite agregar un elemento lista de noticias */
export default useNews;
