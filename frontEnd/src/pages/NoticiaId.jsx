import { useParams } from "react-router-dom";
import useNew from "../hooks/useNew";
import { News } from "../components/Noticia";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";

const NoticiaId = () => {
  const { id } = useParams();
  const { news, error, loading } = useNew(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1 className="noticiaEditada">Noticia Editada</h1>
      <News news={news} />
    </section>
  );
};

export default NoticiaId
