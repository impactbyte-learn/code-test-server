var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.send({
    title: 'Express'
  })
})

router.get('/about', (req, res, next) => {
  res.send({
    app: 'Code Test Server'
  })
})

router.post('/', (req, res, next) => {
  res.send({
    name: req.body.name,
    message: req.body.message
  })
})

module.exports = router
