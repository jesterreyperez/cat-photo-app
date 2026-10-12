const button = document.getElementById("catButton");
const message = document.getElementById("catMessage");

button.addEventListener("click", () => {
  message.textContent = "Meow! 🐱";
});
