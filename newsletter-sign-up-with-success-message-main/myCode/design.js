const emailDiv = document.querySelector('.email');
const button = document.querySelector('#subscribeButton');
const input = document.querySelector('input');
const error = document.querySelector('.error');
const layout = document.querySelector('.layout');
const confirmation = document.querySelector('.confirmation');
const dismissMessage = document.getElementById('dismissMessage')


button.addEventListener('click', () => {
    if (input.value === "") {
        emailDiv.classList.add('showError')
        input.placeholder = ""
    } else{
        layout.style.display = 'flex'
    }
    
})
input.addEventListener('input', () => {
    emailDiv.classList.remove('showError')
})

dismissMessage.addEventListener('click', () => {
    layout.style.display = 'none'
    input.value = ""
})
layout.addEventListener('click', () => {
    layout.style.display = 'none'
    input.value = ""
})
confirmation.addEventListener('click', (e) => {
   e.stopPropagation()
})
