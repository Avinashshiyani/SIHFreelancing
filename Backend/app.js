const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

// Connecting to databade
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "freelancing",
});

// Promisify for Node.js async/await
const promisePool = pool.promise();

// Login Validation
app.post("/login/check", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      res.json({ success: true, message: "Login Successfull", user: rows[0], redirectTo: '/dashboard' });
    } else {
      res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log("Error quering the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fake data fetch
app.post("/posts", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM mock_data WHERE language = 'Italian'");

    if (rows.length > 0) {
      res.json({ success: true, message: "Data Fetched", data: rows });
    } else {
      res.status(401).json({ success: false, message: "There is no data" });
    }
  } catch (error) {
    console.log("Error quering the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Signup
app.post("/signup/create", async (req, res) => {
  const {
    firstname,
    lastname,
    role,
    address,
    country,
    number,
    email,
    password,
  } = req.body;

  try {
    const [result] = await promisePool.query(
      "INSERT INTO users (firstname, lastname, role, address, country, phone_number, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [firstname, lastname, role, address, country, number, email, password]
    );

    // Check if the query was successful
    if (result.affectedRows > 0) {
      // If successful, send a success response
      res
        .status(201)
        .json({ success: true, message: "User created successfully", redirectTo: '/' });
    } else {
      // If not successful, send a failure response
      res
        .status(400)
        .json({ success: false, message: "Failed to create user" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    // Send a server error response
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get User by ID for update
app.get('/update/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await promisePool.query("SELECT * FROM users WHERE id = ?", [id]);

    if (rows.length > 0) {
      res.json({ success: true, data: rows[0] });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update User 
app.put('/updated/:id', async(req, res) => {
  const {id } = req.params;
  const { firstname, lastname, role, address, country, number, email } = req.body;

  try {
    const [result] = await promisePool.query(
      "UPDATE users SET firstname = ?, lastname = ?, role = ?, address = ?, country = ?, phone_number = ?, email = ? WHERE id = ?",
      [firstname, lastname, role, address, country, number, email, id]
    );

    if(result.affectedRows > 0) {
      res.json({ success: true, message: "User updated successfully" })
    }
    else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch(error) {
      console.error('Error executing query', error)
      res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Fetching posts 
app.get('/posts', async(req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM posts")
    if(rows.length > 0) {
      res.json({ success: 'true', message: 'Data Fetched', data: rows })
    }
  } catch(error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});

