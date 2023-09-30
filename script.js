
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
