const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB atlas connection established");
})
.catch((error)=>{
    console.log("MongoDB atlas connection error ",error);
})