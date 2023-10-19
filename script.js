const btnShare = document.getElementsByClassName("btn-share")[0];

btnShare.addEventListener("click", function() {
  btnShare.classList.toggle("active")
  if (btnShare.classList.contains("active")) {
    document.getElementById("img-btn").src =
      "./assets/images/icon-share-active.svg";
  } else {
    document.getElementById("img-btn").src = "./assets/images/icon-share.svg";
  }
  document.getElementsByClassName("article-share")[0].classList.toggle("hidden");
});