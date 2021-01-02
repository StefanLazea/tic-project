import axios from "axios";

export default class CarService {
  getCars() {
    return axios.get("http://localhost:3001/api/part", {
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlYyQUVlNDlsRjY3UXVOOVgzbkNFIiwiaWF0IjoxNjA5NjI5MjA4LCJleHAiOjE2MDk2NDAwMDh9.vAi1KfAh3gIWPCiNgttGnWb0N75hyWph3Vcpbs_hpW0" }
    }).then(res => res.data);
  }
}
