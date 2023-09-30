
function mostrarModal(mensaje){
    var modal = document.getElementById("myModal");
    var modalMenssage = document.getElementById("modalMessage");

    modal.style.display = "block"
    modalMenssage.textContent = mensaje;
}

// Funcion para cerrar el modal
function cerrarModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cerrar al presionar fuera
window.onclick = function(event){
    var modal = document.getElementById("myModal");
    if (event.target === modal){
        cerrarModal();
    }
}

// Ubicacion aleatoria
function obtenerUbicacionAleatoria(){
    var anchoVentana = window.innerHeight;
    var altoVentana = window.innerHeight;
    var anchoBoton = 100;
    var altoBoton = 30;

    var x = Math.random() * (anchoVentana - anchoBoton);
    var y = Math.random() * (altoVentana - altoBoton);

    return { x: x, y: y};
}

// Boton de teletransportacion
function teletransportacionBoton(boton){
    var ubicacionAleatoria = obtenerUbicacionAleatoria();
    boton.style.position = "absolute";
    boton.style.left = ubicacionAleatoria.x + "px";
    boton.style.top = ubicacionAleatoria.y + "px";
}
