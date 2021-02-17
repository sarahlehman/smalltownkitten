//handle subscription request

var $apiRoute = 'https://api.smalltownkitten.com/v1/subscribe';

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
    const response = await fetch($apiRoute, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: JSON.stringify({ email: $email }) })
    });
    return response.json();
}

var $subscribeModal = document.getElementById("subscribeModal");

function doSubscribe($email) {
    setLoading(true);
    postSubscribe($email)
        .then($resp => {
            console.log($resp)
            //stop loading
            setLoading(false);
            //hide the modal
            deactivate($subscribeModal);
            //display correct message
            if (!$resp.statusCode == 200) {
                show($msgSubError);
                return
            }
            show($msgSubSuccess);
            $emailInput.value = null;
        });
}
//register on submit

$subscribeForm.addEventListener("submit", event => {
    event.preventDefault();
    doSubscribe($emailInput.value)
});