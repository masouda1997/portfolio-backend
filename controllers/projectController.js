const model  = require("../models")

const getAllProjects = async(req, res) => {
   let project  = await model.projects.findAll({})
   res.status(200).send(project)
}

// const getProjectSkills = async(req,res) => {
//    let skillsList = await model.
// }

module.exports = {getAllProjects}