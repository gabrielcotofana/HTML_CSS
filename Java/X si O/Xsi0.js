document.querySelectorAll('td')
        .forEach(cell => cell.addEventListener("click", onclick));

var simbol = 'x';

function onclick(event) {
    var cell = event.target;
    cell.removeEventListener("click", onclick);
    cell.innerText = simbol;
    simbol = simbol == 'x'? 'O': 'x';
    
}