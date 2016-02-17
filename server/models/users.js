var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: {type:String, required: true, minlength:4, maxlength:20},
	
});

mongoose.model('User', UserSchema);