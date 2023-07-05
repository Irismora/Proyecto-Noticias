import { useContext, useState } from "react";
import { sendNewService } from "../service";
import { AuthContext } from "../context/AuthContext";
import { addPhotoService } from "../service/index";

export const NewNew = ({ addNew }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      const data = new FormData(e.target);
      const news = await sendNewService({ data, token });

     // console.log(news)

      let newPhoto;
      
      if (photo) {
        const upload = await addPhotoService(news.id, data, token); 

        newPhoto = upload.photo;
      }


      const newItem = photo ? {...news, photo: newPhoto} : news;
      addNew(newItem);
      e.target.reset();
      setPhoto(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="new-news" onSubmit={handleForm}>
      <h1 className="titleAddNew">Añadir Nueva Noticia </h1>

      <fieldset>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" required />
      </fieldset>

      <fieldset>
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
                src={URL.createObjectURL(photo)}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
      </fieldset>

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

      <button className="Done">SEND NEWS</button>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Noticia enviada</p> : null}
    </form>
  );
};

