const board = document.querySelector('.board');
const blockHeight = 50;
const blockWidth= 50;

const cols = Math.floor(board.clientWidth/blockWidth);
const rows = Math.floor(board.clientHeight/blockHeight);

board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows},1fr)`;

const blocks=[]
const snake = [{
    x:1,y:3
} ,{
    x:1, y:4
} ,{
    x:1, y:5
}]
let direction = 'left'

for(let row= 0; row<rows; row++){
    for(let col= 0;col<cols; col++){
    const block = document.createElement('div'); //creating a block
     block.classList.add('block');// assigning a class to that block 
    board.appendChild(block);
   
    blocks[`${row}-${col}`] = block;

    }

}

function render(){
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    })
}


setInterval(()=>{
    let head = null
    if(direction== "left"){
        head = {x:snake[0].x,y: snake[0].y-1}
    }

    snake.forEach(segment =>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    })
    snake.unshift(head)
    snake.pop();
    render()
},400);


