import useNews from "../hooks/useNews";
import { ErrorMessage } from "./ErrorMessage";
import { NoticiaList } from "./NoticiaList";

const UserNews = ({ id }) => {
  const { news, loading, error, removeNoticia } = useNews(id);

  if (loading) return <p>Cargando noticias...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <NoticiaList news={news} removeNoticia={removeNoticia} />;
};

export default UserNews;