index.js 

creamos una variable para productos que despues igualaremos a data
seleccionamos al main y le metemos un section dentro.

llamamos a los productos desde la data json y extraemos un array con todos los datos
luego recorremos los elementos de ese array y por cada elemento creamos la estructura de cada articulo
con un articulo para cada uno aparte de una img,un h3 con el nombre del producto
un p para el precio y un boton dentro de un form para ver detalles del producto

luego ingresamos los elementos dentro del section y armamos su estructura

creamos un evento con una funcion para el boton de ver detalle con el fin identificar el elemento al que se le hace click utilizando los id de los productos y redirigimos a la pagina de detalles junto con el id del producto antes filtrado

luego creamos una funcion para el boton de agregar al carrito para cargar los datos del producto que se le clickeo al local storage con la funcion guardar datos y luego cargandolos con la funcion cargar pero gardando los productos como elementos dentro de un array el cual se llama productos

luego creamos un evento redirigir al html carrito tocando dicho boton

y por ultimo tenemos el boton hamburguesa el cual se encuentra en los 3 html






detalles.js



volvemos a pedir los datos al fech

esta vez filtramos el id mandado desde el index html en la url y luego indicamos mediante el id cual es el elemento enviado

luego creamos la estructura que mostraremos en detalles 

usando esa estructura indicamos que caracteristicas se van a ver de el elmento requerido y ingresamos todo en la estructura html

volvemos a usar la funcion de guardar y cargar datos al local store y la funcion de redirigir al carrito



carrito.js


volvemos a pedir los datos al fech

cargamos los datos de el local storage y los parseamos para utilizarlos

luego creamos un forEach para recorrer los elementos del array productos y creamos una estructura para cada uno de ellos con un boton de eliminar

la funcion eliminarDatos nos permite remover el elemento al que le hacemos click










