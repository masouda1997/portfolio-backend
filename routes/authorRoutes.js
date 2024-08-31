const authorController = require('../controllers/authorController.js')
const router = require('express').Router()

router.get('/list' , authorController.getAuthors)
router.get('/:authorId' , authorController.getSocialMediaByAuthorsId)

module.exports = router