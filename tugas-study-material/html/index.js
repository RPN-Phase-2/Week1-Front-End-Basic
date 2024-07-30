function main() {
  /** @type {HTMLSelectElement} */
  const select = document.getElementById("learn");
  const frame = document.getElementById("frame");

  select.addEventListener("input", _ => {
    frame.setAttribute("src", "things/" + select.value + ".html")
  });
}

window.addEventListener("DOMContentLoaded", main);
