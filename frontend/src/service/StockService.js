import axios from "axios";

export default class StockService {
  getStocks() {
    return axios.get("http://localhost:3001/api/stock").then(res => res.data);
  }
}
