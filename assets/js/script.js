

const grid_size = 500;

const grid_node = document.querySelector('#grid');
grid_node.style.width = grid_size + 'px';
grid_node.style.height = grid_size + 'px';

const elements = [];
//Crear divs con diferentes id.
createGridFront(20);

function createGridFront(grid_elements){
    
    let aux_id = 0;
    for(let i=0; i<grid_elements; ++i){
        const row = document.createElement('div');
        row.setAttribute('class','row');
        row.setAttribute('id','row_'+i);

        for(j=0; j<grid_elements; ++j){
            ++aux_id;
            const element = document.createElement('div');
            element.setAttribute('id',aux_id);
            element.setAttribute('class','element');
            element.style.width = grid_size/grid_elements-2 + 'px';
            element.style.height = grid_size/grid_elements-2 + 'px';

            row.appendChild(element); 
            elements.push(element);
        }    
        grid_node.appendChild(row);
    }   
    addActionsToElements();
}


// buttons is a node list. It looks and acts much like an array.
// const elements = document.getElementsByClassName('element');


function addActionsToElements(){
    // we use the .forEach method to iterate through each button
    elements.forEach((element) => {

        // and for each one we add a 'click' listener
        element.addEventListener('mouseover', (e) => {
            changeElementBackground(element.id);
        });
    });
}

function changeElementBackground(id){
    console.log(id);
    const element = document.getElementById(id);
    element.classList.add('blue-back');
}

//Button popup
const clear_bttn = document.getElementById('clear');
clear_bttn.addEventListener('click',(e) => {
    initCanvas();
});
function initCanvas(){
    let grid_size = prompt("Please enter number of elements");
    removeGrid();
    createGridFront(grid_size);

}
function removeGrid(){
    var items = document.getElementsByClassName('row');
    while(items.length > 0){
        items[0].parentNode.removeChild(items[0]);
    }
}
function clearGrid(){
    elements.forEach((element) => {

        // and for each one we add a 'click' listener
        element.setAttribute('class', 'element');
    });
}