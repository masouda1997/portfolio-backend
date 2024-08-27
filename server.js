const express = require("express")
const cors = require("cors")

const app = express()

const corOptions = {
   origin:'http://localhost:8000'
}


//middle wares
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//testing api
app.get('/',(req,res)=>{
   res.json({message:"hello"})
})

// port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT , ()=>{
   console.log("server is runnig on port " + PORT);
   
})