//call,apply and bind
var obj = {num:2};
var functionName = function(arg1, arg2, arg3){
};
functionName.call(obj, arg1, arg2, arg3 );
functionName.apply(obj [arg1, arg2, arg3]);
var bound = functionName.bind(obj);
bound(arg1, arg2, arg3);




// let multiply function (x, y) {
// console.log(x +y);
//}
//currying
let multiply = function (x) {
    return function (y) {
    console.log(x * y);
    }
    }
    let multiplyByTwo = multiply(2);
    multiplyByTwo(3);
    let multiplyByThree = multiply(3);
    multiplyByThree(10);