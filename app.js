var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something went wrong with server! Try again in some time")
}


function clickEventHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler)


