function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const bground = document.getElementsByClassName('bground')[0];
const close_modal = document.getElementsByClassName("close")[0];



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

};


// Close modal
close_modal.addEventListener('click', function(){
  bground.style.display = 'none';
});


// Validation des formulaires
let verifFirst = false;
let verifLast = false;

function checkTextInput(input, tailleMax, errorMessage){
  let isOk = input.value.length >= tailleMax
  if (!isOk) {
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

let regEmail = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/g;

function checkEmailInput(input, regEmail, errorMessage){
  let isOk = input.value != regEmail
  if (!isOk) {
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}


document.querySelector('#first').addEventListener("blur", (e) => {verifFirst = checkTextInput(e.target, 2, "Le prenom doit avoir 2 caractères ou plus")})

document.querySelector('#last').addEventListener("blur", (e) => {verifLast = checkTextInput(e.target, 2, "Le nom doit avoir 2 caractères ou plus")})

document.querySelector('#email').addEventListener("blur", (e) => {verifEmail = checkEmailInput(e.target, regEmail, "Veuillez entrer un mail valide")})


document.querySelector('form').addEventListener('submit', (e) => validate(e))


function validate(event) {
  event.preventDefault();
  let isCheckBoxOk = verifyCheckBox('location', 'Veuillez cocher une ville');
  if(verifFirst && verifLast && isCheckBoxOk){
    alert("validé");
  }
}

function verifyCheckBox(inputName, errorMessage){
  let inputs = Array.from(document.querySelectorAll("input[name='location']"))
  console.log(inputs);
  for (let index = 0; index < inputs.length ; index ++){
    const input = inputs[index];
    console.log(input.value);
    if(input.checked) {
     console.log(input.value, "checked")
    return true;
    }
  }
  inputName.parentNode.dataset.error = errorMessage;
  inputName.parentNode.dataset.errorVisible = true;
  return false;
}


