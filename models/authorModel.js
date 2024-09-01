module.exports = (sequelize, DataTypes) => {
	const Author = sequelize.define(
		"Author",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			firstName: { type: DataTypes.STRING },
			lastName: { type: DataTypes.STRING },
			age: { type: DataTypes.INTEGER },
			nationality: { type: DataTypes.STRING },
			address: { type: DataTypes.STRING },
			phone: { type: DataTypes.STRING(20) },
			email: { type: DataTypes.STRING },
			birth: { type: DataTypes.DATEONLY },
		},
		{
			underscored: true,
			tableName: "author",
			timestamps: false,
		}
	);
	return Author;
};
