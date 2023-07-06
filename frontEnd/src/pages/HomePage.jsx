import useNews from "../hooks/useNews";
import { useContext, React } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewNew } from "../components/NewNew";
import { NoticiaList } from "../components/NoticiaList";
import { EditNewPage } from "./EditNewPage";

const HomePage = () => {
  const { news, loading, error, addNew, removeNoticia } = useNews();
  const { user } = useContext(AuthContext);
  if (loading) return <p>cargando noticias....</p>;
  if (error) return <ErrorMessage message={error} />;
  console.log(news);
  return (
    <section>
      {user ? <NewNew addNew={addNew} /> : null}
      <h1 className="ultimasNoticias">Ultimas Noticias</h1>
      <NoticiaList
        news={news}
        removeNoticia={removeNoticia}
        EditNewPage={EditNewPage}
      />
    </section>
  );
};

export default HomePage;
