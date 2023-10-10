const greetText = document.querySelector(".greet");

window.onload = () => {
  greetText.style.animation =
    "5s fadeIn  ease forwards ,1s disappear 8s ease forwards";
};
