const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");

const app = express();

//test db connection
const connect = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
connect();

app.use(express.json())
app.get("/", (req, res) => res.send("INDEX"));

//Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started o port ${PORT}`));
