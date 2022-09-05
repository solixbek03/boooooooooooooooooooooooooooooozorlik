
const elInput = document.querySelector('.input')
const elButton = document.querySelector('.container')
const elResult = document.querySelector('.result')

let bozorlikRoyhati = [];
// localStorage.clear()


elButton.addEventListener('change', function(evt){
  let elinputVall = elInput.value;
  elInput.value = '';
  bozorlikRoyhati.push(elinputVall);
  localStorage.setItem('bozorlik', bozorlikRoyhati);

  let boom = localStorage.getItem('bozorlik');

  elResult.innerHTML = '';
  let li = document.createElement("li")
  li.textContent = boom
  li.classList.add('text-light')
  elResult.appendChild(li)
})

let boom = localStorage.getItem('bozorlik');
bozorlikRoyhati.push(boom)

elResult.innerHTML = '';
let li = document.createElement("li")
li.textContent = boom
li.classList.add('text-light')
elResult.appendChild(li)

