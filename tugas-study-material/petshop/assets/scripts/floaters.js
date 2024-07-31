const button = document.getElementById("back-to-home");
const container = document.querySelector("#notification-container > ul");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) button.style.display = "block";
  else button.style.display = "none";
}

window.addEventListener("product.click", ({ detail }) => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${detail.image}" width="50px"><span>${detail.name}</span>`;
  li.classList.add("anim-slide-left");
  container.appendChild(li);
  setTimeout(() => container.removeChild(li), 4_000);
});

button.addEventListener("click", _ => button.querySelector("#home").scrollIntoView({ behavior: "smooth" }));


const checkoutButton = document.querySelector("div#checkout-button");
const paymentConfirmButton = document.querySelector("button#payment-confirmation");
/** @type {HTMLDivElement} */
const paymentModal = document.querySelector("div#payment-confirmation");
const paymentModalClose = paymentModal.querySelector("span");

paymentConfirmButton.addEventListener("click", _ => {
  paymentModal.style.display = "none";
  window.dispatchEvent(new CustomEvent("product.click", {
    detail: {
      name: "Thank you for shopping with us",
      image: "assets/images/shopping-cart.png",
    }
  }));
  window.dispatchEvent(new CustomEvent("modal.confirm"));
});

checkoutButton.addEventListener("click", _ => {
  paymentModal.style.display = "flex";
  window.dispatchEvent(new CustomEvent("modal.click"));
});

paymentModalClose.addEventListener("click", _=> paymentModal.style.display = "none");
