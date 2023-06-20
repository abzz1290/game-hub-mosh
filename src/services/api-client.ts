import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "132b9a2ad27741fa912d9c64089867d6",
  },
});
