
const login = document.getElementById("login");

login.addEventListener("submit", (event) => {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem("users"));
    console.log(users);

    const userName = document.getElementById("userName");
    const pw = document.getElementById("pw");

    let check = users.map(
        (index) =>
            index.userName == userName.value.trim() &&
            index.password == pw.value.trim()
    );

    if (check[0] == true) {
        window.location.href = "./trangphu.html";
    } else {
        alert("Please input again");
    }
});
if (username.trim() !== "") {
    // Chuyển hướng đến trang mới
    window.location.href = "trangphu.html"; // Đường dẫn đến trang chào mừng
} 
