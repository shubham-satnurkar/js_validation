let fnameNode=$("#fname");
let lnameNode=$("#lname");
let unameNode=$("#uname");
let passNode=$("#pass");
let cpassNode=$("#cpass");
let emailNode=$("#email");
let mobileNode=$("#mobile");
let ageNode=$("#age");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=$("#error1");
let tdNode2=$("#error2");
let tdNode3=$("#error3");
let tdNode4=$("#error4");
let tdNode5=$("#error5");
let tdNode6=$("#error6");
let tdNode7=$("#error7");
let tdNode8=$("#error8");
let formNode=$('#regForm');
$(function(){
    fnameNode.blur(()=>validate1());
    lnameNode.blur(()=>validate2());
    unameNode.blur(()=>validate3());
    passNode.blur(()=>validate4());
    cpassNode.blur(()=>validate5());
    emailNode.blur(()=>validate6());
    mobileNode.blur(()=>validate7());
    ageNode.blur(()=>validate8());
    formNode.submit(()=>validateForm());
});
function validate1(){
    tdNode1.text("");
    let fname=fnameNode.val();
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.text("this field is required");
        fnameNode.css('border',border1);
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.text("name should have only alphabets");
        fnameNode.css('border',border1);
        return false;
    }
    else{
        fnameNode.css('border',border2);
        return true;
    }
}
function validate2(){
    tdNode2.text("");
    let lname=lnameNode.val();
    let regExp=new RegExp("^[A-Za-z]*$"); 
    console.log(regExp.test(lname));
    if(lname==''){
        tdNode2.text("this field is required");
        lnameNode.css('border',border1);
        return false;
    }
    else if(regExp.test(lname)==false){
        tdNode2.text("name should have only alphabets");
        lnameNode.css('border',border1);
        return false;
    }
    else{
        lnameNode.css('border',border2);
        return true;
    }
}
function validate3(){
    tdNode3.text("");
    let uname=unameNode.val();
    if(uname==''){
        tdNode3.text("this field is required");
        unameNode.css('border',border1);
        return false;
    }
    else if(uname.length<3 || uname.length >10){
        tdNode3.text("uname must have atleast 3 and at most 10 chars");
        unameNode.css('border',border1);
        return false;
    }
    else{
        unameNode.css('border',border2);
        return true;
    }
    //[A-Za-z]{3,6}
}
function validate4(){
    tdNode4.html("");
    let password=passNode.val();
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(password==''){
        tdNode4.text("this field is required");
        passNode.css('border',border1);
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=$("<span>");
        console.log(spanNode);
        spanNode.text("password should contain atleast one");
        let ulNode=$('<ul>');
        let liNode1=$('<li>');
        let liNode2=$('<li>');
        let liNode3=$('<li>');
        let liNode4=$('<li>');
        liNode1.text("Captial letter");
        liNode2.text("Small letter");
        liNode3.text("Digit");
        liNode4.text("Special Symbol");
        ulNode.append(liNode1,liNode2,liNode3,liNode4);
        tdNode4.append(spanNode,ulNode);
        return false;
    }
    else if(password.length<5 || password.length>12){
        tdNode4.text("Password should be atleast 5 and atmost 12 characters long");
        passNode.css('border',border1);
        return false;
    }
    else{
        passNode.css('border',border2);
        return true;
    }
}
function validate5(){
    tdNode5.text("");
    let confirmPass=cpassNode.val();
    let password=passNode.val();
    if(confirmPass==''){
        tdNode5.text("this field is required");
        cpassNode.css('border',border1);
        return false;
    }
    else if(confirmPass!==password){
        tdNode5.text("Password not matching");
        cpassNode.css('border',border1);
        return false;
    }
    else{
        cpassNode.css('border',border2);
        return true;
    }
}
function validate6(){
    tdNode6.text("");
    let emailId=emailNode.val();
    let ss=emailId.substring(emailId.indexOf('@')+1);
    console.log(ss);
    // vina123@s
    if(emailId==''){
        tdNode6.text("this field is required");
        emailNode.css('border',border1);
        return false;
    }
    else if(!emailId.includes('@') || ss==''){
        tdNode6.text("Please put valid email id");
        emailNode.css('border',border1);
        return false;
    }
    else{
        emailNode.css('border',border2);
        return true;
    }
}
function validate7(){
    tdNode7.text("");
    let mobileNumber=mobileNode.val();
    let regExp=new RegExp("^[0-9]*$"); 
    if(mobileNumber==''){
        tdNode7.text("this field is required");
        mobileNode.css('border',border1);
        return false;
    }
    else if(regExp.test(mobileNumber)==false){
        tdNode7.text("mobile number should contain only digits");
        mobileNode.css('border',border1);
        return false;
    }
    else if(mobileNumber.length!=10){
        tdNode7.text("please put valid mobile number");
        mobileNode.css('border',border1);
        return false;
    }
    else{
        mobileNode.css('border',border2);
        return true;
    }
   
}
function validate8(){
    tdNode8.text("");
    let age=ageNode.val();
    if(age==''){
        tdNode8.text("this field is required");
        ageNode.css('border',border1);
        return false;
    }
    else if(age<1 || age>110){
        tdNode8.text("please put valid age (1 to 110)");
        ageNode.css('border',border1);
        return false;
    }
    else{
        ageNode.css('border',border2);
        return true;
    }
}

let checkNode=$("showp");
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