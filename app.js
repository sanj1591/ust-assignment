var express = require('express');
var path = require('path');
var logger = require('morgan');
var db = require('./db');
var cors = require('cors');


var app = express();

const PORT = process.env.PORT || 5000;

const objRoutes = require('./routes/objects');



//Routes which should handle Requests

app.use(logger('dev'));
app.use(express.json()); 

app.use('/object',objRoutes);



app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
   res.status(error.status || 500);
   res.json({error:{
       message:error.message
   }
});
});


app.listen(PORT,console.log(`server is running at ${PORT}`))