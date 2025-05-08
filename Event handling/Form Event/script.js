/*
    submit 
    change
    input
    reset
    focus
    checked
    blur
 */

const username = document.getElementById("username");
const email = document.getElementById("email");
const course = document.getElementById("course");
const checkbox = document.getElementById("condition");
const radios = document.querySelectorAll('input[name="gender"]');
const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("name : ",username.value);
    console.log('email : ',email.value);
    radios.forEach((radio)=>{
        if(radio.checked){
            console.log("Gender : ",radio.value);
        }
    })
})
username.addEventListener("input",(e)=>{
    console.log(e.target.value);
})
username.addEventListener("focus",(e)=>{
    username.style.borderColor = "blue";
})
username.addEventListener("blur",(e)=>{
    username.style.borderColor = "black";
})
course.addEventListener("change",(e)=>{
    console.log("course value : ",e.target.value);
})

checkbox.addEventListener("change",(e)=>{
    if(e.target.checked){
        console.log("checkbox is checked");
    }else{
        console.log("unchecked...")
    }
})