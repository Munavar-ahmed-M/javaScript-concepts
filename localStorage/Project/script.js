window.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("addData");
    const inputdata = document.getElementById("inputdata");
    const list = document.getElementById("list");
    LoadTheData();
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        addTheData(inputdata.value.trim());
        inputdata.value = ""
        LoadTheData();
    })
    function addTheData(data){
        let value = JSON.parse(localStorage.getItem("myItem"));
        if(value == null){
            value = [];
        }
        value.push(data);
        localStorage.setItem("myItem",JSON.stringify(value))
    }
    function LoadTheData(){
        list.innerHTML = "";
        const localdata = localStorage.getItem("myItem");
        if(localdata != null){
            const value = JSON.parse(localStorage.getItem("myItem"));
            value.forEach((el,index)=>{
            list.innerHTML  += `
                    <li>
                    ${el}
                    <div class="btn"'>
                        <button id="edit-btn" data-index='${index}'>Edit</button>
                        <button id="remove-btn" data-index='${index}'>Remove</button>
                    </div>
                    </li>`;
            })
        }
        let editbutton = document.querySelectorAll("#edit-btn");
        let removebutton = document.querySelectorAll("#remove-btn");
        //Delete element
        removebutton.forEach((el)=>{
        el.addEventListener("click",removeElement);
        })
        editbutton.forEach((el)=>{
            el.addEventListener("click",editElement);
        })
    }
    function editElement(){
        let index = this.dataset.index;
        let storedData = JSON.parse(localStorage.getItem("myItem"));
        let newData = prompt("Enter Name : ",storedData[index]);
        if(newData != null){
            storedData[index] = newData.trim();
            localStorage.setItem("myItem",JSON.stringify(storedData));
            LoadTheData();
        }
    }
    function removeElement(){
        let index = this.dataset.index;
        let storedData = JSON.parse(localStorage.getItem("myItem"))
        storedData.splice(index,1);
        localStorage.setItem("myItem",JSON.stringify(storedData));
        LoadTheData();
    }

    
})