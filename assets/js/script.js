const grid_width_elements = 32;
const grid_height_elements = 32;
const element_size = 16; //Size in pixels

const grid_node = document.querySelector('#grid');
const elements = [];
//Crear divs con diferentes id.
createGridFront();

function createGridFront(){
    let aux_id = 0;
    for(let i=0; i<grid_width_elements; ++i){
        const row = document.createElement('div');
        row.setAttribute('class','row');
        row.setAttribute('id','row_'+i);
        for(j=0; j<grid_height_elements; ++j){
            ++aux_id;
            const element = document.createElement('div');
            element.setAttribute('id',aux_id);
            element.setAttribute('class','element');
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