const getDB = require("../../db/getDB");
const { generateError, validateSchema, deletePhoto } = require("../../helpers");
const idNewsSchema = require("../../schemas/idNewsSchema");

const deleteNews = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de idNewsSchema
    validateSchema(idNewsSchema, req.params);

    // Destructuramos el id de la noticia
    const { idNews } = req.params;

    // Verificamos si la noticia existe
    const [[existingNews]] = await connection.query(
      `
        SELECT id FROM news WHERE id = ?
        `,
      [idNews]
    );

    if (!existingNews) {
      throw generateError("La noticia que intentas eliminar no existe", 404);
    }

    // Primero comprobamos si la noticia tiene fotos
    const [[news]] = await connection.query(
      `
        SELECT photo FROM news WHERE id = ?
        `,
      [idNews]
    );

    if (news && news.photo) {
      // Eliminamos la foto de la noticia
      await deletePhoto(news.photo);
    }

    // Eliminamos la noticia de la base de datos
    await connection.query(
      `
        DELETE FROM news WHERE id = ?
        `,
      [idNews]
    );

    res.send({
      status: "ok",
      message: "Noticia eliminada con éxito",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteNews;
