
const toppings = ['banana', 'corn', 'bacon', 'pepperoni'];
const selected = [];

function createToppings(toppingsArr){
  document.body.append(...toppingsArr.map(topping => {
    let button = document.createElement('button');
    button.className = 'bt';
    button.innerHTML = topping;
    button.value = topping;
    return button;
  }));
};

function selectToppings({target}){
  let selectedTopping = target;
  if (!selected.includes(selectedTopping)){
    selectedTopping.style.backgroundColor = 'green';
    selected.push(selectedTopping)
  } else {
    for (let i of selected) {
      if (selectedTopping === i) {
        selected.splice(i, 1);
      }
    }
    selectedTopping.style.backgroundColor = 'red';
  }
}

createToppings(toppings)

// document.getElementsByClassName('bt').forEach(bt=> bt.onclick = selectToppings);
const buttonsArray = document.getElementsByClassName('bt');
for (let bt of buttonsArray) {
  bt.addEventListener('click', selectToppings)
}