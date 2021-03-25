
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
            if (radio.value === "encode"){
                results.innerText = encode(inputString)
            }
            if (radio.value === "translate"){
                results.innerText = translate(inputString)
            }
            if (radio.value === "madlib"){
                results.innerText = madlib(inputString)
            }
            if (radio.value === "search"){
                console.log(search(inputString))
                searchObject = search(inputString)
                for (index of searchObject){
                    console.log(index.symbol)
                    results.innerHTML += `<p>${index.symbol}</p>`
                }
            } 
        }
    }
    console.log("The Submit Button WAS clickeded!")
    console.log("trans input:", inputString)
    // results.innerText = encode(inputString)



}
