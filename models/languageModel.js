module.exports = (sequelize , DataTypes) =>{
   const Languages = sequelize.define(
		"Languages",
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
            onUpdate:"CASCADE",
            onDelete:"CASCADE",
            references:{
               model:"Author",
               key:"id"
            }
			},
         Language:{
            type:DataTypes.STRING
         }
		},
		{
         tableName: "languages",
			timestamps: false,
			underscored: true,
      }
	);
   return Languages
}