import axios from "axios";

export default axios.create({
  // baseURL: "https://wang-family-tree.herokuapp.com",
  baseURL: "",
  headers: {
    "Content-type": "application/json",
  },
});
