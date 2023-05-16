import express from "express";
import cors from "cors";
import family from "./routes/family.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/family", family);

app.use("*", (_, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
