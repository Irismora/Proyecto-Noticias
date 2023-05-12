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

    let sqlQuery = `SELECT n.*, COUNT(DISTINCT l.id) likes, COUNT(DISTINCT u.id) dislikes 
                    FROM news n 
                    LEFT JOIN user_like_news l ON n.id=l.idNews 
                    LEFT JOIN user_unlike_news u ON n.id=u.idNews`;

    if (topic) {
      sqlQuery += " WHERE topic=?";
    }

    sqlQuery += " GROUP BY n.id ORDER BY n.id DESC";

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
