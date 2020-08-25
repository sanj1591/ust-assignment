const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Obj = require('../models/objects');
const { db } = require('../models/objects');


router.get('/',(req,res,next)=>{
    Obj.find({},{_id:0})
    .then((results)=>{
        res.status(200).json({objects:results})
    })
    .catch((err)=>res.status(500).json({error:err}))
})

router.get('/:key',(req,res,next)=>{
    const key = req.params.key;
     Obj.find({key:key}).sort({timestamp: -1}).select({value:1,_id:0})
    .then(function (docs) {
        console.log(docs)
        res.status(200).json({objects:docs[0]})
    }).catch((err)=>res.status(500).json({error:err}))
})

router.get('/:key/:timestamp',(req,res,next)=>{
    const key = req.params.key;
    const timestamp =  req.params.timestamp;
    console.log(key,timestamp)
    Obj.findOne({key:key,timestamp:timestamp}).select({value:1,_id:0})
    .then((docs)=>{
        console.log(docs)
        res.status(200).json({objects:docs})
    })
    .catch((err)=>res.status(500).json({error:err}))
})
 

router.post('/',(req,res,next)=>{
        const object =new Obj ({
            _id:mongoose.Types.ObjectId(),
            key:req.body.key,
            value:req.body.value,
            timestamp: Math.floor(Date.now() / 1000)
        })
        console.log(object);
         object.save()
       .then((doc)=>{
            res.status(200).json({objects:doc})
           })
        .catch((err)=>res.status(500).json({message:'object not found',error:err}))
    })


    

module.exports = router;    