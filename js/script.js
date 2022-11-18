//Commentaries are better read with Better Comments exetension (VS Code)
//~ CACHE ELEMENTS
import { products, nextPage, btnLoadMore, itemList, replaceDotForComma, assignVariables, showError } from "./exports.js"

//* FORM ELEMENTS FOR VALIDATION

const signupForm = document.getElementById('signup')
const shareForm = document.getElementById('share')
const inputName = document.getElementById('yourname')
const inputCpf = document.getElementById('cpf')
const inputEmail = document.getElementById('email')
const genreWrapper = document.querySelector('.genre-wrapper')
const rdGenre = document.querySelectorAll('input[name="genre"]')
const inputFriendName = document.getElementById('friend-name')
const inputFriendEmail = document.getElementById('friend-email')

//~ SIGNUP FORM VALIDATION


signupForm.onsubmit = (event) => {
    event.preventDefault()
    let err = false
    
    if (!inputName.value) {
        err = true
        inputName.classList.add('showError')  
    } else {
        inputName.classList.remove('showError') 
    }

    if (!inputEmail.value) {
        err = true
        inputEmail.classList.add('showError')  
    } else {
        inputEmail.classList.remove('showError') 
    }
    
    if (!inputCpf.value) {
        err = true
        inputCpf.classList.add('showError')  
    } else {
        inputCpf.classList.remove('showError') 
    }
    
    if (!rdGenre[0].checked && !rdGenre[1].checked) {
        err = true
        genreWrapper.classList.add('showError')  
    } else {
        genreWrapper.classList.remove('showError')  
    }

    !err 
    ? signupForm.submit() 
    : alert('Por favor, preencha corretamente os campos em vermelho!')  
}

//~ SHARE FORM VALIDATION
shareForm.onsubmit = (event) => {
    event.preventDefault()
    let err = false

    if (!inputFriendName.value) {
        err = true
        inputFriendName.classList.add('showError')  
    } else {
        inputFriendName.classList.remove('showError') 
    }

    if (!inputFriendEmail.value) {
        err = true
        inputFriendEmail.classList.add('showError')  
    } else {
        inputFriendEmail.classList.remove('showError') 
    }

    !err 
    ? signupForm.submit() 
    : alert('Por favor, preencha corretamente os campos em vermelho!') 
}


//~ FUNCTION

const assembleHtml = () => {
    btnLoadMore.onclick = () => populateItems(`https://${nextPage}`)
    products.forEach((product) => {
        itemList.innerHTML += `
        <article class="shop-item flex-column">
            <img src="${product.image}" alt="Item">
            <div class="flex-column">
                <h4 class="fw-normal fs-14">${product.name}</h4>
                <p class="item-description">${product.description}</p>
                <p>De: ${product.oldPrice},00</p>
                <p class="fw-bold fs-16">Por: ${product.price},00</p>
                <p>ou 2x de ${replaceDotForComma(product.price)}</p>
                <button class="body-button fs-16">Comprar</button>
            </div>
        </article>
        `
    })
}

const populateItems = async (url) => {
    await fetch(url)
    .then((res) => res.json())
    .then(assignVariables)
    .then(assembleHtml)
    .catch(showError)
}


//~ FUNCTION ATTRIBUTION

window.onload = () => populateItems('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')