const authorController = require('../controllers/authorController.js')
const router = require('express').Router()

router.get('/list' , authorController.getAuthors)

module.exports = router