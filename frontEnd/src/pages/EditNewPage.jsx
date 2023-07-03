import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editNewService } from "../service";

export const EditNewPage = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [summery, setSummery] = useState("");
  const [Newstext, setNewsText] = useState("");
  const [topic, setTopic] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editNewService({ title, photo, summery, Newstext, topic, token });
      setMessage(`Se ha editado correctamente la noticia con id ${idNew}`);
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
            type="image"
            name="photo"
            id="photo"
            value={ohoto}
            required
            onChange={(e) => setPhoto(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="Summery">summery</label>
          <input
            type="text"
            name="Summery"
            id="Summery"
            value={summery}
            required
            onChange={(e) => setSummery(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="Newstext">Newstext</label>
          <input
            type="text"
            name="Newstext"
            id="Newstext"
            value={text}
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
