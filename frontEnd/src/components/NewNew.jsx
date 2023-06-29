import { useContext, useState } from "react";
import { sendNewService } from "../service";
import { AuthContext } from "../context/AuthContext";

export const NewNew = ({ addNew }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
<<<<<<< HEAD
<<<<<<< HEAD
  const [photo, setPhoto] = useState(null);

=======
  /*   const [image, setImage] = useState(null);
   */
>>>>>>> 0042847 (ListNewsSinToken)
=======
  /*   const [image, setImage] = useState(null);
   */
>>>>>>> 0042847 (ListNewsSinToken)
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const news = await sendNewService({ data, token });
      
       window.location.reload();   /* OJO CON ESTO NO ES EFICIENTE*/
      addNew(news);
<<<<<<< HEAD
<<<<<<< HEAD
      e.target.reset();
      setPhoto(null);
=======
    
      
>>>>>>> 0042847 (ListNewsSinToken)
=======
    
      
>>>>>>> 0042847 (ListNewsSinToken)
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
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        {photo ? (
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
      {error ? <p>{error}</p> : null}
      {loading ? <p>Noticia enviada</p> : null}
    </form>
  );
};
