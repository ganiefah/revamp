// declare variabble
let sort = document.querySelector("#sort");
let input = document.querySelector("#display");
let add = document.querySelector("#add")
let list = document.querySelector("#lists")
let del = document.querySelector("#del")
let array = [];

//to add to the list 
add.addEventListener("click", (e)=> {
    e.preventDefault()
    if(input.value) {
        array.push(input.value)
        input.value = ""
    }else{
        alert("insert an item")
    }
})

// checkbox and  delete and edit button
localStorage.setItem("names", JSON.stringify(array))
add.addEventListener("click", (event)=> {
    event.preventDefault()
    list.innerHTML = "";
    array.forEach( (name, )=> {
        list.innerHTML += `
        <li id= "li"><input type="checkbox" id="check">
        ${name}
        <button class="btn4">Edit</button>
        <button class="btn3 delete" id="del" onClick="delItem()">Delete</button>
        </li>
        `
    })
})

// let current_tasks = document.querySelectorAll(".delete");
//         for(let i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }


function delItem(text){
    array.splice(text, 1)
    array.innerHTML=""
    console.log(array);
}

// function delItem(){
//     // a.preventDefault()
//     array.splice(0)
//     console.log(del);
// }
