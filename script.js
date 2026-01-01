//your code here
const images = document.querySelectorAll(".image");

let draggedElement = null;

// Add ids dynamically (div1, div2, ...)
images.forEach((img, index) => {
  img.id = `div${index + 1}`;
});

// Drag start
images.forEach(img => {
  img.addEventListener("dragstart", function () {
    draggedElement = this;
    this.classList.add("selected");
  });

  img.addEventListener("dragend", function () {
    this.classList.remove("selected");
    draggedElement = null;
  });

  img.addEventListener("dragover", function (e) {
    e.preventDefault(); // REQUIRED for drop
  });

  img.addEventListener("drop", function () {
    if (draggedElement !== this) {
      swapBackground(draggedElement, this);
    }
  });
});

// Swap background images
function swapBackground(div1, div2) {
  const temp = div1.style.backgroundImage;
  div1.style.backgroundImage = div2.style.backgroundImage;
  div2.style.backgroundImage = temp;
}
