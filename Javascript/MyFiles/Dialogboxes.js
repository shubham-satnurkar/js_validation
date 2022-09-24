/* window.alert("Hurry up... sale is ending soon !!!"); */
/* 
var action=window.confirm("Do you really want to finish the exam???");
document.write(action);
if(action){
    document.write("<h2>Ok.. Exam Submitted...</h2>");
}
else 
    document.write("<h2>OK.. You can continue with exam...</h2>"); */

 var city=window.prompt("Enter your city");   
 document.write(city+" type:"+typeof city);

 
 var age=window.prompt("Enter your age"); 
 document.write(age+" type:"+typeof age);
    age=parseInt(age); 
 if(age>=18)
    document.write("<h3>Welcome for voting</h3>");
else
    document.write("<h3>Sorry.. you can not vote</h3>");
