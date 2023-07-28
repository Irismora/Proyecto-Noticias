/* 
    Controlador para Mostrar las noticias de un usuario logeado
*/

const { validateSchema } = require("../../helpers");
const filterThemeSchema = require("../../schemas/filterThemeSchema");

//Guardamos la conexion con la base de datos en una variable
const getDB = require("../../db/getDB");

// Creamos la funcion listas noticias
const listNews = async (req, res, next) => {
  let connection;

  try {
    //Creamos la conexion con la base de datos
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newsSchema
    await validateSchema(filterThemeSchema, req.query);

    // Obtenemos los campos necesarios del req.body
    const { topic } = req.query;

let sqlQuery = `SELECT n.*, ul.username, ul.email, COUNT(DISTINCT l.id) AS likes, COUNT(DISTINCT un.id) AS dislikes 
                FROM news n 
                LEFT JOIN user_like_news l ON n.id = l.idNews 
                LEFT JOIN user_unlike_news un ON n.id = un.idNews
                LEFT JOIN user ul ON n.idUser = ul.id`;

if (topic) {
  sqlQuery += " WHERE topic = ?";
}

sqlQuery += " GROUP BY n.id ORDER BY n.created_at DESC";



    // Recuperamos los datos de las noticias guardadas en la base de datos
    const [news] = await connection.query(sqlQuery, topic ? [topic] : []);

    // Respondemos con las noticias del usuario
    res.send({
      status: "Ok",
      message: "¡Lista de Noticias!",
      data: news,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

//Exportamos la funcion
module.exports = listNews;
