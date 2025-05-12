const child = document.getElementById("child");
const parent = document.getElementById("parent");
const grandParent = document.getElementById("grandParent");
/* 
    Event-Bubbling:
    when we click an element that have click eventlistener that will
    invoke current event and gradually invoke  its parents parent event
    Event-Capturing:
    when we click an element that have click eventlistner that will first invoke parent event and gradually 
    come down to current event listner
*/
child.addEventListener("click",function (){
    console.log("Child Clicked");
},true);
parent.addEventListener("click",function (){
    console.log("Parent Clicked");
},false);
grandParent.addEventListener("click",function (){
    console.log("GrandParent Clicked");
},true);
