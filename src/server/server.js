const express = require("express");
const cors = require("cors");
const db = require('./config/db.js');

const app = express();
const port = 3002;

app.use(cors());

app.get("/api/user", (req, res) => {
    const query = "SELECT * FROM user";
    db.query(query, (err, results) => {
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
