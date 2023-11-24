$document.ready(function () {
//function to fahrenheit
function toFahrenheit(a){
   return a * 9/5 + 32;
}
const a = parseInt(prompt("enter number"));
let result = toFahrenheit(a);
alert(result);

//function toCelsius
   function toCelsius(b){
    return a - 32 * 5/9;
}
const b =parseInt(prompt("enter number"));
let output = toCelsius(b);
alert(output);
})