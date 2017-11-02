
var mongoose        =  require("mongoose");


mongoose.connect("mongodb://localhost/restful_blog_app");

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);


var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

User.findOne({name: "Donald Trump"}, function(err, user){
    if(err){
        console.log(err);
    } else {
            user.posts.push({
                 title: "my second daily delusion",
                 content: "mercury comes from the planet"
            });
           user.save(function(err,user){
             if(err) {
                  console.log(err + "was the error");
              } else {
                  console.log(user);
             }
           });
    }
    });

// var newUser = new User ({
//     name: "Donald Trump",
//     email: "unsecuredtwitter@unedu.com"
// });

// newUser.posts.push({
//     title: "my daily delusion",
//     content: "mexicans are poisoning children with tainted Captain Crunch"
// });
// newUser.save(function(err,user){
//     if(err) {
//         console.log(err + "was the error");
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post ({
//     title: "Apples",
//     content: "apples are delicious"
// });

// newPost.save(function(err,post){
//     if(err) {
//         console.log(err + "was the error");
//     } else {
//         console.log(post);
//     }
// });
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("server has started");
// });