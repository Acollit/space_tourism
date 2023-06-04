var one = document.querySelector("#one")
let two = document.getElementById("two")
let three = document.getElementById("three")


if (one) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    one.src = "img/image-launch-vehicle-landscape.avif";
    two.src = "img/image-spaceport-landscape.avif";
    three.src = "img/image-space-capsule-landscape.avif";
  } else {
    one.src = "img/image-launch-vehicle-portrait.avif";
    two.src = "img/image-spaceport-portrait.avif";
    three.src = "img/image-space-capsule-portrait.avif";
  }
}



