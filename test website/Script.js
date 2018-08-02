
function giveMeEms(pixels){
    var baseValue=16;
    
    function doMath(){
        return pixels/baseValue;
    }
    
    return doMath;
}


var smallSize=giveMeEms(12);
var medSize=giveMeEms(18);
var largeSize=giveMeEms(24);
var xlSize=giveMeEms(32);

console.log("small size", smallSize());
console.log("med size", medSize());

