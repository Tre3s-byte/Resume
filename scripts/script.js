document.querySelector("title").innerHTML = "Alejo Martinez";

const headerButtons = Array.from(
  document.querySelectorAll(".header__list-item")
);
const sections = Array.from(document.querySelectorAll(".curriculum"));
const buttonSelection = headerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonSiblings = headerButtons.filter(
      (siblingButton) => siblingButton !== button
    );
    buttonSiblings.forEach(function (otherButton) {
      otherButton.classList.remove("active");
    });
    this.classList.add("active");

    if (this.innerText == "Summary") {
      sections[0].open = false;
      sections[0].style.display = "none";
      sections[1].open = true;
      sections[1].style.display = "grid";
    } else {
      sections[0].open = true;
      sections[0].style.display = "grid";
      sections[1].open = false;
      sections[1].style.display = "none";
    }
  });
});
const progressBarFill = Array.from(
  document.querySelectorAll(".skill__progress-bar--fill")
);

progressBarFill.forEach((bar) => {
  let width = bar.innerHTML;
  bar.style.color = "transparent";

  bar.style.width = `${width}%`;
});
