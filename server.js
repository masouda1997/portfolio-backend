const express = require("express")
const cors = require("cors")
const router = require("./routes/commentsRouter.js")
require('dotenv').config()

const app = express()

const corOptions = {
   origin:`http://localhost:${process.env.PORT}`
}


//middle wares
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/comments' , router )



// testing api
app.get('/',(req,res)=>{
   res.json({message:"hello"})
})

// port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT , ()=>{
   console.log("server is running on port " + PORT);
   
})