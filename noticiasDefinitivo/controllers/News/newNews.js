/* 
    Controlador para insertar nuevo producto
*/

// Guardamos la conexion con la base de datos en una variable

const getDB = require("../../db/getDB");
const { validateSchema } = require("../../helpers");
const newsSchema = require("../../schemas/newsSchema");

// Creamos la función para crear una noticia
const newNews = async (req, res, next) => {
  let connection;

  try {
    // Creamos una conexión con la base de datos
    connection = await getDB();

    // Recuperamos el id del usuario logueado
    const idUserAuth = req.userAuth.id;

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newsSchema
    await validateSchema(newsSchema, req.body);

    // Destructuramos los datos de la noticia del cuerpo de la petición
    const { title, summery, newsText, topic } = req.body;

    // Insertamos los datos de la noticia en la base de datos
    const [data] = await connection.query(
      `
        INSERT INTO news(title,photo,summery,newsText,topic,idUser)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      [title, null, summery, newsText, topic, idUserAuth]
    );

    // Obtenemos los datos del usuario
    const [user] = await connection.query(
      `
        SELECT username, email FROM user WHERE id = ?
      `,
      [idUserAuth]
    );

    // Respondemos con los datos de la noticia insertada y los datos del usuario
    res.send({
      status: "Ok",
      message: "¡Noticia creada correctamente!",
      data: {
        id: data.insertId,
        idUser: idUserAuth,
        title: title,
        summery: summery,
        newsText: newsText,
        topic: topic,
        likes: 0,
        dislikes: 0,
        photo: null,
        loggedUserDisliked: 0,
        loggedUserLiked: 0,
        username: user[0].username,
        email: user[0].email,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

// Exportamos la función
module.exports = newNews;
