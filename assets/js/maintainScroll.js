//maintain the scroll position when the featured post is clicked
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
  localStorage.removeItem("scrollpos");
});

{
  var featpost = document.getElementById("featuredpost");
  if (featpost) {
    featpost.addEventListener("click", function () {
      localStorage.setItem("scrollpos", window.scrollY);
      console.log("im triggered...");
    });
  }
}
