import useNews from "../hooks/useNews";
import { useContext, React } from "react";
<<<<<<< HEAD
import { useContext, React } from "react";
=======
>>>>>>> 0042847 (ListNewsSinToken)
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNew } from "../components/NewNew";
import { NewsList } from "../components/NewList"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NoticiaList } from "../components/NoticiaList";

=======
import { NewsList } from "../components/NewList"
>>>>>>> 0042847 (ListNewsSinToken)
=======
import { NewsList } from "../components/NewList"
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 0042847 (ListNewsSinToken)
const HomePage = () => {
  const { news, loading, error, addNew, removeNoticia } = useNews();
  const { user } = useContext(AuthContext);
  if (loading) return <p>cargando noticias....</p>;
  if (error) return <ErrorMessage message={error} />;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 0042847 (ListNewsSinToken)
  console.log(news);
>>>>>>> 0042847 (ListNewsSinToken)
  return (
    <section>
      {user ? <NewNew addNew={addNew} /> : null}
      <h1>Ultimas Noticias</h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <NoticiaList news={news} removeNoticia={removeNoticia} /> // Pasa las
      noticias al componente NewsList
=======
=======
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 0042847 (ListNewsSinToken)
      {/* {news.length > 0 ? (

        <NewsList news={news} /> // Pasa las noticias al componente NewsList
      ) : (
        <p>No se encontraron noticias</p>
      )} */}
      {( loading == false ) ? (
        <NewsList news={news} />
      ) : (
        <p>No se encontraron noticias</p>
<<<<<<< HEAD
      )} */}
      {( loading == false ) ? (
        <NewsList news={news} />
      ) : (
        <p>No se encontraron noticias</p>
      )}
<<<<<<< HEAD
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 0042847 (ListNewsSinToken)
=======
      )}
>>>>>>> 0042847 (ListNewsSinToken)
    </section>
  );
};

export default HomePage;
