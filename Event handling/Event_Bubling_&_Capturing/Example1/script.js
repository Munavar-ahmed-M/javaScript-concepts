const child = document.getElementById("child");
const parent = document.getElementById("parent");
const grandParent = document.getElementById("grandParent");

child.addEventListener("click",function (){
    console.log("Child Clicked");
},true);
parent.addEventListener("click",function (){
    console.log("Parent Clicked");
},false);
grandParent.addEventListener("click",function (){
    console.log("GrandParent Clicked");
},true);
