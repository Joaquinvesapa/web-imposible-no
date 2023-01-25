// obtener referencia al botón
var nobutton = document.getElementById("myButton");
var yesbutton = document.getElementById("yesButton");

// agregar evento click al botón
nobutton.addEventListener("click", function(e) {
  e.preventDefault();
  // generar posición aleatoria dentro del recuadro
  var x = Math.floor(Math.random() * -150) + 50;
  var y = Math.floor(Math.random() * 200) + 50;
  // mover el botón a la posición aleatoria
  nobutton.style.transform = "translate(" + x + "px, " + y + "px)";
  // deshabilitar el botón
});

yesbutton.addEventListener("click", (e) =>{
  e.preventDefault();

  alert("Me too 💙");
})