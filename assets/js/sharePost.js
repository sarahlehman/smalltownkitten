const sharebtncontainer = document.getElementById("sharecontainer")
const sharebtn = document.getElementById("sharebtn")
const shareData = {
    title: document.title,
    url: document.location.href
}

if (!navigator.share) {
    //no share for u
    sharebtncontainer.classList.add("is-hidden");
}
sharebtn.addEventListener("click", function(){
    navigator.share(shareData).then(() => {
        console.log('sharing is caring');
        })
        .catch(console.error);
});
