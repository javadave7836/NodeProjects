var express = require("express");
var app = express();
// routes
app.get("/", function(req, res) {
    res.send("Hi there - welcome to my project");
});

app.get("/speak/:animal", function(req, res) {
    var animalName = req.params.animal;
    switch (animalName) {
        case "pig":
            res.send("The " + animalName + " says oink");
            break;
         case "cow":
            res.send("The " + animalName + " says moo");
            break;
        case "dog":
            res.send("The " + animalName + " says bark");
            break;
        case "cat":
            res.send("The " + animalName + " says meow");
            break;
            case "crow":
            res.send("The " + animalName + " says caw");
            break;
       default:
            res.send("Animal not defined");
            break;

    }
});

app.get("/repeat/:word/:times", function(req, res) {
// app.get("/repeat/:word", function(req, res) {
        var wording = req.params.word;
        var repeats = Number(req.params.times);
        console.log("in repeat " + wording + " " + repeats);
    // res.send("inside repeat");
    var outString = "";
    for(var i = 0; i < repeats; i++) {
        console.log("inside for loop");
        outString += wording;
    }
     res.send(outString);    
       
})
app.get("*", function(req, res) {
    res.send("Page not defined");
})
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
});
