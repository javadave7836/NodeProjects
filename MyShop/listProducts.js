var myShop = require('faker');
console.log("================");
console.log("WELCOME TO MY SHOP");
console.log("==================");
for(var i = 0; i < 10; i++) {
    var fakeProduct = myShop.commerce.product();
    var fakePrice = myShop.commerce.price();
    console.log(fakeProduct + " - " + fakePrice);
}

