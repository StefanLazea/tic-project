import axios from "axios";

export default class CarService {
  getCars() {
    return axios.get("http://localhost:3001/api/part", {
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlYyQUVlNDlsRjY3UXVOOVgzbkNFIiwiaWF0IjoxNjA5NjkxOTgzLCJleHAiOjE2MDk3MDI3ODN9.BfOSzYqvSyh7IO210NyDQZhq60pHBf3a5OTshi1r0Tg" }
    }).then(res => res.data);
  }
}
