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
app.use(express.urlencoded({ extended: true })); // -----------------------------------------
// TABLE CREATION
// -----------------------------------------
app.post("/add-product", (req, res) => {
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
    user_name,
    user_password,
    user_id,
    product_id,
  } = req.body;

  // 1️⃣ Insert into Products
  const insertProduct =
    "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";
  db.query(insertProduct, [product_name, product_url], (err, productResult) => {
    if (err) {
      console.log("Product insert error:", err.message);
      return res.status(500).send("Error inserting product");
    }

    const newProductId = productResult.insertId;

    // 2️⃣ Insert into product_Description
    const insertDescription = `
      INSERT INTO product_Description
      (product_id, Product_brief_description, Product_description, Product_img, Product_link)
      VALUES (?, ?, ?, ?, ?)
    `;
    db.query(
      insertDescription,
      [
        newProductId,
        product_brief_description,
        product_description,
        product_img,
        product_link,
      ],
      (err) => {
        if (err) console.log("Description insert error:", err.message);
      }
    );

    // 3️⃣ Insert into Product_Price
    const insertPrice = `
      INSERT INTO Product_Price (product_id, starting_price, price_range)
      VALUES (?, ?, ?)
    `;
    db.query(
      insertPrice,
      [newProductId, starting_price, price_range],
      (err) => {
        if (err) console.log("Price insert error:", err.message);
      }
    );

    // 4️⃣ Insert into user table
    const insertUser = `
      INSERT INTO user (user_name, User_password)
      VALUES (?, ?)
    `;
    db.query(insertUser, [user_name, user_password], (err, userResult) => {
      if (err) {
        console.log("User insert error:", err.message);
        return;
      }

      const newUserId = userResult.insertId;

      // 5️⃣ Insert into orders table (linking user + product)
      const insertOrder = `
        INSERT INTO orders (product_id, user_id)
        VALUES (?, ?)
      `;
      db.query(insertOrder, [newProductId, newUserId], (err) => {
        if (err) console.log("Order insert error:", err.message);
      });
    });

    res.send("Product, user, and order added successfully!");
  });
});

// -----------------------------------------
// MIDDLEWARE
// -----------------------------------------
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------
// ADD PRODUCT ROUTE
// -----------------------------------------
app.post("/add-product", (req, res) => {
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
  } = req.body;

  // 1️⃣ Insert into Products table
  const insertProduct =
    "INSERT INTO Products (product_name, product_url) VALUES (?, ?)";

  db.query(insertProduct, [product_name, product_url], (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Error inserting into Products table");
    }

    const id = result.insertId; // The new product_id

    // 2️⃣ Insert into product_Description table
    const insertDescription = `
      INSERT INTO product_Description
      (product_id, Product_brief_description, Product_description, Product_img, Product_link)
      VALUES (?, ?, ?, ?, ?)
    `;
    db.query(
      insertDescription,
      [
        id,
        product_brief_description,
        product_description,
        product_img,
        product_link,
      ],
      (err) => {
        if (err) console.log("Description insert error:", err.message);
      }
    );

    // 3️⃣ Insert into Product_Price table
    const insertPrice = `
      INSERT INTO Product_Price (product_id, starting_price, price_range)
      VALUES (?, ?, ?)
    `;
    db.query(insertPrice, [id, starting_price, price_range], (err) => {
      if (err) console.log("Price insert error:", err.message);
    });

    res.send("Product added successfully!");
  });
});

// -----------------------------------------
// DEFAULT ROUTE
// -----------------------------------------
app.get("/", (req, res) => {
  res.send("Up and running!");
});

// -----------------------------------------
// SERVER START
// -----------------------------------------
app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("Server is running on: http://localhost:3000/");
});
