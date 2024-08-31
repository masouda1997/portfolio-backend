const dbConfig = require("../config/dbConfig.js")
const {Sequelize ,DataTypes} = require("sequelize")

const sequelize = new Sequelize(
   dbConfig.DB,
   dbConfig.USER,
   dbConfig.PASSWORD,
   {
      host:dbConfig.HOST,
      dialect : dbConfig.dialect,
      operatorsAliases:false,
      pool:{
         max:dbConfig.pool.max,
         min:dbConfig.pool.min,
         acquire:dbConfig.pool.acquire,
         idle:dbConfig.pool.idle,
      }
   }
)


sequelize.authenticate().then(()=>{
   console.log('connected... ');
}).catch(err =>{
   console.log("Error:💥 " + err);
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


// This part initializes and attaches database models to the db object. Models in Sequelize are JavaScript classes that map to database tables, with attributes (columns) and methods that represent data and operations on the data.
db.education = require("./educationModel.js")(sequelize , DataTypes)
db.comments = require("./commentsModel.js")(sequelize , DataTypes)
db.author = require("./authorModel.js")(sequelize , DataTypes)


// The sync() method ensures that the defined models in Sequelize match the structure of the actual database tables. In other words, it synchronizes the model definitions with the schema of the database.
db.sequelize.sync({force:false}).then(()=>{
   console.log("yes re-sync done!");
})

module.exports = db