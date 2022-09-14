const monkeyFace = document.querySelector('.monkey-face');
const monkeyHand = document.querySelector('.monkey-hand');
const input = document.getElementById('input');

let degree = 13
let inputPrevLenght = [];

const showMonkeyHand = () =>{
  monkeyHand.style.transform='translateY(35%)'
}

document.addEventListener('click',(e)=>{
  if(e.target.type!=='password'){
    monkeyHand.style.transform='translateY(120%)'
  }
  if(e.target.type!=='email'){
   monkeyFace.style.transform = `perspective(800px) rotateZ(0deg)`
  }
});


input.addEventListener('input',(e)=>{
  let currentInputLength = String(e.target.value).length;
  let decrementInInputValue = inputPrevLenght.includes(currentInputLength);
  if(!decrementInInputValue && degree>= -10){
    degree-=1
    inputPrevLenght.push(currentInputLength)
  }
  if(decrementInInputValue && degree<13){
    degree+=1
  }
  monkeyFace.style.transform = `perspective(800px) rotateZ(${degree}deg)`
})
