// write your code here
const baseUrl = "http://localhost:3000/ramens";
const ramenMenu = document.querySelector("#ramen-menu");

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded");
});
function displayRamen() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then(getAllRamen);
}

function getAllRamen(ramenArr) {
  ramenArr.forEach(getRamen);
}
function getRamen(ramenObj) {
  const ramenImg = document.createElement("img");
  ramenImg.src = ramenObj.image;
  ramenMenu.append(ramenImg);
}