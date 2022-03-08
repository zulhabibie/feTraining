import axios from 'axios'

const instance = axios.create({
  // baseURL: "http://localhost:11000",
  // server bri:
  // baseURL: "http://172.18.132.107:11000",
  // server sv 1:
  baseURL: 'http://165.22.55.132:8001',
//   // server sv 2:
//   baseURL: 'http://localhost:8001',
  // baseURL: "http://165.22.55.132:8011",
})

export default instance
