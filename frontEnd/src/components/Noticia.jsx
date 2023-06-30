import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteNoticiaService } from "../service";
import { AuthContext } from "../context/AuthContext";

export const Noticia = ({ noticia, removeNoticia }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
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

  return (
    <article className="noticia">
      <p>{noticia.text}</p>
      {noticia.image ? (
        <img
          src={`${import.meta.env.VITE_BACKEND}/uploads/${noticia.image}`}
          alt={noticia.text}
        />
      ) : null}

      <p>
        By <Link to={`/user/${noticia.user_id}`}>{noticia.email}</Link> on{" "}
        <Link to={`/noticia/${noticia.id}`}>
          {new Date(noticia.created_at).toLocaleString()}
        </Link>
      </p>

      {user && user.id === noticia.user_id ? (
        <section>
          <button
            Onclick={() => {
              if (window.confirm("Are you sure?")) deleteNoticia(noticia.id);
            }}
          >
            Delete Noticia
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};

//lo que he anadido de noticia.id es como sale en app.jsx , la ruta de la noticia por id
