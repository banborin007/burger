var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3600;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.set("handlebars", exphbs);

app.listen(PORT, function() {
    console.log("Listening on port: ", PORT);
})