const email = document.querySelector("#email");
const button = document.querySelector("#button");
const error = document.querySelector("#errorMessage");
const emailAddress = []

button.addEventListener("click", () => {
    
    if(email.value === ""){
        error.style.display = "block";
        error.style.visibility = "visible";
        email.style.border = "2px solid #ff5263"
        email.placeholder = "example@email/com";
        button.style.alignSelf = "flex-start"

    } else{
        console.log(email.value);
        emailAddress.push(email.value)
        error.style.display = "none";
        error.style.visibility = "hidden";
        email.style.border = "1px solid #c2d3ff"
        email.placeholder = "Your email address";
        email.value = ""
    }
    
})