import axios from "axios";

export const request = axios.create({
  baseURL: "https://nc-hughes-news.herokuapp.com/api"
});