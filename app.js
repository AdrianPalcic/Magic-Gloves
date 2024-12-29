const menuToggle = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("close-button");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})

closeButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})

