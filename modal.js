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
const form_inscription = document.getElementById("inscription");
const champ_prenom = document.getElementById("first");
const champ_nom = document.getElementById("last");
const champ_email = document.getElementById("email");
const submit_btn = document.getElementById("submit_form");
const label_prenom = document.getElementById("prenom");
const label_nom = document.getElementById('nom');
const verif_mail = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])";
const verif_champ_mail = document.getElementById('email');
const label_email = document.getElementById('email');
const label_concours = document.getElementById('concours');
const champ_concours = document.getElementById('quantity');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const label_villes = document.getElementById('villes');
const label_conditions = document.getElementById('conditions');
const checkbox_conditions = document.getElementById('checkbox1');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  label_prenom.innerHTML = "Prénom";
  label_nom.innerHTML = "Nom";
  label_email.innerHTML = "E-mail";
  label_concours.innerHTML = "À combien de tournois GameOn avez-vous déjà participé ?";
  label_villes.innerHTML = "Quelles villes ?";
  label_conditions.innerHTML = "<input class='checkbox-input' type='checkbox' id='checkbox1'  checked /> <label class='checkbox2-label' style='margin-left: 0px' for='checkbox1' id='conditions' required> <span class='checkbox-icon'></span> J'ai lu et accepté les conditions d'utilisation. </label>";

};


// Close modal
close_modal.addEventListener('click', function(){
  bground.style.display = 'none';
});


// Validation des formulaires
let form_ok = true;


function validate(){
  event.preventDefault();
  if(champ_prenom.value.length > 2 && champ_prenom.value != ""){
    form_ok = true;
  } else {
    label_prenom.innerHTML = "Prénom <p style='color: red; padding: 0'><b>Veuillez saisir au minimum deux lettres</b></p>";
    form_ok = false;
  }
  if(champ_nom.value.length > 2 && champ_nom.value != ""){
    form_ok = true;
  } else {
    label_nom.innerHTML = "Nom <p style='color: red; padding: 0'><b>Veuillez saisir au minimum deux lettres</b></p>";
    form_ok = false;
  }
  if(verif_mail.test(verif_champ_mail.value) && champ_email.value != ""){
    form_ok = true;
  } else {
    label_email.innerHTML = "E-mail <p style='color: red; padding: 0'><b>Veuillez saisir une adresse mail valide</b></p>";
    form_ok = false;
  }
  if(isNaN(champ_concours.value) || champ_concours.value == ""){
    form_ok = false;
    label_concours.innerHTML = "À combien de tournois GameOn avez-vous déjà participé ? <p style='color: red; padding: 0'><b>Veuillez saisir un nombre</b></p>";
  } else {
    form_ok = true;
  }
  if(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){
    form_ok = true;
  } else {
    form_ok = false;
    label_villes.innerHTML = "Quelles villes ? <p style='color: red; padding: 0'><b>Veuillez choisir une ville</b></p>";
  }
  if(checkbox_conditions.checked){
    form_ok = true;
  } else {
    form_ok = false;
    label_conditions.innerHTML = "<input class='checkbox-input' type='checkbox' id='checkbox1'  checked /> <label class='checkbox2-label' style='margin-left: 0px' for='checkbox1' id='conditions' required> <span class='checkbox-icon'></span> J'ai lu et accepté les conditions d'utilisation. </label> <p style='color: red; padding: 0'><b>Veuillez cocher la case ci-dessus</b></p>";
  }
  if(form_ok == true){
    alert('tout est bon')
  } else {
    alert('Vérifiez les champs')
  }
}

submit_btn.addEventListener('click', validate());

  


