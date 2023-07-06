import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  deleteNoticiaService,
  disLikeService,
  likeService,
} from "../service";
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
    try {
      const { liked } = await likeService({ id, token });
      if (liked) {
        addLike(id);
        return;
      }
      removeLike(id);
    } catch (error) {
      setError(error.message);
    }
  };

  const disLike = async (id) => {
    try {
      const { unliked } = await disLikeService({ id, token });

      if (unliked) {
        addDislike(id);
        return;
      }
      removeDislike(id);
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
          <p>Resumen: {news.summery}</p>
          <p>Texto: {news.newsText}</p>
          <p>Tema: {news.topic}</p>
          <p>Usuario: {news.idUser}</p>
          <p>Likes: {news.likes}</p>
          <p>Dislikes: {news.dislikes}</p>
          <p>
            By{" "}
            <Link to={`/profile`}>
              {user && user.id === news.idUser ? user.username : null}
            </Link>
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
    <button className="EditButton"
      onClick={() => {
        // Redirige al usuario a la ruta de edición
        window.location.href = "/editNew";
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