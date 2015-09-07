// DATABASE JS
var mongoose = require("mongoose"); //connects to mongoose
mongoose.connect("mongodb://localhost/project-one"); //to database
module.exports.User = require("./user"); //export to book


