const model  = require("../models")

const getAllProjects = async(req, res) => {
   let project  = await model.projects.findAll({})
   res.status(200).send(project)
}

const getProjectSkills = async(req,res) => {
   try {
      const projects = await model.projects.findAll({
         attributes: ['name'], // Only select the project name
         include:{
            model:model.skills,
            attributes: ['title'], // Only select the skill title
            through: { attributes: [] } // Exclude the join table fields
         }
      })
      if(!projects || projects.length === 0){
         return res.status(404).send({message:"project or skills not found!"})
      }

      // format the response 
      const formattedList  = projects.map(p => ({
         project : p.name,
         skills : p.Skills.map(s => s.title)
      }))

      return res.status(200).send(formattedList)
   } catch (error) {
      console.log("error getting project skills" , error);
      res.status(500).send({message:"Internal server ERROR"})
   }
}

module.exports = {getAllProjects , getProjectSkills}