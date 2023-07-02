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
      <p>{noticia.title}</p>
      {noticia.photo ? (
        <img
          src={`${import.meta.env.VITE_BACKEND}/../noticiasDefinitivo/static/photos/${noticia.photo}`}
          alt={noticia.title}
        />
      ) : ( "No hay foto" )}

      {/* Problema en esta parte del codigo  por la ruta se sube como http://localhost:3000/News/258/photo pero al recargar la pagina ntenta cargar la foto desde  
      http://localhost:3000/noticiasDefinitivo/static/photos/0a541a23-8a3e-48fd-a0cb-4db040016166.jpg
  */}

      <p>
        By <Link to={`/profile`}>{user.username}</Link> on{" "}
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
