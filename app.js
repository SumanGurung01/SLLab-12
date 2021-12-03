const mongoose = require("mongoose");
const express = require("express");
const app = express();

const port = 3000;
const lib=require("./schema");

const conn = "mongodb+srv://suman:gurung@cluster0.zo0do.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(conn).then(() => {
  console.log("Connected to DB");
});


app.use(express.json());
app.post("/addpost",async(req,res)=>{
    const book=req.body.Book_Name;
    const issuer=req.body.Name_of_issuer;
    const duedate=req.body.due_date;

    const lib_data = new lib(
            {
              Book_Name: book,
              Name_of_issuer: issuer,
              due_date: duedate
            }
        );
    const savedata = await lib_data.save();
  });

app.use("/",(req,res)=>{
  res.send("");
});
app.listen(port,()=>console.log("Express Started"));
