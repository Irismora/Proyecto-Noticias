import React, { useEffect, useState } from "react";
import { getFilteredNewsService } from "../service";

export const NewsList = ({ token }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFilteredNews = async () => {
      try {
        setLoading(true);

        const filteredNews = await getFilteredNewsService(token);
        setNews(filteredNews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredNews();
  }, [token]);

  if (loading) {
    return <p>Cargando noticias...</p>;
  }

  if (error) {
    return <p>Error al cargar las noticias: {error}</p>;
  }

 return (
  <div>
    <h2>Lista de noticias filtradas</h2>
    {news.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Summery: {item.summery}</p>
        <p>Tema: {item.topic}</p>
        <p>Foto: {item.photo}</p>
        <p>Texto de la noticia: {item.newsText}</p>
        <p>Likes: {item.likes}</p>
        <p>Dislikes: {item.dislikes}</p>
      </div>
    ))}
  </div>
);

};


