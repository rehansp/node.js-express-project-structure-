const mongoose = require('mongoose');
const url = "mongodb+srv://rehan:sheefa101@rehan.qjzvb.mongodb.net/test" 
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}, (err)=>{
    if(err) throw err;
    console.log("connection to mongo is established");
});

module.exports = mongoose;
