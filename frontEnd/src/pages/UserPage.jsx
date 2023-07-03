import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import UserNews from "../components/UserNews";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const UserPage = () => {
  const { id } = useParams();
  const { loading, error } = useUser();
  const {user} =useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  if (!user) return null;

  return (
    <section>
      <h1>User {user.username}</h1>
      <section className="user-data">
        <p>User id: {user.id}</p>
        <p>User mail: {user.email}</p>
      </section>
      <UserNews id={user.id} />
    </section>
  );
};
  export default UserPage;
