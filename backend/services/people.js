const { http } = require('../infrastructure/http');

module.exports.getPeople = async (page) => {
  const result = await http.get(`/?page=${page}`);

  if (!result) {
    return null;
  }

  return result.data.results;
}