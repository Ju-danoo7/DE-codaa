const allInputs = document.querySelectorAll('input')
const inputFields = document.querySelectorAll("input");
const named = document.querySelector("#FirstName");
const Surname = document.querySelector("#LastName")
const email = document.querySelector("#email");
const radioError = document.querySelector(".radio");
const messaged = document.querySelector("#message")
const consent = document.querySelector("#consent")
const radio2 = document.querySelector(".radio2");
const popupMessage = document.querySelector(".popup")
const overlay = document.querySelector('.overlay');
const button = document.querySelector("button");
const forrm = document.querySelector('form');
const radioOptions = document.querySelector('.query');
const errors = document.querySelectorAll('.error')
const queryBox = document.querySelectorAll('.span')
let memoir;
let memory;

forrm.addEventListener('submit', (e) => {


    e.preventDefault()

    validateInput()
    memory = memoir.every((e) => {
        if (e) {
            return true
        }
    })

    if (memory) {
        console.log('form filled')
        overlay.classList.add('active');
        popupMessage.style.display = "block";
    }

    allInputs.forEach((e) => {
        e.addEventListener('input', () => {
            const inputParent = e.parentElement;
            const errorTalk = inputParent.querySelector('.error');
            errorTalk.classList.remove('showError')
        })
    })

})

function validateInput() {
    const names = named.value.trim()
    const lastName = Surname.value.trim()
    const emailed = email.value.trim()
    const message = messaged.value.trim()
    memoir = []

    if (names === "") {
        showError(named, "This field is required")
    } else {
        showSuccess(named)
    }
    if (lastName === "") {
        showError(Surname, "This field is required")
    } else {
        showSuccess(Surname)
    }
    if (radioError.checked === false && radio2.checked === false) {
        showError(radioOptions, "Please select a query type")
    } else {
        showSuccess(radioOptions)
    }
    if (emailed === "") {
        showError(email, "Please enter a valid email address")
    } else {
        showSuccess(email)
    }
    if (message === "") {
        showError(messaged, "This field is required")
    } else {
        showSuccess(messaged)
    }
    if (consent.checked === false) {
        showError(consent, "To submit this form please consent to being contacted")
    } else {
        showSuccess(consent)
    }

    //    for(error of errors){
    //     if (showSuccess()){
    //         overlay.classList.add('active');
    //     popupMessage.style.display = "block"
    //     }
    //    }

}

queryBox.forEach((e) =>{
    
    e.addEventListener('click', () => {
        const boxCheck = e.querySelector('.one')
        boxCheck.checked = true
    })
})






function showError(element, errorMessage) {
    const inputParent = element.parentElement;
    const errorTalk = inputParent.querySelector('.error')

    errorTalk.classList.add('showError')
    errorTalk.innerText = errorMessage;
    memoir.push(false)
}
function showSuccess(element) {
    const inputParent = element.parentElement;
    const errorTalk = inputParent.querySelector('.error');
    errorTalk.classList.remove('showError');
    memoir.push(true)
}



overlay.addEventListener("click", () => {
    overlay.classList.remove('active');
    popupMessage.style.display = "none"
    // for(let input of allInputs){

    // }
   named.value = ""
   email.value = ""
   Surname.value = ""
   messaged.value = ""
    radioError.checked = false
    radio2.checked = false
    consent.checked = false
})


