


function mostrarInput() {
  let valor=prompt("Agregue a su lista");
  var li = document.createElement("li");
  li.innerHTML = `
                 

                    
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">${valor}</label>
                    </div>
                    `
      
                
     
                    
                    // Agregamos el nuevo elemento a la lista
                    document.getElementById("lista").appendChild(li);
           
                  }
            

// Modal 
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


                  













// cosas para ver


             {/* <input type="checkbox"  id="checkbox" />
                    <label id="palabra">${valor}</label> */}





  /* function agregarInput() {
  // Obtenemos el valor del input
  var valor = document.getElementById("input").value;
  var li = document.createElement("li");
  // li.textContent = valor;

  // Creamos un nuevo elemento li con el valor del input
 
  li.innerHTML = `
                 

                    <input type="checkbox"  id="checkbox" />
                    <label id="palabra">${valor}</label>
                    <button onclick="borrarPalabra()">Borrar</button>
      
                
     
                  
  `

  // Agregamos el nuevo elemento a la lista
  document.getElementById("lista").appendChild(li);





// tachar palabra al marcar checkbox


function tachaPalabra(palabra, checkbox) {
  // Obtenemos el elemento HTML de la palabra
  const elementoPalabra = document.getElementById(palabra);

  // Obtenemos el estado del checkbox
  const estadoCheckbox = checkbox.checked;

  // Si el checkbox está marcado, tachamos la palabra
  if (estadoCheckbox) {
    elementoPalabra.style.textDecoration = "line-through";
  } else {
    elementoPalabra.style.textDecoration = "";
  }
}
const palabra = document.getElementById("palabra");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  tachaPalabra("palabra", checkbox);
});
}  */

  

//  <button onclick="borrarPalabra()">Borrar</button> 
