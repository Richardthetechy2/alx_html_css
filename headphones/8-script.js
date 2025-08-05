const menuBar = document.querySelector(".menu-bar")
const menuList = document.querySelector(".menu-list")

menuBar.addEventListener('click', (e) => {
    e.stopPropagation();
    menuList.classList.toggle('active')
})
const menuLinks = document.querySelectorAll(".menu-list a")

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuList.classList.remove('active')
    })
})
// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBar.contains(e.target) && !menuList.contains(e.target)){
        menuList.classList.remove('active')
    }
});