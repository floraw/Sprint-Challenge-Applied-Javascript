/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

function carouselCreator() {
  let carousel = document.createElement("div");
  carousel.classList = "carousel";

  let leftButton = document.createElement("div");
  leftButton.classList = "left-button";
  carousel.appendChild(leftButton);

  images.forEach(image => {
    let img = document.createElement("img");
    img.src = image;
    carousel.appendChild(img);
  })

  let rightButton = document.createElement("div");
  rightButton.classList = "right-button";
  carousel.appendChild(rightButton);

  console.log(carousel);
  return carousel;

}

document.querySelector(".carousel-container").appendChild(carouselCreator());

//indexOf function can grab index of src of current image

//display property is set to "none" in CSS, need to update that to display: block for image that is displayed

//event listener for left button subtracts 1 from index of current image

//event listener for right button adds 1 to index of current image