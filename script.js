const images = document.querySelectorAll(".image");

  let dragged = null;
  let target = null;

  images.forEach(img => {
    img.addEventListener("mousedown", mouseDown);
    img.addEventListener("mouseenter", mouseEnter);
  });

  document.addEventListener("mouseup", mouseUp);

  function mouseDown(e) {
    dragged = this;
    this.classList.add("selected");
  }

  function mouseEnter(e) {
    if (!dragged) return;
    if (this !== dragged) {
      target = this;
    }
  }

  function mouseUp() {
    if (dragged && target) {
      const draggedBg = getComputedStyle(dragged).backgroundImage;
      const targetBg = getComputedStyle(target).backgroundImage;

      dragged.style.backgroundImage = targetBg;
      target.style.backgroundImage = draggedBg;
    }

    if (dragged) dragged.classList.remove("selected");

    dragged = null;
    target = null;
  }