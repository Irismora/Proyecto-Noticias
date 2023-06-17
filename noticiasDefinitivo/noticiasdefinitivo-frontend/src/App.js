import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Homepage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { NoticiaPage } from "./pages/NoticiaPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/noticia/:id" element={<NoticiaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

//noticia/:id te dara la noticia barra algo (por filtro, por numero de noticia)
//TODAS LAS RUTAS QUE DEFINAMOS TIENEN QUE ESTAR ENVUELTAS POR EL COMPONENTE ROUTES
export default App;
