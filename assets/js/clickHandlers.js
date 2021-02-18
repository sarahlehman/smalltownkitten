//register all required click event handlers
//for subscribe modal and subscribe messages
//

var $activatingClass = "is-active";
function activate($element) {
    $element.classList.add($activatingClass);
};

var $navSubscribeBtn = document.getElementById("navSubscribeBtn");
var $footerSubscribeLink = document.getElementById("footerSubscribeLink");
var $activators = [$navSubscribeBtn, $footerSubscribeLink];
$activators.forEach($activator => {
    $activator.addEventListener("click", function(){activate($subscribeModal)});
});

function deactivate($element) {
    $element.classList.remove($activatingClass);
};
var $subModalBg = document.getElementById("subscribeModalBg");
var $subModalDelete = document.getElementById("subscribeModalDelete");
var $deactivators = [$subModalBg, $subModalDelete];
$deactivators.forEach($deactivator => {
    $deactivator.addEventListener("click", function(){deactivate($subscribeModal)});
});

var $hidingClass = "is-hidden";
function hide($element) {
    $element.classList.add($hidingClass);
};
function show($element) {
    $element.classList.remove($hidingClass);
};

var $msgSubSuccess = document.getElementById("msgSubSuccess")
var $subMsgSuccessDelete = document.getElementById("msgSubSuccessDelete")
var $msgSubError = document.getElementById("msgSubError")
var $subMsgErrorDelete = document.getElementById("msgSubErrorDelete")
var $hiders = [[$subMsgSuccessDelete, $msgSubSuccess], [$subMsgErrorDelete, msgSubError]];
$hiders.forEach($hider => {
    //hide the hider's grandparent (in this case the root of the message)
    $hider[0].addEventListener("click", function(){hide($hider[1])})
});
