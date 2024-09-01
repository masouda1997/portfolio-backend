module.exports = (sequelize, DataTypes) => {
	const ProjectToSkills = sequelize.define(
		"ProjectToSkills",
		{
			projectId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            onUpdate: "CASCADE", 
            onDelete: "CASCADE",
            references:{
               model: "Projects",
               key: "id"
            }
         },
			skillId: {
				type: DataTypes.INTEGER,
            allowNull: false,
            onUpdate: "CASCADE", 
            onDelete: "CASCADE",
            references:{
               model: "Skills",
               key: "id"
            }
			},
		},
		{
			tableName: "project_skills",
			timestamps: false,
			underscored: true,
		}
	)
   return ProjectToSkills
};