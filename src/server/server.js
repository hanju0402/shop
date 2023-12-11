const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fns2486579",
    database: "work",
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error("MySQL connection error: ", err);
    } else {
        console.log("Connected to MySQL database");
    }
});

app.get("/api/user", (req, res) => {
    const query = "SELECT * FROM user";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("MySQL query error: ", err);
            res.status(500).send("Internal Server Error");
        } else {
            res.json(results);
            console.log(res);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
