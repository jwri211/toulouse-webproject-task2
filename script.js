//Toulouse Programmer Trials: Task 2
//Author:John Wright, 10/02/2023
//JS to make shapes draggable around the screen and save them in local storage if the browser is closed.

// apply dragabilities to each shape element
dragShape(document.getElementById("square"), "square");
dragShape(document.getElementById("circle"), "circle");
dragShape(document.getElementById("rectangle"), "rectangle");
dragShape(document.getElementById("triangle"), "triangle");

//function for dragging shape around screen
function dragShape(shape, type) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 
    //checks for saved position: if there is a saved value, apply it.
    if (localStorage.getItem(type + "posy") !=null){
        shape.style.top = localStorage.getItem(type + "posy");
        shape.style.left = localStorage.getItem(type + "posx");
    }
    
    //picks up the shape when clicked
    shape.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the shape's new position:
    shape.style.top = (shape.offsetTop - pos2) + "px";
    shape.style.left = (shape.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    //save the position to local storage
    localStorage.setItem(type + "posx", shape.style.left)
    localStorage.setItem(type + "posy", shape.style.top)
  }
}
