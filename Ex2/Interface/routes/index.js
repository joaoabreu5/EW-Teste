var express = require('express');
var router = express.Router();
var axios = require('axios')
var env = require('../config/env')

/* GET home page. */
router.get('/', function(req, res) {
  var data = new Date().toLocaleString()
  axios.get(env.API)
    .then(resposta => {
        res.render('index', { plantas: resposta.data, d: data });
      })
      .catch(erro => {
        res.render('error', { error: erro })
      })
});

router.get('/:id', function(req, res) {
  var data = new Date().toLocaleString()
  axios.get(env.API + '/' + req.params.id)
    .then(resposta => {
        res.render('planta', { planta: resposta.data, d: data });
      })
    .catch(erro => {
      res.render('error', { error: erro })
    })
});

router.get('/especies/:id', function(req, res) {
  var data = new Date().toLocaleString()
  axios.get(env.API + '?especie=' + req.params.id)
    .then(resposta => {
        res.render('especie', { especie: resposta.data, d: data });
      })
    .catch(erro => {
      res.render('error', { error: erro })
    })
});

module.exports = router;
