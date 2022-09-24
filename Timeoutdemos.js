let array=['mumbai','solapur','pune','satara','sangli'];
let interval;
let i=0;
$(function(){
    setTimeout(function(){
        setStyle();
    },5000);
   
    interval=setInterval(function(){
        if(i==array.length-1)
            clearInterval(interval);
        showArrayValue(i);
        i++;   
    },500);
});
function setStyle(){
    $('section').css({'height':'300px','width':'500px','border':'10px double blue'});
}
function showArrayValue(index){
    document.write("<b>"+array[i]+"</b>");
}

