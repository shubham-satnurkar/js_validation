var company="NeoSoft TechnoLogieS";
var test1=new String("asdsfd");
console.log(company);
const len=company.length;
console.log(len);
//let index=parseInt(prompt("Enter index to extract the character"));
const char=company.charAt(5);
console.log(char);
var lower=company.toLowerCase();
console.log(company);
console.log(lower);
console.log(company.toLowerCase());  // lower string
console.log(company); // original string
// substring, substr, slice
console.log("-----------");
var sub1=company.substring(3,9);
console.log(sub1);
sub1=company.substring(9,3); //it works
console.log(sub1);
sub1=company.substring(-10,8); //0,8 negative not supported
console.log(sub1);
sub1=company.substring(-10,-3); //0,0 negative not supported
console.log(sub1); // empty string
sub1=company.substring(3); //3, end: end of original string
console.log(sub1); 
console.log("-----------");
var sub2=company.slice(3,9);
console.log(sub2);
sub2=company.slice(9,3);
console.log(sub2); //empty string
sub2=company.slice(-10,-2); //c,e sti<ei
console.log(sub2);
sub2=company.slice(-10,12); //c , n
console.log(sub2);
sub2=company.slice(-10,5); //c, f c is after f
console.log(sub2);
console.log("-----------");
var sub3=company.substr(3,9);
console.log(sub3);
sub3=company.substr(-8,4); //noLo
console.log(sub3);
console.log("-----------");
const array=company.split(" ");
console.log(array);
const array2=company.split(" ",1);
console.log(array2);
const array3=company.split("e");
console.log(array3);
const array4=company.split("e",2);
console.log(array4);

var cities=['mumbai','solapur','nanded','pune'];//4
cities.push('kolhapur');
console.log(cities);
var salaries=[560000,90000,879999,564444,234344];
var mixed=['adsdf',454657,56768789.24,true,'asdsfd','asdsf'];
var names=new Array(5); // empty array with initial size 5
/* for(var i=0;i<names.length;i++){
    names[i]=prompt("Enter name");
}//end for */
console.log(names);
var agearray=new Array(23);
console.log(agearray);
var agearray1=new Array(23,12,56,78,23,56,78);
console.log(agearray1);

// push, pop, unshift, shift
var newarray=agearray1.slice(2,6);
console.log(newarray);
//var values=[100,123];
agearray1.splice(2, 2,100,123); // index 2 from where u want delete, 2 values to be deleted
console.log(agearray1);
var aray2=agearray1.reverse();
console.log(aray2);
console.log(agearray1) // mutable


