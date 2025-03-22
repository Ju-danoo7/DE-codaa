const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const form = document.querySelector('form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach((input) => {
        checkInput(input)
        input.addEventListener('input', () => {
            removeError(input)
        })
        
    })
    checkInput(message)
    
    
})


function checkInput(inputed){
    const parentelement = inputed.parentElement.parentElement;
    const errorPar = parentelement.querySelector('.error')
    if(inputed.value === ''){
        errorPar.innerText = 'This field is required';
        parentelement.classList.add('errored');
        console.log('not empty');
        return false
    }else if(inputed.value !== ""){
        console.log('empty');
        return true
    }

}
function removeError(inputed){
    const parentelement = inputed.parentElement.parentElement;
        parentelement.classList.remove('errored');
}

