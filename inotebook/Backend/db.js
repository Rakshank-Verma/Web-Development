const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iNotebook";

const connetToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to MongoDB")
    })
}

module.exports = connetToMongo;