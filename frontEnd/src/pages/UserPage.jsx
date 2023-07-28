import { useParams, Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import UserNews from "../components/UserNews";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserPage = () => {
  const { id } = useParams();
  const { loading, error } = useUser();
  const { user } = useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  if (!user) return null;

  return (

    <>
      <section className="userName"> 
        <h1 className="usuario">Usuario {user?.username}</h1>
        <p>
          <span className="userioId">ID de Usuario: </span> {user?.id}
        </p>
        <p>
         <span className="userioId"></span> Correo electrónico: {user?.email}
          </p>

        <p className="correo">
          ¿Deseas cambiar el correo electrónico?{" "}
          <Link to="/user/email">Recuperar correo </Link>
        </p> 

        <p className="deleteUsers">
            ¿Deseas eliminar tu usuario?{" "}
           <Link to={"/delUser"}>Delete User</Link>
        </p>
      </section>
    
      {/* El componente UserNews ahora está fuera de la sección */}
      <UserNews id={user?.id} />
    </>

   /*  <section>
      <h1>User {user.username}</h1>
      <section className="user-data">
        <p>User id: {user.id}</p>
        <p>User mail: {user.email}</p>
        <Link to={"/delUser"}>Delete User</Link>
      </section>
      <UserNews id={user.id} />
    </section> */
  );
};
export default UserPage;
