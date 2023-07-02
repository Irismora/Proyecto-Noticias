import { Noticia } from "./Noticia";

export const NoticiaList = ({ news, removeNoticia }) => {
  return news.length ? (
    <ul className="Noticia-list">
      {news.map((noticia) => {
        return (
          <li key={noticia.id}>
            <Noticia noticia={noticia} removeNoticia={removeNoticia} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay noticias todavia...</p>
  );
};