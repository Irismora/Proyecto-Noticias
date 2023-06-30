import useNews from "../hooks/useNews";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNew } from "../components/NewNew";
import { NoticiaList } from "../components/NoticiaList";

const HomePage = () => {
  const { news, loading, error, addNew, removeNoticia } = useNews();
  const { user } = useContext(AuthContext);
  if (loading) return <p>cargando noticias....</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewNew addNew={addNew} /> : null}
      <h1>Ultimas Noticias</h1>
      <NoticiaList news={news} removeNoticia={removeNoticia} /> // Pasa las
      noticias al componente NewsList
    </section>
  );
};

export default HomePage;
