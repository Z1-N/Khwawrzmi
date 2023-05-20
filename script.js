function ButtonPress(btn_id){
    document.getElementById('scrn').innerHTML = document.getElementById('scrn').innerHTML + document.getElementById(btn_id).innerHTML
}

const clearButton = document.querySelector('.clear');
const screen = document.querySelector('.screen');

clearButton.addEventListener('click', () => {
  screen.textContent = '';
});

const delButton = document.querySelector('.backspace');

delButton.addEventListener('click', () => {
  screen.innerHTML = screen.innerHTML.slice(0,this.length - 1)
});

let currentOperation = null;
let storedNumber = null;

function operation(ops) {
  const num = parseInt(screen.innerHTML);

  switch (ops) {
    case "plus":
    case "minus":
    case "times":
    case "divide":
      if (storedNumber !== null) {
        performOperation();
      }
      currentOperation = ops;
      storedNumber = num;
      screen.innerHTML = "";
      break;
    case "equal":
      if (currentOperation && storedNumber !== null) {
        performOperation();
        currentOperation = null;
        storedNumber = null;
      }
      break;
  }
}

function performOperation() {
  const num = parseInt(screen.innerHTML);
  let result;

  switch (currentOperation) {
    case "plus":
      result = storedNumber + num;
      break;
    case "minus":
      result = storedNumber - num;
      break;
    case "times":
      result = storedNumber * num;
      break;
    case "divide":
      result = storedNumber / num;
      break;
  }

  screen.innerHTML = result;
}
