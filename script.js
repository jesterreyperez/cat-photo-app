const button = document.getElementById("catButton");
const message = document.getElementById("catMessage");
const likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", () => {
  likeButton.textContent = "Liked ❤️";
});

button.addEventListener("click", () => {
  message.textContent = "Meow! 🐱";
});
