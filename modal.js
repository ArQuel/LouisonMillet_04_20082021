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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  const modalBody = document.getElementsByClassName("content")[0];
  modalbg.style.display = "block";
  modalBody.style.display = "block";
};


// Close modal
const closeModal = document.getElementsByClassName("close")[0];
closeModal.addEventListener('click', function(){
  const modalBody = document.getElementsByClassName("content")[0];
  const bground = document.getElementsByClassName('bground')[0];
  modalBody.style.display = "none";
  bground.style.display = 'none';
});


