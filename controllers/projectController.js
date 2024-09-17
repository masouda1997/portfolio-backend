const model  = require("../models")

const getAllProjects = async(req, res) => {
   let project  = await model.projects.findAll({})
   res.status(200).send(project)
}

const getProjectSkills = async(req,res) => {
   try {
      const projects = await model.projects.findAll({
         include:{
            model:model.skills,
         }
      })
      if(!projects){
         return res.status(404).send({message:"skills not found!"})
      }
      return res.status(200).send(projects)
   } catch (error) {
      console.log("error getting project skills" , error);
      res.status(500).send({message:"Internal server ERROR"})
   }
}

module.exports = {getAllProjects , getProjectSkills}