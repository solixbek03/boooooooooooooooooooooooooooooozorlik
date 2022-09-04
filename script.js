
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
  

  for (i=0; i<bozorlikRoyhati.length; i++) {
    elResult.innerHTML = '';
    let li = document.createElement("li")
    li.textContent = localStorage.getItem('bozorlik');
    li.classList.add('text-light')
    elResult.appendChild(li)
  }
})


