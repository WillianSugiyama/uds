import axios from "axios";

const BASE_URL = 'http://localhost:3009';

export const api = axios.create(BASE_URL);