gitconst getDB = require("./getDB");
require("dotenv").config();

//comando para ejecutar initDB.js e inicializar Database
//node db/initDB.js
async function main() {
  // Creamos una variable para guardar la conexión
  let connection;



  try {
    // Abrimos la conexion a la bbdd
    connection = await getDB();
    const { DB_DATABASE } = process.env;

    //Creamos la base de datos web si no existe
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}`);
    console.log('Database "news" created.');

    //selecciona la base de datos web
    await connection.query("USE news");

    await connection.query(`DROP TABLE IF EXISTS user_unlike_news`);
    await connection.query(`DROP TABLE IF EXISTS user_like_news`);
    await connection.query(`DROP TABLE IF EXISTS news`);
    await connection.query(`DROP TABLE IF EXISTS user`);

    // CREO LAS TABLAS
    await connection.query(
      `CREATE TABLE IF NOT EXISTS user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    registrationCode VARCHAR(250)
  )`
    );

    await connection.query(
      `CREATE TABLE IF NOT EXISTS news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(100) NOT NULL,
                photo VARCHAR(255),
                summery VARCHAR(100) NOT NULL,
                newsText VARCHAR(255) NOT NULL,
                topic VARCHAR(100) NOT NULL,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id)
                ON DELETE CASCADE
                
                
            )`
    );

    await connection.query(
      `CREATE TABLE IF NOT EXISTS user_like_news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                idUser INT UNSIGNED NOT NULL,
                idNews INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id) ON DELETE CASCADE,
                FOREIGN KEY (idNews) REFERENCES news(id) ON DELETE CASCADE
            )`
    );

    await connection.query(
      `CREATE TABLE IF NOT EXISTS user_unlike_news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                idUser INT UNSIGNED NOT NULL,
                idNews INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id) ON DELETE CASCADE,
                FOREIGN KEY (idNews) REFERENCES news(id) ON DELETE CASCADE
            )`
    );

    console.log("Tables created.");
  } catch (e) {
    console.error("Hubo un error al inicializar la DB: " + e.message);
  } finally {
    if (connection) {
      console.log("liberando conexión");
      connection.release();
    }
    process.exit(); // proceso de salida
  }
}

// Ejecutamos la funcion main
main();
