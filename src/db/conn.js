const mongoose = require("mongoose");

//creating database
// it returns a promise either resolve or rejected
mongoose.connect("mongodb://localhost:27017/aryandynamic", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})