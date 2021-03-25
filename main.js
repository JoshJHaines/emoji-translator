
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
                results.innerText = ""
                console.log(search(inputString))
                searchObject = search(inputString)
                if (searchObject.length === 0){
                    results.innerText = "No Emojis match your search!"
                } else {
                    for (index of searchObject){
                        console.log(index.symbol)
                        results.innerHTML += `<p>${index.symbol}</p>`
                    }
                }
            } 
            if (radio.value === "random"){
                randomTrans = [1, 2, 3, 4]
                selectedTrans = randomElement(randomTrans)
                console.log(selectedTrans)
                if (selectedTrans === 1){
                    console.log("Should Run Encode function")
                    document.getElementById("encode").click()
                    document.getElementById("submit-button").click()
                }
                if (selectedTrans === 2){
                    console.log("Should Run Translate function")
                    document.getElementById("translate").click()
                    document.getElementById("submit-button").click()
                }
                if (selectedTrans === 3){
                    console.log("Should Run Madlib function")
                    document.getElementById("madlib").click()
                    document.getElementById("submit-button").click()
                }
                if (selectedTrans === 4){
                    console.log("Should Run Search function")
                    document.getElementById("search").click()
                    document.getElementById("submit-button").click()
                }

            }
        }
    }
}