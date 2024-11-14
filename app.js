let addbutton=document.getElementById("addbutton")
let input=document.getElementById("input")
let description=document.getElementById("desc")
let container=document.getElementById("todocontainer")


addbutton.addEventListener("click", () =>{
    if(input.value=="" || description.value==""){
        alert("Please Enter task Detail")
    }

    let task=document.createElement("div")
    task.classList.add("border", "p-3", "myColor", "d-flex", "justify-content-between", "align-items-center", "rounded-4", "mt-3")

    let leftdiv=document.createElement("div")
    let rightdiv=document.createElement("div")

    let theading=document.createElement("h3")
    theading.innerText=input.value

    let tdesc=document.createElement("p")
    tdesc.innerText=description.value

    leftdiv.appendChild(theading)
    leftdiv.appendChild(tdesc)

    task.appendChild(leftdiv)

    let delbtn=document.createElement("button")
    delbtn.innerText="Delete"
    delbtn.classList.add("btn", "btn-danger")

    delbtn.addEventListener("click" ,() => {
        container.removeChild(task)

    })

    rightdiv.appendChild(delbtn)

    task.appendChild(rightdiv)

    container.appendChild(task)

    input.value=""
    description.value=""

    

    
})




