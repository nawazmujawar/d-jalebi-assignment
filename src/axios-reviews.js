import axios from "axios";

const instance = axios.create({
  baseURL: "https://djalebi-a27cc-default-rtdb.firebaseio.com/",
});

export default instance;
