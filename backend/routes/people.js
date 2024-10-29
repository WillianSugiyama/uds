const express = require('express');
const app = express();
const { getPeople } = require('../services/people')

module.exports.peopleRoute = app.get('/', async (req, res) => {
  const { page } = req.query;
  
  if(!page) {
    res.json({ error: "Page was not provided" }).status(400)
  }

  const resultService = await getPeople(Number(page));

  res.json(resultService).status(200);
})