$(document).ready(function(){
    let btnNode=$('#btn');
    btnNode.click(function(){
        let node=$("div");
        //hide effect should get completed then label of button should be changed: callback
       if(btnNode.text()=='FADE OUT'){
            node.fade(3000, function(){  //slideUp
                btnNode.text("FADE IN");
            }); 
        }
        else{
            node.fadeIn(500, function(){  //slideDown
                btnNode.text("FADE OUT");
            }); 
        }       
    });
    let btnNode1=$('#btn1');
    btnNode1.click(function(){
        $('.myimage').fadeToggle(5000, function(){  //slideToggle
            alert("DONE......."); // same callback for hide as well as show
        });
        $('#img2').fadeTo(3000,0.5); // timer, opacity
    });
});