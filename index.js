const btn = document.getElementById("btn");
const carContainer = document.querySelector(".car-container");
const carImg = document.querySelector(".car-img");
const carName = document.querySelector(".car-name");

btn.addEventListener("click", async function () {
  try {
    carImg.src = "spinner.svg";
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=CkFO60TcgMR858-Cf0V_iIXrNGaRMVGS17HJwh-0bNo&query=car");
    const data = await response.json();
    btn.innerText = "Get Cars";
    carContainer.style.display = "block";
    carImg.src = data.links.download;
    carName.innerText = data.exif.model;
  } catch (error) {
    console.log(error);
    btn.disabled = false;
    btn.innerText = "Get car";
    carName.innerText = "An error happened, please try again";
  }
});
