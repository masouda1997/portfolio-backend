module.exports = (sequelize, DataTypes) => {
	const SocialMedia = sequelize.define(
		"socialMedia",
		{
			id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
         },
			authorId: {
				type: DataTypes.INTEGER,
            allowNull:false,
            onUpdate: "CASCADE", 
            onDelete: "CASCADE",// Deletes social media records if the associated author is deleted
            references:{
               model: "Author",
               key: "id"
            }
			},
			platform: { type: DataTypes.STRING },
			link: { type: DataTypes.STRING },
		},
		{
			tableName: "social_media",
			timestamps: false,
			underscored: true,
		}
	);
   SocialMedia.associate = (models)=>{
      SocialMedia.belongsTo(models.Author , {
         foreignKey : "authorId",
      })

   }
   return SocialMedia
};

