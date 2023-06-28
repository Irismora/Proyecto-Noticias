import { useState } from "react";
import { deleteNoticiaService } from "../service";

const [error, setError] = useState("");

/*export const Noticia = ({ noticia, removeNoticia  }) => {
  const navigate = useNavigate();
}
*/
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

{
  user && User.id === noticia.user_id ? (
    <section>
      <button
        Onclick={() => {
          if (window.confirm("Are you sure?")) deleteNoticia(noticia.id);
        }}
      >
        Delete Noticia{" "}
      </button>
      {error ? <p>{error}</p> : null}
    </section>
  ) : null;
}
