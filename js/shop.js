//Products - Decks
const krispyKleen = {
    name: 'Krispy Kleen Deck',
    productImg: 'img/products/krispy-kleen-deck.jpg',
    productImgDesc: 'Krispy Kleen deck',
    alternateImg: 'img/products/krispy-kleen-deck-alt.jpg',
    productPrice: 60,
    productQuantity: 24,
    location: '/shop/krispy-kleen-deck.html'
}

const goodEnough = {
    name: 'Good Enough Deck',
    productImg: 'img/products/good-enough-deck.jpg',
    productImgDesc: 'Good Enough deck',
    alternateImg: 'img/products/good-enough-deck-alt.jpg',
    productPrice: 60,
    productQuantity: 18,
    location: '/shop/good-enough-deck.html'
}

const classicWhiteDeck = {
    name: 'Classic Logo White Deck',
    productImg: 'img/products/basic-white-deck.jpg',
    productImgDesc: 'Classic Logo White Deck',
    alternateImg: 'img/products/basic-white-deck-alt.jpg',
    productPrice: 50,
    productQuantity: 13,
    location: '/shop/logo-deck-white.html'
}

const classicBlackDeck = {
    name: 'Classic Logo Black Deck',
    productImg: 'img/products/basic-black-deck.jpg',
    productImgDesc: 'Classic Logo black Deck',
    alternateImg: 'img/products/basic-black-deck-alt.jpg',
    productPrice: 50,
    productQuantity: 7,
    location: '/shop/logo-deck-black.html'
}

const decks = [krispyKleen, goodEnough, classicWhiteDeck, classicBlackDeck];

shopSelections(decks, '.decks')

//Products - Tees
const classicTee = {
    name: 'Classic Logo Tee',
    productImg: 'img/products/basic-black-tee.jpg',
    productImgDesc: 'Classic Logo Solace Skate Cotee',
    alternateImg: 'img/products/basic-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 32,
    location: '/shop/classic-logo-tee.html'
}

const blackOnBlackTee = {
    name: 'Black on Black Tee',
    productImg: 'img/products/black-on-black-tee.jpg',
    productImgDesc: 'Black on Black Solace Skate Co Tee',
    alternateImg: 'img/products/black-on-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 4,
    location: '/shop/black-on-black-tee.html'
}

const camoTee = {
    name: 'Camo Tee',
    productImg: 'img/products/camo-black-tee.jpg',
    productImgDesc: 'Camo Solace Skate Co Tee',
    alternateImg: 'img/products/camo-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 12,
    location: '/shop/camo-tee.html'
}

const floralTee = {
    name: 'Floral Tee',
    productImg: 'img/products/floral-black-tee.jpg',
    productImgDesc: 'Floral Solace Skate Co Tee',
    alternateImg: 'img/products/floral-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 9,
    location: '/shop/floral-tee.html'
}

const galaxyTee = {
    name: 'Galaxy Tee',
    productImg: 'img/products/galaxy-black-tee.jpg',
    productImgDesc: 'Galaxy Solace Skate Co Tee',
    alternateImg: 'img/products/galaxy-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 11,
    location: '/shop/galaxy-tee.html'
}

const plaidTee = {
    name: 'Plaid Tee',
    productImg: 'img/products/plaid-black-tee.jpg',
    productImgDesc: 'Plaid Solace Skate Co Tee',
    alternateImg: 'img/products/plaid-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 14,
    location: '/shop/plaid-tee.html'
}

const shreddedTee = {
    name: 'Shredded Tee',
    productImg: 'img/products/shredded-black-tee.jpg',
    productImgDesc: 'Shredded Solace Skate Co Tee',
    alternateImg: 'img/products/shredded-black-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 7,
    location: '/shop/shredded-tee.html'
}

const stayGoldTee = {
    name: 'Stay Gold Tee',
    productImg: 'img/products/stay-gold-tee.jpg',
    productImgDesc: 'Stay Gold Solace Skate Co Tee',
    alternateImg: 'img/products/stay-gold-tee-alt.jpg',
    productPrice: 25,
    productQuantity: 3,
    location: '/shop/stay-gold-tee.html'
}

const shirts = [classicTee, blackOnBlackTee, camoTee, floralTee, galaxyTee, plaidTee, shreddedTee, stayGoldTee]

shopSelections(shirts, '.shirts')

//Products - Hoodies
const classicLogoHoodie = {
    name: 'Classic Logo Hoodie',
    productImg: 'img/products/basic-black-hoodie.jpg',
    productImgDesc: 'Classic Solace Skate Co Hoodie',
    alternateImg: 'img/products/basic-black-hoodie-alt.jpg',
    productPrice: 50,
    productQuantity: 12,
    location: '/shop/classic-logo-hoodie.html'
}

const camoHoodie = {
    name: 'Camo Hoodie',
    productImg: 'img/products/camo-black-hoodie.jpg',
    productImgDesc: 'Camo Solace Skate Co Hoodie',
    alternateImg: 'img/products/camo-black-hoodie-alt.jpg',
    productPrice: 50,
    productQuantity: 8,
    location: '/shop/camo-hoodie.html'
}

const floralHoodie = {
    name: 'Floral Hoodie',
    productImg: 'img/products/floral-black-hoodie.jpg',
    productImgDesc: 'Floral Solace Skate Co Hoodie',
    alternateImg: 'img/products/floral-black-hoodie-alt.jpg',
    productPrice: 50,
    productQuantity: 16,
    location: '/shop/floral-hoodie.html'
}

const galaxyHoodie = {
    name: 'Galaxy Hoodie',
    productImg: 'img/products/galaxy-black-hoodie.jpg',
    productImgDesc: 'Galaxy Solace Skate Co Hoodie',
    alternateImg: 'img/products/galaxy-black-hoodie-alt.jpg',
    productPrice: 50,
    productQuantity: 4,
    location: '/shop/galaxy-hoodie.html'
}

const hoodies = [classicLogoHoodie, camoHoodie, floralHoodie, galaxyHoodie]
shopSelections(hoodies, '.hoodies')


function shopSelections(shopArray, section) {
    for(let i = 0; i < shopArray.length; i++){
        const shopSection = document.querySelector(section)

        const newProduct = document.createElement('div');
        newProduct.classList.add('product');
        shopSection.appendChild(newProduct);

        const productImg = document.createElement('img');
        productImg.src = shopArray[i].productImg;
        productImg.alt = shopArray[i].productImgDesc;
        newProduct.appendChild(productImg);

        newProductName = document.createElement('p');
        newProductName.textContent = shopArray[i].name;
        newProduct.appendChild(newProductName)

        newProductPrice = document.createElement('p');
        newProductPrice.textContent = '$' + shopArray[i].productPrice;
        newProduct.appendChild(newProductPrice)

        productImg.addEventListener('mouseenter', () => {
            productImg.src = shopArray[i].alternateImg;
        })

        productImg.addEventListener('mouseout', () => {
            productImg.src = shopArray[i].productImg;
        })

        newProduct.addEventListener('click', () => {
            location.href = shopArray[i].location;
        })
    }
}