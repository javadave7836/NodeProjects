function average(arr) {
    var total = 0;

    for(var i = 0; i < arr.length; i++) {
        total = total + arr [i];
    }
    var average = total / arr.length;
    console.log(total);
    console.log(arr.length);
    return(Math.round(average));
}

var arr1 = [40,65,77,82,80,54,73,63,95,49];
var arrAvg = average(arr1);
console.log(arrAvg);