import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section>
      <h1>Pagina no encontrada</h1>
      <Link to={"/"}>Volver a la pagina principal</Link>
    </section>
  );
};

export default NotFound;
