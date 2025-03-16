// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar la variable amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");
    const botonBorrar = document.getElementById("botonBorrar");
    const nombre = input.value.trim(); // Obtener y limpiar el valor del input
    

    if (nombre) {
        amigos.push(nombre);  // Agregar el nombre al arreglo

        const li = document.createElement("li");  // Crear un nuevo elemento <li> con el nombre
        li.textContent = nombre;
        
        lista.appendChild(li);   // Agregar el elemento <li> a la lista en el HTML

        botonBorrar.disabled = false;   // Habilitar el botón "Borrar Lista" si hay nombres
       
        input.value = "";  // Limpiar el input

    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}


function borrarLista() {
    const lista = document.getElementById("listaAmigos");
    const botonBorrar = document.getElementById("botonBorrar");
    const resultado = document.getElementById("resultado");
    const input = document.getElementById("amigo");

    // Limpiar el contenido de la lista en el HTML
    lista.innerHTML = "";

    // Vaciar el arreglo amigos
    amigos.length = 0;

    // Reiniciar el texto del resultado
    resultado.textContent = "Amigo Sorteado";

    // Limpiar el campo de entrada
    input.value = "";

    // Deshabilitar el botón "Borrar Lista" si no hay nombres
    botonBorrar.disabled = true;
}


// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById("resultado"); // Obtener el párrafo del resultado

    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Elegir un índice aleatorio
        const amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado

        resultado.textContent = `Tu Amigo Secreto es: ${amigoSorteado}`; // Mostrar el nombre en la página
    } else {
        resultado.textContent = "No hay nombres en la lista para sortear."; // Mensaje si la lista está vacía
    }
}
