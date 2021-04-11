//handle subscription request

const ApiRoute = 'https://api.smalltownkitten.com/v2/';

var $subscribeForm = document.getElementById("subscribeform");
var $emailControl = document.getElementById("subscribeEmailControl");
var $emailInput = document.getElementById("subscribeEmailInput");

var $isLoadingClass = "is-loading";
function setLoading($isLoading) {
    if ($isLoading) {
        $emailControl.classList.add($isLoadingClass);
        return
    }
    $emailControl.classList.remove($isLoadingClass);
}

async function postSubscribe($email) {
    console.log($email)
    const response = await fetch(ApiRoute + 'subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: $email })
    });
    if (!response.ok) {throw "response not OK - " + response.status + " : " + response.text()}
}

var $subscribeModal = document.getElementById("subscribeModal");

function doSubscribe($email) {
    if ($email.length == 0) {
        //do nothing
        return
    } 
    setLoading(true);
    postSubscribe($email)
        .then(function(){
            show($msgSubSuccess);
        })
        .catch(err => {
            console.log(err)
            show($msgSubError);
        })
        .finally(function(){
            //hide the modal
            deactivate($subscribeModal);
            //stop loading
            setLoading(false);
            //clear the email input box
            $emailInput.value = null;
        });
}
//register on submit

$subscribeForm.addEventListener("submit", event => {
    event.preventDefault();
    doSubscribe($emailInput.value)
});