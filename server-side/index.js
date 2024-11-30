const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running");
});

// database connection
const mongoAtlasUri =
  "mongodb+srv://adibasadaf:F9VTCj9S4m3n6Mjs@users.pdrtp.mongodb.net/";

mongoose
  .connect(mongoAtlasUri)
  .then(() => {
    console.log("Mongoose is connected");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err.message);
  });

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

app.post("/createUser", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save(); // Save to the database
    res.status(201).json(savedUser); // Send back the saved object
  } catch (err) {
    console.error("Error saving user:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Login via email and password
app.get("/login", async (req, res) => {
  const { email, password } = req.query; // Retrieve email and password from query parameters

  if (!email || !password) {
    return res
      .status(400)
      .send({ success: false, message: "Email and password are required." });
  }

  try {
    const user = await UserModel.findOne({ email, password }); // Search for user by email and password

    if (user) {
      res.status(200).send({ success: true, user });
    } else {
      res
        .status(401)
        .send({ success: false, message: "Invalid email or password." });
    }
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).send({ success: false, message: "Internal Server Error." });
  }
});

//fetch data by id
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id); // Fetch user by ID
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
