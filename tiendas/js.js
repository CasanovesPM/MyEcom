//WhatsApp Button 
if (typeof document.getElementById('btnWhatsApp') === "object" && document.getElementById('btnWhatsApp') !== null) {
  // El objeto existe y es de tipo objeto, ejecutar código específico

  const btnWhatsApp = document.getElementById('btnWhatsApp'); 

  btnWhatsApp.addEventListener('click', function(){
      event.preventDefault();
      const nuevaPestana = window.open();
  
      nuevaPestana.window.location = "https://wa.me/3572570917";
  });

} 


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

if (typeof document.getElementById('webConfig') === "object" && document.getElementById('webConfig') !== null) {
  // El objeto existe y es de tipo objeto, ejecutar código específico
  const webConfig = document.getElementById('webConfig');

  webConfig.addEventListener('click', function(){
    const panelSoporte = document.getElementById('panelSoporte');
    pSoporte.style.textDecoration = "none";
    panelSoporte.style.display = "none";

    const panelPedidos = document.getElementById('panelPedidos');
    pPedidos.style.textDecoration = "none";
    panelPedidos.style.display = "none";

    const panelProductos = document.getElementById('panelProductos');
    pProductos.style.textDecoration = "none";
    panelProductos.style.display = "none";

    const panelWebconfig = document.getElementById('panelWebconfig');
    webConfig.style.textDecoration = "underline";
    panelWebconfig.style.display = "flex";

  })

} 

if (typeof document.getElementById('pProductos') === "object" && document.getElementById('pProductos') !== null) {
  // El objeto existe y es de tipo objeto, ejecutar código específico
  const pProductos = document.getElementById('pProductos');

  pProductos.addEventListener('click', function(){
    const panelSoporte = document.getElementById('panelSoporte');
    pSoporte.style.textDecoration = "none";
    panelSoporte.style.display = "none";

    const panelPedidos = document.getElementById('panelPedidos');
    pPedidos.style.textDecoration = "none";
    panelPedidos.style.display = "none";

    const panelWebconfig = document.getElementById('panelWebconfig');
    webConfig.style.textDecoration = "none";
    panelWebconfig.style.display = "none";

    const panelProductos = document.getElementById('panelProductos');
    pProductos.style.textDecoration = "underline";
    panelProductos.style.display = "flex";

  })

} 

if (typeof document.getElementById('pPedidos') === "object" && document.getElementById('pPedidos') !== null) {
  // El objeto existe y es de tipo objeto, ejecutar código específico
  const pPedidos = document.getElementById('pPedidos');

  pPedidos.addEventListener('click', function(){
    const panelSoporte = document.getElementById('panelSoporte');
    pSoporte.style.textDecoration = "none";
    panelSoporte.style.display = "none";

    const panelWebconfig = document.getElementById('panelWebconfig');
    webConfig.style.textDecoration = "none";
    panelWebconfig.style.display = "none";

    const panelProductos = document.getElementById('panelProductos');
    pProductos.style.textDecoration = "none";
    panelProductos.style.display = "none";

    const panelPedidos = document.getElementById('panelPedidos');
    pPedidos.style.textDecoration = "underline";
    panelPedidos.style.display = "block";

  })

} 

if (typeof document.getElementById('pSoporte') === "object" && document.getElementById('pSoporte') !== null) {
  // El objeto existe y es de tipo objeto, ejecutar código específico
  const pSoporte = document.getElementById('pSoporte');

  pSoporte.addEventListener('click', function(){
    const panelWebconfig = document.getElementById('panelWebconfig');
    webConfig.style.textDecoration = "none";
    panelWebconfig.style.display = "none";

    const panelProductos = document.getElementById('panelProductos');
    pProductos.style.textDecoration = "none";
    panelProductos.style.display = "none";

    const panelPedidos = document.getElementById('panelPedidos');
    pPedidos.style.textDecoration = "none";
    panelPedidos.style.display = "none";

    const panelSoporte = document.getElementById('panelSoporte');
    pSoporte.style.textDecoration = "underline";
    panelSoporte.style.display = "block";

  })

} 



  function toggleContent(buttonNumber) {
    var contentId = 'content' + buttonNumber;
    var content = document.getElementById(contentId);

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }


  if (typeof document.getElementById('btnImgPrincipal') === "object" && document.getElementById('btnImgPrincipal') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    document.getElementById('btnImgPrincipal').addEventListener('click', function () {
      document.getElementById('fileInputPrincipal').value = '';
      document.getElementById('fileInputPrincipal').click();
  });
    
    document.getElementById('fileInputPrincipal').addEventListener('change', function (event) {
      const fileInput = event.target;

      const previewImage = document.getElementById('imgPrincipal');

      const file = fileInput.files[0];
      if (file) {
          const reader = new FileReader();
    
          reader.onload = function (e) {
              previewImage.src = e.target.result;
          };
          document.getElementById("btnImgPrincipal").textContent = "CAMBIAR IMAGEN";

          reader.readAsDataURL(file);
      } else {
          // Si no se selecciona un archivo, puedes manejarlo según tus necesidades
          swal({
            title: "Por favor, selecciona una imagen.",
            icon: "warning",
            button: "OK!",
          });
      }

    });

    } 
  
    if (typeof document.getElementById('btnImgSecundarias') === "object" && document.getElementById('btnImgSecundarias') !== null) {
          document.getElementById('btnImgSecundarias').addEventListener('click', function () {
            document.getElementById('fileInputSecundarias').value = '';

              document.getElementById('fileInputSecundarias').click();
          });
  
          document.getElementById('fileInputSecundarias').addEventListener('change', function (event) {
              const fileInput = event.target;
              const imageContainer = document.querySelector('.contenedor-imgSecundarias');
  
              if (fileInput.files.length > 4) {
                swal({
                  title: "Solo se permiten 4 imagenes!",
                  icon: "warning",
                  button: "OK!",
                });
                  // Limpiar el input para que el usuario pueda seleccionar nuevamente
                  document.getElementById('fileInputSecundarias').value = '';
                  return;
              }
  
  
              // Elimina las imágenes existentes
              document.querySelectorAll('.previewSecundaria').forEach(img => img.remove());
  
              for (let i = 0; i < fileInput.files.length; i++) {
                  const file = fileInput.files[i];
                  const reader = new FileReader();
  
                  reader.onload = function (e) {
                      const newImage = document.createElement('img');
                      newImage.src = e.target.result;
                      newImage.alt = `Imagen ${i + 1}`;
                      newImage.classList.add('previewSecundaria');
                      imageContainer.appendChild(newImage);
                  };
                  
                  document.getElementById("btnImgSecundarias").textContent = "CAMBIAR IMAGENES";
                  reader.readAsDataURL(file);
              }
          });
      
      } 


      if (typeof document.getElementById('btnEditImgPrincipal') === "object" && document.getElementById('btnEditImgPrincipal') !== null) {
        // El objeto existe y es de tipo objeto, ejecutar código específico
        document.getElementById('btnEditImgPrincipal').addEventListener('click', function () {
          document.getElementById('fileInputEditImgPrincipal').click();
      });
        
        document.getElementById('fileInputEditImgPrincipal').addEventListener('change', function (event) {
          const fileInput = event.target;
          const previewImage = document.getElementById('imgPrincipalEdit');
        
          const file = fileInput.files[0];
        
          if (file) {
              const reader = new FileReader();
        
              reader.onload = function (e) {
                  previewImage.src = e.target.result;
              };
    
              reader.readAsDataURL(file);
          } else {
              // Si no se selecciona un archivo, puedes manejarlo según tus necesidades
              alert('Por favor, selecciona una imagen.');
          }
        });
        
        } 
      
        if (typeof document.getElementById('btnImgSecundariasEdit') === "object" && document.getElementById('btnImgSecundariasEdit') !== null) {
              document.getElementById('btnImgSecundariasEdit').addEventListener('click', function () {
                  document.getElementById('fileInputEditImgSecundarias').click();
              });
      
              document.getElementById('fileInputEditImgSecundarias').addEventListener('change', function (event) {
                  const fileInput = event.target;
                  const imageContainer = document.querySelector('.contenedor-imgSecundariasEdit');
      
                  if (fileInput.files.length > 4) {
                      alert("SOLO SE PERMITEN 4 IMAGENES");
                      // Limpiar el input para que el usuario pueda seleccionar nuevamente
                      document.getElementById('fileInputEditImgSecundarias').value = '';
                      return;
                  }
      
      
                  // Elimina las imágenes existentes
                  document.querySelectorAll('.previewSecundariaEdit').forEach(img => img.remove());
      
                  for (let i = 0; i < fileInput.files.length; i++) {
                      const file = fileInput.files[i];
                      const reader = new FileReader();
      
                      reader.onload = function (e) {
                          const newImage = document.createElement('img');
                          newImage.src = e.target.result;
                          newImage.alt = `Imagen ${i + 1}`;
                          newImage.classList.add('previewSecundariaEdit');
                          imageContainer.appendChild(newImage);
                      };
                      
                      reader.readAsDataURL(file);
                  }
              });
          
          } 

