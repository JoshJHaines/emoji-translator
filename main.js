
/*******************
 * QUERY SELECTORS *
 *******************/
const submitButton = document.getElementById("submit-button")
const translatorInput = document.getElementById("translator-input")
const results = document.getElementById("results")


/*************************
 * CLICK EVENT LISTENERS *
 *************************/
submitButton.addEventListener('click', submitClick)
 
/************
 * FUNCTION *
 ************/
function submitClick(){
    let inputString = translatorInput.value
    console.log("The Submit Button WAS clickeded!")
    console.log("trans input:", inputString)
    results.innerText = encode(inputString)
}
