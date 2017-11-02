var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [ 
    {
        name: "Cloud camp",
        image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
        {
        name: "Moon camp",
        image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
        name: "ROCK camp",
        image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
    ];

function seedDB(){
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        } else
            console.log("Database empty");
                data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
              if(err) {
                  console.log(err);
             } else {
                 console.log("campground created");
                 Comment.create( 
                     {
                        text: "Campsite is noisy and dirty",
                        author: "Green jeans"
                     }, function(err, comment){
                         if(err) {
                             console.log(err);
                         } else {
                             campground.comments.push(comment);
                             campground.save();
                             console.log("comment created");
                         }
                     
                     }
                     );
              }
            });
      });
    });
    

}
module.exports = seedDB;
