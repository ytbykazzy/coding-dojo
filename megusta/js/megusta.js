// Seleccionamos todos los botones de "Like"
const botonesLike = document.querySelectorAll('.like-btn');

// Agregamos un evento de clic a cada botón
botonesLike.forEach(boton => {
  boton.addEventListener('click', () => {
    // Obtenemos el id de la publicación desde el atributo data-id
    const id = boton.getAttribute('data-id');

    // Seleccionamos el contador de likes correspondiente
    const contador = document.getElementById(`likes${id}`);

    // Incrementamos el número de likes
    let likes = parseInt(contador.textContent);
    contador.textContent = likes + 1;
  });
});
