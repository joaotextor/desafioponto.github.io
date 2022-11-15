//~ CACHE ELEMENTS


//~ FUNCTIONS

function toJson(response) {
    return response.json()
}

function showError() {
    console.log('Página não encontrada!')
}

const fetchItems = async (url) => {
    const shopItems = await fetch(url)
    .then(toJson)
    .catch(showError)

    console.log(shopItems)
}



//~ FUNCTION ATTRIBUTION


window.onload = () => fetchItems('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')