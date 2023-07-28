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
import { DeleteUserPage } from "./pages/DeleteUserPage";
import { EditEmailUserNameUserPage } from "./pages/EditEmailUserNameUserPage";
import { EditPasswordPage } from "./pages/EditPasswordPage";

//el tiene aqui importado tweetpage que es lo que representa nuestra Userpage pero nosotros no la tenemos!!!

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editNew/:id" element={<EditNewPage />} />
        <Route path="/news/:id" element={<NoticiaId />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/delUser" element={<DeleteUserPage />} />

        <Route path="*" element={<NotFound />} />

         <Route path="/user/email" element={<EditEmailUserNameUserPage />} />
        <Route path="/user/password" element={<EditPasswordPage />} />
        
      
      

      </Routes>

      <Footer />
    </main>
  );
}

export default App;
