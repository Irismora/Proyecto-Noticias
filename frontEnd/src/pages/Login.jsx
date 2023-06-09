import { useContext, useState } from "react";
import { logInUserService } from "../service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const token = await logInUserService({ email, password });
      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
     {/* Agregamos la clase de estilo */}
        <h1 className="iniciarSesion">Iniciar Sesión</h1>
   
      <section>
        <form className="formularioLogin" onSubmit={handleForm}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="pass">Contraseña</label>
            <input
              type="password"
              name="pass"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <button>Login</button>
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </>
  );
};

export default Login;
