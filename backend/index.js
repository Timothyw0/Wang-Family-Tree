const express = require("express");
const cors = require("cors");
const path = require("path");
const family = require("./routes/family.js");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/family", family);

app.use("*", (_, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log("Hello world!");
});
