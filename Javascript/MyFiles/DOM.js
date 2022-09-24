var nodearray1=document.getElementsByTagName("section");
console.log(nodearray1);
for(let node of nodearray1){
    console.log(node.children); // childNodes
    console.log("--------")
}
var para=document.getElementById("mypara1");
console.log(para);
console.log(para.children);
console.log(para.innerHTML);
document.getElementById("mypara3").innerHTML=para.innerHTML;// elements are considered
document.getElementById("mypara4").innerHTML=para.innerText;
console.log("text contents:"+para.textContent);  // same as innerText
console.log("text node:"+para.TEXT_NODE); // count
console.log("--------");
var nodearray2=document.getElementsByClassName("heading");
console.log(nodearray2);
for(let node of nodearray2){
  node.classList.add("myborder"); // addClass in jquery
}
var nodearray3=document.getElementsByName("gender");
console.log(nodearray3);
for(let ele of nodearray3){
    console.log(ele.value);
}
var myimg=document.getElementById("bluerose");
console.log(myimg.src);
console.log(myimg.alt);
console.log(myimg.height);
console.log(myimg.width);
function zoom(){
    myimg.height=myimg.height+10;
}
function showState(){
    for(let ele of nodearray3){
        if(ele.checked){
            console.log(ele.value);
        }
    }
}


let flag=false;
let brkfastarray=['sandwich','pohe','upma','dosa'];
let btnnode=document.getElementById("brkfastbutton");
btnnode.style.width="200px";
btnnode.style.border="4px double blue";
btnnode.addEventListener("click", function(){
    if(flag==false) showItems();
        else removeOL();
});
let olnode;
function showItems(){    
    olnode=document.createElement("ol");
    olnode.type="A";
    olnode.setAttribute("id","myol");
    for(let item of brkfastarray){
        let linode=document.createElement("li");
        linode.textContent=item;
        linode.style.color="red";
        linode.style.backgroundColor="yellow";
        olnode.append(linode); //appendChild
    }
   btnnode.after(olnode); // olnode added after btnnode
   flag=true;
}
function removeOL(){
    olnode.remove(); // removeChild used to remove child of parent pnode.removeChild(cnode);
    flag=false;
}
//create an array of breakfast items, should be displayed in ordered list