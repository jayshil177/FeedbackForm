const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/Feedback1');
const UserSchema = new mongoose.Schema({
 username:Number,
 password:String
});
const User = mongoose.model('User', UserSchema);
app.post("/",async(req,res)=>{
    const{username,password}=req.body

    try{
        const check=await User.findOne({username:username})

        if(check){
            if(check.password===password){
                res.json("exist")
            }
            else{
                res.json("notcorrect")
            }
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.post("/signup",async(req,res)=>{
    const{username,password}=req.body

    const data={
        username:username,
        password:password
    }

    try{
        const check=await User.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.listen(5000)
