const heading = document.querySelectorAll(".show__menu");
const listItems = document.querySelectorAll(".footer_items");

heading.forEach((el) => {
  el.addEventListener("click", () => {
    const container = el.closest(".show__menu").querySelector("ul");

    container?.classList.contains("hidden")
      ? container.classList.remove("hidden")
      : container.classList.add("hidden");
  });
});
