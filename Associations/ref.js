
var mongoose        =  require("mongoose");


mongoose.connect("mongodb://localhost/reference");

var Post = require("./models/post");

var User = require("./models/user");


Post.create(
    {
        title: "How to create the best burger part next",
        content: "Serve the burger with greasy fries and onion rings"
    }, function(err, post) {
      User.findOne({email: "bob@gmmail.com"}, function(err, foundUser) {
          if(err) {
              console.log(err);
          } else {
              foundUser.posts.push(post);
              foundUser.save(function(err, data){
                  if(err) {
                      console.log(err);
                  } else {
                      console.log(data);
                  }
                   
              });
          }
           
      });
    });
            
 
 
//  User.findOne({name: "Bob Belcher"}).populate("posts").exec(function(err,user) {
//      if(err) {
//          console.log(err);
//      } else {
//          console.log(user);
//      }
         
//  });

// User.create({
//     name: "Bob Belcher",
//     email: "bob@gmmail.com"
// })

// User.findOne({name: "Donald Trump"}, function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//             user.posts.push({
//                  title: "my second daily delusion",
//                  content: "mercury comes from the planet"
//             });
//           user.save(function(err,user){
//              if(err) {
//                   console.log(err + "was the error");
//               } else {
//                   console.log(user);
//              }
//           });
//     }
//     });

// // var newUser = new User ({
// //     name: "Donald Trump",
// //     email: "unsecuredtwitter@unedu.com"
// // });

// // newUser.posts.push({
// //     title: "my daily delusion",
// //     content: "mexicans are poisoning children with tainted Captain Crunch"
// // });
// // newUser.save(function(err,user){
// //     if(err) {
// //         console.log(err + "was the error");
// //     } else {
// //         console.log(user);
// //     }
// // });

// // var newPost = new Post ({
// //     title: "Apples",
// //     content: "apples are delicious"
// // });

// // newPost.save(function(err,post){
// //     if(err) {
// //         console.log(err + "was the error");
// //     } else {
// //         console.log(post);
// //     }
// // });
// // app.listen(process.env.PORT, process.env.IP, function() {
// //     console.log("server has started");
// // });