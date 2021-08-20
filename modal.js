function editNav() {
  var x = document.getElementById("myTopnav");
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
const modalBody = document.getElementsByClassName("content")[0];
const bground = document.getElementsByClassName('bground')[0];
const closeModal = document.getElementsByClassName("close")[0];


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display = "block";
};


// Close modal
closeModal.addEventListener('click', function(){
  modalBody.style.display = "none";
  bground.style.display = 'none';
});


