import { News } from "./Noticia";

export const NoticiaList = ({
  news,
  removeNoticia,
  EditNewPage,
  addLike,
  addDislike,
  removeLike,
  removeDislike,
}) => {
  return news.length ? (
    <ul className="Noticia-list">
      {news.map((news) => {
        return (
          <li key={news.id}>
            <News
              news={news}
              addLike={addLike}
              addDislike={addDislike}
              removeLike={removeLike}
              EditNewPage={EditNewPage}
              removeDislike={removeDislike}
              removeNoticia={removeNoticia}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay noticias todavia...</p>
  );
};
