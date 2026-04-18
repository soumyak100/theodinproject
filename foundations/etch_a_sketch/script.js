function setNumberOfPixel(numberOfPixels) {
  const contentArea = document.querySelector("#content-area");
  for (let i = 0; i < numberOfPixels; i++) {
    let row = document.createElement("div");
    row.classList.add(`row`);
    for (let j = 0; j < numberOfPixels; j++) {
      row.innerHTML += `<div class="pixel"></div>`;
    }
    contentArea.innerHTML += row.outerHTML;
  }
}

function clearGrid() {
  const contentArea = document.querySelector("#content-area");
  contentArea.innerHTML = "";
}

function setPixelEventListeners(numberOfPixels) {
  const pixels = document.querySelectorAll(".pixel");
  const maxWidth = document.querySelector("#content-area").clientWidth;
  for (const pixel of pixels) {
    pixel.style.width = maxWidth / numberOfPixels + "px";
    pixel.style.height = maxWidth / numberOfPixels + "px";
    pixel.addEventListener("mouseenter", () => {
      const randomNum = Math.random();
      pixel.style.backgroundColor = `#${randomNum
        .toString(16)
        .substring(2, 8)}`;
    });
  }
}

const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  for (const pixel of pixels) {
    pixel.style.backgroundColor = "lightgray";
  }
});

const btnSet = document.querySelector("#btn-set");
btnSet.addEventListener("click", () => {
  const numberOfPixels = prompt(
    "Enter a number for number of pixels in a row:",
  );

  if (numberOfPixels < 16 || numberOfPixels > 100) {
    alert("The number should be less than 16 and greater than 100");
  } else {
    clearGrid();
    setNumberOfPixel(numberOfPixels);
    setPixelEventListeners(numberOfPixels);
  }
});

setNumberOfPixel(16);
setPixelEventListeners(16);
