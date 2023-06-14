/* 
    Controlador para Mostrar las noticias de un usuario logeado
*/

const getDB = require("../../db/getDB");

//Guardamos la conexion con la base de datos en una variable

// Creamos la funcion listas noticias
const listFilterUserNews = async (req, res, next) => {
  let connection;

  try {
    //Creamos la conexion con la base de datos
    connection = await getDB();

    // Obtenemos los campos necesarios del req.body
    const { topic } = req.params;

    // Recuperamos los datos de las noticias guardadas en la base de datos
    const [news] = await connection.query(
      `SELECT *
              FROM news
              WHERE topic = ? ORDER BY id DESC`,
      [topic]
    );
    if (news.length === 0) {
      res.status(404).send({
        status: "Error",
        message:
          "Lo siento, no encuentro noticias con este tema. Por favor, escoge otro tema",
      });
      return;
    }
    // Respondemos con las noticias del usuario
    res.send({
      status: "Ok",
      message: "¡Lista de Noticias!",
      data: [news],
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

//Exportamos la funcion
module.exports = listFilterUserNews;