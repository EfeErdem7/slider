let models = [
  {
    image: "img/howen1.jpg",
  },
  {
    image: "img/howen2.jpg",
  },
  {
    image: "img/howen3.jpg",
  },
  {
    image: "img/howen4.jpg",
  },
];

let index = 0;
let modelCount = models.length;
let interval;
let settings = {
  duration: "2000",
  random: false,
};
init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click", () => {
  index--;
  showSlide(index);
});
document.querySelector(".fa-arrow-right").addEventListener("click", () => {
  index++;
  showSlide(index);
});

document.querySelectorAll(".arrow").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    init(settings);
  });
});

function init(settings) {
  let prev;
  interval = setInterval(() => {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * modelCount);
      } while (index == prev);
      prev = index;
    } else {
      if (modelCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    console.log(index);
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = modelCount - 1;
  }
  if (i >= modelCount) {
    index = 0;
  }
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
}
