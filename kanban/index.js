const addTaskBtn = document.getElementById('add-task-btn')
const todoBoard = document.getElementById('todo-board')



function attachDragEvents(target){
    target.addEventListener('dragstart',()=>{
        target.classList.add('flying')
    })
    target.addEventListener('dragend',()=>{
        target.classList.remove('flying')
    })
}

function removebtn(target){
    let btn = document.createElement('button');
    btn.innerText = "X"
    target.appendChild(btn);
    btn.addEventListener("click", () => {
        target.remove();
    })

}

//add event listener on btn
addTaskBtn.addEventListener('click',()=>{
    const input = prompt('what is the task?')
    if(!input) return;

    //creating p tag
    let p = document.createElement('p');
    let btn = document.createElement('span');
    btn.classList.add("del-btn")
    btn.textContent = "XX"
    p.appendChild(btn)
    p.classList.add("item");
    p.setAttribute('draggable',true)
    p.contentEditable = true
    attachDragEvents(p)
    
    p.innerText = input;
    todoBoard.appendChild(p)

})


const allBoards = document.querySelectorAll('.board');
const allitems = document.querySelectorAll('.item');


allitems.forEach(attachDragEvents)



allBoards.forEach((board)=>
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying')
        board.appendChild(flyingElement)
        console.log(board,'heloo board',flyingElement)
    })
)