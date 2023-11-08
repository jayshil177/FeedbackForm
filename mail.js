const nm = require("nodemailer")
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/send-mail", (req, res) =>{
    const {email, rating, comments, roll_number} = req.query.data
    
    var trans=nm.createTransport(
        {
            service:"gmail",
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:"thakkarjay4726@gmail.com",
                pass:"napmpnqjrfrreeos"
            }
        }
    )
    
    var mailOption={
        from:"thakkarjay4726@gmail.com",
        to: email,
        subject:`FeedBack`,
        html: `<h3>Rating:${rating}<h3><hr>
        <h4>Response:${comments}</h4>`
        // html:'<h1>Hello</h1>'
    }
    
    trans.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log("Error");
        }
        else{
            console.log("email send"+info.response);
        }
    })
    res.send({status: "OK"})
})

app.listen(8001)