//WhatsApp Button 

const btnWhatsApp = document.getElementById('btnWhatsApp'); 

btnWhatsApp.addEventListener('click', function(){
    event.preventDefault();
    const nuevaPestana = window.open();

    nuevaPestana.window.location = "https://wa.me/3572570917";
});

//carrito 
let cantidadProductosEnCarrito = 0;

function mostrarListaCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.style.display = 'block';
  document.getElementById('total').textContent = "$"+total;
  document.getElementById('titulo-de-lista').style.display = cantidadProductosEnCarrito > 0 ? 'block' : 'none';
  document.getElementById('btnIniciarCompra').style.display = cantidadProductosEnCarrito > 0 ? 'block' : 'none';
  document.getElementById('mensaje-carrito-vacio').style.display = cantidadProductosEnCarrito === 0 ? 'block' : 'none';
}

function ocultarListaCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.style.display = 'none';
}


function limpiarCarrito(){
    localStorage.setItem('productosEnCarrito', '');
    location.reload();    
}

let productosEnCarrito = [];
var total = 0;
// Función para obtener los productos desde el localStorage
function obtenerProductosDesdeLocalStorage() {
    const productosEnLocalStorage = localStorage.getItem('productosEnCarrito');
    const productosEnCarrito = productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    for (let index = 0; index < productosEnCarrito.length; index++) {
        const titulo =   productosEnCarrito[index]['nombre'];  
        const cantidad = productosEnCarrito[index]['cantidad']; 
        const price = productosEnCarrito[index]['precio'];

        const listaCarrito = document.getElementById('lista-productos');
        const listaCarritoPedido = document.getElementById('order-received');

        const nuevoItem = document.createElement('div');
        nuevoItem.className = 'item-carrito';
    
        const cantidadProducto = document.createElement('span');
        cantidadProducto.className = 'cantidad-producto';
        cantidadProducto.textContent = `${cantidad}`;
    


        const enlaceProducto = document.createElement('a');
        enlaceProducto.className = 'title-product';
        enlaceProducto.href = '#';
        enlaceProducto.textContent = getShortTitleCart(titulo);
    

        const precioProducto = document.createElement('span');
        precioProducto.className = 'precio-producto';
        let prodCant = price.replace('$', '');
        let prodCant1 = prodCant.replace('.', '');
        let precio = prodCant1*cantidad

        precioProducto.textContent = `$${precio}`;
        total = parseInt(total) + precio;
        nuevoItem.appendChild(cantidadProducto);
        nuevoItem.appendChild(enlaceProducto);
        nuevoItem.appendChild(precioProducto);
        document.getElementById('total').textContent = "$"+total;
        
        // Supongamos que tienes un objeto llamado "miObjeto"
        var totalCheckOut = document.getElementById('total-checkout');

        // Verificar si el objeto existe
        if (totalCheckOut !== null && typeof totalCheckOut !== 'undefined') {
            // El objeto existe, realiza la acción que deseas
            totalCheckOut.textContent = "$"+total/2;
        } 


        if(listaCarritoPedido !== null && typeof listaCarritoPedido !== 'undefined'){
            if(window.getComputedStyle(listaCarritoPedido).display === 'block'){
                document.getElementById('lista-productos-pedido').appendChild(nuevoItem);
            } else {
                listaCarrito.appendChild(nuevoItem);

            }

        } else {
            listaCarrito.appendChild(nuevoItem);
        }
        cantidadProductosEnCarrito += cantidad;
        document.getElementById('cantidad-carrito').textContent = `(${cantidadProductosEnCarrito})`;
    
        cantidad.value = 1;

    }


    return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
}

function getShortTitle(title) {
    if (title.length > 15) title = title.substring(0, 20);
    else return title;
    return title + "...";
}

function getShortTitleCart(title) {
  if (title.length > 30) title = title.substring(0, 30);
  else return title;
  return title + "...";
}

function agregarAlCarrito(titulo, inputCant, price) {
    var cantidad = parseInt(inputCant, 10);
  if (cantidad > 0) {
    const listaCarrito = document.getElementById('lista-productos');
    const nuevoItem = document.createElement('div');
    nuevoItem.className = 'item-carrito';

    const cantidadProducto = document.createElement('span');
    cantidadProducto.className = 'cantidad-producto';
    cantidadProducto.textContent = `${cantidad}`;



    const enlaceProducto = document.createElement('a');
    enlaceProducto.href = '#';
    enlaceProducto.textContent = getShortTitleCart(titulo);

    const precioProducto = document.createElement('span');
    precioProducto.className = 'precio-producto';
    let prodCant = price.replace('$', '');
    let prodCant1 = prodCant.replace('.', '');
    let precio = prodCant1*cantidad

    precioProducto.textContent = `$${precio}`;
    total = parseInt(total) + precio;
    nuevoItem.appendChild(cantidadProducto);
    nuevoItem.appendChild(enlaceProducto);
    nuevoItem.appendChild(precioProducto);

    listaCarrito.appendChild(nuevoItem);

    cantidadProductosEnCarrito += cantidad;
    document.getElementById('cantidad-carrito').textContent = `(${cantidadProductosEnCarrito})`;

    cantidad.value = 1;

    const nuevoProducto = {
        nombre: titulo,
        precio: "$"+ precio,
        cantidad: parseFloat(cantidad)  // Convertir el precio a número
      };

      // Agregar el producto al array
      productosEnCarrito.push(nuevoProducto);

        // Obtener el array actual en el localStorage
        const carritoExistente = obtenerProductosDesdeLocalStorage();

        // Modificar el array (agregar un nuevo elemento)
        carritoExistente.push(nuevoProducto);
        // Guardar el array actualizado en el localStorage
        guardarProductosEnLocalStorage(carritoExistente);    

    mostrarListaCarrito();
  }

      // Función para obtener el array desde el localStorage
      function obtenerProductosDesdeLocalStorage() {
        const arrayEnLocalStorage = localStorage.getItem('productosEnCarrito');
        return arrayEnLocalStorage ? JSON.parse(arrayEnLocalStorage) : [];
      }

    // Función para guardar el array en el localStorage
    function guardarProductosEnLocalStorage(carritoExistente) {
        console.log(JSON.stringify(carritoExistente));
        localStorage.setItem('productosEnCarrito', JSON.stringify(carritoExistente));
      }  
}