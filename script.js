const images = document.querySelectorAll("#parent .image");
      let dragged = null;

      images.forEach((img) => {
        img.addEventListener("dragstart", dragStart);
        img.addEventListener("dragover", dragOver);
        img.addEventListener("drop", drop);
        img.addEventListener("dragend", dragEnd);
      });

      function dragStart(e) {
        dragged = this;
        this.classList.add("selected");
      }

      function dragOver(e) {
        e.preventDefault(); // required to allow drop
      }

      function drop(e) {
        e.preventDefault();

        if (dragged === this) return;

        // ✅ Read background images from computed styles
        const draggedBg = window.getComputedStyle(dragged).backgroundImage;
        const targetBg = window.getComputedStyle(this).backgroundImage;

        // Swap background images
        dragged.style.backgroundImage = targetBg;
        this.style.backgroundImage = draggedBg;

        // Swap text labels
        const tempText = dragged.innerText;
        dragged.innerText = this.innerText;
        this.innerText = tempText;
      }

      function dragEnd() {
        this.classList.remove("selected");
        dragged = null;
      }