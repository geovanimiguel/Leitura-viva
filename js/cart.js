const cartContainer = document.getElementById("cart-items")
const totalElement = document.getElementById("total")

let cart = JSON.parse(localStorage.getItem("cart")) || []

function renderCart() {
    cartContainer.innerHTML = ""

    let total = 0

    cart.forEach((item, index) => {
        total += item.price * item.quantity

        const product = document.createElement("div")
        product.classList.add("produto-item")

        product.innerHTML = `
            <h3>${item.name}</h3>
            <p>Preço: ${item.price} kz</p>
            <p>Quantidade: ${item.quantity}</p>

            <button onclick="increase(${index})">+</button>
            <button onclick="decrease(${index})">-</button>
            <button onclick="removeItem(${index})">Remover</button>
        `

        cartContainer.appendChild(product)
    })

    totalElement.innerText = "Total: " + total + " kz"
}


/* Botões de ação */

function increase(index) {
    cart[index].quantity++
    updateCart()
}

function decrease(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--
    }
    updateCart()
}

function removeItem(index) {
    cart.splice(index, 1)
    updateCart()
}

/* Atualização do carrinho */

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCart()
}