import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoticiaId from "./pages/NoticiaId";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
import EditNewPage from "./pages/EditNewPage";

//el tiene aqui importado tweetpage que es lo que representa nuestra Userpage pero nosotros no la tenemos!!!

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editNew" element={<EditNewPage />} />
        <Route path="/news/:id" element={<NoticiaId />} />
        <Route path="/profile" element={<UserPage />} />
        

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
