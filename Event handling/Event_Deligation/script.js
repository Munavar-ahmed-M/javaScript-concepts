const container = document.querySelector(".container");
container.addEventListener("click",(e)=>{
    if(e.target.id != undefined){
        window.location.href = "/"+e.target.id;
    }
})