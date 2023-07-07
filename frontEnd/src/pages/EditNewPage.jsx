import { useEffect,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { editNewService } from "../service";
import useNew from "../hooks/useNew";
import useNews from "../hooks/useNews";
import { useParams } from "react-router-dom";

export const EditNewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [summery, setSummery] = useState("");
  const [newsText, setNewsText] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [idNew, setIdNew] = useState("");
  const { news } = useNew(id);

    useEffect(() => {
      if (news) {
        setTitle(news.title);
        setSummery(news.summery);
        setNewsText(news.newsText);
        setTopic(news.topic);
      }
    }, [news]);
  const handleForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      console.log(id, token, data);
      await editNewService({ id, token, data });
      setMessage(
        `Se ha editado correctamente la noticia con id ${id}`
      );
      navigate(`/news/${id}`);
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
          <label htmlFor="photo">photo(opcional)</label>
          <input
            type="file"
            name="photo"
            id="photo"
            value={photo}
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
