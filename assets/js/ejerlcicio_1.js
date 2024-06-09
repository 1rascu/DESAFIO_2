// declarar variables para jercio 1

const imagen_cambia = document.querySelector("#imagen_cambia");
console.log(imagen_cambia);
 
imagen_cambia.addEventListener("click", () => {
    imagen_cambia.classList.toggle("cambiar_imagen");
});
