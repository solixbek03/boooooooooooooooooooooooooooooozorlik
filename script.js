
const elInput = document.querySelector('.input')
const elButton = document.querySelector('.button')
const elResult = document.querySelector('.result')

let bozorlikRoyhati = [];
// localStorage.clear()


elButton.addEventListener('click', function(evt){
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


