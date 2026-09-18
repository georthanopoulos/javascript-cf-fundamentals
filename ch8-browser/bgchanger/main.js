let color = "white"; // state - global state of the app which we will render.

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
  const colors = ["black", "red", "green", "white", "blue"];
  color = colors[Math.floor(Math.random() * colors.length)];
}

/**
 * View - UI Rendering
 */
function renderBg(color) {
  document.getElementById("color").textContent = color;
  document.body.style.backgroundColor = color;
}
