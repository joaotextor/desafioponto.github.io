//~ COMMON VARIABLES

let products = ''
let nextPage = ''

const btnLoadMore = document.getElementById('btn-load-more')
const itemList = document.querySelector('.shop-items')

//~FUNCTIONS 

const replaceDotForComma = (number) => {
    if (number % 2 == 0) {
        return (number / 2).toString()+`,00`
    } else {
        return (number / 2).toString().replace(".", ",")+`0`
    }
}

const assignVariables = (shopItems) => {
    products = shopItems.products
    nextPage = shopItems.nextPage
}

const showError = () => {
    console.log('Página não encontrada!')
}

export { products, nextPage, btnLoadMore, itemList, replaceDotForComma, assignVariables, showError }