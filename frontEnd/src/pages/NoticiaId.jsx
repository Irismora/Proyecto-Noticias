import { useParams } from "react-router-dom";
import useNew from "../hooks/useNew";
import { Noticia } from "../components/Noticia";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";

const NoticiaId = () => {
  const { id } = useParams();
  const { noticia, error, loading } = useNew(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Noticia</h1>
      <Noticia noticia={noticia} />
    </section>
  );
};

export default NoticiaId
