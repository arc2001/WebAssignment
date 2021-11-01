var text1="this is global message";
console.log(text1);
var a=function(){
    var text1="we are inside function a";
    console.log(text1);
b();
}
function b(){
    console.log(text1);
}
a();