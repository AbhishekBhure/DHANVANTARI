let carts = document.querySelectorAll('.add-btn');

let products = [
    {
        name: 'product-1',
        tag: 'ayur',
        price: 6,
        incart: 0
    },
    {
        name: 'product-2',
        tag: 'patanjali',
        price: 7,
        incart: 0
    },
    {
        name: 'product-3',
        tag: 'Himalaya',
        price: 6,
        incart: 0
    },
    {
        name: 'product-4',
        tag: 'Khadi',
        price: 6,
        incart: 0
    },
    {
        name: 'product-5',
        tag: 'ayur',
        price: 6,
        incart: 0
    },
    {
        name: 'product-6',
        tag: 'ayur',
        price: 6,
        incart: 0
    },
    {
        name: 'product-7',
        tag: 'ayur',
        price: 6,
        incart: 0
    },
    {
        name: 'product-8',
        tag: 'ayur',
        price: 6,
        incart: 0
    }
]



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartsNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.icon-label span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.icon-label span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.icon-label span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1;
    } else {
        product.incart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("The product Price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }




}
function displaycart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productcontainer = document.querySelector(".products");
    if (cartItems && productcontainer) {
        productcontainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productcontainer.innerHTML += `
               <div class="product">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" fill="#626262"/><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="#626262"/></svg>
               <span>${item.name}</span>
               </div>
               <div class="price">${item.price}</div>
               `
        })
    }

}

onLoadCartsNumbers();
displaycart();