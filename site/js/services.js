const menuButtons = document.querySelectorAll(".menu-button");
const priceCards = document.querySelectorAll(".price_card");
const title = document.querySelector(".title");

priceCards.forEach((card) => {
  card.style.display = "none";
});

const showCategory = (button) => {
  if (title && window.innerWidth > 1224) {
    title.style.height = "65vh";
  }

  const category = button.classList.contains("facial-btn")
    ? "facial"
    : button.classList.contains("treatment-btn")
      ? "treatment"
      : "well-being";

  menuButtons.forEach((menuButton) => {
    const isSelected = menuButton === button;
    menuButton.classList.toggle("active", isSelected);
    menuButton.setAttribute("aria-pressed", String(isSelected));
  });

  priceCards.forEach((card) => {
    card.style.display = card.classList.contains(category) ? "block" : "none";
  });
};

menuButtons.forEach((button) => {
  button.addEventListener("click", () => showCategory(button));
});

const treatmentButton = document.querySelector(".treatment-btn");
if (treatmentButton) {
  showCategory(treatmentButton);
}
