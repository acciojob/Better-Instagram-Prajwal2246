const images = document.querySelectorAll(".image");

let dragged = null;

// Assign IDs drag1 → drag6
images.forEach((div, index) => {
  div.id = `drag${index + 1}`;

  // create img inside each div from background-image
  const bg = getComputedStyle(div).backgroundImage;
  const url = bg.slice(5, -2); // remove url(" ")

  const img = document.createElement("img");
  img.src = url;
  img.style.width = "100%";
  img.style.height = "100%";

  div.style.backgroundImage = "none";
  div.appendChild(img);
});

// Mouse-based drag logic
images.forEach(div => {
  div.addEventListener("mousedown", () => {
    dragged = div;
  });

  div.addEventListener("mouseup", function () {
    if (dragged && dragged !== this) {
      swapImages(dragged, this);
    }
    dragged = null;
  });
});

// Swap <img> elements
function swapImages(div1, div2) {
  const img1 = div1.querySelector("img");
  const img2 = div2.querySelector("img");

  const tempSrc = img1.src;
  img1.src = img2.src;
  img2.src = tempSrc;
}
