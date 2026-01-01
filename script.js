const images = document.querySelectorAll(".image");
  let dragged = null;

  images.forEach(img => {
    img.addEventListener("mousedown", mouseDown);
    img.addEventListener("mouseup", mouseUp);
  });

  function mouseDown(e) {
    dragged = this;
    this.classList.add("selected");
  }

  function mouseUp(e) {
    if (!dragged) return;

    // element where mouse is released
    const target = document.elementFromPoint(e.clientX, e.clientY);

    if (
      target &&
      target.classList.contains("image") &&
      target !== dragged
    ) {
      // read CSS background images
      const draggedBg = window.getComputedStyle(dragged).backgroundImage;
      const targetBg = window.getComputedStyle(target).backgroundImage;

      // swap
      dragged.style.backgroundImage = targetBg;
      target.style.backgroundImage = draggedBg;
    }

    dragged.classList.remove("selected");
    dragged = null;
  }