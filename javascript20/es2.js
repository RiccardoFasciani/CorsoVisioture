const menu = ['Tiramisù',
    'Torta della nonna',
    'Cheesecake alla Nutella',
    'Macedonia']

function getInput() {
    return parseInt(document.getElementById('input3').value)
}

var submitButton = document.getElementById("submit2").addEventListener("click", scegliDolce)
for (i = 0; i < menu.length; i++) {
    document.getElementById('menu').insertAdjacentHTML('beforeend',`<li>${menu[i]}</li>`)
}

function scegliDolce() {
    var output, input = getInput()
    if (input < 0 || input > menu.length) {
        output = "Dolce non disponibile"
    } else {
        output = `Hai scelto il dolce ${menu[input-1]}`
    }
    document.getElementById("output2").innerText = output
}