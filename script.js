const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// sproduct
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function () {
    MainImg.src = smallimg[i].src;
  };
}
