import axios from "axios";

export default class CarService {
  getCars() {
    return axios.get("http://localhost:3001/api/part", {
      headers: { "Authorization": localStorage.getItem("token") }
    }).then(res => res.data);
  }
}
