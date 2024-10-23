import axios from "axios";
import { API_DEV_BASE_URL } from "../utils/constants";

export const api = axios.create({
  baseURL: API_DEV_BASE_URL,
});
