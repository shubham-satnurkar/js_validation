let fnameNode=document.getElementById("fname");
let lnameNode=document.getElementById("lname");
let unameNode=document.getElementById("uname");
let passNode=document.getElementById("pass");
let cpassNode=document.getElementById("cpass");
let emailNode=document.getElementById("email");
let mobileNode=document.getElementById("mobile");
let ageNode=document.getElementById("age");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3");
let tdNode4=document.getElementById("error4");
let tdNode5=document.getElementById("error5");
let tdNode6=document.getElementById("error6");
let tdNode7=document.getElementById("error7");
let tdNode8=document.getElementById("error8");
/* let tdNodes=document.getElementsByClassName("error");
for(let node of tdNodes)
    node.style.color="red"; */

function validate1(){
    tdNode1.textContent="";
    let fname=fnameNode.value;
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.textContent="this field is required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="name should have only alphabets";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}


function validate2(){
    tdNode2.textContent="";
    let lname=lnameNode.value;
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(lname));
    if(lname==''){
        tdNode2.textContent="this field is required";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(lname)==false){
        tdNode2.textContent="name should have only alphabets";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}

function validate3(){
    tdNode3.textContent="";
    let uname=unameNode.value;
    if(uname==''){
        tdNode3.textContent="this field is required";
        unameNode.style.border=border1;
        return false;
    }
    else if(uname.length<3 || uname.length >10){
        tdNode3.textContent="uname must have atleast 3 and at most 10 chars";
        unameNode.style.border=border1;
        return false;
    }
    else{
        unameNode.style.border=border2;
        return true;
    }
    //[A-Za-z]{3,6}
}
function validate4(){
    tdNode4.innerHTML="";
    let password=passNode.value;
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(password==''){
        tdNode4.textContent="this field is required";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="the password should contain atleast one";
        let ulnode=document.createElement("ul");
        let linode1=document.createElement("li");
        linode1.textContent="Capital letter";
        let linode2=document.createElement("li");
        linode2.textContent="Small Letter";
        let linode3=document.createElement("li");
        linode3.textContent="Digit";
        let linode4=document.createElement("li");
        linode4.textContent="Special Symbol";
        ulnode.append(linode1,linode2,linode3,linode4);
        tdNode4.append(spanNode,ulnode);
        passNode.style.border=border1;
        return false;
    }
    else if(password.length<5 || password.length>12){
        tdNode4.textContent="Password should be atleast 5 and atmost 12 characters long";
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }
    //(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}
}
function validate5(){
    tdNode5.textContent="";
    let confirmPass=cpassNode.value;
    let password=passNode.value;
    if(confirmPass==''){
        tdNode5.textContent="this field is required";
        cpassNode.style.border=border1;
        return false;
    }
    else if(confirmPass!==password){
        tdNode5.textContent="Password not matching";
        cpassNode.style.border=border1;
        return false;
    }
    else{
        cpassNode.style.border=border2;
        return true;
    }
}

function validate6(){
    tdNode6.textContent="";
    let emailId=emailNode.value;
    let ss=emailId.substring(emailId.indexOf('@')+1);
    console.log(ss);
    // vina123@s
    if(emailId==''){
        tdNode6.textContent="this field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!emailId.includes('@') || ss==''){
        tdNode6.textContent="Please put valid email id";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}
function validate7(){
    tdNode7.textContent="";
    let mobileNumber=mobileNode.value;
    let regExp=new RegExp("^[0-9]*$"); 
    if(mobileNumber==''){
        tdNode7.textContent="this field is required";
        mobileNode.style.border=border1;
        return false;
    }
    else if(regExp.test(mobileNumber)==false){
        tdNode7.textContent="mobile number should contain only digits";
        mobileNode.style.border=border1;
        return false;
    }
    else if(mobileNumber.length!=10){
        tdNode7.textContent="please put valid mobile number";
        mobileNode.style.border=border1;
        return false;
    }
    else{
        mobileNode.style.border=border2;
        return true;
    }
   
}
function validate8(){
    tdNode8.textContent="";
    let age=ageNode.value;
    if(age==''){
        tdNode8.textContent="this field is required";
        ageNode.style.border=border1;
        return false;
    }
    else if(age<1 || age>110){
        tdNode8.textContent="please put valid age (1 to 110)";
        ageNode.style.border=border1;
        return false;
    }
    else{
        ageNode.style.border=border2;
        return true;
    }
}

let checkNode=document.getElementById("showp");
function show(){
    if(checkNode.checked){
        passNode.type="text";
        cpassNode.type="text";
    }
    else{
        passNode.type="password";
        cpassNode.type="password";
    }
}

function validateForm(){
    let st1=validate1(); 
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();
    let st6=validate6();
    let st7=validate7();
    let st8=validate8();
    return st1 && st2 && st3 && st4 && st5 && st6 && st7 && st8;
}