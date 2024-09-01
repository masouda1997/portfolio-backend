module.exports = (sequelize, DataTypes) => {
	const Skills = sequelize.define(
		"Skills",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			title: { type: DataTypes.STRING },
		},
		{
			tableName: "skills",
			timestamps: false,
			underscored: true,
		}
	);
	return Skills;
};
