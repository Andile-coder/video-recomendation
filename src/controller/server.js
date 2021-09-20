const express = require("express");
const videoRoute = require("../routes/videosRoutes");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());
app.use(videoRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on portrrrr ${port}`));
// const express = require("express");
// const app = express();
// const { Pool } = require("pg");
// const pool = new Pool({
//   user: "andilemasela",
//   host: "localhost",
//   database: "cyf_videos",
//   password: "Masela@2018",
//   port: 5432,
// });
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });
// app.use(express.json());
// app.post("/", (req, res) => {
//   const url = req.body.data.url;
//   const title = req.body.data.title;
//   const query = `INSERT INTO videos (title,url,rating) VALUES ($1,$2,$3)`;
//   pool.query(query, [title, url, 0]).catch((e) => console.error(e));
// });

// app.get("/", (req, res) => {
//   pool.query("SELECT * FROM videos", (error, result) => {
//     res.json(result.rows);
//   });
// });

// app.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const rate = req.body.rating_value;
//   const query = `UPDATE videos SET rating=rating+${rate} WHERE id=${id}`;
//   pool.query(query).catch((e) => console.error(e));
//   console.log("rendering server");
// });

// app.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   const query = `DELETE FROM videos WHERE id=${id}`;
//   pool.query(query).catch((e) => console.error(e));
//   console.log("inside delete", id);
// });
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}`));
