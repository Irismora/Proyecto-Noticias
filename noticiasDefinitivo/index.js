const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Creamos el servidor
const app = express();

// Middleware para cors
app.use(cors());

// Deserializamos el body en formato raw
app.use(express.json());

// Middleware de Morgan para obtener más información sobre cada una de las peticiones
app.use(morgan("dev"));

// Middleware para leer el body en formato form-data (para leer archivos e imágenes)
// instalación -> npm i express-fileupload
app.use(fileUpload());

//Middleware para hacer statica una carpeta para poder usarla en React
app.use(express.static("static"));

/*   ### Controladores de Usuarios ###  */

const newUser = require("./controllers/users/newUser");
const loginUser = require("./controllers/users/loginUser");
const editUserPass = require("./controllers/users/editPassUser");
const editUser = require("./controllers/users/editUserData");
const deleteUser = require("./controllers/users/deleteUser");
const userData = require("./controllers/users/userData");

/*   ### Controladores de News ###  */

const newNews = require("./controllers/News/newNews");
const getUserProfile = require("./controllers/News/getUserProfile");
const photoNews = require("./controllers/News/addNewsPhoto");
const listNews = require("./controllers/News/listNews");
const getNewById = require("./controllers/News/getNewByID");
const addDunlikesNews = require("./controllers/News/addUnlikeNews");
const addLikesNews = require("./controllers/News/addLikeNews");
const editNews = require("./controllers/News/editNews");
const deleteNews = require("./controllers/News/deleteNews");
const listFilterUserNews = require("./controllers/News/listFilterNews");

// Importamos las variables de entorno que hemos creado para la conexión
const { APP_PORT, DB_HOST } = process.env;

/*   ### Middlewares ###  */

// Middleware de validación de usuario
const { isAuth, isUser } = require("./middlewares/isAuth");
const canEditNews = require("./middlewares/canEditNews");


//Middleware por el qu pasa todas las peticiones
app.use(isAuth);

/*   ### Endpoint de pagina de Inicio ###  */
app.get("/", (req, res) => {
  res.send(`Server listening at http://${DB_HOST}:${APP_PORT}`);
});

/*   ### Endpoints Usuarios ###  */

// Registro de usuario
app.post("/register", newUser);

// Login de usuario
app.post("/login", loginUser);

// Editar Password del usuario
app.put("/user/password", isUser, editUserPass);

// Editar email y Username del usuario
app.put("/user", isUser, editUser);

// Borrar un usuario
app.delete("/user", isUser, deleteUser);

//Recuperar info del usuario
app.get("/user", isUser, userData );

/*   ### Endpoints News ###  */

// Registrar nueva Noticia
app.post("/newNews", isUser, newNews);

// Listar las Noticias de un usuario
app.get("/profile", isUser, getUserProfile);

// Listar todas las noticias
app.get("/listNews", listNews);

// Listar Noticias por id de Noticia
app.get("/news/:idNews", getNewById);

//Listar las noticias en HomePage(sin logueo)
app.get("/listFilterNews", listFilterUserNews);

// Añadir la photo de la Noticia
app.post("/News/:idNews/photo", isUser, photoNews);

// Dar dislike a una noticia
app.post("/News/:idNews/unlike", isUser, addDunlikesNews);

// Dar like a una noticia
app.post("/News/:idNews/like", isUser, addLikesNews);

// Editar una Noticia
app.put("/News/:idNews", isUser, editNews, canEditNews);

// Borrar una Noticia
app.delete("/News/:idNews", deleteNews);

// Middleware de Error
app.use((error, req, res, _) => {
  console.error(error);

  res.status(error.httpStatus || 500);

  res.send({
    status: "Error",
    message: error.message,
  });
});

// Middleware de Not Found
app.use((req, res) => {
  res.status(404);

  res.send({
    status: "Error",
    message: "Not found",
  });
});

// Ponemos el servidor a la escucha

app.listen(APP_PORT, () => {
  console.log(`Server listening at http://${DB_HOST}:${APP_PORT}`);
});
