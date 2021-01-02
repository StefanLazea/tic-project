import axios from "axios";

export default class CarService {
  getCars() {
    return axios.get("demo/data/cars.json").then(res => res.data.data);
  }
}
