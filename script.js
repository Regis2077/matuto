const input = document.querySelector(".Input-text")
const button = document.querySelector(".button")
const correctAnswer = document.querySelector(".respota-oculta")


button.addEventListener("click", inputValidation)

function inputValidation(){
  const inputValue = input.value
  const inputTransform = inputValue.toLowerCase()
  const Answer = 'buena vista social club'
  if(inputTransform == Answer){
    correctAnswer.classList.remove('respota-oculta')  
  }else{
    alert('resposta incorreta. Tente novamente!')
  }
}