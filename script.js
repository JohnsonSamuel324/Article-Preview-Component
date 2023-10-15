const btnShare = document.getElementsByClassName("btn-share");

for (i of btnShare) {
    i.addEventListener("click", function () {
      i.classList.add("active");
      document
        .getElementsByClassName("article-share")[0]
        .classList.toggle("hidden");
    });
}