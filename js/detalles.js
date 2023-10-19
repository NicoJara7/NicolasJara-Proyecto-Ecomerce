
let productos;
const main = document.querySelector(".main");
const url = location.href;
const carrito = document.querySelector(".carrito");

fetch("data/productos.json")
  .then((respuesta) => respuesta.json())
  .then(function(datos){
    productos = datos;
    console.log(datos)


    /* creamos la funcion filtrar productos y asi separamos la url que enviamos desde el index
    con el id de cada elemeto luego seleccionamos la posicion del array que mos arroja el split 
    y finalmente lo parseamos ya que nos devuelve un string y retornamos el resultado */
    filtrarProducto = (url)=>{
      const producto = url.split("=");
      const productoFinal = parseInt(producto[1]);
      return productoFinal;
      }

      const productoID = filtrarProducto(url);
      const elemento = productos[productoID];

  
    const seccion = document.createElement("section");
    const imgProducto = document.createElement("img");
    const nombreProducto = document.createElement("h3");
    const precioProducto= document.createElement("p");
    const caracteristicasProducto = document.createElement("p");
    const form = document.createElement("form")
    const boton = document.createElement("button")

  /* creamos una funcion para mostrar los elementos del producto que nosotros queremos
  utilizando laa variable de elemento que nos muestra mediante el producto id
  la posicion del elemento dentro del json*/

    mostrarProductos = ()=>{
    imgProducto.src = elemento.img;
    nombreProducto.innerHTML = elemento.nombre;
    precioProducto.innerHTML = elemento.precio;
    caracteristicasProducto.innerHTML = elemento.caracteristicas.map(function(caracteristica) {
      return caracteristica + "<br>";
    }).join('');
    boton.innerHTML = "Agregar Al Carrito"
    boton.classList.add("btn-agregar-carrito")
    
    seccion.classList.add("seccion-detalles");
    
    
    seccion.appendChild(imgProducto);
    seccion.appendChild(nombreProducto);
    seccion.appendChild(precioProducto);
    seccion.appendChild(caracteristicasProducto);
    seccion.appendChild(form)
    form.appendChild(boton)
    main.appendChild(seccion)
    }

    mostrarProductos();

    boton.addEventListener("click", function(e){
      e.preventDefault();
      const nombre = elemento.nombre;
      const precio = elemento.precio;
  
      const nuevoElementos = {};
      nuevoElementos["nombre"] = nombre;
      nuevoElementos["precio"] = precio;
      const elementoLista = cargarDatos("productos")
      elementoLista.push(nuevoElementos);
      guardarDatos(elementoLista, "productos")

      Swal.fire(
        'Muy buena eleccion',
        'El producto a sido agregado al carrito',
        'success'
      ).then(()=>{
        location.href = "index.html";
       });;
      
      
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
