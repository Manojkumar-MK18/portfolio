const header = document.querySelector("header");
const icon = document.getElementById("top");
const arrowIcon = document.getElementById("chedown"); 

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

document.addEventListener("scroll", onScroll);
