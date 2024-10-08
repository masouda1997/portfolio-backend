const model = require("../models");

// const Author = model.author;

const getAuthors = async (req, res) => {
	let author = await model.author.findAll({});
	res.status(200).send(author);
};

const getSocialMediaByAuthorsId = async (req,res) => {
   // const authorId = req.params
	// console.log("social model  " , model.socialMedia);

	const {id} = req.params
	
	try {
		const authorWithSocialMedia = await model.author.findOne({
			where: {id},
			include: [
				{
					model: model.socialMedia,
					attributes: ['id', 'platform', 'link', 'authorId'], 
					required: false 
				},
			],
		});
		
      if(!authorWithSocialMedia){
         return res.status(404).send({message:"Author not found!"});
      }
      return res.status(200).send(authorWithSocialMedia)
	} catch (error) {
      console.error("Error fetching social media accounts:", error);
      res.status(500).send({message:"Internal server ERROR"})
   }
};
// SELECT `Author`.`id`, `Author`.`first_name` AS `firstName`, `Author`.`last_name` AS `lastName`, `Author`.`age`, `Author`.`nationality`, `Author`.`address`, `Author`.`phone`, `Author`.`email`, `Author`.`birth`, `SocialMedia`.`id` AS `SocialMedia.id`, `SocialMedia`.`platform` AS `SocialMedia.platform`, `SocialMedia`.`link` AS `SocialMedia.link`, `SocialMedia`.`author_id` AS `SocialMedia.authorId` FROM `author` AS `Author` LEFT OUTER JOIN `social_media` AS `SocialMedia` ON `Author`.`id` = `SocialMedia`.`author_id` WHERE `Author`.`id` = '1';

const getLanguageByAuthorId = async(req ,res)=>{
	const {id} = req.params
	try{
		const authorWithLanguage = await model.author.findOne({
			where:{id},
			include:[
				{
					model:model.languages,
					attributes: ['id','authorId','language'], 
					required: false 
				}
			]
		})
		if(!authorWithLanguage){
         return res.status(404).send({message:"Author not found!"});
      }
      return res.status(200).send(authorWithLanguage)
	}catch(error){
		console.error("Error fetching languages:", error);
      res.status(500).send({message:"Internal server ERROR"})
	}
}

module.exports = { getAuthors , getSocialMediaByAuthorsId  , getLanguageByAuthorId};
