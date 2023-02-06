var temperatura = prompt("Olá! Qual a temperatura atual?");

var corpo = document.getElementById("corpo");
var h1 = document.getElementById("texto");

if (temperatura < 20) {
  h1.innerText = "Está frio!";
  corpo.style.color = "white";
  corpo.style.backgroundColor = "blue";
} else if (temperatura >= 20 && temperatura < 25) {
  h1.innerText = "Está normal!";
  corpo.style.color = "white";
  corpo.style.backgroundColor = "orange";
} else {
  h1.innerText = "Está quente!";
  corpo.style.color = "yellow";
  corpo.style.backgroundColor = "red";
}