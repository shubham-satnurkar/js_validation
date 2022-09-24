var rbnode1,rbnode2;let myimgNode;
$(document).ready(function(){
    var nodearray1=$("section");
    console.log(nodearray1);
    for(let node of nodearray1){
        console.log(node.children); // childNodes
        console.log("--------")
    }
    var para=$("#mypara1");
    console.log(para);
    console.log(para.children);
    console.log(para.html());
    let contents=para.html(); // considers inner elements
    let contents2=para.text(); // plain text
    $("#mypara3").html(contents);
    $("#mypara4").html(contents2);
    console.log("--------");
    var nodearray2=$(".heading");
    console.log(nodearray2);
    nodearray2.addClass("myborder");
    rbnode1=$("#r1");
    rbnode2=$("#r2");
    console.log(rbnode1.val());
    console.log(rbnode2.val());
    console.log("---------------");
    rbnode1.change(()=>showState());
    rbnode2.change(()=>showState());

    console.log("------attribute access and changing the value---------");
    myimgNode=$("#bluerose");
    let srcval=myimgNode.attr('src');
    console.log(srcval);
    console.log(myimgNode.attr('alt'));
    let h1=myimgNode.attr('height');
    console.log(h1+" "+typeof h1); // string
    let h2=myimgNode.height();  // better
    console.log(h2+" "+typeof h2);  // number
      // do the same for width : width()
    $('#zoombtn').click(()=>zoom());
    console.log("---------------");
    $('#mycity').focus(function(){
        $(this).css('border','10px solid pink');
    });
    let textNodes=$('[type="text"]');
    textNodes.mouseover(function(){
        if($(this).prop("readonly"))
            console.log("this field is readonly");
        else    
            console.log("this field is editable");
    });
    textNodes.focus(function(){
        $(this).css('background-color','orange');
        $(this).css({'border':'10px solid yellow', 'borderRadius':'10px'});
    });
    //css property/js property both work in jquery

    $('#animbtn').click(function(){
        $('#mypara2').animate({'height':'600px',
                                'width':'600px',
                                'border-width':'14px',
                                'background-color':'pink'},1000,'linear',function(){
                                    alert("Animation completed....");
                                });
    // animate(object having keyvalues pairs of style, timer in ms, ease funciton, callbackfunction)
    //from para 2 to para 4 : optional
    //timer in ms: bydefault: 400 ms , keywords: 'slow', 'fast'
    //easing : bydefault : swing,   linear
    
});
    
});
 function zoom(){
    myimgNode.height(myimgNode.height()+10);
   // myimgNode.width(600);
} 
function showState(){
    if(rbnode1.prop("checked"))
        console.log(rbnode1.val());
    if(rbnode2.prop("checked"))
        console.log(rbnode2.val());
}
/*

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
*/