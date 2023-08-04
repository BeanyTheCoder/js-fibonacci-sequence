// generating a single fibonacci number:
function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// generating the entire fibonacci sequence, to specified length:
function fibonacciSequence(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(fibonacci(i));
  }
  return arr
}

let container = document.querySelector("#container");

function display(length) {
  let i = 0
  // we use Array.from(), because container.children returns a non-iterable object
  Array.from(container.children).forEach((child) => {
    // dynamically change width of bars
    child.style.width = `${fibonacciSequence(length)[i]}px`;
    // dynamically change color of bars
    child.style.backgroundColor = `hsl(255, 100%, ${fibonacciSequence(length)[i] / 18}%)`
    i++
  });
}

display(container.children.length) 


