const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

//Initialize our app variable with Express
const app = express();

//Connect Database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());

//Single endpoint just to test API. Send data to browser
// app.get('/', (req, res) => res.send('API Running'))

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/search", require("./routes/api/search"));
// app.use('/api/recipes', require('./routes/api/recipes'));

// Enviromental Variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
