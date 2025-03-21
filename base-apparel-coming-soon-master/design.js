const button = document.querySelector("#pink");
const input = document.querySelector("#email");
const errorMessage = "janeappleseed#email.com";
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const showErrorDiv = document.querySelector('.body')

button.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue === "") {
    showErrorDiv.classList.add('addError');
    input.placeholder = "";
    // error.innerText = "Please provide a valid email"
  }
  if(!inputValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
   error.style.display = 'block'
    // error.innerText = "Email Invalid"

  } else{
    success.style.display = "block"
    inputValue = ""
  }
  // console.log("clicked")
})
input.addEventListener('focus', () => {
  showErrorDiv.classList.remove('addError');
  error.style.display = 'none'
  success.style.display = "none"
})
// input.addEventListener('input', () => {
//   showErrorDiv.classList.remove('addError');
// })