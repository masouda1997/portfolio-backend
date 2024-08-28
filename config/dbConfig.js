require("dotenv").config()

module.exports = {
	DB: process.env.DB_NAME,
	USER: process.env.DB_USER,
	PASSWORD: process.env.DB_PASSWORD,
	HOST: process.env.DB_HOST,
	PORT:process.env.DB_PORT,
	dialect: "mysql",
	// dialect: mysqlDialect,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
