const authorController = require('../controllers/authorController.js')
const router = require('express').Router()

router.get('/list' , authorController.getAuthors)
router.get('/:id' , authorController.getSocialMediaByAuthorsId)

module.exports = router