


// otro modelo 

// Array para almacenar las tareas
const tareas = [];

// Función para agregar una nueva tarea al array
function agregarTarea() {
  const nuevaTarea = document.getElementById("nueva-tarea").value;
  if (nuevaTarea) {
    tareas.push(nuevaTarea);
    mostrarTareas();
  }
}

// Función para mostrar las tareas en la lista
function mostrarTareas() {
  const listaTareas = document.getElementById("lista-tareas");
  listaTareas.innerHTML = "";

  for (let i = 0; i < tareas.length; i++) {
   
    const tarea = document.createElement("li");
    tarea.classList.add("tarea");
    const textoTarea = document.createElement("span");
    textoTarea.textContent = tareas[i];
   

    const botonTachar = document.createElement("button");
    botonTachar.classList.add("boton-tachar");
    botonTachar.textContent = "✓";
    botonTachar.addEventListener("click", () => {
      tacharTarea(i);
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.textContent = "X";
    botonEliminar.addEventListener("click", () => {
      eliminarTarea(i);
    });
    

    tarea.appendChild(textoTarea);
    tarea.appendChild(botonTachar);
    tarea.appendChild(botonEliminar);

    listaTareas.appendChild(tarea);
  }
}

// Función para tachar una tarea
function tacharTarea(indice) {
  const tarea = document.getElementById("lista-tareas").children[indice];
  tarea.classList.toggle("tachada");
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  mostrarTareas();
}

// Agregar evento a botón "Agregar"
document.getElementById("agregar-tarea").addEventListener("click", agregarTarea);

// Mostrar las tareas al cargar la página
mostrarTareas();
