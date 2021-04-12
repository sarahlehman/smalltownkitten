//ping the api at /hit to record a page hit
{
    const hitURL = ApiRoute + "hit"
    var ref = document.referrer
    if (ref.startsWith(location.protocol + "//" + location.host)) {
        //don't use own site as referer
        ref = ""
    }
    fetch(hitURL+ref, {referrerPolicy: 'unsafe-url'})
}