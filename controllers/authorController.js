const db = require("../models")

const Author = db.author

const getAuthors = async (req ,res) =>{
   let author = await Author.findAll({})
   res.status(200).send(author)
}

module.exports = {getAuthors}