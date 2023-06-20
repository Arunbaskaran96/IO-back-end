const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://admin:iofactorydb@cluster0.1xm47y3.mongodb.net/").then(data=>{
    console.log("connected")
}).catch(err=>{
    console.log("error")
})