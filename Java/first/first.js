var name = "Radu";
var message = "Hello " + name + "!";
var timeout = 3000;
var isNight = false;
var isMorning = true;
var nothing = null;

var date = new Date();
var hour = date.getHours();

// && este "SI"
// || este "ORI"
// == este EGAL
// != este "DIFERIT DE"


if(hour == 0){
    alert ("Happy new year!");
} else if(hour >= 21 || hour <= 6) {
    alert("Noapte buna!"); 
    alert("Somn usor!");
} else if(hour <= 11){
    alert ("Buna dimineata!");
} else if(hour <= 17){
    alert ("Buna ziua!");
} else {
    alert("Buna seara!");
}

setTimeout(seyHello, timeout);
    function seyHello() {
    // alert(message);
console.log(message); 
}