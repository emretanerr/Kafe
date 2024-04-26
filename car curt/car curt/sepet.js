document.addEventListener("DOMContentLoaded", function() {
    renderCartItems();
});

function renderCartItems() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        cartList.innerHTML = "<p>Sepette ürün bulunmamaktadır.</p>";
        return;
    }

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} TL`;
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Kaldır";
        removeBtn.addEventListener("click", function() {
            removeFromCart(item.name);
        });

        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
}

function clearCart() {
    localStorage.removeItem("cart");
    renderCartItems();
}
