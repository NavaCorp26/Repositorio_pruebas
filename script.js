
function mostrarModal(mensaje){
    var modal = document.getElementById("myModal");
    var modalMenssage = document.getElementById("modalMessage");

    modal.style.display = "block"
    modalMenssage.textContent = mensaje;
}

function cerrarModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event){
    var modal = document.getElementById("myModal");
    if (event.target === modal){
        cerrarModal();
    }
}
function teletransportacionBoton(button) {
    // Get the window dimensions
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calculate a random position for the button
    var randomX = Math.floor(Math.random() * (windowWidth - button.clientWidth));
    var randomY = Math.floor(Math.random() * (windowHeight - button.clientHeight));

    // Set the button's position
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}
