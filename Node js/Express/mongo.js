const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Sample').then(()=>{
    console.log("Connected to Mongodb");
}).catch((err) =>{
    console.log("err");
})

const student = mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
})

const Student = mongoose.model("studentdata", student);

const adder = async ()=>{
    // const ss = await Student.create({
    //     name: "Rakshank",
    //     workout: false,
    //     height: 5.9
    // })
    // const ss = await Student.find();
    const ss = await Student.find({name:'Rahul'}).count();
    console.log(ss);


}


adder();
