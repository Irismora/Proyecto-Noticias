import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserTweets } from "../components/UserTweets";
import { Loading } from "../components/Loading";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>User {user.email}</h1>
      <section class="user-data">
        <p>User id: {user.id}</p>
        <p>Registered on {new Date(user.userName).toLocaleString()}</p>
      </section>
      <UserTweets id={user.id} />
    </section>
  );
};

//EN LINEA 21 PONE USERTWEETS CREO QUE DEBERIAMOS MODIFICARLO!!

/*estas es la que el llama TweetPage en la que hace y nosotros llamamos UserPage, lo que hace el teacher es esto, nosotras lo tenemos diferente
export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>New from {new.user}</h1>
      <New new={new} />
      </section>
      );
  };
  
  de aqui se va y crea un hook nuevo al que llama useTweet y el que nosotros hemos llamado useNew*/
