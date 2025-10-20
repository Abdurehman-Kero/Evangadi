const express = require("express");
const mysql = require("mysql2");
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  database: "myDB",
  password: "myDBuser",
});

db.connect((err) => {
  if (err) console.log("Db connection failed: ", err.message);
  else console.log("Connected to MySQL database successfully!");
});

// Table creation
app.get("/install", (req, res) => {
  let productTable = `CREATE TABLE IF NOT EXISTS Products (
  product_id INT AUTO_INCREMENT,
  product_url VARCHAR(512) NOT NULL DEFAULT '',
  product_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (product_id)
)`;

  let productDescription = `CREATE TABLE IF NOT EXISTS product_Description (
  Description_id INT AUTO_INCREMENT,
  product_id INT NOT NULL,
  Product_brief_description TEXT NOT NULL,
  Product_description TEXT NOT NULL,
  Product_img VARCHAR(512) NOT NULL,
  Product_link VARCHAR(512) NOT NULL,
  PRIMARY KEY (Description_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

  let productPrice = `CREATE TABLE IF NOT EXISTS Product_Price (
  price_id INT AUTO_INCREMENT,
  product_id INT NOT NULL,
  starting_price INT NOT NULL,
  price_range VARCHAR(512) NOT NULL,
  PRIMARY KEY (price_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

  let orders = `CREATE TABLE IF NOT EXISTS orders (
  order_id INT AUTO_INCREMENT,
  product_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

  let user = `CREATE TABLE IF NOT EXISTS user (
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  User_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
)`;

  db.query(productTable, (err, result) => {
    if (err) console.log(err);
    else console.log("Products_Table created successfully");
  });
  db.query(productDescription, (err, result) => {
    if (err) console.log(err);
    else console.log("productDescription_Table created successfully");
  });
  db.query(productPrice, (err, result) => {
    if (err) console.log(err);
    else console.log("productPrice_Table created successfully");
  });
  db.query(orders, (err, result) => {
    if (err) console.log(err);
    else console.log("orders_Table created successfully");
  });
  db.query(user, (err, result) => {
    if (err) console.log(err);
    else console.log("user_Table created successfully");
  });
    res.send("Table created");
});







app.get("/", (req, res) => {
  res.send("Up and running!");
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("server is running on: http://localhost:3000/");
});
