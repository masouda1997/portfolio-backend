const db = require("../models");

const Author = db.author;

const getAuthors = async (req, res) => {
	let author = await Author.findAll({});
	res.status(200).send(author);
};

const getSocialMediaByAuthorsId = async (req,res) => {
   const authorId = req.params
	try {
		const authorWithSocialMedia = await Author.findOne({
			where: { id: authorId },
			include: [
				{
					model: db.socialMedia,
				},
			],
		});
      if(!authorWithSocialMedia){
         return res.status(404).send({message:"Author not found!"});
      }
      return res.status(200).send(authorWithSocialMedia.socialMedia)
	} catch (error) {
      console.error("Error fetching social media accounts:", error);
      res.status(500).send({message:"Internal server ERROR"})
   }
};

module.exports = { getAuthors , getSocialMediaByAuthorsId };
