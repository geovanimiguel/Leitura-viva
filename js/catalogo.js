const buttons = document.querySelectorAll(".add-to-cart")

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const id = button.dataset.id
        const name = button.dataset.name
        const price = Number(button.dataset.price)

        let cart = JSON.parse(localStorage.getItem("cart")) || []

        const existing = cart.find(item => item.id === id)

        if (existing) {
            existing.quantity++
        } else {
            cart.push({
                id,
                name,
                price,
                quantity: 1
            })
        }

        localStorage.setItem("cart", JSON.stringify(cart))

        // 🔥 feedback visual
        button.innerText = "Adicionado ✔️"
        button.disabled = true

        setTimeout(() => {
            button.innerText = "Adicionar ao Carrinho"
            button.disabled = false
        }, 1500)

        updateCartCount()
    })
})