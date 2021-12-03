const mongoose=require('mongoose');
const {Schema}=mongoose;
const lib = new Schema(
    {
        Book_Name: String,
        Name_of_issuer: String,
        due_date: String
    });
module.exports=mongoose.model("StudentLib",lib,"lib");
