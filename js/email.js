//~ CACHE ELEMENTS
btnLoadMore = document.getElementById('btn-load-more')
itemList = document.querySelector('.shop-items')

//~ COMMON VARIABLES

let products = ''
let nextPage = ''

//~ FUNCTIONS

const toJson = (response) => {
    return response.json()
}

const assignVariables = (shopItems) => {
    products = shopItems.products
    nextPage = shopItems.nextPage
}

const assembleHtml = () => {
    for (i=0; i < 2; i++) {
        let halfPrice = 0
        
        //* replace '.' for ',' and add zero(es) after the number
        products[i].price % 2 == 0 
        ? halfPrice = (products[i].price / 2).toString()+',00' 
        : halfPrice = (products[i].price / 2).toString().replace(".", ",")+'0'
    
        itemList.innerHTML += `
        <article class="shop-item flex-column">
            <img src="${products[i].image}" alt="Item">
            <div class="flex-column">
                <h4 class="fw-normal fs-14">${products[i].name}</h4>
                <p class="item-description">${products[i].description}</p>
                <p>De: ${products[i].oldPrice},00</p>
                <p class="fw-bold fs-16">Por: ${products[i].price},00</p>
                <p>ou 2x de ${halfPrice}</p>
                <button class="body-button fs-16">Comprar</button>
            </div>
        </article>
        `
    }
}

const showError = () => {
    console.log('Página não encontrada!')
}

const populateItems = async (url) => {
    await fetch(url)
    .then(toJson)
    .then(assignVariables)
    .then(assembleHtml)
    .catch(showError)
}

//~ FUNCTION ATTRIBUTION

window.onload = () => populateItems('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

//! TODO:  Field validations
