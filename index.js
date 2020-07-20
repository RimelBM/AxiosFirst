const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', function(req, res) {

      res.status(200).send("Welcome :D , write your country in url , like http://localhost:3000/Berlin ") ;
  
  } );

app.get('/:Contrey', function(req, res) {

  var qs = {
    params:{
      q: req.params.Contrey,
      appid:'f621d56d88cf41b5c52bdedb9ac80aa1'
    }
  }
  axios.get("http://api.openweathermap.org/data/2.5/weather?",qs)
    .then(function (response) {
      // handle success
      //console.log(response.data);
      res.status(200).send(response.data) ;
    })
    .catch((errors )=>{
      res.status(400).send(errors)
    })

  } );
app.listen(3000);