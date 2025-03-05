const addTaskBtn = document.getElementById('add-task-btn')
const todoBoard = document.getElementById('todo-board')

//add event listener on btn
addTaskBtn.addEventListener('click',()=>{
    const input = prompt('what is the task?')
    if(!input) return;

    //creating p tag
    let p = document.createElement('p');
    p.classList.add("item");
    p.setAttribute('draggable',true)
    p.innerText = input;
    todoBoard.appendChild(p)

})


const allBoards = document.querySelectorAll('.board');
const allitems = document.querySelectorAll('.item');


allitems.forEach((item)=>{
    item.addEventListener('dragstart',()=>{
        item.classList.add('flying')
    })
    item.addEventListener('dragend',()=>{
        item.classList.remove('flying')
    })

})



allBoards.forEach((board)=>
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector('.flying')
        board.appendChild(flyingElement)
        console.log(board,'heloo board',flyingElement)
    })
)