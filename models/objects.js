const mongoose = require('mongoose')

const opts = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  };

const objectSchema  = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    key:{type:String,required:true},
    value:{type:String,required:true},
    timestamp:{type:String,required:true}
}
)

module.exports = mongoose.model('Obj',objectSchema)
