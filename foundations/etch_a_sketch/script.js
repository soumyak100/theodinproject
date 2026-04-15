const contentArea = document.querySelector("#content-area");
for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.classList.add(`row`);
  for (let j = 0; j < 16; j++) {
    row.innerHTML += `<div class="pixel"></div>`;
  }
  contentArea.innerHTML += row.outerHTML;
}

const pixels = document.querySelectorAll(".pixel");
for (const pixel of pixels) {
  pixel.addEventListener("mouseenter", () =>
    pixel.classList.add("pixel-selected"),
  );
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
  for (const pixel of pixels) {
    pixel.classList.remove("pixel-selected");
  }
});
