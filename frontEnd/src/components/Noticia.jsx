import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteNoticiaService, disLikeService, likeService } from "../service";
import { AuthContext } from "../context/AuthContext";
import useNew from "../hooks/useNew";

export const News = ({
  news,
  removeNoticia,
  addLike,
  addDislike,
  removeLike,
  removeDislike,
}) => {
  const navigate = useNavigate();
  const { token, user, idUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteNoticia = async (id) => {
    try {
      await deleteNoticiaService({ id, token });
      if (removeNoticia) {
        removeNoticia(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const like = async (id) => {
    console.log(news);
    try {
      const res = await likeService({ id, token });

      addLike(id, res);
      return;
    } catch (error) {
      setError(error.message);
    }
  };

  const disLike = async (id) => {
    try {
      const res = await disLikeService({ id, token });

      addDislike(id, res);
      return;
    } catch (error) {
      setError(error.message);
    }
  };

  let id = Number(idUser);

  return (
    <ul className="news-list">
      <li>
        <article className="news" id={news.id}>
          <p>
            <Link to={`/news/${news.id}`}>Título: {news.title}</Link>
          </p>
          <p>
            Fecha de publicación: {new Date(news.created_at).toLocaleString()}
          </p>
          <section className="photoNew">
            {news.photo ? (
              <img
                src={`${import.meta.env.VITE_BACKEND}/photos/${news.photo}`}
                alt={news.title}
              />
            ) : (
              /*  /News/${news.idUser}/photo */
              "No hay foto"
            )}
          </section>
          <p>
            <span className="resumen">Resumen:</span> {news.summery}
          </p>
          <p>
            <span className="texto">Texto:</span>
            {news.newsText}
          </p>
          <p>
            <span className="tema">Tema: </span>
            {news.topic}
          </p>
          <p>
            <span className="usuario"> Usuario: </span>
            {news.idUser}
          </p>
          <p>
            <span className="likes">Likes: </span>
            {news.likes}
          </p>
          <p>
            <span className="dislike">Dislikes:</span>
            {news.dislikes}
          </p>
          <p>
            <span className="by">By </span>
            {news.username}
          </p>
          <section>
            {token && news.idUser !== id ? (
              <span className="likebutton">
                <button
                  className={news.loggedUserLiked ? "liked" : ""}
                  onClick={() => {
                    like(news.id);
                  }}
                >
                  <div className="emoji">👍</div>
                </button>
                <button
                  className={news.loggedUserDisliked ? "disliked" : ""}
                  onClick={() => {
                    disLike(news.id);
                  }}
                >
                  <div className="emoji">👎</div>
                </button>
              </span>
            ) : null}
            {token && news.idUser !== id && error ? (
              <p className="error-message">{error}</p>
            ) : null}
          </section>
          {user && user.id === news.idUser ? (
            <section>
              <button
                className="DelButton"
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteNoticia(news.id);
                }}
              >
                Delete Noticia
              </button>
            </section>
          ) : null}

          {user && user.id === news.idUser ? (
            <section>
              <button
                className="EditButton"
                onClick={() => {
                  // Redirige al usuario a la ruta de edición
                  window.location.href = `/editNew/${news.id}`;
                }}
              >
                Editar Noticia
              </button>
            </section>
          ) : null}
        </article>
      </li>
    </ul>
  );
};
