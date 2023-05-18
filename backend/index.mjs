import express from "express";
import cors from "cors";
import family from "./routes/family.mjs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const PORT = process.env.PORT || 5050;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
