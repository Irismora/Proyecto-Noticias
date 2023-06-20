/* 
  Controlador para Mostrar las noticias en la página de inicio CODIGO NUEVO LISTADO NOTICIAS SIN LOGUEO
*/

const { validateSchema } = require("../../helpers");
const filterThemeSchema = require("../../schemas/filterThemeSchema");

// Guardamos la conexión con la base de datos en una variable
const getDB = require("../../db/getDB");

// Creamos la función para listar las noticias
const listFilterUserNews = async (req, res, next) => {
  let connection;

  try {
    // Creamos la conexión con la base de datos
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de filterThemeSchema
    await validateSchema(filterThemeSchema, req.query);

    let sqlQuery = `SELECT n.*, COUNT(DISTINCT l.id) AS likes, COUNT(DISTINCT u.id) AS dislikes 
                    FROM news n 
                    LEFT JOIN user_like_news l ON n.id = l.idNews 
                    LEFT JOIN user_unlike_news u ON n.id = u.idNews
                    GROUP BY n.id ORDER BY n.id DESC`;

    // Recuperamos los datos de las noticias guardadas en la base de datos
    const [news] = await connection.query(sqlQuery);

    // Respondemos con las noticias
    res.send({
      status: "Ok",
      message: "Lista de Noticias en la página de inicio",
      data: news,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

// Exportamos la función
module.exports = listFilterUserNews;
