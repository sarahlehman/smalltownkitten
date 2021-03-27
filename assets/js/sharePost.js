const sharebtn = document.getElementById("sharebtn")
const shareData = {
    title: document.title,
    url: document.location.href
}
if (sharebtn) {
    if (!navigator.share) {
        //no share for u
        sharebtn.classList.add("is-hidden");
    }
    sharebtn.addEventListener("click", function(){
        navigator.share(shareData).then(() => {
            console.log('sharing is caring');
          })
          .catch(console.error);
    });
}
