const getDB = require("../../db/getDB");
const { generateError, validateSchema } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userData = async (req, res, next) => {
  let connection;

  try {
    // Abrimos una conexión con la base de datos
    connection = await getDB();

    console.log("estrict token",req.userAuth);
    // Recuperamos la contraseña
    const idUserAuth = req.userAuth.id;

    // Comprobamos que existe un usuario con ese email en la base de datos y está activo
    const [user] = await connection.query(
      `SELECT id, username, email FROM user WHERE id = ?`,

      [idUserAuth]
    );

    // Si no se puede obtener el nombre sacamo un error
    if (user.length <= 0) {
      throw generateError("Nombre de usuario no encontrado", 409);
    }

    // Si ha ido todo bien hasta aqui, respondemos con el nombre obtenido
    res.send({
      status: "Ok",
      data: user[0],
    });
  } catch (error) {
    // En caso de que ocurra algun error lo pasamos
    next(error);
  } finally {
    // Finalmente, cerramos la conexion con la bbdd
    if (connection) connection.release();
  }
};

// Exportamos la funcion
module.exports = userData;
