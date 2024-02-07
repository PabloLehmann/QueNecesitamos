const palabra = document.querySelector("input[id='palabra']");
const agregar = document.querySelector("button[id='agregar']");
const lista = document.querySelector("ul[id='lista']");

agregar.addEventListener("click", () => {
  // Obtener la palabra del input
  const palabraIngresada = palabra.value;

  // Agregar la palabra a la lista
  const elemento = document.createElement("li");
  elemento.textContent = palabraIngresada;
  lista.appendChild(elemento);

  // Agregar el checkbox al elemento
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = palabraIngresada;
  elemento.appendChild(checkbox);

  // Inicializar el estado del checkbox
  checkbox.checked = false;
});

checkbox.addEventListener("change", () => {
  const elemento = document.querySelector("li[id='" + checkbox.id + "']");

  if (checkbox.checked) {
    elemento.style.textDecoration = "line-through";
  } else {
    elemento.style.textDecoration = "";
  }
});
