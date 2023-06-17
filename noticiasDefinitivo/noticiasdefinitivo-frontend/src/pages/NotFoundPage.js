import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section>
      <h1>Not found</h1>
      <Link to={"/"}>Go back to Home Page</Link>
    </section>
  );
};

//lo pone como un javascript porque en algunos casos habra que poner link dinamicamente utilizando concatenacion de templates de javascript asi que ya lo ponemos asi para irnos acostumbrando
