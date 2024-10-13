const buyButtons = document.querySelectorAll('.buy-btn');
const cartItems = document.getElementById('cart-items');
const clearCartButton = document.getElementById('clear-cart');

let cart = [];

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.alt;
        cart.push(productName);
        alert(`Bạn đã thêm ${productName} vào giỏ hàng!`);
    });
});

clearCartButton.addEventListener('click', () => {
    cart = [];
    cartItems.innerHTML = '';
    alert('Giỏ hàng đã được xóa!');
});

document.addEventListener('DOMContentLoaded', () => {
    const showCart = () => {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    };

    const cartDiv = document.getElementById('cart');
    cartDiv.addEventListener('click', showCart);
});
document.getElementById('go-back').addEventListener('click', function () {
    // Chuyển hướng đến trang khác
    window.location.href = 'trangphu.html'; // Thay 'link-to-your-page.html' bằng đường dẫn trang  muốn chuyển đến
});

