const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const video_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TEACHERRECORD",
});

video_connection.connect((error) => {
  if (error) {
    console.error("Error while connecting to techerrecord database:", error);
    process.exit(1);
  } else {
    console.log("techerrecord database connected");
  }
});

app.get("/videos", (req, res) => {
  const sql = "SELECT * FROM upload";
  video_connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({
        error: "Error fetching videos",
      });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
