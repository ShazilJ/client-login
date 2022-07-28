const express=require("express");
const router = express.Router();
const users= require("../models/userSchema");
/*
router.get("/",(req,res)=>{
    console.log("connect");
});
*/

router.post("/register",(req,res)=>{
const{name,email,age,mobile,work,add,desc}=req.body; 
if(!name ||!email ||!age || !mobile ||!work || !add || !desc){ 
    res.status(404).send("please fill the data");
}
try{
    const preuser= users.findOne({email:email});
    console.log(preuser);
    
    if(preuser){
        res.status(404).send("this user is already present");

    }
    else{
        const adduser =new users({
            name,email,age,mobile,work,add,desc
        });
         adduser.save();
        res.status(201).json(adduser);
        console.log(adduser);
    }
}
catch(error){
    res.status(404).send(error)
}
})
module.exports = router;