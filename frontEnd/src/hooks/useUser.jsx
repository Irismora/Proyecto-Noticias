import { useContext, useEffect, useState } from "react";
import { getProfileService } from "../service";
import { AuthContext } from "../context/AuthContext";

const useUser = () => {
  const { token } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState([])

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getProfileService(token);
        
        setUser(data);
        setNews(data.news.filter((news) => news.idUser === data.id) || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

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

  const addLike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].likes++;
    news[index].loggedUserLiked = true;
    if (news[index].loggedUserDisliked) {
      news[index].dislikes--;
      news[index].loggedUserDisliked = false;
    }
    setNews([...news]);
  };

  const addDislike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].dislikes++;
    news[index].loggedUserDisliked = true;
    if (news[index].loggedUserLiked) {
      news[index].likes--;
      news[index].loggedUserLiked = false;
    }
    setNews([...news]);
  };

  const removeLike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].likes--;
    news[index].loggedUserLiked = false;
    setNews([...news]);
  };

  const removeDislike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].dislikes--;
    news[index].loggedUserDisliked = false;
    setNews([...news]);
  };

  return { news, user, error, loading, addNew, addLike, addDislike, removeLike, removeDislike, removeNoticia };
};

export default useUser;