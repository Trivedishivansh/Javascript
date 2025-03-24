var a= Number(prompt("Enter a number"));
var b = Number(prompt("Enter a second number"));

let random = Math.random();

let add = a+b;
let sub = a-b;
let div = a/b;
let multi = a*b;

if(random<0.1){
    console.log("Addition result is",a-b);
    console.log("Substaction result is",a+b);
    console.log("Division result is",a*b);
    console.log("Multiplication result is",a/b);

}else{
    console.log("Addition result is",a+b);
    console.log("Substaction result is",a-b);
    console.log("Division result is",a/b);
    console.log("Multiplication result is",a*b);


}