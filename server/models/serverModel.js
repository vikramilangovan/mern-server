var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serverSchema = new Schema({
	'name': String,
	'port': Number
});

module.exports = mongoose.model('servers', serverSchema);
