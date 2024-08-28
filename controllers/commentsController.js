const db = require("../models")

const Comments = db.comments

const getAllComments = async (req,res)=>{
   let comments = await Comments.findAll({})
   res.status(200).send(comments)
}

const getSpecificComment = async(req,res)=>{
   let id = req.params.id
   let comment = await Comments.findOne({where:{id:id}})
   res.status(200).send(comment)
}

module.exports = {
   getAllComments, 
   getSpecificComment
}