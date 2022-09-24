//var/let/const
// dynamically typed lang : data type is known at run time
var num;
num=56; // number
document.write("hi");
console.log(typeof num); // to test code
num='fifty six';
console.log(typeof num); 
num=true;
document.write("hello");
console.log(typeof num); 
document.write("welcome");

var num1=50, num2=50;
var res=num1+num2;
document.write("Addition is: "+res); //Addition is: 100
document.write(`Addition is: ${res}`); //Addition is: 100
document.write("Addition is: "+num1+num2);  //Addition is: 5050
document.write("Addition is: "+(num1+num2)); //Addition is: 100
document.write("Result is :"+4*num1+num2); // Result is:20050
document.write("Result is :"+4*(num1+num2)); // Result is:400

const no=90;


// use of conditional statements
var age=56;
if(age>=18)
    document.write("you are valid voter");
else
    document.write("Sorry you can not vote");
    document.write("Do further steps");

var percentage=56.78;
document.write("Percentage:"+percentage);
if(percentage>=70)
    document.write("You are passed with Distinction");
else if(percentage>=60 && percentage<70)
    document.write("You are passed with first class");
else if(percentage>=40 && percentage<60)
    document.write("You are passed");
else 
    document.write("You are fail");
    percentage=98.78;
switch(true){
  case percentage>=70: 
  document.write("You are passed with Distinction");
  break;
  case percentage>=60 && percentage<70:
  document.write("You are passed with first class");
  break;
  case percentage>=40 && percentage<60:
  document.write("You are passed");
  case percentage<40:
  document.write("You are fail");
  default: "Wrong selection ";
}
