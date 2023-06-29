import useNews from "../hooks/useNews";
import { useContext, React } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNew } from "../components/NewNew";
import { NewsList } from "../components/NewList"
const HomePage = () => {
  const { news, loading, error, addNew, removeNoticia } = useNews();
  const { user } = useContext(AuthContext);
  if (loading) return <p>cargando noticias....</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(news);
  return (
    <section>
      {user ? <NewNew addNew={addNew} /> : null}

      <h1>Ultimas Noticias</h1>
      {/* {news.length > 0 ? (

        <NewsList news={news} /> // Pasa las noticias al componente NewsList
      ) : (
        <p>No se encontraron noticias</p>
      )} */}
      {( loading == false ) ? (
        <NewsList news={news} />
      ) : (
        <p>No se encontraron noticias</p>
      )}

    </section>
  );
};

export default HomePage;
