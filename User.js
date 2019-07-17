var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    empId:{type:Number},
    userName: {type:String},
    email:{type:String},
    city:{type:String},
    mobile:{type:Number}
    
})

module.exports = mongoose.model('User',UserSchema);