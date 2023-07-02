import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import UserNews from "../components/UserNews";

const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>User {user.username}</h1>
      <section class="user-data">
        <p>User id: {user.id}</p>
        <p>User mail: {user.email}</p>
      </section>
      <UserNews id={user.id} />
    </section>
  );
};
 export default UserPage;
