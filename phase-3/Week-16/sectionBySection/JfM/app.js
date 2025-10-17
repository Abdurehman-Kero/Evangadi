const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
// console.log(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = mysql.createConnection({
  host: "localhost",
  user: "june",
  password: "june",
  database: "june",
});
db.connect((err) => {
  if (err) {
    console.log("Db connection failed: ", err.message);
  } else {
    console.log("Connected to MySQL database successfully!");
  }
});

app.get("/", (req, res) => {
  res.send("Up and running!");
});

//create table
app.get("/create-table", (req, res) => {
  const customer = `
    CREATE TABLE IF NOT EXISTS customer (
     customer_id INT AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL, 
      PRIMARY KEY (customer_id)
    )
  `;

  const address = `
    CREATE TABLE IF NOT EXISTS address (
      address_id INT AUTO_INCREMENT,
      customer_id INT NOT NULL,
      address VARCHAR(255) NOT NULL,
      PRIMARY KEY (address_id),
      FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
    )
  `;

  const company = `
    CREATE TABLE IF NOT EXISTS company (
      company_id INT AUTO_INCREMENT,
      customer_id INT NOT NULL,
       company VARCHAR(255) NOT NULL,
      PRIMARY KEY (company_id),
      FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
    )
  `;
  db.query(customer, (err) => {
    if (err) console.log(err);
  });
  db.query(address, (err) => {
    if (err) console.log(err);
  });

  db.query(company, (err) => {
    if (err) console.log(err);
  });
  res.send("Table created");
});


app.post("/add-customer", (req, res) => {
  const { name, address, company } = req.body;

  const insertName = "INSERT INTO customer (name) VALUES (?)";
  const insertAddress =
    "INSERT INTO address (customer_id, address) VALUES (?, ?)";
  const insertCompany =
    "INSERT INTO company (customer_id, company) VALUES (?, ?)";

  db.query(insertName, [name], (err, results) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Failed to insert customer name" });
    }

    const id = results.insertId;

    db.query(insertAddress, [id, address], (err) => {
      if (err) console.log(err.message);
    });

    db.query(insertCompany, [id, company], (err) => {
      if (err) console.log(err.message);
    });

    // ✅ send JSON response
    res.json("Recieved");
  });
});

app.get("/customer", (req, res) => {
  let customers = `SELECT * FROM customer JOIN address JOIN company ON customer.customer_id = address.customer_id AND customer.customer_id = company.customer_id`;
  db.query(customers, (err, results, fields) => {
    if (err) console.log(err);
    else res.send(results);
  });
});
 
app.put("/update", (req, res) => {
  // console.log(req.body);
  const { newName, id } = req.body;
  let updatedsql = `update customer set name = '${newName}' where customer_id ='${id}'`;
  db.query(updatedsql, (err) => {
    if (err) console.log(err);
  });
  res.send("customer name updated successfully!");
});

app.delete("/delete", (req, res)=>{
  const {id} = req.body;
  let deleteAddresss = `DELETE FROM address where customer_id = '${id}'`;
  let deleteCompany = ` DELETE From company WHERE customer_id = '${id}'`;
  let deleteName = `DELETE FROM customer where customer_id = '${id}'`;
  db.query(deleteAddresss, (err)=>{
    if(err) console.log(err);
  })
  db.query(deleteCompany, (err)=>{
    if(err) console.log(err);
  })
  db.query(deleteName, (err)=>{
    if(err) console.log(err);
  })
  res.send("customer deleted succefully!")
})


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});