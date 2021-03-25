
/*******************
 * QUERY SELECTORS *
 *******************/
const submitButton = document.getElementById("submit-button")
const translatorInput = document.getElementById("translator-input")
const results = document.getElementById("results")
const radios = document.querySelectorAll(".radio-button")


/*************************
 * CLICK EVENT LISTENERS *
 *************************/
submitButton.addEventListener('click', submitClick)
 
/************
 * FUNCTION *
 ************/
function submitClick(){
    let inputString = translatorInput.value

    for (radio of radios){
        if (radio.checked === true){
            console.log("Radio Checked:", radio.value)
        }
    }
    console.log("The Submit Button WAS clickeded!")
    console.log("trans input:", inputString)
    results.innerText = encode(inputString)


}
