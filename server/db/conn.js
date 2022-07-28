const mongoose=require("mongoose");
const DB="mongodb+srv://demo:clientdemo@cluster0.yp1lren.mongodb.net/client?retryWrites=true&w=majority";

mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));
