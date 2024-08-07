document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu")

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("value")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
})
