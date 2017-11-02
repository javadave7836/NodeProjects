var request = require("request");
request( 'https://api.iextrading.com/1.0/tops?symbols=AIG', function(error, response, body) {
    if (!error && response.statusCode == 200) {
       var parsedData=(JSON.parse(body));
       parsedData.forEach(function(element){
        console.log(element.symbol);
        // var currSymbol = element;
        // console.log(currSymbol.symbol);
       });
    }
});
