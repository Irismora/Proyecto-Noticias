import { useEffect, useState } from "react";
import { getSingleNewService } from "../service";

const useNoticia = (id) => {
  const [noticia, setNoticia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNoticia = async () => {
      try {
        setLoading(true);
        const data = await getSingleNewService(id);

        setNoticia(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNoticia();
  }, [id]);

  return { noticia, error, loading };
};

export default useNoticia;
