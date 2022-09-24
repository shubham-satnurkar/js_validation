document.write("Simple test message");
function test(){
    // any logical code
    document.write("Simple function");
}
test();

function add(num1,num2){
    return num1+num2;
}
let res=add(45,67);
document.write(res);

var arr=[12,45,6,7,89];
var arr1=[12,45,6,7,89];
var arr2=[...arr,...arr1];

function addition(...values){
    var sum=0;
    for(var val of values){ //enhanced for 
        sum=sum+val;
    }
    return sum;
}
var res1=addition(12);
var res2=addition(23,12);
var res3=addition(45,67,99);
console.log(res1);
console.log(res2);
console.log(res3);

var n1=56;
let n2=78;

var n1=34;
n2=34;

function test2(){
    for(var i=1;i<=5;i++){
        // i declared in for block scope
        console.log("i="+i);
    }//end for
    console.log("outside of loop i="+i);
    // var type variable always have functional scope inside a function
    for(let j=1;j<=5;j++){
        // j declared in for block scope
        console.log("j="+j);
    }//end for // scope of j ended here
    //console.log("outside of loop j="+j);
    // let type variable allowed to use in same scope where it is declared
}// scope of i ended here
test2();
var v=56;
const test3=function(num,dd){
    // coding
    return num/dd;
}
document.write(test3(67,6));
function fun1(num){
    console.log(num);
    return num*num*num;
}
//if arrow function accepts single parameter then () are optional
let arrowfun1=num=>{
    console.log(num);
    return num*num*num;
}
let cube1=arrowfun1(3);
console.log(cube1);
function fun2(num){
    return num*num*num;
}
// if arrow function contains single stmt then {} are optional
// if single stmt is return stmt then return keyword not allowed
// result gets returned implicitly
let arrowFun2=     num=>num*num*num;
let cub2=arrowFun2(4);
function fun3(){
    return "test message";
}
let arrowfun3=()=>"test message";


let salaries=[56000,90000,78000,89000,56000,88000,99000];
//display all salaries without using for loop
salaries.forEach(function(ele, index, array){
    console.log(ele+"  "+index+"  "+array);
    array[3]=77000;
});
salaries.forEach(function(ele){
    console.log(ele);
});
salaries.forEach((ele,index)=>console.log(ele+" "+index));
salaries.forEach(ele=>console.log(ele));

salaries=[56000,90000,78000,89000,56000,88000,99000];
// increment every salary by 5000 and return new array
let newsalarray=salaries.map(el=>el+5000);
console.log(newsalarray);

// do sum of array elements
const sum=salaries.reduce((acc,el)=>acc+el); 
console.log(sum);
// acc pointing to 1st element and el pointing to 2nd ele
//acc value automatically updated
// do sum of array elements and add more 10000 in it
const sum1=salaries.reduce((acc,el)=>acc+el , 10000); 
console.log(sum1);
// acc =10000 and el pointing to 1st ele
//acc value automatically updated
// store salaries greater than 80000 in new array
salaries=[56000,90000,78000,89000,56000,88000,99000];
const gratersalaries=salaries.filter(ele=>ele>80000);
console.log(gratersalaries);
const gratersalary=salaries.find(ele=>ele>80000);
console.log(gratersalary);
