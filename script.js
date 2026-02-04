const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

if (noBtn && yesBtn) {
  noBtn.addEventListener("click", () => {
    noBtn.classList.add("exploding");

    setTimeout(() => {
      noBtn.remove();
      yesBtn.classList.add("power");
    }, 520);
  });
}
