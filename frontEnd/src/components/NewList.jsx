import React, { useEffect, useState } from "react";
import { getFilteredNewsService } from "../service";

const NewsList = ({ token }) => {
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
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default NewsList;
