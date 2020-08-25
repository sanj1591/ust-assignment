const mongoose = require('mongoose');
// const {db, port } = require('./config');

// console.log(db)


const uri = mongoose.connect("mongodb://localhost/ustdb",{useNewUrlParser:true,useUnifiedTopology: true}).then((db)=>
    console.log('db connected successfully'))
    .catch(error=>console.log('error in db',error));

    // console.log(db)

