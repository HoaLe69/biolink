const greet = document.querySelector(".greet");

if (greet) {
  // Next frame, so the browser paints the off-screen start state first and the
  // class change actually animates instead of jumping straight to the end.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => greet.classList.add("is-visible"));
  });

  setTimeout(() => greet.classList.add("is-gone"), 8000);
}
