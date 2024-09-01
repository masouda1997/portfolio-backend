module.exports = (sequelize, DataTypes) => {
	const Project = sequelize.define(
		"Project",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: { type: DataTypes.STRING },
			link: { type: DataTypes.STRING },
			image: { type: DataTypes.STRING },
			gif: { type: DataTypes.STRING },
			description: { type: DataTypes.TEXT },
		},
		{
			tableName: "project",
			timestamps: false,
			underscored: true,
		}
	);
	return Project;
};
