import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-wang-family-tree.cloudfunctions.net/app/",
  headers: {
    "Content-type": "application/json",
  },
});
