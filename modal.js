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
const prenom = document.getElementById("first");


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
  // Prénom

  prenom.addEventListener('input', function(){
    if (prenom.value < 2){
      labelPrenom.innerHTML = "Prénom <p style='color: red'><b>Veuillez saisir au minimum deux lettres</b></p>";
    } else { 
      console.log("it's ok bb")
    };

  })

