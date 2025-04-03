const searchButton = document.getElementById("submitSearch");
const inputField = document.getElementById("searchWord");
const imageDisplay = document.getElementById("imageContainer");

searchButton.addEventListener("click", fetchAPI);

function fetchAPI() {
  const myAPIkey = "PqI8GDtWrSfu44r6eA1HmCMGVlCX7Mqt";
  
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${myAPIkey}&s=${encodeURIComponent(inputField.value)}`)
  .then(response => response.json())
  .then(data => {
    const extractedGIF = data.data.images.original.url;
    imageDisplay.innerHTML = `<img src="${extractedGIF}" alt="GIF Result">`;
  });
}
