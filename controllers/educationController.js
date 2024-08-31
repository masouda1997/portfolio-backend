const db = require('../models')

const Education = db.education

const getEducations = async (req,res)=>{
   let educations = await Education.findAll({
      // attributes:['institute' , 'course']
   })
   res.status(200).send(educations)
}

const getSpecificEducation = async (req,res)=>{
   let id = req.params.id
   let edu = await Education.findOne({where:{id:id}})
   res.status(200).send(edu)
}

module.exports = {
   getEducations , 
   getSpecificEducation
}