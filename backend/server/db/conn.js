const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const connectionString = process.env.ATLAS_URI || "";

let conn;
let db;

module.exports = async () => {
  if (!conn) {
    conn = await MongoClient.connect(connectionString);
    db = await conn.db("Family-Tree");
  }
  return db;
};
