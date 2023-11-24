$document.ready(function () {
//function to fahrenheit
function toFah(a){
   return a * 9/5 + 32;
}
const a =parseInt(prompt("enter number"));
const result = toFah(a);
alert(result);

//function toCelsius(a){
   function toCel(a){
    return a - 32 * 5/9;
}
const a =parseInt(prompt("enter number"));
const result = toCel(a);
alert(result);
})