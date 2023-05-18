const express = require("express");
const mongoCollections = require("../server/db/collections");
const familyTree = mongoCollections.familyTree;
const familyMembers = mongoCollections.familyMembers;

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World!").status(200);
});

router.get("/tree", async (req, res) => {
  const treeCol = await familyTree();
  const result = await treeCol.findOne();

  if (!result) res.status(404).send("No family tree found!");
  else res.status(200).send(result);
});

router.get("/:memberId", async (req, res) => {
  const memberCol = await familyMembers();
  const query = { memberId: req?.params?.memberId };
  const result = await memberCol.findOne(query);

  if (!result)
    res.status(404).send(`Person ${req?.params?.memberId} was not found`);
  else res.status(200).send(result);
});

module.exports = router;
