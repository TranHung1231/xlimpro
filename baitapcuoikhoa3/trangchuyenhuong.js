const products = [
    {
        name: "doraemon",
        price: 5000,
        image: "https://sg-test-11.slatic.net/p/b5dda6714672647cef6b50c38c2e2bc2.jpg",

    },
    {
        name: "conan",
        price: 7000,
        image: "https://afamilycdn.com/2019/12/23/bia-truoc-157707865770322091568.jpg",
    },
    {
        name: "hoctap",
        price: 25000,
        image: "https://tusachonthihay.com/wp-content/uploads/2020/08/PicsArt_07-04-05.24.08.jpg",
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
            <button onclick="addToCart('${product.name}', ${product.price})">mua hàng</button>
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
