const products = [
    {
        name: "Giày Thể Thao 1",
        price: 5000,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Giày Công Sở 2",
        price: 700000,
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Giày Sneaker 3",
        price: 600000,
        image: "https://via.placeholder.com/150",
    },
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");

// Hàm để hiển thị sản phẩm
function displayProducts(productsToDisplay) {
    productList.innerHTML = ""; // Xóa danh sách sản phẩm hiện tại
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VND</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Thêm vào Giỏ</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Hàm tìm kiếm sản phẩm
searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});

// Hiển thị tất cả sản phẩm ban đầu
displayProducts(products);

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} đã được thêm vào giỏ hàng!`);
}


