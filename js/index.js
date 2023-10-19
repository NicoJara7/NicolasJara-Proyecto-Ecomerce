/*creamos una variable para productos que despues igualaremos a data
seleccionamos al main y le metemos un section dentro*/


let productos;
const main = document.querySelector(".main");
const section = document.createElement("section");
const carrito = document.querySelector(".carrito");


main.appendChild(section);

/* llamamos a los productos desde la data json y extraemos un array con todos los datos
luego recorremos los elementos de ese array y por cada elemento creamos la estructura de cada articulo
con un articulo para cada uno aparte de una img,un h3 con el nombre del producto
un p para el precio y un boton dentro de un form para ver detalles del producto*/

fetch("data/productos.json")
  .then((respuesta) => respuesta.json())
  .then(function(datos){
    productos = datos;
  
  
datos.forEach((producto) => {

  const crearELementos = ()=>{
  const article = document.createElement("article");
  const img = document.createElement("img")
  const h3 = document.createElement("h3")
  const p= document.createElement("p")
  const form = document.createElement("form")
  const button1 = document.createElement("button")
  const button2 = document.createElement("button")


  img.src = producto.img;
  h3.textContent = producto.nombre;
  p.textContent = producto.precio;
  button1.innerHTML = "Ver Detalles";
  button1.classList.add("ver-detalle");
  button2.classList.add("agregar-al-carrito");
  button2.innerHTML = `Agregar Al Carrito`;
  form.classList.add("formulario-botones");

  
  form.appendChild(button1);
  form.appendChild(button2);
  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(form);
  section.appendChild(article);

  button1.addEventListener("click", (e)=>{
    e.preventDefault();
    const productoID = producto.id;
    window.location.href = `detalles.html?id=${productoID}`;
  });

  

  button2.addEventListener("click", function(e){
    e.preventDefault();
    const productoID = producto.id;
    const elemento = productos[productoID];
    const nombre = elemento.nombre;
    const precio = elemento.precio;

    const nuevoElementos = {};
    nuevoElementos["nombre"] = nombre;
    nuevoElementos["precio"] = precio;
    const elementoLista = cargarDatos("productos")
    elementoLista.push(nuevoElementos);
    guardarDatos(elementoLista, "productos")
    
    
  })

  const cargarDatos = (clave)=>{
    const datos = window.localStorage.getItem(clave);
    
    if(datos){
      return JSON.parse(datos);
    }
    return [];
  }

  const guardarDatos = (datos, clave)=>{
    const convertir = JSON.stringify(datos);
    return window.localStorage.setItem(clave,convertir);
  }

  carrito.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = `carrito.html`
  })
  


  }

  crearELementos();

 

  
  
  

});

  })
  .catch(function(error) {
    console.error("Error al cargar el archivo JSON:", error);
  })




/*
 Menu hamburguesa
 */

const menu = document.querySelector(".abrir");
const lista = document.querySelector(".lista");


menu.addEventListener("click", (e)=>{
  e.preventDefault();
  lista.classList.toggle("oculto");
})





