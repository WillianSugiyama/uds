const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api/people';

module.exports.http = axios.create({
  baseURL: BASE_URL
});