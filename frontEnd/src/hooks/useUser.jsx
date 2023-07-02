import { useContext, useEffect, useState } from "react";
import { getMyDataService } from "../service";
import { AuthContext } from "../context/AuthContext";

const useUser = (id) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getMyDataService(token);

        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  return { user, error, loading };
};

export default useUser;