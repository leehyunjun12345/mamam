const slideBox = document.querySelector(".slide_box");
const slideList = document.querySelector(".slide_list");
const slideContents = document.querySelectorAll(".slide_content"); 
const slideBtnPrev = document.querySelector(".slide_button_prev");
const slideBtnNext = document.querySelector(".slide_button_next");
const slideWidth = window.screen.width; 
const slideSpeed = 300; 
const slideLength = slideContents.length; 
const slideCount = document.querySelector(".slide_count");

slideList.style.width = slideWidth * (slideLength + 2) + "px";

let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

slideList.style.transform = "translateX(-" + slideWidth + "px)";

const base = -slideWidth; 
const last = slideWidth * -8; 
let total = base;
const value = slideWidth; 

function NextImg() {
  total -= value; 
  if (total === slideWidth * -9) {
    
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)"; 
    setTimeout(function () {
      slideList.style.transition = "0ms";
      total = base; 
      slideList.style.transform = "translateX(" + total + "px)"; 
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  } else {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)";
    setTimeout(function () {
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  }
}



function PrevImg() {
  total += value;
  if (total === 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)";
    setTimeout(function () {
      slideList.style.transition = "0ms";
      total = last;
      slideList.style.transform = "translateX(" + total + "px)";
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  } else {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translateX(" + total + "px)";
    setTimeout(function () {
      slideCount.innerHTML = Math.abs(total) / slideWidth + "&nbsp";
    }, slideSpeed);
  }
}

function init() {
  slideBtnNext.addEventListener("click", NextImg);
  slideBtnPrev.addEventListener("click", PrevImg);
}

init();

