const projectController = require('../controllers/projectController.js')
const router = require('express').Router()

router.get('/allProjects' , projectController.getAllProjects)

module.exports = router