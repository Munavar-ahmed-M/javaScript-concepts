// we are using Promise to add event 
const button = document.querySelector('button');
function addPromiseEvent(element,event){
    return new Promise((resolve,reject)=>{
        element.addEventListener(event,resolve)
    })
}
const promObj = addPromiseEvent(button,'click').then((e)=>{
    button.style.width = "400px";
})
