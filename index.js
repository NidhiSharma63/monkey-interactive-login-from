const password = document.getElementById('password');
const monkeyHand = document.querySelector('.monkey-hand');

const showMonkeyHand = () =>{
  monkeyHand.style.transform='translateY(35%)'
}

document.addEventListener('click',(e)=>{
  if(e.target.type!=='password'){
    monkeyHand.style.transform='translateY(120%)'
  }
})
