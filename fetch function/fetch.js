let local_data = document.querySelector("#local-data");
const  fetch_local_data = document.querySelector(".fetch_local_data");
fetch_local_data.addEventListener('click',getLocalData)
function getLocalData(){
    const value = fetch("data.json").then((value)=>{
       return value.json();
    }).then((data)=>{
        let lst = "<ul class=\"ullist\"/>";
        data.forEach((val)=>{
            lst += `<li> Country = ${val.name} </li>`
        })
        lst+="</ul>"
        local_data.innerHTML = lst;
    })
    
}
let api_data = document.querySelector(".api-data");
const  fetch_api_data = document.querySelector(".fetch_api_data");
fetch_api_data.addEventListener('click',getApiData)
function getApiData(){
    const value = fetch("https://jsonplaceholder.typicode.com/posts").then((value)=>{
       return value.json();
    }).then((data)=>{
        let lst = "<ul class=\"ullist\"/>";
        data.forEach((val)=>{
            lst += `<li> title = ${val.title} </li>`
        })
        lst+="</ul>"
        api_data.innerHTML = lst;
    })
    
}
