import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dfeac58f62844dbc8675ad111ccdd69c",
  },
});
