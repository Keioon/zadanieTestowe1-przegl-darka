const luckyBtn = document.querySelector('.random');
const oddSide = document.querySelector('.oddNumbers');
const evenSide = document.querySelector('.evenNumbers');

luckyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  oddSide.innerHTML = '';
  evenSide.innerHTML = '';
  const array = [];
  for(let i=0; i<20; i++) {
    const random = Math.floor(Math.random() * (100 - 1)) + 1;
    array.push(random);
  }
  for(let i=0; i<=array.length; i++) {
    for(let j=0; j<array.length; j++) {
      if(array[i]<array[j]) {
        let zm = array[i];
        array[i] = array[j];
        array[j] = zm;
      }
    }
  }
  
  array.filter(elem => {
    const p = document.createElement('p');
    p.innerHTML = elem;
    if(elem % 2 == 0) {
      evenSide.appendChild(p);
    } else {
      oddSide.appendChild(p);
    }
  });
});