function visuable(section) {
  section.classList.add("active");
}

function renderLoading(isLoading) {
  const preloader = document.querySelector(".preloader");
  if (isLoading) {
    preloader.classList.add("active");
  } else {
    preloader.classList.remove("active");
  }
}

export { visuable, renderLoading };
