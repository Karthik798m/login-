import express from "express"
import bodyparser from "body-parser"

const app=express();
const port=3000;

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    var username=req.body["usn"];
    var password=req.body["pswd"];

    console.log(username);
    console.log(password);

    res.render("index.ejs");
})

app.listen(process.env.PORT||port,()=>{
    console.log("server is live on port "+port);
})