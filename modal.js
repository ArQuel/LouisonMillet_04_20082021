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
const closeModal = document.getElementsByClassName("close")[0];
const labelPrenom = document.getElementById("prenom");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};


// Close modal
closeModal.addEventListener('click', function(){
  bground.style.display = 'none';
});


// Validation des formulaires
const form_inscription = document.getElementById("inscription");
const champ_prenom = document.getElementById("first");
const champ_nom = document.getElementById("last");
const champ_email = document.getElementById("email");
const champ_birthdate = document.getElementById("birthdate");

let form_ok = true;

if(champ_prenom.value.length > 2){
  form_ok = true;
} else {
  alert("Veuillez saisir au minimum deux lettres");
  form_ok = false;
}

function validate (event) {
  if(!form_OK){
    event.preventDefault();
  } else {
    // Code de validation de formulaire
  }
}

// form_inscription.addEventListener('submit', validate());


  // Prénom
  // prenom.addEventListener('input', function(){
  //   if (prenom.value < 2){
  //     labelPrenom.innerHTML = "Prénom <p style='color: red; padding: 0'><b>Veuillez saisir au minimum deux lettres</b></p>";
  //   } else { 
  //     console.log("it's ok bb")
  //   };
  // })

