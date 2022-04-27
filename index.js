let columns = document.querySelector(".columns")
let hexCodes = document.querySelectorAll(".hex")
let colorPicker = document.getElementById("color-input")
let modeOptions = document.getElementById("mode-options")

//when app loads, this is initial output. template strings are predefined for first load.
function loadPage() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substr(1)}&mode=${modeOptions.value}&count=5`)
                                    //default hex color and mode
    .then(res => res.json())
    .then(data => {
        getScheme(data.colors) // callback function, mapping over data from API
    })

}

loadPage()

// getScheme runs on click event
function getScheme(colors) {
    columns.innerHTML = ""
        colors.map(item => {
        
        let color = item.hex.value

        columns.innerHTML += `
        <section class="hex-column" onclick="copyToClip('${color}')">
            <div class="column" style="background-color: ${color}"></div>
            <p class="hex">${color}</p>
        </section>
        `
        })
}

// click anywhere in the hex-column to copy the hex code to clipboard
function copyToClip(color) {
        navigator.clipboard.writeText(color)
        alert(`Copied ${color} to clipboard!`)
}