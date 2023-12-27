import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5702e5ace4a74b34810b0ae1553a0c1e",
  },
});
