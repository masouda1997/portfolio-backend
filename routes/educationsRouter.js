const educationController = require('../controllers/educationController.js')
const router = require('express').Router()

router.get('/all' , educationController.getEducations)
router.get('/:id' , educationController.getSpecificEducation)

module.exports = router