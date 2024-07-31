const catfoods = [
  {
    name: "Kit Cat",
    price: 100_000,
    image: "https://kitcat.com.sg/wp-content/uploads/2022/02/DRY-Food-Catagory.png"
  },
  {
    name: "IAMS",
    price: 150_000,
    image: "https://id.iams.asia/cdn-cgi/image/width=410,format=auto,q=90/sites/g/files/fnmzdf4956/files/migrate-product-files/images/xyonagvmmzssnspxnmjb.png"
  },
  {
    name: "Whiskas",
    price: 120_000,
    image: "https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301006993-product-image-1_0.png"
  },
  {
    name: "Evolve Classic",
    price: 300_000,
    image: "https://images.squarespace-cdn.com/content/v1/5e7c3ad4ab841d781e6be704/1592798819475-UWVV19LXM2UOPEAHUKSN/Evolve_Cat_Classic_Salmon_Layout-01.png?format=500w"
  },
  {
    name: "Me O",
    price: 250_000,
    image: "https://www.petsy.online/cdn/shop/products/Me-O_Cat_Food_-_Chicken_and_Vegetables-C-MEO-DF-005-450g.png?v=1582141486"
  },
  {
    name: "Josera Catelux",
    price: 200_000,
    image: "https://josera.com/_next/image?url=https%3A%2F%2Fcms-login.josera.com%2Fsites%2Fdefault%2Ffiles%2Fproducts%2Fcatelux-cat-food-10kg-4_25kg.png&w=3840&q=75"
  }
];

const cattoys = [
  {
    name: "Teaser Mouse",
    price: 20_000,
    image: "https://m.media-amazon.com/images/I/715EiqpJ6XL._AC_SX679_.jpg"
  },
  {
    name: "Cat Scratcher",
    price: 30_000,
    image: "https://img.ws.mms.shopee.co.id/sg-11134201-23020-vnuz6zjxodnv4b"
  }
];

/**
 * @typedef {object} CartItem
 * @property {number} amount
 * @property {typeof catfoods[0]} product
 */

/** @type {Map<string, CartItem>} */
const carts = new Map();

function localeIDR(input) {
  return input.toLocaleString("id", { currency: "IDR", style: "currency" }).replace(",00", "");
}

const paymenModalPriceTag = document.querySelector("div#payment-confirmation > div > div > h3");

window.addEventListener("modal.click", _ => {
  let amount = 0;
  for (const i of carts.values()) amount += i.amount * i.product.price;
  paymenModalPriceTag.innerText = localeIDR(amount);
});

window.addEventListener("modal.confirm", _ => {
  const parents = document.getElementsByClassName("cart-list")[0];
  while(parents.firstChild) parents.removeChild(parents.lastChild);
  carts.clear();
})

function printCart(id) {
  const item = carts.get(id);

  const parents = document.getElementsByClassName("cart-list")[0];

  /** @type { HTMLDivElement} */
  let divCard = document.getElementById(`--curr-${id}`);
  if (!divCard) {
    divCard = document.createElement("div");
    parents.appendChild(divCard);
    divCard.setAttribute("id", `--curr-${id}`);
  } else {
    while(divCard.firstChild) divCard.removeChild(divCard.lastChild);
  }

  const left = document.createElement("div");
  const right = document.createElement("div");
  const inputNumDiv = document.createElement("div");

  const heading = document.createElement("h3");
  const image = document.createElement("img");

  const closeSpan = document.createElement("span");
  const priceTag = document.createElement("h3");
  const minSpan = document.createElement("span");
  const plusSpan = document.createElement("span");

  const inputNum = document.createElement("input");

  inputNumDiv.appendChild(minSpan);
  inputNumDiv.appendChild(inputNum);
  inputNumDiv.appendChild(plusSpan);

  image.setAttribute("src", item.product.image);
  image.setAttribute("height", 100);
  heading.appendChild(document.createTextNode(item.product.name));

  inputNumDiv.setAttribute("class", "input-number");
  inputNum.type = "number";
  inputNum.value = item.amount;

  left.classList.add("left");
  right.classList.add("right");

  closeSpan.appendChild(document.createTextNode("x"));
  priceTag.appendChild(document.createTextNode(localeIDR(item.product.price * item.amount)));
  minSpan.appendChild(document.createTextNode("-"));
  plusSpan.appendChild(document.createTextNode("+"));

  closeSpan.classList.add("close");

  left.appendChild(heading);
  left.appendChild(image);
  right.appendChild(closeSpan);
  right.appendChild(priceTag);

  inputNumDiv.appendChild(minSpan);
  inputNumDiv.appendChild(inputNum);
  inputNumDiv.appendChild(plusSpan);

  right.appendChild(inputNumDiv);

  closeSpan.addEventListener("click", _ => {
    carts.delete(id);
    parents.removeChild(divCard);
  });

  inputNum.setAttribute("min", 1);

  minSpan.addEventListener("click", _ => {
    item.amount--;
    item.amount = Math.max(0, item.amount);
    inputNum.value = item.amount;
    priceTag.innerText = localeIDR(item.product.price * item.amount);
  });

  plusSpan.addEventListener("click", _ => {
    item.amount++;
    inputNum.value = item.amount;
    priceTag.innerText = localeIDR(item.product.price * item.amount);
  });

  inputNum.addEventListener("input", _ => {
    item.amount = inputNum.value;
    item.amount = Math.max(0, item.amount);
    priceTag.innerText = localeIDR(item.product.price * item.amount);
  })

  divCard.setAttribute("class", "longcard even");
  divCard.appendChild(left);
  divCard.appendChild(right);
}

/**
 * @function onProductClick 
 * @param {typeof catfoods[0]} product
 * @param {string} key 
 **/
function onProductClick(product, key) {
  const event = new CustomEvent("product.click", {
    detail: {...product, name: product.name + " Added!"},
  });
  window.dispatchEvent(event);
  const item = carts.get(`${key}-${product.name}`) ?? { amount: 0, product };

  item.amount++;

  carts.set(`${key}-${product.name}`, item);

  printCart(`${key}-${product.name}`);
}

/**
 * @function loadProducts
 * @param {string} id
 * @param {typeof catfoods} products 
 **/
function loadProducts (products, id) {
  /** @type {HTMLDivElement} */
  const container = document.getElementById(id);
  for (const product of products) {
    const image = document.createElement("img");
    image.src = product.image;
    image.height = 200;

    const heading = document.createElement("h3");
    heading.appendChild(document.createTextNode(product.name));

    const priceTag = localeIDR(product.price);
    const pharagraph = document.createElement("p");
    pharagraph.appendChild(document.createTextNode(priceTag));

    const div = document.createElement("div");

    div.setAttribute("class", "card anim-zoom-hover");

    div.appendChild(heading);
    div.appendChild(image);
    div.appendChild(pharagraph);

    div.addEventListener("click", onProductClick.bind(product, product, id));

    container.appendChild(div);
  }
}

function main() {
  /** @type {NodeListOf<HTMLAnchorElement>} */
  const anchors = document.querySelectorAll("a[href^=\"#\"]");
  for (const anchor of anchors) anchor
    .addEventListener("click", x => {
      x.preventDefault();
      document
        .querySelector(anchor.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });

  loadProducts(catfoods, "catfood-products");
  loadProducts(cattoys, "cattoy-products");
}

window.addEventListener("DOMContentLoaded", main);
