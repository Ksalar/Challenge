const express = require('express');
const bodyParser = require('body-parser');
const CircularJSON = require('circular-json');

const axios = require('axios');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/get', function(req, res) {


  axios.get(`http://www.snagfilms.com/apis/films.json?limit=20`)
  .then((response) => {
  	console.log(CircularJSON.stringify(response));
    res.send(CircularJSON.stringify(response))
  })
  .catch((err) => {
    console.log(err)
    res.send([])
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});