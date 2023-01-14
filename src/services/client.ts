import axios from "axios";
import AppConfig from "./config";

const client = axios.create({
  baseURL: AppConfig.baseURL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

client.interceptors.request.use(function (config) {
  const {headers, baseURL, url, data} = config
  console.log(`[API] >>> ${baseURL}${url}`)
  console.log(JSON.stringify({
    headers,
    data
  }, null, 2))
  return config;
}, function (error) {

  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  const {baseURL, url} = response.config
  const {data} = response
  console.log(`[API] <<< ${baseURL}${url}`)
  console.log(JSON.stringify({
    data
  }, null, 2))
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger

  return Promise.reject(error);
});

export default client
