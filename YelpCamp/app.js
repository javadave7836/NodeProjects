//YELP CAMP
var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    flash            = require("connect-flash"),
    passport         = require("passport"),
    LocalStrategy    = require("passport-local"),
    methodOverride   = require("method-override"),
    Campground       = require("./models/campground.js"),
    Comment          = require("./models/comment.js"), 
    User             = require("./models/user.js"),                
    // passportLocalMongoose    = require("passport-local-mongoose"),
    seedDB           = require("./seeds.js");
    
var commentRoutes       =  require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),  
    indexRoutes         = require("./routes/index") 
    
    
    
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

app.use(require("express-session")({
    secret: "Rusty is a critter",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success= req.flash("success");
   next();
});


app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
});