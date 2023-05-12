const getDB = require("../../db/getDB");
const { generateError, validateSchema } = require("../../helpers");
const newsSchema = require("../../schemas/newsSchema");
const idNewsSchema = require("../../schemas/idNewsSchema");

const editNews = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();
    // Recuperamos el id del usuario logueado
    const idUserAuth = req.userAuth.id;

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newsSchema
    await validateSchema(newsSchema, req.body);

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de idNewsSchema
    await validateSchema(idNewsSchema, req.params);

    // Recuperamos el id de la noticia de los path params
    const { idNews } = req.params;

    // Destructuramos el req.body
    const { title, summery, newsText, topic } = req.body;

    // Seleccionamos los datos antiguos
    const [news] = await connection.query(
      `
        SELECT title, summery,newsText,topic FROM news WHERE id = ?
        `,
      [idNews]
    );
    if (news.length < 1) {
      throw generateError("La noticia que a modificado no existe", 400);
    }
    await connection.query(
      `
        UPDATE news SET title = ?, summery = ?, newsText = ?,topic = ? WHERE id = ?
        `,
      [
        title || news[0].title,
        summery || news[0].summery,
        newsText || news[0].newsText,
        topic || news[0].topic,
        idNews,
      ]
    );
    res.send({
      status: "ok",
      message: "Noticia modificado con éxito",
      data: [
        {
          title: news[0].title,
          summery: news[0].summery,
          newsText: news[0].newsText,
          topic: news[0].topic,
        },
      ],
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};
module.exports = editNews;
