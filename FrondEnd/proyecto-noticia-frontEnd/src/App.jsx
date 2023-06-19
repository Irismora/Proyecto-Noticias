import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Registro from "./pages/Register";
import Login from "./pages/Login";
import NoticiasId from "./pages/NoticiaId";
import NoticiaTopic from "./pages/NoticiaTopic";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/noticia/:id" element={<NoticiasId />} />
        <Route path="/noticia/topic/:topic" element={<NoticiaTopic />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
