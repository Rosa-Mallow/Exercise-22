const search-button = document.getElementbyID("submitSearch").addEventListener("click", fetchAPI());
const input-field = document.getElementbyID("searchWord");
const image = document.getElementbyID("imageContainer");

function fetchAPI() {
  fetch("https://api.giphy.com/v1/gifs/translate")
  .then(response => {
    return response.json();
  })
  .then(data => {
    
  })
}//to be changed
