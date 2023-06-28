import { useContext, useState } from "react";
import { sendNewService } from "../service";
import { AuthContext } from "../context/AuthContext";

export const NewNew = ({ addNew }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const news = await sendNewService({ data, token });

      addNew(news);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleForm}>
      <h1>Añadir Nueva Noticia </h1>

      <fieldset>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" required />
      </fieldset>
      {/*  <fieldset>
        <label htmlFor="photo">Photo (optional)</label>
        <input
          type="file"
          name="photo"
          id="photo"
          accept={"image/*"}
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              style={{ width: "100px" }}
              alt="Preview"
            />
          </figure>
        ) : null}
      </fieldset> */}

      <fieldset>
        <label htmlFor="summery">Summery</label>
        <input type="text" name="summery" id="summery" required />
      </fieldset>

      <fieldset>
        <label htmlFor="newsText">Texto</label>
        <input type=" text" name="newsText" id="newsText" required />
      </fieldset>

      <fieldset>
        <label htmlFor="topic">tema</label>
        <input type="text" name="topic" id="topic" required />
      </fieldset>

      <button>SEND NEWS</button>
      {loading ? <p>Noticia enviada</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
