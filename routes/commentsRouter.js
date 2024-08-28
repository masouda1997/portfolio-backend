const commentController = require('../controllers/commentsController.js')
const router  = require('express').Router()

router.get('/allComments' , commentController.getAllComments)
router.get('/:id' , commentController.getSpecificComment)

module.exports = router