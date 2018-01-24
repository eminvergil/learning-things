var names = require('./names.json');
var uniqArray = require('unique-random-array');
module.exports = {
	all : names,
	random : uniqArray(names)
};