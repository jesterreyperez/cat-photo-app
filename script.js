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

newCatButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!response.ok) {
      throw new Error("Failed to fetch a new cat image");
    }
    const data = await response.json();
    catImage.src = data[0].url;
  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
});
