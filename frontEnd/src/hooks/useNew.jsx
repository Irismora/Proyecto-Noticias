import { useEffect, useState } from "react";
import { getSingleNewService } from "../service";

const useNew = (id) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNew = async () => {
      try {
        setLoading(true);
        const data = await getSingleNewService(id);

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNew();
  }, [id]);

  const addNew = (data) => {
    setNews([data, ...news]);
  };

  return { news, error, loading, addNew };
};

export default useNew;

