const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fns2486579",
    database: "work",
    port: 3306,
});

db.connect((err) => {
    if (err) {
        console.error("MySQL connection error: ", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

module.exports = db;