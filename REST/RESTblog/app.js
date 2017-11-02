var bodyParser      =  require("body-parser"),
    methodOverride  =  require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose        =  require("mongoose"),
    express         =  require("express"),
    app             =  express();
    
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//HOME
app.get("/", function(req, res){
    res.redirect("/blogs");
});


//INDEX
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
    
});

//CREATE
app.post("/blogs", function(req, res){
    req.body.blog.body = expressSanitizer(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
    
});

//NEW
app.get("/blogs/new", function(req, res){
       res.render("new");
});

//SHOW
app.get("/blogs/:id", function(req, res){
       Blog.findById(req.params.id, function(err, foundBlog){
       if (err) {
           res.redirect("/blogs");
       } else {
           res.render("show", {blog: foundBlog});
       }
   });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
        req.body.blog.body = expressSanitizer(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err) {
            console.log("error is " + err);
            res.redirect("/blogs");
        } else {
            console.log("on good path");
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, req.body.blog, function(err){
        if(err) {
            console.log("error is " + err);
            res.redirect("/blogs");
        } else {
            console.log("on good path");
            res.redirect("/blogs");
        }
    });
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");
});