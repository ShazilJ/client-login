const express=require("express");
const router = express.Router();
const users= require("../models/userSchema");
/*
router.get("/",(req,res)=>{
    console.log("connect");
});
*/
//register user


router.post("/register", async(req,res)=>{
const{name,email,age,mobile,work,add,desc}=req.body; 
if(!name ||!email ||!age || !mobile ||!work || !add || !desc){ 
    res.status(422).send("please fill the data");
}
try{
    const preuser= await users.findOne({email:email});
    console.log(preuser);
    
    if(preuser){
        res.status(404).send("this user is already present");

    }
    else{
        const adduser =new users({
            name,email,age,mobile,work,add,desc
        });
            await adduser.save();
        res.status(201).send(adduser);
        console.log(adduser);
    }
}
catch(error){
    res.status(404).send(error)
}
})

//get user data

router.get("/getdata",async(req,res)=>{
    try{
      const userdata = await users.find();
      res.status(201).json(userdata)
      console.log(userdata);
    }
    catch(error){
        res.status(404).send(error)
    }
}
)
module.exports = router;