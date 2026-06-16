const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".webtoon-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    cards.forEach((card) => {
      const shouldShow = selected === "all" || card.dataset.genre === selected;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});
