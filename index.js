const showcase = document.querySelector(".showcase");
const menuToggle = document.querySelector(".toggle");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
