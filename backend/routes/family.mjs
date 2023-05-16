import express from "express";
import db from "../server/db/conn.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World!").status(200);
});

router.get("/tree", async (req, res) => {
  const collection = db.collection("tree");
  const result = await collection.findOne();

  if (!result) res.status(404).send("No family tree found!");
  else res.status(200).send(result);
});

router.get("/:memberId", async (req, res) => {
  const collection = db.collection("members");
  const query = { memberId: req?.params?.memberId };
  const result = await collection.findOne(query);

  if (!result)
    res.status(404).send(`Person ${req?.params?.memberId} was not found`);
  else res.status(200).send(result);
});

export default router;
