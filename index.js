const buttons = document.querySelectorAll(".imgBx");
const contents = document.querySelectorAll(".contentBx");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    for (let j = 0; j < buttons.length; j++) {
      if (i !== j) {
        if (buttons[j].classList.contains("active")) {
          buttons[j].classList.remove("active");
        }
        if (contents[j]?.classList.contains("active")) {
          contents[j].classList.remove("active");
        }
      } else {
        buttons[i].classList.add("active");
        contents[i].classList.add("active");
      }
    }
  });
}
