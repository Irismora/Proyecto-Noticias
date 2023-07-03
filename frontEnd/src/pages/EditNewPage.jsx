import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editNewService } from "../service";
import useNew from "../hooks/useNew";
import useNews from "../hooks/useNews";

export const EditNewPage = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [summery, setSummery] = useState("");
  const [newsText, setNewsText] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [idNew, setIdNew] = useState("");
  const {news} = useNew();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editNewService({ idNew, token, title, summery, newsText, topic });
      setMessage(`Se ha editado correctamente la noticia con id ${idNews}`); /* NO SE SI VA MEJOR EL ID  */
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };
  return (
    <section>
      <form className="edit-news" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="datosNew">Datos para introducir en la Noticia:</label> 
          <label htmlFor="title">titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="photo">photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            value={photo}
            required
            accept={"image/*"}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="summery">summery</label>
          <input
            type="text"
            name="summery"
            id="summery"
            value={summery}
            required
            onChange={(e) => setSummery(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="newsText">newsText</label>
          <input
            type="text"
            name="newsText"
            id="newsText"
            value={newsText}
            required
            onChange={(e) => setNewsText(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="topic">topic</label>
          <input
            type="text"
            name="topic"
            id="topic"
            value={topic}
            required
            onChange={(e) => setTopic(e.target.value)}
          />
        </fieldset>

        <button className="Done">Edit</button>
        {error ? <p>{error}</p> : null}
        <p className="Message">{message}</p>
      </form>
    </section>
  );
};

export default EditNewPage;
