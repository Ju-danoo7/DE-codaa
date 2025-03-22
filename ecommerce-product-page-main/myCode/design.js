const menuBar = document.querySelector('#menu-bar');
const navBar = document.querySelector('nav');
const closeMenuBar = document.querySelector('#close-menu-bar');
const cartIcon = document.querySelector('.icon-cart');
const addToCart = document.querySelector('#add-to-cart');
const imgDiv = document.querySelector('.img');
const number = document.querySelector('.number');
const amountWanted = document.querySelector('.amount-num');
const addAmount = document.getElementById('plus-icon');
const minusAmount = document.getElementById('minus-icon');
const totalPrice = document.querySelector('.total-shoe-cost');
const deleteOrder = document.querySelector('#delete');
const counts = document.querySelector('.counts');
const thumbnails = document.querySelectorAll('.img-link');
const firstThumnails = document.querySelectorAll('.fes');
const layout = document.querySelector('.layout')
const closeLayout = document.querySelector('.close')

let requested = 0;

menuBar.addEventListener('click', () => {
    navBar.style.display = 'block';
})
closeMenuBar.addEventListener('click', () => {
    navBar.style.display = 'none';
})
cartIcon.addEventListener('click', () => {
    if(requested === 0){
        imgDiv.classList.toggle('empty')
    }else{
        imgDiv.classList.toggle('empty-added');
        imgDiv.classList.remove('empty')
    }
})
addToCart.addEventListener('click', () => {
    if(requested > 0){
        imgDiv.classList.add('empty-added')
    }
})
addAmount.addEventListener('click', () => {
    requested += 1;
   inputNecessary()
})
minusAmount.addEventListener('click', () => {
    if(requested > 0){
        requested -= 1;
    }
    inputNecessary()
})

deleteOrder.addEventListener('click', () => {
    requested = 0;
   inputNecessary()
    imgDiv.classList.remove('empty-added');
})
thumbnails.forEach((e) => {
    e.addEventListener('click', () => {
        removeClicked()
        e.classList.add('clicked');
    })
})
firstThumnails.forEach((e) => {
    e.addEventListener('click', () => {
        layout.classList.add('on')
    })
})
closeLayout.addEventListener('click', () => {
    layout.classList.remove('on')
    })


function inputNecessary(){
    number.innerText = requested;
    if (requested > 0){
        counts.style.display = 'flex';
        counts.innerText = requested;
    } else if(requested === 0){
        counts.style.display = 'none';
    }
    amountWanted.innerText = requested;
    totalPrice.innerText = multiply(125, +requested) + '.00' ;
}
function multiply(a, b){
    let c = a * b;
     return c
 }
 function removeClicked(){
    for(let i = 0; i < thumbnails.length; i++){
        thumbnails[i].classList.remove('clicked')
    }
 }