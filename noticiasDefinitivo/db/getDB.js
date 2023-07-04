/* 
    Archivo que crea y devuelve una conexión libre a la base de datos
*/

const mysql = require("mysql2/promise");
require("dotenv").config();

// Importamos las variables de entorno que hemos creado para la conexión

// Declaramos un pool de conexiones
let pool;

const getDB = async () => {

  try {
    if (!pool) {
      // Creamos un grupo de conexiones
      pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        timezone: "Z",
      });
    }

    // Ejecutamos el método getConnection para devolver una conexion libre
    return await pool.getConnection();
  } catch (error) {
    console.error(error.message);
  }
};

// Exportamos la funcion getDB
module.exports = getDB;
