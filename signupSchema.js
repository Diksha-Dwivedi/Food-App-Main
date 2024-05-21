const mongoose=require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017")
// .then(()=>{
//     console.log("MongoDB Connected");
// })
// .catch(()=>{
//     console.log("failed");
// })

const signupSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("SignupData",signupSchema);
module.exports=collection
