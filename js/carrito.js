let productos;
const listaOrdenada = document.querySelector(".lista-ordenada");
const url = window.location.href;
const main = document.querySelector(".main");
const botonComprar = document.querySelector(".boton-comprar");
const form = document.querySelector(".form-comprar")

fetch("data/productos.json")
  .then((respuesta) => respuesta.json())
  .then(function(datos){
    productos = datos;

    /*cargamos los datos del local storage y lo parseamos para que nos devuelva un array*/

    const cargarDatos = (clave) =>{
      const datos = window.localStorage.getItem(clave);    
      return JSON.parse(datos);
    }
  
    /*
    creamos la funcion mostrarproductos y empezamos a crear la estructura para cada elemento
    utilizando un for each para recorrer el array y finalmente agregar todo al main
     */
    const mostrarDatos = ()=>{
      const productos = cargarDatos("productos");  
      productos.forEach(element => {
        const lista = document.createElement("li");
        lista.classList.add("lista-carrito");
        lista.classList.add("lista");
        lista.innerHTML = `<span>${element["nombre"]}</span> <span>${element["precio"]}</span>`;
        const formLista = document.createElement("form")
        formLista.classList.add("form-lista")
        lista.appendChild(formLista);
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn-carrito")
        btnEliminar.innerHTML = `<i class="fa-solid fa-x"></i>`;


        formLista.appendChild(btnEliminar);
        lista.appendChild(formLista);
        main.appendChild(lista);

        btnEliminar.addEventListener("click", (e)=>{
          e.preventDefault();
          eliminarDatos();

        })
        
        
      });
       
      
    }

    mostrarDatos();

    const eliminarDatos = ()=>{
       const boton = event.target.parentElement;
       const formulario = boton.parentElement;
       const item = formulario.parentElement;
       item.remove();




       
      
    }



  

  })
  .catch(function(error) {
    console.error("Error al cargar el archivo JSON:", error);
  })


  const menu = document.querySelector(".abrir");
const lista = document.querySelector(".lista");


menu.addEventListener("click", (e)=>{
  e.preventDefault();
  lista.classList.toggle("oculto");
})