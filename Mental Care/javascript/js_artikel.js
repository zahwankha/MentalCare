const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
