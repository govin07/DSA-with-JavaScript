/**
 * Write your challenge solution here
 */
/**
 * Write your challenge solution here
 */

const btn = document.getElementById('addButton');
const ul = document.getElementById('taskList');


function handleBtn(){
    
    let input = document.getElementById('taskInput').value;
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.textContent = "X";
    delBtn.addEventListener('click',()=>{
        li.remove()
        let count = 0;
        count--
         document.getElementById('totalTasks').innerText = count
    })
    li.innerText = input;
    ul.appendChild(li)
    li.appendChild(delBtn)
    let count = 0;
    count++
     document.getElementById('totalTasks').innerText = count
    input.innerText = "";
   
}


btn.addEventListener('click',handleBtn)
