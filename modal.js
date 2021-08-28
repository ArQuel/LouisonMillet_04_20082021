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
let verifEmail = false;
let verifBirth = false;
let verifQuantity = false;
let verifCheckBoxRequired = false;

function checkTextInput(input, tailleMax, errorMessage){
  let isOk = input.value.length >= tailleMax
  if (!isOk || input.value == "") {
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}


function checkEmailInput(input, errorMessage){
  const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  let isOk = regEmail.test(input.value);
  if (!isOk || input.value == "") {
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

function checkBirthInput(input, errorMessage){
  let isOk = isNaN(input.value);
  if (!isOk || input.value == "") {
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

function checkQuantityInput(input, errorMessage){
  const regNumber = /^[0-9]+$/;
  let isOk = regNumber.test(input.value);
  console.log(input.value)
  if (!isOk || input.value == "") {
    input.parentNode.dataset.error = errorMessage;
    input.parentNode.dataset.errorVisible = true;
  } else {
    input.parentNode.dataset.errorVisible = false;
  }
  return isOk;
}

function verifyCheckBox(inputName, errorMessage){
  let inputs = Array.from(document.querySelectorAll("input[name='location']"))
  for (let index = 0; index < inputs.length ; index ++){
    const input = inputs[index];
    if(input.checked) {
    return true;
    }
  }
  inputName.dataset.error = errorMessage;
  inputName.dataset.errorVisible = true;
  return false;
}

function verifyCheckBoxRequired(inputName, errorMessage){
  let inputs = Array.from(document.querySelectorAll("input[name='checkbox']"))
  console.log(inputs);
  for (let index = 0; index < inputs.length ; index ++){
    const input = inputs[index];
    if(input.checked) {
    return true;
    }
  }
  let errorCheck = document.querySelector('.errorCheck')
  errorCheck.style.color = 'red';
  alert("Veuillez cocher la case des conditions d'utilisations")
  return false;
}

document.querySelector('#first').addEventListener("blur", (e) => {verifFirst = checkTextInput(e.target, 2, "Le prenom doit avoir 2 caractères ou plus")})

document.querySelector('#last').addEventListener("blur", (e) => {verifLast = checkTextInput(e.target, 2, "Le nom doit avoir 2 caractères ou plus")})

document.querySelector('#email').addEventListener("blur", (e) => {verifEmail = checkEmailInput(e.target, "Veuillez entrer un mail valide")})

document.querySelector('#birthdate').addEventListener("blur", (e) => {verifBirth = checkBirthInput(e.target, "Veuillez saisir votre date de naissance")})

document.querySelector('#quantity').addEventListener("blur", (e) => {verifQuantity = checkQuantityInput(e.target, "Veuillez saisir un nombre")})

document.querySelector('form').addEventListener('submit', (e) => validate(e))

function validate(event) {
  event.preventDefault();
  let isCheckBoxOk = verifyCheckBox(document.getElementById('parent-radio'), 'Veuillez cocher une ville');
  let isCheckBoxRequiredOk = verifyCheckBoxRequired(document.getElementById('checkbox1'), 'Veuillez cocher la case')
  if(verifFirst && verifLast && isCheckBoxOk && verifEmail && verifBirth && verifQuantity && isCheckBoxRequiredOk){
    alert("validé");
  } else {
    alert('Non validé');
  }
}




