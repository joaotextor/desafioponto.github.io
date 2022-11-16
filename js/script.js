//~ CACHE ELEMENTS
btnLoadMore = document.getElementById('btn-load-more')
itemList = document.querySelector('.shop-items')

//~ COMMON VARIABLES

let products = 'oiaa'
let nextPage = ''

//~ FUNCTIONS

function toJson(response) {
    return response.json()
}

function showError() {
    console.log('Página não encontrada!')
}

async function populateItems(url) {
    const shopItems = await fetch(url)
    .then(toJson)
    .catch(showError)

    products = shopItems.products
    nextPage = shopItems.nextPage


    btnLoadMore.onclick = () => populateItems(`http://${nextPage}`)
    products.forEach((product) => {
        let halfPrice = 0
        
        //* replace '.' for ',' and add zero(es) after the number
        product.price % 2 == 0 
        ? halfPrice = (product.price / 2).toString()+',00' 
        : halfPrice = (product.price / 2).toString().replace(".", ",")+'0'

        itemList.innerHTML += `
        <article class="shop-item flex-column">
            <img src="${product.image}" alt="Item">
            <div class="flex-column">
                <h4 class="fw-normal fs-14">${product.name}</h4>
                <p class="item-description">${product.description}</p>
                <p>De: ${product.oldPrice},00</p>
                <p class="fw-bold fs-16">Por: ${product.price},00</p>
                <p>ou 2x de ${halfPrice}</p>
                <button class="body-button fs-16">Comprar</button>
            </div>
        </article>
        `
    })
}

//~ FUNCTION ATTRIBUTION

window.onload = () => populateItems('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

//! TODO:  Field validations
