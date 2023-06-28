import useNews from "../hooks/useNews";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNew } from "../components/NewNew";
const HomePage = () => {
  const { news, loading, error, addNew } = useNews();
  const { user } = useContext(AuthContext);
  if (loading) return <p>cargando noticias....</p>;
  if (error) return <ErrorMessage message={error} />;


  console.log(news);
  return (
    <section>

      {user ? <NewNew addNew={addNew} /> : null}

      <h1>Ultimas Noticias</h1>
      {news.length > 0 ? (
        <NewsList news={news} /> // Pasa las noticias al componente NewsList
      ) : (
        <p>No se encontraron noticias</p>
      )}


    </section>
  );
};

export default HomePage;
