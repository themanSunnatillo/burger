const burgerBtn = document.querySelector(".burger");
const burgerBox = document.querySelector(".burger-box");
const menuItems = document.querySelectorAll(".menu");
burgerBtn.addEventListener("click", () => {
  burgerBox.classList.toggle("active");
  if (burgerBox.classList.contains("active")) {
    menuItems.forEach((menuItem, index) => {
      menuItem.classList.add("active" + (index + 1));
    });
  } else {
    menuItems.forEach((menuItem, index) => {
      menuItem.classList.remove("active" + (index + 1));
    });
  }
});
