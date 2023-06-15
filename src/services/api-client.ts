import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "de99697ea03a48e3a6750457551cc027",
  },
});
