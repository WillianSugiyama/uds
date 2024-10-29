const { http } = require('../infrastructure/http');

module.exports.getPeople = async (page) => {
  const result = await http.get(`/?page=${page}`);

  if (!result) {
    return null;
  }

  console.log(result.data);

  return result.data;
}