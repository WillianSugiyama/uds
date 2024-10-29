const express = require("express");

const app = express();
const { peopleRoute } = require('./routes/people')
const cors = require('cors')

app.use(cors())

app.use('/people', peopleRoute)

app.listen(3009, () => {
  console.log('App is listening on 3009');
});