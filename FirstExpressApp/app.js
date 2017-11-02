var express = require("express");
var app = express();
// routes
app.get("/", function(req, res) {
    res.send("Hi there");
});
app.get("/bye", function(req, res) {
    res.send("Goodbye");
});
app.get("/dog", function(req, res) {
    res.send("Meow");
});
app.get("/r/:subRedditName", function(req, res) {
    var subReddit = req.params.subRedditName;
    res.send("WELCOME TO THE " + subReddit.toUpperCase() + " SUBBREDIT")
})
app.get("/r/:subRedditName/comments/:id/:title", function(req, res) {
    var subReddit = req.params.subRedditName;
    var idName = req.params.id;
    var titleName = req.params.title;
    res.send("WELCOME TO THE " + subReddit.toUpperCase() + " SUBBREDIT PLUS")
})
app.get("*", function(req, res) {
    res.send("STARRED");
})
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
});
