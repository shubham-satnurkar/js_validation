$(document).ready(function(){
    let btnNode=$('#btn');
    btnNode.click(function(){
        let node=$("div");
        //hide effect should get completed then label of button should be changed: callback
       if(btnNode.text()=='HIDE'){
            node.hide(6000, function(){
                btnNode.text("SHOW");
                alert("HIDE COMPLETED...");
            }); 
        }
        else{
            node.show(500, function(){
                btnNode.text("HIDE");
                alert("SHOW COMPLETED...");
            }); 
        }       
    });
    let btnNode1=$('#btn1');
    btnNode1.click(function(){
        $('.myimage').toggle(5000, function(){
            btnNode1.val("HIDE/SHOW");
            alert("DONE......."); // same callback for hide as well as show
        });
    });
});