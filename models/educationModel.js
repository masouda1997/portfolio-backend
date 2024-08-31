module.exports = (sequelize, DataTypes) => {
	const Education = sequelize.define(
		"education",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			institute: {
				type: DataTypes.STRING,
			},
			arrival: {
				type: DataTypes.DATEONLY,
			},
			departure: {
				type: DataTypes.DATEONLY,
			},
			course: {
				type: DataTypes.STRING,
			},
		},

		{
			timestamps: false,
         //If you remove timestamps: false Automatic timestamps: Sequelize will automatically add and manage createdAt and updatedAt fields.
         // Potential issue: If your existing table does not have createdAt and updatedAt columns, you may face issues with record creation and updates because Sequelize expects these columns to exist.
			tableName: "education",//Default behavior: If you don't specify a table name with the tableName option, Sequelize will infer the table name from the model name. By default, it pluralizes the model name to determine the table name.
         //If your model is named User, Sequelize will assume the table is named Users (plural). This could be problematic if your actual table name is users (lowercase and singular) and doesn’t match the convention Sequelize is using. This could lead to Sequelize querying the wrong table, resulting in errors or no results being returned.
         //@@@ If the inferred table name (e.g., Users from the User model) matches the actual table name in the database, you don’t need to specify tableName.
			underscored: true, // This option converts camelCase to snake_case in the database so here wa can write camelCase code :)
		}
	);

	return Education;
};
