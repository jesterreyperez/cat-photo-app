const catButton = document.getElementById("catButton");
const catMessage = document.getElementById("catMessage");
const likeButton = document.getElementById("likeButton");
const newCatButton = document.getElementById("newCatButton");

const catImage = document.querySelector("#relaxingCat");

const anotherCatPhoto =
  "https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg";

catButton.addEventListener("click", () => {
  catMessage.textContent = "Meow! 🐱";
});

likeButton.addEventListener("click", () => {
  likeButton.textContent = "Liked ❤️";
});

newCatButton.addEventListener("click", () => {
  if (catImage.src === anotherCatPhoto) {
    catImage.src =
      "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg";
  } else {
    catImage.src = anotherCatPhoto;
  }
});
