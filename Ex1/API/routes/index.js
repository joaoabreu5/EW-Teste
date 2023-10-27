var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

router.get('/plantas', function(req, res) {
  if (req.query.especie) {
    Planta.getPlantasEspecie(req.query.especie)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Não consegui obter a lista de plantas da espećie pretendida."})
      })
  }
  else if (req.query.implant) {
    Planta.getPlantasImplantacao(req.query.implant)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Não consegui obter a lista de plantas da implantação pretendida."})
      })
  }
  else {
    Planta.list()
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Não consegui obter a lista de plantas."})
      })
  }
});

router.get('/plantas/freguesias', function(req, res) {
  Planta.getFreguesias()
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Não consegui obter a lista de freguesias."})
    })
});

router.get('/plantas/especies', function(req, res) {
  Planta.getEspecies()
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Não consegui obter a lista de espécies vegetais."})
    })
});

router.get('/plantas/:id', function(req, res) {
  Planta.getPlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Não consegui obter a planta pretendida."})
    })
});

router.post('/plantas', function(req, res) {
  Planta.addPlanta(req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção de uma planta."})
    })
})

router.delete('/plantas/:id', function(req, res) {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na remoção de uma planta."})
    })
})

module.exports = router;
