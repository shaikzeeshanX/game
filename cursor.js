(() => {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  document.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.add("visible");
    cursor.classList.toggle("hidden", Boolean(event.target.closest?.(".welcome-word")));
  });

  document.documentElement.addEventListener("pointerleave", () => {
    cursor.classList.remove("visible");
  });

  window.addEventListener("blur", () => {
    cursor.classList.remove("visible");
  });
})();
