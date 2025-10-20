const mysql = require("mysql2");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.get("/", (req, res) => res.send("Up and running..."));
app.listen(3001, () => console.log("Listening on port 3001"));
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(app.json);
// app.use(app.urlencoded({
//   extended: true
// }))
// app.post("/addiphones", (req, res) => {
//   console.log(res.body);

//   res.end("Eyesera nw");
// });

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "juneBatch",
  password: "juneBatch",
  database: "juneBatch",
});

mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to MySQL");
});

app.get("/Create-Table", (req, res) => {
  const createProducts = `
    CREATE TABLE IF NOT EXISTS products (
      product_id INT AUTO_INCREMENT,
      product_url VARCHAR(255) NOT NULL,
      product_name VARCHAR(255) NOT NULL,
      PRIMARY KEY (product_id)
    )
  `;

  const createProductDescription = `
    CREATE TABLE IF NOT EXISTS productDescription (
      description_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      product_brief_description TEXT NOT NULL,
      product_img VARCHAR(255) NOT NULL,
      product_link VARCHAR(255) NOT NULL,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    )
  `;

  const createProductPrice = `
    CREATE TABLE IF NOT EXISTS productPrice (
      price_id INT AUTO_INCREMENT,
      product_id INT NOT NULL,
      starting_price VARCHAR(255) NOT NULL,
      price_range VARCHAR(255) NOT NULL,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    )
  `;

  mysqlConnection.query(createProducts, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err) => {
    if (err) console.log(err);
  });
  res.send("All tables created successfully!");
});
