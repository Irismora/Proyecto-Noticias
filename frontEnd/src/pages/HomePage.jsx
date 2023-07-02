import useNews from "../hooks/useNews";
import { useContext, React } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNew } from "../components/NewNew";
<<<<<<< HEAD
<<<<<<< HEAD
import { NoticiaList } from "../components/NoticiaList";

=======
import { NewsList } from "../components/NewList"
<<<<<<< HEAD
>>>>>>> 0042847 (ListNewsSinToken)
=======
<<<<<<< HEAD
import { NewsList } from "../components/NewList"
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 5ab62fe538df466cce713fe02adac75cfe13e63c
>>>>>>> 417ce9bd4e1a49ab7a3b724217a95d727e782d32
>>>>>>> 53f8f8cd32c305db100e66c9b8ea2de6f488514e
const HomePage = () => {
  const { news, loading, error, addNew, removeNoticia } = useNews();
  const { user } = useContext(AuthContext);
  if (loading) return <p>cargando noticias....</p>;
  if (error) return <ErrorMessage message={error} />;

<<<<<<< HEAD
<<<<<<< HEAD
=======
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
      <NoticiaList news={news} removeNoticia={removeNoticia} /> // Pasa las
      noticias al componente NewsList
=======
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
      )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0042847 (ListNewsSinToken)
=======
=======
>>>>>>> 53f8f8cd32c305db100e66c9b8ea2de6f488514e
>>>>>>> 0042847 (ListNewsSinToken)
=======

>>>>>>> 5ab62fe538df466cce713fe02adac75cfe13e63c
>>>>>>> 417ce9bd4e1a49ab7a3b724217a95d727e782d32
    </section>
  );
};

export default HomePage;
