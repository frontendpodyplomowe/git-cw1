const showButton = document.querySelector("#showDialogBtn");
const favDialog = document.querySelector("#favDialog");
const outputBox = document.querySelector("#output");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const exitBtn = document.querySelector('#exitBtn');
let ifConfirm = false;

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", () => {
  console.log("Potwierdzono regulamin");
  ifConfirm = true;
  checkAnswer();
  favDialog.close();
});

cancelBtn.addEventListener("click", () => {
  console.log("Nie potwierdzono regulaminu");
  ifConfirm = false;
  checkAnswer();
});

exitBtn.addEventListener('click', () =>{
    favDialog.close();
})

function checkAnswer() {
  if (ifConfirm === true) {
    confirmBtn.setAttribute("disabled", "");
  } else if (ifConfirm === false) {
    confirmBtn.removeAttribute("disabled", "");
  }
}
