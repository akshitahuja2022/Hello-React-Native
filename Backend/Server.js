const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Node.js API!" });
});

app.listen(4000, (req, res) => {
  console.log("server is running on 4000 Port");
});
