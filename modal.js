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
  let date = Date.parse(input.value)
  let isOk = !isNaN(date);
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
    let errorCheck = document.querySelector('.errorCheck')
    errorCheck.style.color = 'inherit';
    return true;
    }
  }
  let errorCheck = document.querySelector('.errorCheck')
  errorCheck.style.color = 'red';
  alert("Veuillez cocher la case des conditions d'utilisations")
  return false;
}

function reinitInputs(){
  document.querySelector("input[name='first']").value = "";
  document.querySelector("input[name='last']").value = "";
  document.querySelector("input[name='email']").value = "";
  document.querySelector("input[name='birthdate']").value = "";
  document.querySelector("input[name='quantity']").value = "";
  document.querySelector("input[name='location']").checked = false;
  let errorCheck = document.querySelector('.errorCheck')
  errorCheck.style.color = 'inherit';
  let inputs = Array.from(document.querySelectorAll(".formData"));
  inputs.forEach(input => {
  input.dataset.errorVisible = false; 
  })
}

function validateMessage(){
  let formulaire = document.querySelector('#validation');
  formulaire.style.display = 'none';
  let valide = document.createElement('p');
  let contentbg = document.querySelector('.modal-body')
  contentbg.appendChild(valide)
  valide.textContent = "Votre inscription a été prise en compte"
  valide.style.fontSize = '25px';
  valide.style.color = 'white';
  valide.style.fontWeight = "bold";
  valide.style.display = 'block'
  valide.style.textAlign = 'center'
  valide.style.padding = "20px"
  let button_back = document.createElement('div')
  button_back.className = 'button btn-submit';
  button_back.textContent = "Retour";
  button_back.style.width = "50%";
  contentbg.appendChild(button_back);
  button_back.addEventListener("click", function(){
    bground.style.display = 'none';
  })
}

bground.addEventListener('click', function(){
  bground.style.display = 'none';
})

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
    reinitInputs();
    validateMessage();
  } else {
    alert('Veuillez remplir les champs correctement');
  }
}




