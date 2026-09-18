let color = "#FFF"; // state - global state of the app which we will render.

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn").addEventListener("click", function () {
    onClickMeClicked(); // controller that receives the event and treats it accordingly
  });
  renderBg(color); // converts the state into UI
});

/**
 * Controller
 */
function onClickMeClicked() {
  updateBg(); // model function that alters / updates the state
  renderBg(color); // Render based on the updated state
}

/**
 * Model
 */
function updateBg() {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const hex = [...letters, ...digits];

  let randomColor = "#";
  for (let i = 1; i <= 6; i++) {
    randomColor += hex[Math.floor(Math.random() * hex.length)];
  }
  color = randomColor;
}

/**
 * View - UI Rendering
 */
function renderBg(color) {
  document.getElementById("color").textContent = color;
  document.body.style.backgroundColor = color;
}
