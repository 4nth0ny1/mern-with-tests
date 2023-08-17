import axios from "axios";

const API_URL = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MjE0MTg4NX0.Lor7yvj-KMwgk69L8Rcf93W02L430m8GGtV5ue85GkY";

export default () => {
  return axios
    .get(`${API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
