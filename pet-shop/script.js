window.addEventListener('scroll', ()=>{
    let header = document.getElementById('header');
    if(window.scrollY > 100){
        header.classList.add('sticky')
    } else{
        header.classList.remove('sticky')
    }
})

const notification = document.getElementById("notification");
const closeBtn = document.querySelector(".close-btn");

function showNotification() {
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}


function hideNotification() {
    notification.style.display = "none";
}


document.querySelectorAll('.buy-btn, .book-btn').forEach(button => {
    button.addEventListener('click', showNotification);
});

closeBtn.addEventListener('click', hideNotification);