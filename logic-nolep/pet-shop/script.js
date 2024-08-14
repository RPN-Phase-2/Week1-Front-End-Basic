const menu = document.getElementById("menu");
const nav = document.querySelector(".navbar");
const item = document.querySelectorAll('.menu-item')

menu.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});

document.addEventListener('click', (e) => {  
  if(!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('active')
  }
})

item.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('active')
  })
})
