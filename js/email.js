//Commentaries are better read with Better Comments exetension (VS Code)
import { products, nextPage, btnLoadMore, itemList, replaceDotForComma, assignVariables, showError } from "./exports.js"

const assembleHtml = () => {

    for (let i=0; i < 2; i++) {  
        itemList.innerHTML += `
        <article class="shop-item flex-column">
            <img src="${products[i].image}" alt="Item">
            <div class="flex-column">
                <h4 class="fw-normal fs-14">${products[i].name}</h4>
                <p class="item-description">${products[i].description}</p>
                <p>De: ${products[i].oldPrice},00</p>
                <p class="fw-bold fs-16">Por: ${products[i].price},00</p>
                <p>ou 2x de ${replaceDotForComma(products[i].price)}</p>
                <button class="body-button fs-16">Comprar</button>
            </div>
        </article>
        `
    }
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
