/* 
    Archivo que crea y devuelve una conexión libre a la base de datos
*/

const mysql = require('mysql2/promise');
require('dotenv').config();

// Importamos las variables de entorno que hemos creado para la conexión
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } =
    process.env;

const getDB = async () => {
    // Declaramos un pool de conexiones
    let pool;

    try {
        if (!pool) {
            // Creamos un grupo de conexiones
            pool = mysql.createPool({
                connectionLimit: 10,
                host: DB_HOST,
                user: DB_USER,
                password: DB_PASSWORD,
                database: DB_DATABASE,
                port: DB_PORT,
                timezone: 'Z',
            });
            // Ejecutamos el método getConnection para devolver una conexion libre
            return await pool.getConnection();
        }
    } catch (error) {
        console.error(error.message);
    }
};

// Exportamos la funcion getDB
module.exports = getDB;
