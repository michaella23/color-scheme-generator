let columns = document.querySelector(".columns")
let hexCodes = document.querySelectorAll(".hex")
let colorVal = "123456"

let colorPicker = document.getElementById("color-input")
let modeOptions = document.getElementById("mode-options")


modeOptions.value = "analogic"
// get color input for API call

// going to watch for change on input elements

// can declare a variable here which holds default color value for innerHTML

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

//when app loads, this is initial output
function loadPage() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substr(1)}&mode=${modeOptions.value}&count=5`)
                                    //default hex color and mode
    .then(res => res.json())
    .then(data => {
        getScheme(data.colors) // callback function, mapping over data from API
    })

}

loadPage()

// getScheme takes into account both of the input values, template strings enable DRY code

function getScheme(colors) {
    columns.innerHTML = ""
        colors.map(item => {
        
        let color = item.hex.value
        
        columns.innerHTML += `
        <section class="hex-column">
            <div class="column" style = "background-color: ${color}"></div>
            <p class="hex">${color}</p>
        </section>
        `
        })
}

