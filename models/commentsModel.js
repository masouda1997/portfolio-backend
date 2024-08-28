module.exports = (sequelize , DataTypes)=>{
   const Comments = sequelize.define("comments" , {
      id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey : true,
         autoIncrement:true
      },
      email:{
         type:DataTypes.STRING
      },
      subject:{
         type:DataTypes.STRING
      },
      message:{
         type:DataTypes.TEXT
      },
      created_at:{
         type:DataTypes.DATE,
         defaultValue: DataTypes.NOW
      },
      updated_at:{
         type:DataTypes.DATE,
      }
   },{
      timestamps: false,
      tableName:"comments",
      underscored:true
   })

   return Comments
}