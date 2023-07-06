import { useContext, useEffect, useState } from "react";
import { getAllNewsService, getAllNewsTokenService } from "../service";
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
          ? await getAllNewsTokenService(token)
          : await getAllNewsService();

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [id, token]);

  const addNew = (data) => {
    setNews([data, ...news]);
  };

  const removeNoticia = async (id) => {
    try {
      setNews(news.filter((news) => news.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const addLike = (id, { likes, unlikes, liked }) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].likes = likes;
    news[index].loggedUserLiked = liked;
    news[index].dislikes = unlikes;
    if (news[index].loggedUserDisliked) {
      news[index].loggedUserDisliked = false;
    }
    setNews([...news]);
  };

  const addDislike = (id, { likes, unlikes, unliked }) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].dislikes = unlikes;
    news[index].loggedUserDisliked = unliked;
    news[index].likes = likes;
    if (news[index].loggedUserLiked) {
      news[index].loggedUserLiked = false;
    }
    setNews([...news]);
  };

  /*const removeLike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].likes--;
    news[index].loggedUserLiked = false;
    setNews([...news]);
  };*/

  /*const removeDislike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].dislikes--;
    news[index].loggedUserDisliked = false;
    setNews([...news]);
  };*/

  return {
    news,
    loading,
    error,
    addNew,
    removeNoticia,
    addLike,
    addDislike,
    //removeLike,
    //removeDislike,
  };
};

export default useNews;
