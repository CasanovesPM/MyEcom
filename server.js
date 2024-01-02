const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');

const app = express();
const PORT = 3000;

let xx = "nombre";
// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../MyEcom')));
app.use(express.json());

app.post('/crearArchivo/:nombreArchivo', (req, res) => {
  const nombreArchivo = req.params.nombreArchivo;
  var contenidoInternoCat = '`<a id="` +isx+ `" href="#" onclick="goToCat()" class="Category--Web">`+cat.category+`</a>`';
  var contenidoInternoCat2 = '`<div class="d-block w-100"><a href="#" style="text-decoration: none; font-weight: bold; font-size: 250% !important;" class="colorLinks">` + cat.category + `</a></div><div style="display:flex;flex-wrap: wrap; justify-content: center;" id="`+ cat.category + `"></div>`'
  var contenidoInternoBrand = '`<a id="` +isxs+ `" class="nav-link link-header brands" href="#" onclick="goToBrand()">`+cat.brand+`</a>`';
  var buttonCatSliderVar = '`<button type="button" style="display: none;" data-bs-target="#carrousel-banner-categorias" data-bs-slide-to="` + btnCatSliderVar + `" class="active" aria-current="true" aria-label="Slide ` + btnCatSliderVarSlider + `"></button>`'
  var cantidadCarro = '`${cantidad}`';
  var precioCarro = '`${precio}`';
  var cantProdCarro = '`(${cantidadProductosEnCarrito})`';
  var addProduct = '`<div class="imgProductBanner"><img id="imgProductBanner" width="auto" height="100%" src="`+ zimgProduct + `"alt="No Data Filter"></div><div class="descripProductBanner"><div class="titleProductCard"><span style="font-weight: bold;">`+ getShortTitleProduct(name) + `</span></div><div class="descripProductCard"><p>`+ getShortTitleDescription(description) + `</p></div><div class="foootProductCard"><span>Categoria: <span style="font-weight: bold;" id="catPC">`+ category + `</span></span><span>Marca: <span style="font-weight: bold;" id="brandPC">`+ brand + `</span></span></div><div class="foootProductCard1"><span>SKU: <span style="font-weight: bold;" id="skuPC">`+ sku + `</span></span><span>Precio: <span style="font-weight: bold;" id="pricePC">$`+ price + `</span></span></div></div><div class="modifyProductBanner"><button class="btn btn-primary" value="`+ sku + `" onclick="editProductList(this)">EDITAR</button><button class="btn btn-primary btn-danger" value="`+ sku + `" id="`+skuID+`">ELIMINAR</button></div>`'
  var imgNX = '`Imagen ${i + 1}`';
  var addProductIndex = '`<div class="Card" ><a id="product-0" href="#" class="producto"><img id="product-0" class="producto" src="`+ zimgProduct + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock"></div><div  class="price fondoPColor"><span id="product-0" class="producto precioProduct precioColor">$`+ price + `</span></div><div class="productTitle"><p  id="product-0" value="IPhone" style="font-weight: bold;" class=" producto colorLinks">`+ getShortTitleProduct(name) + `</p></div></a></div>`'
  var timer = '`${hora}:${minutos}`+" "+`${dia}/${mes}/${año}`';
  var cardProduct = '`<div class="Card" ><a id="product-0" href="#" class="producto"><img id="product-`+ sku + `" class="producto img-principal-product" src="` + zimgProduct + `" alt=""><img id="productS-`+ sku + `"  class="producto img-principal-product-secundaria" src="` + zimgSecundarias[0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock"></div><div class="info-product"><div class="productTitle"><p  id="product-0" value="IPhone" style="font-weight: bold;" class=" producto colorLinks">`+ getShortTitleProduct(name) + `</p></div><div  class="price fondoPColor"><span id="product-0" class="producto precioProduct precioColor">$`+ price + `</span></div></div></a></div>`';
  var cardProductDetails = '`<div id="product-`+ sku + `" class="Card pdProductos" ><a id="product-`+ sku + `" href="#" class="producto pdProductos"><img id="product-`+ sku + `" class="producto img-principal-product pdProductos" src="`+ zimgProduct + `" alt=""><img id="productS-`+ sku + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ zimgSecundarias[0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ sku + `" class="info-product"><div id="product-`+ sku + `" class="productTitle pdProductos"><p  id="product-`+ sku + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(name) + `</p></div><div id="product-`+ sku + `"  class="price fondoPColor pdProductos"><span id="product-`+ sku + `" class="producto precioProduct precioColor pdProductos">$`+ price + `</span></div></div></a></div>`';
  var addPedidosCancelados = '`<button class="btnDespliegue" onclick="toggleContent(`+ contentPedidosList + `)"><span>Pedido NRO: `+ nroPedido + ` Pedido por: ` + comprador + `</span><span class="arrowDespliegue"></span></button><div class="contenidoDespliegue" id="content`+ contentPedidosList + `"><div style="margin-left: 2%; margin-right: 2%; width: 96% !important;" class="zonaPedido"><div class="zonaPedidoOptions" ><div class="subdivPedidoSolicitado"><span>NUMERO: <span id="numPedido-`+ nroPedido + `" >` + nroPedido + `</span></span></div><div class="subdivPedidoSolicitado"><span>TOTAL: <span>`+ totalPago + `</span></span></div><div class="subdivPedidoSolicitado"><span style="margin-right: 10%;">PAGO</span><input id="pagoPedido-`+ nroPedido + `" onclick=pagoPedido(this)  type="checkbox" disabled/></div><div class="subdivPedidoSolicitado"><span style="margin-right: 10%;">ENVIO</span><input id="envioPedido-`+ nroPedido + `" onclick=envioPedido(this) type="checkbox" disabled/></div><div class="subdivPedidoSolicitado descargarPedidoSolicitado"><a id="descargarUltimoPedido-`+ nroPedido + `" href="#" style="text-decoration: none; color: black;" >DESCARGAR</a></div><div class="eliminarPedidoSolicitado"><span style="margin-right: 10%;">CANCELAR</span><input id="btnCancelarPedido-`+ nroPedido + `" onclick=cancelarPedido(this) type="checkbox" /></div></div><div id="imgPedido"><img width="100%" height="100%" src="`+ imgLinkPedido + `" alt="No Data Filter"></div></div></div>`';
  var addPedidosCompletados = '`<button class="btnDespliegue" onclick="toggleContent(`+ contentPedidosList + `)"><span>Pedido NRO: `+ nroPedido + ` Pedido por: ` + comprador + `</span><span class="arrowDespliegue"></span></button><div class="contenidoDespliegue" id="content`+ contentPedidosList + `"><div style="margin-left: 2%; margin-right: 2%; width: 96% !important;" class="zonaPedido"><div class="zonaPedidoOptions" ><div class="subdivPedidoSolicitado"><span>NUMERO: <span id="numPedido-`+ nroPedido + `" >` + nroPedido + `</span></span></div><div class="subdivPedidoSolicitado"><span>TOTAL: <span>`+ totalPago + `</span></span></div><div class="subdivPedidoSolicitado"><span style="margin-right: 10%;">PAGO</span><input id="pagoPedido-`+ nroPedido + `" onclick=pagoPedido(this)  type="checkbox" /></div><div class="subdivPedidoSolicitado"><span style="margin-right: 10%;">ENVIO</span><input id="envioPedido-`+ nroPedido + `" onclick=envioPedido(this) type="checkbox" /></div><div class="subdivPedidoSolicitado descargarPedidoSolicitado"><a id="descargarUltimoPedido-`+ nroPedido + `" href="#" style="text-decoration: none; color: black;" >DESCARGAR</a></div><div class="eliminarPedidoSolicitado"><span style="margin-right: 10%;">CANCELAR</span><input id="btnCancelarPedido-`+ nroPedido + `" onclick=cancelarPedido(this) type="checkbox" /></div></div><div id="imgPedido"><img width="100%" height="100%" src="`+ imgLinkPedido + `" alt="No Data Filter"></div></div></div>`';
  var addPedidosPendientes = '`<button class="btnDespliegue" onclick="toggleContent(`+ contentPedidosList + `)"><span>Pedido NRO: `+ nroPedido + ` Pedido por: ` + comprador + `</span><span class="arrowDespliegue"></span></button><div class="contenidoDespliegue" id="content`+ contentPedidosList + `"><div style="margin-left: 2%; margin-right: 2%; width: 96% !important;" class="zonaPedido"><div class="zonaPedidoOptions" ><div class="subdivPedidoSolicitado"><span>NUMERO: <span id="numPedido-`+ nroPedido + `" >` + nroPedido + `</span></span></div><div class="subdivPedidoSolicitado"><span>TOTAL: <span>`+ totalPago + `</span></span></div><div class="subdivPedidoSolicitado"><span style="margin-right: 10%;">PAGO</span><input id="pagoPedido-`+ nroPedido + `" onclick=pagoPedido(this)  type="checkbox" /></div><div class="subdivPedidoSolicitado"><span style="margin-right: 10%;">ENVIO</span><input id="envioPedido-`+ nroPedido + `" onclick=envioPedido(this) type="checkbox" /></div><div class="subdivPedidoSolicitado descargarPedidoSolicitado"><a id="descargarUltimoPedido-`+ nroPedido + `" href="#" style="text-decoration: none; color: black;" >DESCARGAR</a></div><div class="eliminarPedidoSolicitado"><span style="margin-right: 10%;">CANCELAR</span><input id="btnCancelarPedido-`+ nroPedido + `" onclick=cancelarPedido(this) type="checkbox" /></div></div><div id="imgPedido"><img width="100%" height="100%" src="`+ imgLinkPedido + `" alt="No Data Filter"></div></div></div>`';
  var imgProductBannerPA = '`<div class="imgProductBannerPA pdProductos"><img width="auto" height="250px" id="product-`+ product["sku"] + `" class="pdProductos" src="`+ product["zimgProduct"] + `" alt=""></div><div id="product-`+ product["sku"] + `" class="descripProductBannerPA pdProductos"><div class="titleProductCardPA btn-header pdProductos"><span id="product-`+ product["sku"] + `" style="font-weight: bold;" >`+ product["name"] + `</span></div><div id="product-`+ product["sku"] + `" class="descripProductCardPA"><p id="product-`+ product["sku"] + `">`+ product["description"] + `</p></div><div id="product-`+ product["sku"] + `" class="foootProductCardPA "><span>Categoria: <span style="font-weight: bold;" id="catPC">`+ product["category"] + `</span></span><span>Marca: <span style="font-weight: bold;" id="brandPC">`+ product["brand"] + `</span></span></div><div id="product-`+ product["sku"] + `" class="pricePA fondoPColor pdProductos"><span id="`+ product["sku"] + `" style="font-weight: bold; font-size: 300%;" class="precioColor" id="precioPA">$`+ product["sku"] + `</span></div></div>`';
  var addProductJS ='`<div id="product-`+ product["sku"] + `" class="Card pdProductos" ><a id="product-`+ product["sku"] + `" href="#" class="producto pdProductos"><img id="product-`+ product["sku"] + `" class="producto img-principal-product pdProductos" src="`+ product["zimgProduct"] + `" alt=""><img id="productS-`+ product["sku"] + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ product["zimgSecundarias"][0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ product["sku"] + `" class="info-product"><div id="product-`+ product["sku"] + `" class="productTitle pdProductos"><p  id="product-`+ product["sku"] + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(product["name"]) + `</p></div><div id="product-`+ product["sku"] + `"  class="price fondoPColor pdProductos"><span id="product-`+ product["sku"] + `" class="producto precioProduct precioColor pdProductos">$`+ product["price"] + `</span></div></div></a></div>`';
  var addProductJS2 =  '`<div id="product-`+ product["sku"] + `" class="Card pdProductos" ><a id="product-`+ product["sku"] + `" href="#" class="producto pdProductos"><img id="product-`+ product["sku"] + `" class="producto img-principal-product pdProductos" src="`+ product["zimgProduct"] + `" alt=""><img id="productS-`+ product["sku"] + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ product["zimgSecundarias"][0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ product["sku"] + `" class="info-product"><div id="product-`+ product["sku"] + `" class="productTitle pdProductos"><p  id="product-`+ product["sku"] + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(product["name"]) + `</p></div><div id="product-`+ product["sku"] + `"  class="price fondoPColor pdProductos"><span id="product-`+ product["sku"] + `" class="producto precioProduct precioColor pdProductos">$`+ product["price"] + `</span></div></div></a></div>`';
  var addProductJS3 = '`<div id="product-`+ sku + `" class="Card pdProductos" ><a id="product-`+ sku + `" href="#" class="producto pdProductos"><img id="product-`+ sku + `" class="producto img-principal-product pdProductos" src="`+ zimgProduct + `" alt=""><img id="productS-`+ sku + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ zimgSecundarias[0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ sku + `" class="info-product"><div id="product-`+ sku + `" class="productTitle pdProductos"><p  id="product-`+ sku + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(name) + `</p></div><div id="product-`+ sku + `"  class="price fondoPColor pdProductos"><span id="product-`+ sku + `" class="producto precioProduct precioColor pdProductos">$`+ price + `</span></div></div></a></div>`';
  var addProductDetails = '`<div id="product-`+ sku + `" class="Card pdProductos" ><a id="product-`+ sku + `" href="#" class="producto pdProductos"><img id="product-`+ sku + `" class="producto img-principal-product pdProductos" src="`+ zimgProduct + `" alt=""><img id="productS-`+ sku + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ zimgSecundarias[0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ sku + `" class="info-product"><div id="product-`+ sku + `" class="productTitle pdProductos"><p  id="product-`+ sku + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(name) + `</p></div><div id="product-`+ sku + `"  class="price fondoPColor pdProductos"><span id="product-`+ sku + `" class="producto precioProduct precioColor pdProductos">$`+ price + `</span></div></div></a></div>`';
  var sliderTransf1 = '`translateX(${-size * counter}px)`';
  var sliderTransf2 = '`translateX(${-size * counter}px)`';
  var catListDespliegue = '`<p>`+cat.category+`</p>`'

  var skuT = `product['sku']`;
  var priceT = `product['price']`;
  var brandT = `product['brand']`;
  var categoryT = `product['category']`;
  var descriptionT = `product['description']`;
  var nameT = `product['name']`;
  var zimgProductT = `product['zimgProduct']`;
  var zimgSecundariasT = `product['zimgSecundarias'][0]`;
  var stockCartel = 'stockCartel';
  var nameTX = `getShortTitleProduct(product['name'])`;
  
  const contenidoINDEX = `
  
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <title id="title-web"></title>
      <!-- Favicon -->
      <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
      <style>
      body {
          display: none; /* Oculta el contenido inicialmente */
      }
      </style>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
    </head>
  <body>
  
      <div class="whatsapp-button">
        <a id="btnWhatsApp" href="#" target="_blank">
            <img src="../whatsapp-logo.png" alt="WhatsApp">
        </a>
      </div>
        <!--================================
            START HEADER AREA
        =================================-->
        <header  id="header">
          <div class="logo-header" >
              <a href="${nombreArchivo}.html">
                      <img id="logo-pc" src="#" alt="">
                      <img id="logo-mobile" src="#" alt="">
               </a>
          </div>
          <div class="searcher">
            <div class="input-group mb-3">
              <input  id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..." aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
              <ul style="display: none;" id="resultsList"></ul>

              <button  class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
          </div>
          </div>
  
  
      </header>
      <!--================================
          END HEADER AREA
      =================================-->
      <!--================================
          START NAV-SLIDER AREA
      =================================-->
      <section  id="nav-slider-area">
        <div id="nav-header" >
            <nav  class="navbar navbar-expand-lg" >
              <div class="container-fluid">
                <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="dropdown">
                        <a class="nav-link link-header" href="#">Categorias  ▼</a>
                        <div id="cat-display" class="dropdown-content">

                        </div>        
                    </li>
                    <div id="brand-display">

                    </div>
                    <li class="nav-item">
                      <a class="nav-link link-header" href="tienda.html">Tienda</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            
            <div id="div-carrito"  >
            <!-- Botón de carrito con lista desplegable -->
            <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()" onmouseout="ocultarListaCarrito()">
              <span id="cantidad-carrito" >(0)</span> <span id="carrito-logo">🛒</span> 
              
              <div id="lista-carrito">
                  <div id="titulo-de-lista">
                      <h3>Carrito de Compras</h3>
                  </div>
                  <div id="lista-productos">
  
                  </div>
                  <!-- Lista de productos en el carrito -->
                  <div id="mensaje-carrito-vacio">
                    <p>Tu carrito está vacío.</p>
                    <a href="tienda.html">IR A TIENDA</a>
                  </div>
                  <div id="btnIniciarCompra">
                      <div class="mb-3">
                        <span>TOTAL:</span>
                        <span style="float: right;" id="total"></span>
                      </div>
                      <div>
                          <a href="checkout.html" style="float: right;"  class="btn btn-primary btnCheckout">Iniciar Compra</a>
                          <button style="float: left;background-color: red;"  onclick="limpiarCarrito()" class="btn btn-primary btn--lg">Limpiar</button>    
                      </div>
                  </div>
              </div>
          </div>
            </div>
          </div>
            <div id="carouselHeader" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="4" aria-label="Slide 5"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img id="bannerHeader-1" src="#" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img id="bannerHeader-2" src="#" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img id="bannerHeader-3"  src="#" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img id="bannerHeader-4" src="#" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img id="bannerHeader-5" src="#" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselHeader" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
              </button>
            </div>
      </section>
      <!--================================
          END NAV-SLIDER AREA
      =================================-->
      
      <!--================================
          START SHOPS LIST AREA
      =================================-->
      <section id="shops-list-area">
          <div class="banners">
            <img id="subBannerHeaders" src="#" class="d-block w-100" alt="...">
          </div>
          <div id="banner-categorias">
            <div id="banner-categorias-contenido">

              <div id="carrousel-banner-categorias" class="carousel slide" data-bs-ride="carousel">
                <div id="carousel-indicators-slider" class="carousel-indicators">

                </div>
                <div id="carousel-inner-catslider" class="carousel-inner">

                </div>
                <button class="carousel-control-prev cc" type="button" data-bs-target="#carrousel-banner-categorias" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next cc" type="button" data-bs-target="#carrousel-banner-categorias" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
            <div>

            </div>
        </div>
  
  
      </section>
      <!--================================
          END SHOPS LIST AREA
      =================================-->
  
      <!--================================ 
          START FOOTER AREA
      =================================-->
      <footer id="footer-area">
          <div style="margin: 1%;" class="subfoot-t1">
            <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#" class="linksFooter">MyEcom</a>.</p>
          </div>
  
      </footer>
      <!--================================
          END FOOTER AREA
      =================================-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <script type="module" src="js.js" ></script>
  
      <!--================================
          START SCRIPT BASE
      =================================-->
        <script>
          var price = localStorage.price;
          var prod = localStorage.prod;
          var titulo = localStorage.Titulo;
          window.onload = function(){
            
  
            obtenerProductosDesdeLocalStorage();
  
            agregarAlCarrito();
          }
  


              function getShortTitle(title) {
                      if (title.length > 15) title = title.substring(0, 20);
                      else return title;
                      return title + "...";
                  }
        </script>
        <script>
        //carrito
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
        cantidadProducto.textContent = `+cantidadCarro+`;
    


        const enlaceProducto = document.createElement('a');
        enlaceProducto.className = 'title-product';
        enlaceProducto.href = '#';
        enlaceProducto.textContent = getShortTitleCart(titulo);
    

        const precioProducto = document.createElement('span');
        precioProducto.className = 'precio-producto';
        let prodCant = price.replace('$', '');
        let prodCant1 = prodCant.replace('.', '');
        let precio = prodCant1

        precioProducto.textContent = `+precioCarro+`;
        total = parseInt(total) + parseInt(precio);
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
        document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
    
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
  if (title.length > 20) title = title.substring(0, 20);
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
    cantidadProducto.textContent = `+cantidadCarro+`;



    const enlaceProducto = document.createElement('a');
    enlaceProducto.href = '#';
    enlaceProducto.textContent = getShortTitleCart(titulo);

    const precioProducto = document.createElement('span');
    precioProducto.className = 'precio-producto';
    let prodCant = price.replace('$', '');
    let prodCant1 = prodCant.replace('.', '');
    let precio = prodCant1*cantidad

    precioProducto.textContent = `+precioCarro+`;
    total = parseInt(total) + precio;
    nuevoItem.appendChild(cantidadProducto);
    nuevoItem.appendChild(enlaceProducto);
    nuevoItem.appendChild(precioProducto);

    listaCarrito.appendChild(nuevoItem);

    cantidadProductosEnCarrito += cantidad;
    document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;

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




        // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
        function goToCat() {
          var Categoria = event.target.innerHTML;

          localStorage.titleCat = Categoria; 
          window.location = "product-category.html";
        }

                // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
        function goToBrand() {
          var brand = event.target.innerHTML;

          localStorage.titleBrand = brand; 
          window.location = "product-brand.html";
        }

      </script>
      <!--================================
          END SCRIPT BASE
      =================================-->
      
  </body>
  </html>
  `
  const contenidoCSS = `
  @media (max-width: 600px) {
    /* Estilos para tamaños de pantalla medianos */

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: whitesmoke;

    }

    .body {
        height: 100%;
        /* 100% de la altura de la ventana */
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;

    }

    header {
        height: auto;
        justify-content: center;        
        width: 100%;

    }

    

    .logo-header {
      padding: 3%;
      display: flex;
      justify-content: center;
        width: 100%;
    }

    #logo-pc {
      margin-left: 5%;

        display: none;
    }

    #logo-pc-header {
      margin-left: 5%;

    }

    #logo-mobile {
        display: block;
    }
    .searcher {
        width: 100%;
        padding-top: 2%;
    }

    .input-group {
        padding: 3%;
        width: 100%;
    }

    #nav-header{
      display: flex;

        width: 100%;
    }

    #nav-header-header{
      display: flex;
      width: 100%;
  }


    .navbar {
        width: 80%;
        border: solid 1px rgb(221, 220, 220);
    }


    #div-carrito {
        padding: 1%;
        border: solid 1px rgb(221, 220, 220);
        width: 20%;
    }

    .miTienda {
        padding-top: 1.5%;
        width: 20%;
        float: right;
    }

    .miTienda button {
        margin-right: 5%;
        padding-top: 1.5%;
        float: right;
    }

    .step1 {
        text-align: center;
        float: left;
        width: 30%;
        height: auto;
        background-color: whitesmoke;
    }

    .elegant-bk {
        float: right;
        width: 70%;
        height: 100%;
        background-color: whitesmoke;

    }

    .elegant-bk img {
        width: 100%;
        height: 100%;
    }

    .row {
        margin-left: 10%;
        margin-right: 10%;
        align-items: center;
        width: 80%;
    }

    .shopList {
      display: flex;
      flex-wrap: wrap;

        justify-content: center;
        width: 100%;
        height: auto;
        background-color: #f5f5f5;
    }

    .shop--Card {
      text-align: center;
      width: 100%;
      height: auto;
      margin: 1%;
  }

  .shop--CardCat {
    text-align: center;
    width: 100%;
    height: auto;
    margin: 1%;
}

  .Card {
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;

}

.Card a{
  text-decoration: none !important;

}
.info-product {
  display: flex;
  width: 100%;
}

.price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30% ;
  height: auto;
}

.precioProduct{
  font-size: 100%;
}

.productTitle{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 70% ;
  height: auto;

}
.img-principal-product {
  max-width: 100%;
  max-height: 100%;
  transition: opacity 0.3s;
}

.img-principal-product:hover {
  opacity: 0;
}

.img-principal-product-secundaria {
  transform: scale(1.1);
  /* Escala al hacer hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  /* Sombra al hacer hover */
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
  transition: opacity 0.3s;
}

.Card:hover .img-principal-product-secundaria {
  opacity: 1;
}


    .overlay-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        /* Fondo oscuro para la imagen */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        /* Inicialmente invisible */
        transition: opacity 0.3s ease;
    }

    .Card:hover .overlay-card {
        opacity: 1;
        /* Hace visible el overlay al hacer hover */
    }

    .boton-card {
        padding: 10px 20px;
        background-color: #3498db;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .overlay-card:hover .boton-card {
        background-color: #2980b9;
        /* Cambia el color del botón al hacer hover */
    }

    .pieShop {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        /* Fondo semi-transparente */
        padding: 10px;
        margin: 0;
    }


    .title-area {
        text-align: center;
    }

    footer {
        text-align: center;
        color:white; 
        background-color: #192223; 
        border: solid 1px grey; 
        font-size: 100%;
    }


    .banners {
        text-align: center;
    }

    .banners img {
        width: 100%;
    }

    .login-create-area {
        display: flex;
        text-align: center;
        width: 100%;

    }

    .login-create-area #login-area {
        position: relative;
        width: 50%;
        cursor: pointer;
    }

    .login-create-area #login-area img {
        max-width: 100%;
        max-height: 100%;
    }

    .login-create-area #create-area {
        position: relative;

        width: 50%;
        cursor: pointer;
    }

    .login-create-area #create-area img {
        max-width: 100%;
        max-height: 100%;
    }


    .overlay-login {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.01);
        /* Fondo oscuro semi-transparente */
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #login-area:hover img {
        filter: brightness(0.7);
        /* Oscurece la imagen al hacer hover */
    }

    #login-area:hover .overlay-login {
        opacity: 1;
        /* Hace visible el overlay (panel) al hacer hover */
    }

    .login-panel {
        padding: 5%;
        width: 50%;
        height: 50%;
        background-color: #f5f5f5;
        text-align: center;
        color: orange;
    }

    .login-panel input {
        padding: 8px;
        margin-bottom: 10px;
    }


    .overlay-create {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.01);
        /* Fondo oscuro semi-transparente */
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #create-area:hover img {
        filter: brightness(0.7);
        /* Oscurece la imagen al hacer hover */
    }

    #create-area:hover .overlay-create {
        opacity: 1;
        /* Hace visible el overlay (panel) al hacer hover */
    }

    .create-panel {
        padding: 5%;
        width: 50%;
        text-align: center;
        color: orange;
    }

    .create-panel button {
        font-size: 200%;
    }

    .create-panel input {
        padding: 8px;
        margin-bottom: 10px;
    }



    .footer-login-create-area {

        border-top: solid 1px black;
        border-bottom: solid 1px black;
        text-align: center;
        width: 100%;
    }

    .footer-login-create-area-fr {
        height: auto;

        text-align: center;
        width: 100%;
    }

/* SLIDER INFINITE */
.slider {
    padding-top: 3%;
    width: 100%;
    height: auto;
    margin: auto;
    overflow: hidden;
}

.slider .slide-track {
    display: flex;
    animation: scroll 40s linear infinite;
    -webkit-animation: scroll 40s linear infinite;
}

.slider .slide {
    width: 100%;
}

.slider .slide figure {
    width: 100%;
}

/* Duplicar slides al final */
.slider .slide-track::after {
    content: "";
    width: calc(200px * 7); /* Ajusta el número de slides */
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-200px * 7)); /* Ajusta el número de slides */
    }
}



    .title-fr3 {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3%;
        text-align: center;
        background-color: #fcb280;
        border: solid 1px #f74c18;
        color: white;
    }

    .title--fr3 {
        border-bottom: solid 1px black;
    }

    #logo-image {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3%;

    }

    .form-revolucion {
        text-align: center;
        width: 100%;
    }

    .logos-fr {
        float: left;
        width: 50%;
    }

    .address-fr {
        float: right;

        width: 50%;
    }

    .fr-header {
        width: 100%;
    }

    .single-product-area {
        margin-top: 2%;
        margin-bottom: 2%;
        text-align: center;
        width: 100%;
    }

    .single-product-img {
        text-align: center;
        width: 100%;
    }

    #bigimg {
        width: 100% ;
        height: 100% ;
    }

    .item__preview-thumb {

        width: 100%;
    }

    .item__preview-thumb img {
        margin: 2%;
        width: 100px;
        height: 100px;
        border: solid 1px rgb(221, 220, 220)
    }

    .item__preview-slider {
        margin-bottom: 2%;

        border: solid 1px rgb(221, 220, 220);
        background-color: white;
        width: 100%;
        margin-right: 10%;
        margin-bottom: 10%;
    }

    .single-product-details {
        text-align: center;
        width: 100%;
    }

    .divSumandoPD {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .addtocart-button {
        width: 60%;
    }

    .input-sumando {
      text-align: center;
      display: flex;
      justify-content: center;
        width: 50%;
    }


    .btnAddToCart {
        height: auto;
        width: 60%;
        border: solid 1px #01eea3;
    }

    /* Estilos para el botón de WhatsApp */
    .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
    }

    .whatsapp-button img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
    }

    .whatsapp-button img:hover {
        transform: scale(1.1);
    }

    /* Estilo del botón de carrito */
    /* Estilo del botón de carrito */
    #carrito {
        margin-top: 10%;
        position: relative;
        cursor: pointer;
        justify-content: center;
        font-size: 16px;
        padding: 5%;
        background-color: #192223; /* Color de fondo del botón */
        color: #fff; /* Color del texto */
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
      }
  

  
      #carrito-logo {
        font-size: 20px;
      }
  
      /* Estilo de la lista desplegable */
      
      #lista-carrito {
        text-align: center;
        position: absolute;
        top: 100%;
        color: black;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        display: none;
        z-index: 3; /* Z-index superior aún al carrito */
        width: 550%; /* Ancho automático según el contenido */
        max-width: 550%; /* Ancho máximo (opcional) para evitar que la lista sea muy ancha */
      }
  
      /* Estilo de los elementos de la lista desplegable */
      .item-carrito {
        width: 100%;
        border-bottom: solid 1px grey;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
      }

      .precio-producto {
        margin-right: 5%;
        font-weight: bold;
        position: absolute;
        right: 0;
      }


      .item-carrito a {
        text-decoration: none;
        color: #333; /* Color del texto del enlace */
        margin-left: 8px;
      }
  
      .cantidad-producto {
        font-weight: bold;
        font-size: 150%;
        margin-right: 8px;
      }

      /* CARRITO EN PRODUCTO */
      .carritoOnProduct {
        width: 30%;

        float: right;
      }

      .priceOnProduct {
        width: 70%;
        float: left;
      }

      .eliminar-producto{
        color: #f83a00;
        font-weight: bold;
        margin: 1%;
      }

      #btnIniciarCompra{
        width: 100%;
        text-align: center;
        bottom: 0;
      }

      .btnCheckout {
      background-color: #192223;
      }

      #titulo-de-lista {
        width: 100%;
        text-align: center;
        background-color: #01eea3;
        color: white;
      }

      #total {
        font-weight: bold;
      }

  

      .cartelitoStock {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #192223;
        color: white;
        padding: 5px;
        font-size: 14px;
      }

      #stockSpan {
        width: auto;
        height: auto;
        top: 0;
        left: 0;
        background-color: #192223;
        color: white;
        font-size: 14px;
      }

      .checkout-form {
        height: auto;
        width: 100%;
      }

      .form-data {
        height: auto;
        width: 100%;
        padding-top: 1%;
        padding-left: 5%;
        padding-right: 5%;
      }

      .form-data input{
        margin-left: 1%;
      }

      .form-data-values {
        display: flex;

      }

      .form-data-values input{
        width: 90%;
        height: 5vh;
      }

      .form-cart {
        height: auto;
        padding-top: 1%;
        padding-left: 2%;
        padding-right: 2%;
        background-color: lightgray;
        width: 100%;
      }

      #tittle-form-data {
        border-bottom: solid 1px grey;
      }

      #list-pedido{
        border-bottom: solid 3px grey;
        display: flex;
        width: 100%;
      }
      #gracias-checkout {
        text-align: center;
      }
      #info-pedido{
        width: 100%;

      }

      #info-pedido div{
        text-align: center;
        padding: 2%;
        border: solid 1px grey;
      }

      #info-pedido div span{
        font-size: 150%;
        font-weight: bold;
      }

      #detalles-pedido{
        width: 100%;
      }

      #header-detalles-pedido {
        text-align: center;
        border: solid 1px lightgray;
        width: 100%;
        height: auto;
        background-color: #192223;
      }

      #direccion-facturacion{
        padding: 5%;
        width: 100%;
      }

      #direccion-facturacion span{
        font-weight: bold;
        font-size: 100%;
      }

      #lista-productos-pedido{
        width: 100%;
      }

      #lista-productos-pedido .cantidad-producto{
        margin-left: 1%;
      }

      #total-btn {
        display: flex;
        padding: 2%;
        width: 100%;
        height: auto;
        text-align: center;
        background-color: #192223;
      }

      #total-btn span{
        font-weight: bold;

        font-size: 200%;
        color: white;
      }

      #total-btn a{
        border: none;
        color: black;
        background-color: #01eea3;
      }

      #total-btn a:hover{
        border: none;
        color: black;
        background-color: #01eea3;
        box-shadow: 0 0 10px rgb(255, 255, 255);

      }
      
      .login--header {
        width: 100%;
        text-align: center;
        padding: 10%;
      }

      #logo-eureka300 {
        position: fixed; /* Fija la posición del logo */
        bottom: 0; /* Coloca el logo en la parte inferior */
        right: 0; /* Coloca el logo en la parte derecha */
        margin: 20px; /* Agrega un margen para separar el logo del borde de la pantalla */
    }


    #panelWebconfig {
        display: flex;
        width: 100%;
        text-align: center;
    }

    #vista-index {
        width: 80%;
        height: auto;
    }

    #vista-lateral-paneles {
        border: solid 1px rgb(221, 220, 220);
        width: 20%;
        height: auto;

    }

    .vista-lateral-paneles {
        display: flex;
        flex-direction: column;
      }
  
      .btnDespliegue {
        width: 100%;
        border: 1px solid #ffc46a;
        font-weight: bold;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        color: black;
        position: relative;
      }
  
      .contenidoDespliegue {
        display: none;
        padding: 10px;
        border: 1px solid #ffc46a;
      }
  
      .arrowDespliegue {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
  
      .arrowDespliegue:before {
        content: '▼'; /* Unicode character for down arrow */
        font-size: 16px;
      }

      .nav-link{
        font-weight: bold;
      }

      .dropdown {
        z-index: 999;
        position: relative;
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #192223;
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown-content a {
        color: #fff;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }

      .dropdown-content a:hover {
        background-color: #3d4b4d;
      }

      .infopn {
        text-align: center; 
        margin-left: 1%; 
        margin-right: 1%; 
        margin-top: 3%;
        margin-bottom: 3%;

        color: black; 
        width: 100%; 
        height: auto; 
        padding: 2%; 
        border-radius: 5px 5px 5px 5px;
      }
      #bannerProduct {
        z-index: 9999;
        width: 100%;
        text-align: center;
        height: 10vh;
        margin-bottom: 2%;
        margin-top: 2%;

      }

      #bannerProductInt {
        z-index: 9999;
        padding: 1%;
        margin-right: 10%;
        margin-left: 10%;
        width: 80%;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 5px 5px 5px #888888; /* Desplazamiento X, Desplazamiento Y, Desenfoque, Color */
      }

      #panelProductos {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 80vh;
        text-align: center;
      }
      
      #prodConfig {
        overflow: scroll;
        width: 40%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }
      
      #prodVista {
        overflow: scroll;
        width: 60%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }

      #prodVistaTienda {
        text-align: center;
        overflow: scroll;
        width: 100%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }

      #inputsProducts input, select, textarea {
        width: 100%;
      }

      .inputList {
        width: 100%;
      }


      .ProductCardPanel{
        display: flex;
        width: 80%;
        border: solid 1px gray;
        height: 100px;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-right: 10%;
        margin-left: 10%;        
      }

      .imgProductBanner {
            width: auto;
            border: solid 1px gray;

      }

      .descripProductBanner {
        width: 70%;
        border: solid 1px gray;

      }

      .modifyProductBanner {
        padding: 1%;
        width: 20%;
        border: solid 1px gray;
      }

      .modifyProductBanner button{
        margin: 2%;
          width: 90%;
      }

      #searcherProductList input{
        width: 70%;
      }

      .previewSecundaria {
        width: 100px;
        height: 100px;
        margin: 1%;
      }

      .previewSecundariaEdit {
        width: 100px;
        height: 100px;
        margin: 1%;
      }

      .foootProductCard {
        margin-top: -3%;
      }

      #banner-categorias{
        padding-top: 1%;
        width: 100%;
        height: auto;
      }

      #banner-categorias-contenido {
        width: 100%;
      }

      #catPC {
        margin-right: 2%;
      }
      #brand-display {
        display: block;
      }
 /* BUSCADOR */ 

 #resultsList {
  list-style: none;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 9999; /* Establecemos un valor de z-index mayor para la lista de resultados */

}

#resultsList.hidden {
  display: none;
}

#resultsList li {
  margin: 0;
  padding: 10px;
  cursor: pointer;
}

#resultsList li:hover {
  background-color: #007bff;
  color: #fff;

}

.selected {
  background-color: #007bff;
  color: #fff;
}

.productos-relacionados {
  width: 100%;
  text-align: center;
}
#productosRelacionados {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

      .banner-product-PA{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
        width: 100%;
      }  


      #banner-product-Tienda{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
        width: 100%;
      }  

      .product-PA {
        margin: 1%;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .product-PA:hover {
        cursor: pointer;
      }
      .imgProductBannerPA:hover {
        transform: scale(1.1);
        /* Escala al hacer hover */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }


      .imgProductBannerPA {
        border: solid 1px gray;
        max-height: 100%;
        max-width: 100%;
      }

      .descripProductBannerPA {
        background-color: white;

        width: 50%;
        height: 100%;
        border: solid 1px gray;
      }
      .titleProductCardPA{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10%;
        width: 100%;
        height: 200px;
        border: solid 1px gray;
      }
      .descripProductCardPA{
        display: none;

        width: 100%;
        height: 100px;
        border: solid 1px gray;
      }
      .foootProductCardPA {
        display: none;
        width: 100%;
        height: 100px;
        border: solid 1px gray;
      }

      .pricePA {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        border: solid 1px gray;

      }

      .pricePA span {
        font-size: 100% !important;

      }

      #panelPedidos{
        width: 100%;
      }

      #contenedorPanelPedidos{
        display: flex;
        justify-content: center;
        text-align: center;
      }

      #pedidosPanelVista{
        text-align: center;
        border: 1px solid #ccc; /* Añado un borde para visualización */

        width: 30%;
      }

      #pedidosVista{
        width: 70%;
      }

      .zonaPedido {
        width: 100%;
        border: 1px solid #ffc46a;
      }

      .zonaPedidoOptions {
        display: flex;
        width: 100%;
        border: 1px solid #ffc46a;
        font-weight: bold;
        text-align: center;
        color: black;
        position: relative;
      }

      .subdivPedidoSolicitado {
        width: 20%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ddd; /* Borde gris de 1px */
        background-color: #add8e6; /* Color de fondo celeste pastel */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .descargarPedidoSolicitado {
        text-decoration: none;
        color: #000;
        background-color: #ffec8b; /* Fondo amarillo taxi pastel */
        padding: 10px;
        box-sizing: border-box;
        transition: background-color 0.3s; /* Transición para el cambio de color */
      }

      .descargarPedidoSolicitado:hover {
          background-color: #ffd700; /* Cambio de color amarillo al pasar el cursor */
      }

      
      .eliminarPedidoSolicitado {
        width: 20%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #ff6666; /* Fondo rojo */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
    }

    .eliminarPedidoSolicitado:hover {
        background-color: #cc0000; /* Cambia el color al pasar el cursor */
    }

    #imgPedido {
      width: 100%;
      height: auto;
    }


        /* Fin Mobile */

}

@media (min-width: 601px) and (max-width: 1024px) {
    /* Estilos para tamaños de pantalla medianos */

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: whitesmoke;

    }

    .body {
        height: 100%;
        /* 100% de la altura de la ventana */
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;

    }

    header {
        display: flex;
        height: auto;
        text-align: center;
        width: 100%;

    }

    .logo-header {
        text-align: center;
        width: 30%;
    }

    #logo-pc {
      margin-left: 5%;

        display: none;
    }
    #logo-pc-header {
      margin-left: 5%;

    }
    #logo-mobile {
        margin-left: 10%;
        display: block;
    }
    .searcher {
        width: 70%;
        padding-top: 2%;
    }

    .input-group {
        padding: 3%;
        width: 100%;
    }

    #nav-header{
        display: flex;
        width: 100%;
    }

    #nav-header-header{
      display: flex;
      width: 100%;
  }
  
    .navbar {
        width: 80%;
        border: solid 1px rgb(221, 220, 220);
    }

    #div-carrito {
        padding: 1%;
        border: solid 1px rgb(221, 220, 220);

        width: 20%;
    }

    .miTienda {
        padding-top: 1.5%;
        width: 20%;
        float: right;
    }

    .miTienda button {
        margin-right: 5%;
        padding-top: 1.5%;
        float: right;
    }

    .step1 {
        text-align: center;
        float: left;
        width: 30%;
        height: auto;
        background-color: whitesmoke;
    }

    .elegant-bk {
        float: right;
        width: 70%;
        height: 100%;
        background-color: whitesmoke;

    }

    .elegant-bk img {
        width: 100%;
        height: 100%;
    }

    .row {
        margin-left: 10%;
        margin-right: 10%;
        align-items: center;
        width: 80%;
    }

    .shopList {
      display: flex;
      height: auto;
      flex-wrap: wrap;

      justify-content: center;
      width: 100%;
        background-color: #f5f5f5;
    }

    .shop--Card {
      text-align: center;
      width: 30%;
      height: auto;
      margin: 1%;
  }

  .shop--CardCat {
    text-align: center;
    width: 20%;
    height: auto;
    margin: 1%;
}
  .Card {
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;

}

.Card a{
  text-decoration: none !important;

}
.info-product {
  display: flex;
  width: 100%;
}

.price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30% ;
  height: auto;
}

.precioProduct{
  font-size: 100%;
}

.productTitle{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 70% ;
  height: auto;

}
.img-principal-product {
  max-width: 100%;
  max-height: 100%;
  transition: opacity 0.3s;
}

.img-principal-product:hover {
  opacity: 0;
}

.img-principal-product-secundaria {
  transform: scale(1.1);
  /* Escala al hacer hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  /* Sombra al hacer hover */
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
  transition: opacity 0.3s;
}

.Card:hover .img-principal-product-secundaria {
  opacity: 1;
}


    .overlay-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        /* Fondo oscuro para la imagen */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        /* Inicialmente invisible */
        transition: opacity 0.3s ease;
    }

    .Card:hover .overlay-card {
        opacity: 1;
        /* Hace visible el overlay al hacer hover */
    }

    .boton-card {
        padding: 10px 20px;
        background-color: #3498db;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .overlay-card:hover .boton-card {
        background-color: #2980b9;
        /* Cambia el color del botón al hacer hover */
    }

    .pieShop {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        /* Fondo semi-transparente */
        padding: 10px;
        margin: 0;
    }


    .title-area {
        text-align: center;
    }

    footer {
        text-align: center;
        color:white; 
        background-color: #192223; 
        border: solid 1px grey; 
        font-size: 100%;
    }


    .banners {
        text-align: center;
    }

    .banners img {
        width: 100%;
    }

    .login-create-area {
        display: flex;
        text-align: center;
        width: 100%;

    }

    .login-create-area #login-area {
        position: relative;
        width: 50%;
        cursor: pointer;
    }

    .login-create-area #login-area img {
        max-width: 100%;
        max-height: 100%;
    }

    .login-create-area #create-area {
        position: relative;

        width: 50%;
        cursor: pointer;
    }

    .login-create-area #create-area img {
        max-width: 100%;
        max-height: 100%;
    }


    .overlay-login {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.01);
        /* Fondo oscuro semi-transparente */
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #login-area:hover img {
        filter: brightness(0.7);
        /* Oscurece la imagen al hacer hover */
    }

    #login-area:hover .overlay-login {
        opacity: 1;
        /* Hace visible el overlay (panel) al hacer hover */
    }

    .login-panel {
        padding: 5%;
        width: 50%;
        height: 50%;
        background-color: #f5f5f5;
        text-align: center;
        color: orange;
    }

    .login-panel input {
        padding: 8px;
        margin-bottom: 10px;
    }


    .overlay-create {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.01);
        /* Fondo oscuro semi-transparente */
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #create-area:hover img {
        filter: brightness(0.7);
        /* Oscurece la imagen al hacer hover */
    }

    #create-area:hover .overlay-create {
        opacity: 1;
        /* Hace visible el overlay (panel) al hacer hover */
    }

    .create-panel {
        padding: 5%;
        width: 50%;
        text-align: center;
        color: orange;
    }

    .create-panel button {
        font-size: 200%;
    }

    .create-panel input {
        padding: 8px;
        margin-bottom: 10px;
    }



    .footer-login-create-area {

        border-top: solid 1px black;
        border-bottom: solid 1px black;
        text-align: center;
        width: 100%;
    }

    .footer-login-create-area-fr {
        height: auto;

        text-align: center;
        width: 100%;
    }

    /* SLIDER INFINITE */
    .slider {
        padding-top: 3%;
        width: 100%;
        height: auto;
        margin: auto;
        overflow: hidden;
    }

    .slider .slide-track {
        display: flex;
        animation: scroll 40s linear infinite;
        -webkit-animation: scroll 40s linear infinite;
        width: calc(200px * 14);
    }

    .slider .slide {
        width: 100%;
    }

    .slider .slide figure {
        width: 100%;
    }

    @keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(calc(-200px * 7));
            transform: translateX(calc(-200px * 7));
        }
    }



    .title-fr3 {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3%;
        text-align: center;
        background-color: #fcb280;
        border: solid 1px #f74c18;
        color: white;
    }

    .title--fr3 {
        border-bottom: solid 1px black;
    }

    #logo-image {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3%;

    }

    .form-revolucion {
        text-align: center;
        width: 100%;
    }

    .logos-fr {
        float: left;
        width: 50%;
    }

    .address-fr {
        float: right;

        width: 50%;
    }

    .fr-header {
        width: 100%;
    }

    .single-product-area {
        margin-top: 2%;
        margin-bottom: 2%;
        text-align: center;
        width: 100%;
    }

    .single-product-img {
        text-align: center;
        width: 100%;
    }

    #bigimg {
        width: 100% ;
        height: 100% ;
    }

    .item__preview-thumb {

        width: 100%;
    }

    .item__preview-thumb img {
        margin: 2%;
        width: 100px;
        height: 100px;
        border: solid 1px rgb(221, 220, 220)
    }

    .item__preview-slider {
        margin-bottom: 2%;

        border: solid 1px rgb(221, 220, 220);
        background-color: white;
        width: 100%;
        margin-right: 10%;
        margin-bottom: 10%;
    }

    .single-product-details {
        text-align: center;
        width: 100%;
    }

    .divSumandoPD {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .addtocart-button {
        width: 60%;
    }

    .input-sumando {
      text-align: center;
      display: flex;
      justify-content: center;
        width: 50%;
    }


    .btnAddToCart {
        margin-top: 3%;
        height: auto;
        width: 60%;
        border: solid 1px #01eea3;
    }

    /* Estilos para el botón de WhatsApp */
    .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
    }

    .whatsapp-button img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
    }

    .whatsapp-button img:hover {
        transform: scale(1.1);
    }

    /* Estilo del botón de carrito */
    /* Estilo del botón de carrito */
    #carrito {
        margin-top: 10%;
        position: relative;
        cursor: pointer;
        justify-content: center;
        font-size: 16px;
        padding: 5%;
        background-color: #192223; /* Color de fondo del botón */
        color: #fff; /* Color del texto */
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
      }
  

  
      #carrito-logo {
        font-size: 20px;
      }
  
      /* Estilo de la lista desplegable */
      
      #lista-carrito {
        text-align: center;
        position: absolute;
        top: 100%;
        color: black;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        display: none;
        z-index: 3; /* Z-index superior aún al carrito */
        width: 550%; /* Ancho automático según el contenido */
        max-width: 550%; /* Ancho máximo (opcional) para evitar que la lista sea muy ancha */
      }
  
      /* Estilo de los elementos de la lista desplegable */
      .item-carrito {
        width: 100%;
        border-bottom: solid 1px grey;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
      }

      .precio-producto {
        margin-right: 5%;
        font-weight: bold;
        position: absolute;
        right: 0;
      }


      .item-carrito a {
        text-decoration: none;
        color: #333; /* Color del texto del enlace */
        margin-left: 8px;
      }
  
      .cantidad-producto {
        font-weight: bold;
        font-size: 150%;
        margin-right: 8px;
      }

      /* CARRITO EN PRODUCTO */
      .carritoOnProduct {
        width: 30%;

        float: right;
      }

      .priceOnProduct {
        width: 70%;
        float: left;
      }

      .eliminar-producto{
        color: #f83a00;
        font-weight: bold;
        margin: 1%;
      }

      #btnIniciarCompra{
        width: 100%;
        text-align: center;
        bottom: 0;
      }

      .btnCheckout {
      background-color: #192223;
      }

      #titulo-de-lista {
        width: 100%;
        text-align: center;
        background-color: #01eea3;
        color: white;
      }

      #total {
        font-weight: bold;
      }


      .cartelitoStock {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #192223;
        color: white;
        padding: 5px;
        font-size: 14px;
      }

      #stockSpan {
        width: auto;
        height: auto;
        top: 0;
        left: 0;
        background-color: #192223;
        color: white;
        font-size: 14px;
      }

      .checkout-form {
        height: auto;
        width: 100%;
      }

      .form-data {
        height: auto;
        width: 100%;
        padding-top: 1%;
        padding-left: 5%;
        padding-right: 5%;
      }

      .form-data input{
        margin-left: 1%;
      }

      .form-data-values {
        display: flex;

      }

      .form-data-values input{
        width: 90%;
        height: 5vh;
      }

      .form-cart {
        height: auto;
        padding-top: 1%;
        padding-left: 2%;
        padding-right: 2%;
        background-color: lightgray;
        width: 100%;
      }

      #tittle-form-data {
        border-bottom: solid 1px grey;
      }

      #list-pedido{
        border-bottom: solid 3px grey;
        display: flex;
        width: 100%;
      }
      #gracias-checkout {
        text-align: center;
      }
      #info-pedido{
        width: 100%;

      }

      #info-pedido div{
        text-align: center;
        padding: 2%;
        border: solid 1px grey;
      }

      #info-pedido div span{
        font-size: 150%;
        font-weight: bold;
      }

      #detalles-pedido{
        width: 100%;
      }

      #header-detalles-pedido {
        text-align: center;
        border: solid 1px lightgray;
        width: 100%;
        height: auto;
        background-color: #192223;
      }

      #direccion-facturacion{
        padding: 5%;
        width: 100%;
      }

      #direccion-facturacion span{
        font-weight: bold;
        font-size: 100%;
      }

      #lista-productos-pedido{
        width: 100%;
      }

      #lista-productos-pedido .cantidad-producto{
        margin-left: 1%;
      }

      #total-btn {
        display: flex;
        padding: 2%;
        width: 100%;
        height: auto;
        text-align: center;
        background-color: #192223;
      }

      #total-btn span{
        font-weight: bold;

        font-size: 200%;
        color: white;
      }

      #total-btn a{
        border: none;
        color: black;
        background-color: #01eea3;
      }

      #total-btn a:hover{
        border: none;
        color: black;
        background-color: #01eea3;
        box-shadow: 0 0 10px rgb(255, 255, 255);

      }

      .login--header {
        width: 100%;
        text-align: center;
        padding: 10%;
      }

      #logo-eureka300 {
        position: fixed; /* Fija la posición del logo */
        bottom: 0; /* Coloca el logo en la parte inferior */
        right: 0; /* Coloca el logo en la parte derecha */
        margin: 20px; /* Agrega un margen para separar el logo del borde de la pantalla */
    }

    #panelWebconfig {
        display: flex;
        width: 100%;
        text-align: center;
    }

    #vista-index {
        width: 80%;
        height: auto;
    }

    #vista-lateral-paneles {
        border: solid 1px rgb(221, 220, 220);
        width: 20%;
        height: auto;

    }

    .vista-lateral-paneles {
        display: flex;
        flex-direction: column;
      }
  
      .btnDespliegue {
        width: 100%;
        border: 1px solid #ffc46a;
        font-weight: bold;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        color: black;
        position: relative;
      }
  
      .contenidoDespliegue {
        display: none;
        padding: 10px;
        border: 1px solid #ffc46a;
      }
  
      .arrowDespliegue {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
  
      .arrowDespliegue:before {
        content: '▼'; /* Unicode character for down arrow */
        font-size: 16px;
      }

      .nav-link{
        font-weight: bold;
      }

      .dropdown {
        z-index: 999;
        position: relative;
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #192223;
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown-content a {
        color: #fff;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }

      .dropdown-content a:hover {
        background-color: #3d4b4d;
      }

      .infopn {
        text-align: center; 
        margin-left: 1%; 
        margin-right: 1%; 
        margin-top: 3%;
        margin-bottom: 3%;

        color: black; 
        width: 100%; 
        height: auto; 
        padding: 2%; 
        border-radius: 5px 5px 5px 5px;
      }
      #bannerProduct {
        z-index: 9999;
        width: 100%;
        text-align: center;
        height: 10vh;
        margin-bottom: 2%;
        margin-top: 2%;

      }

      #bannerProductInt {
        z-index: 9999;
        padding: 1%;
        margin-right: 10%;
        margin-left: 10%;
        width: 80%;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 5px 5px 5px #888888; /* Desplazamiento X, Desplazamiento Y, Desenfoque, Color */
      }

      #panelProductos {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 80vh;
        text-align: center;
      }
      
      #prodConfig {
        overflow: scroll;
        width: 40%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }
      
      #prodVista {
        overflow: scroll;
        width: 60%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }

      #prodVistaTienda {
        text-align: center;
        overflow: scroll;
        width: 100%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }
      #inputsProducts input, select, textarea {
        width: 100%;
      }

      .inputList {
        width: 100%;
      }


      .ProductCardPanel{
        display: flex;
        width: 80%;
        border: solid 1px gray;
        height: 100px;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-right: 10%;
        margin-left: 10%;        
      }

      .imgProductBanner {
            width: auto;
            border: solid 1px gray;

      }

      .descripProductBanner {
        width: 70%;
        border: solid 1px gray;

      }

      .modifyProductBanner {
        padding: 1%;
        width: 20%;
        border: solid 1px gray;
      }

      .modifyProductBanner button{
        margin: 2%;
          width: 90%;
      }

      #searcherProductList input{
        width: 70%;
      }

      .previewSecundaria {
        width: 100px;
        height: 100px;
        margin: 1%;
      }

      .previewSecundariaEdit {
        width: 100px;
        height: 100px;
        margin: 1%;
      }

      .foootProductCard {
        margin-top: -3%;
      }

      #banner-categorias{
        padding-top: 1%;
        width: 100%;
        height: auto;
      }

      #banner-categorias-contenido {

        width: 100%;
      }

      #catPC {
        margin-right: 2%;
      }

      #brand-display {
        display: flex;
      }
 /* BUSCADOR */ 

 #resultsList {
  list-style: none;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 9999; /* Establecemos un valor de z-index mayor para la lista de resultados */

}

#resultsList.hidden {
  display: none;
}

#resultsList li {
  margin: 0;
  padding: 10px;
  cursor: pointer;
}

#resultsList li:hover {
  background-color: #007bff;
  color: #fff;

}

.selected {
  background-color: #007bff;
  color: #fff;
}
.productos-relacionados {
  width: 100%;
  text-align: center;
}
#productosRelacionados {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.banner-product-PA{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  width: 100%;
}  

#banner-product-Tienda{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  width: 100%;
}  

.product-PA {
  margin: 1%;
  display: flex;
  justify-content: center;
  width: 48%;
}

.product-PA:hover {
  cursor: pointer;
}

.imgProductBannerPA:hover {
  transform: scale(1.1);
  /* Escala al hacer hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


.imgProductBannerPA {
  border: solid 1px gray;
  max-height: 100%;
  max-width: 100%;
}

.descripProductBannerPA {
  background-color: white;

  width: 50%;
  height: 100%;
  border: solid 1px gray;
}
.titleProductCardPA{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: solid 1px gray;
}
.descripProductCardPA{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  border: solid 1px gray;
}
.foootProductCardPA {
  text-align: center;
  width: 100%;
  height: 30px;
  border: solid 1px gray;
}

.pricePA {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border: solid 1px gray;
}

#panelPedidos{
  width: 100%;
}

#contenedorPanelPedidos{
  display: flex;
  justify-content: center;
  text-align: center;
}

#pedidosPanelVista{
  text-align: center;
  border: 1px solid #ccc; /* Añado un borde para visualización */

  width: 30%;
}

#pedidosVista{
  width: 70%;
}

.zonaPedido {
  width: 100%;
  border: 1px solid #ffc46a;
}

.zonaPedidoOptions {
  display: flex;
  width: 100%;
  border: 1px solid #ffc46a;
  font-weight: bold;
  text-align: center;
  color: black;
  position: relative;
}

.subdivPedidoSolicitado {
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd; /* Borde gris de 1px */
  background-color: #add8e6; /* Color de fondo celeste pastel */
  display: flex;
  justify-content: center;
  align-items: center;
}

.descargarPedidoSolicitado {
  text-decoration: none;
  color: #000;
  background-color: #ffec8b; /* Fondo amarillo taxi pastel */
  padding: 10px;
  box-sizing: border-box;
  transition: background-color 0.3s; /* Transición para el cambio de color */
}

.descargarPedidoSolicitado:hover {
    background-color: #ffd700; /* Cambio de color amarillo al pasar el cursor */
}


.eliminarPedidoSolicitado {
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ff6666; /* Fondo rojo */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}

.eliminarPedidoSolicitado:hover {
  background-color: #cc0000; /* Cambia el color al pasar el cursor */
}

#imgPedido {
width: 100%;
height: auto;
}

          /* Fin Tablet */

}

@media (min-width: 1024px) {
    /* Estilos para tamaños de pantalla medianos */

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: whitesmoke;

    }

    .body {
        height: 100%;
        /* 100% de la altura de la ventana */
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;

    }

    header {
        display: flex;

        width: 100%;

    }

    .logo-header {

        width: 30%;
        float: left;
    }

    .searcher {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-right: 5%; 
        padding-top: 1%;
    }

    .input-group {
        padding-top: 1.5%;
        width: 100%;
        height: 20%;
    }

    #logo-pc {
      margin-left: 5%;

        display: block;
    }
    #logo-pc-header {
      margin-left: 5%;

    }
    #logo-mobile {
        display: none;
    }

    #nav-header{
        display: flex;
        width: 100%;
    }

    #nav-header-header{
      display: flex;
      width: 100%;
  }

    .navbar {
        width: 90%;
        border: solid 1px rgb(221, 220, 220);
    }

    #div-carrito {
        padding: 1%;
        border: solid 1px rgb(221, 220, 220);

        width: 10%;
    }

    .miTienda {
        padding-top: 1.5%;
        width: 20%;
        float: right;
    }

    .miTienda button {
        margin-right: 5%;
        padding-top: 1.5%;
        float: right;
    }

    .step1 {
        text-align: center;
        float: left;
        width: 30%;
        height: auto;
        background-color: whitesmoke;
    }

    .elegant-bk {
        float: right;
        width: 70%;
        height: 100%;
        background-color: whitesmoke;

    }

    .elegant-bk img {
        width: 100%;
        height: 100%;
    }

    .row {
        margin-left: 10%;
        margin-right: 10%;
        align-items: center;
        width: 80%;
    }

    .shopList {
           height: auto;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        background-color: #f5f5f5;
    }

    .shop--Card {
        text-align: center;
        width: 30%;
        height: auto;
        margin: 1%;
    }

    .shop--CardCat {
      text-align: center;
      width: 20%;
      height: auto;
      margin: 1%;
  }

    .Card {
        position: relative;
        display: inline-block;
        height: 100%;
        width: 100%;

    }

    .Card a{
      text-decoration: none !important;

  }
  .info-product {
    display: flex;
    width: 100%;
  }
  
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30% ;
    height: auto;
  }
  
  .precioProduct{
    font-size: 100%;
  }
  
  .productTitle{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 70% ;
    height: auto;

  }


    .img-principal-product {
      max-width: 100%;
      max-height: 100%;
      transition: opacity 0.3s;
    }

    .img-principal-product:hover {
      opacity: 0;
    }

    .img-principal-product-secundaria {
      transform: scale(1.1);
      /* Escala al hacer hover */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      /* Sombra al hacer hover */
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      max-height: 100%;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .Card:hover .img-principal-product-secundaria {
      opacity: 1;
    }


    .overlay-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        /* Fondo oscuro para la imagen */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        /* Inicialmente invisible */
        transition: opacity 0.3s ease;
    }

    .Card:hover .overlay-card {
        opacity: 1;
        /* Hace visible el overlay al hacer hover */
    }

    .boton-card {
        padding: 10px 20px;
        background-color: #3498db;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .overlay-card:hover .boton-card {
        background-color: #2980b9;
        /* Cambia el color del botón al hacer hover */
    }

    .pieShop {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        /* Fondo semi-transparente */
        padding: 10px;
        margin: 0;
    }


    .title-area {
        text-align: center;
    }

    footer {
        text-align: center;

        color:white; 
        background-color: #192223; 
        border: solid 1px grey; 
        font-size: 100%;
    }


    .banners {
        text-align: center;
    }

    .banners img {
        width: 100%;
    }

    .login-create-area {
        display: flex;
        text-align: center;
        width: 100%;

    }

    .login-create-area #login-area {
        position: relative;
        width: 50%;
        cursor: pointer;
    }

    .login-create-area #login-area img {
        max-width: 100%;
        max-height: 100%;
    }

    .login-create-area #create-area {
        position: relative;

        width: 50%;
        cursor: pointer;
    }

    .login-create-area #create-area img {
        max-width: 100%;
        max-height: 100%;
    }


    .overlay-login {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.01);
        /* Fondo oscuro semi-transparente */
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #login-area:hover img {
        filter: brightness(0.7);
        /* Oscurece la imagen al hacer hover */
    }

    #login-area:hover .overlay-login {
        opacity: 1;
        /* Hace visible el overlay (panel) al hacer hover */
    }

    .login-panel {
        padding: 5%;
        width: 50%;
        height: 50%;
        background-color: #f5f5f5;
        text-align: center;
        color: orange;
    }

    .login-panel input {
        padding: 8px;
        margin-bottom: 10px;
    }


    .overlay-create {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.01);
        /* Fondo oscuro semi-transparente */
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #create-area:hover img {
        filter: brightness(0.7);
        /* Oscurece la imagen al hacer hover */
    }

    #create-area:hover .overlay-create {
        opacity: 1;
        /* Hace visible el overlay (panel) al hacer hover */
    }

    .create-panel {
        padding: 5%;
        width: 50%;
        text-align: center;
        color: orange;
    }

    .create-panel button {
        font-size: 200%;
    }

    .create-panel input {
        padding: 8px;
        margin-bottom: 10px;
    }



    .footer-login-create-area {

        border-top: solid 1px black;
        border-bottom: solid 1px black;
        text-align: center;
        width: 100%;
    }

    .footer-login-create-area-fr {
        height: auto;

        text-align: center;
        width: 100%;
    }

    /* SLIDER INFINITE */
    .slider {
        padding-top: 3%;
        width: 100%;
        height: auto;
        margin: auto;
        overflow: hidden;
    }

    .slider .slide-track {
        display: flex;
        animation: scroll 40s linear infinite;
        -webkit-animation: scroll 40s linear infinite;
        width: calc(200px * 14);
    }

    .slider .slide {
        width: 100%;
    }

    .slider .slide figure {
        width: 100%;
    }

    @keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            -webkit-transform: translateX(calc(-200px * 7));
            transform: translateX(calc(-200px * 7));
        }
    }



    .title-fr3 {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3%;
        text-align: center;
        background-color: #fcb280;
        border: solid 1px #f74c18;
        color: white;
    }

    .title--fr3 {
        border-bottom: solid 1px black;
    }

    #logo-image {
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 3%;

    }

    .form-revolucion {
        text-align: center;
        width: 100%;
    }

    .logos-fr {
        float: left;
        width: 50%;
    }

    .address-fr {
        float: right;

        width: 50%;
    }

    .fr-header {
        width: 100%;
    }

    .single-product-area {
        margin-top: 2%;
        margin-bottom: 2%;
        display: flex;
        text-align: center;
        width: 100%;
    }

    .single-product-img {
        display: flex;
        text-align: center;
        width: 60%;
    }

    .item__preview-thumb {
        margin-left: 10%;
        margin-right: 10%;
        width: 10%;
    }

    .item__preview-thumb img {
        margin: 2%;
        width: 100px;
        height: 100px;
        border: solid 1px rgb(221, 220, 220)
    }

    #bigimg {
        width: 500px ;
        height: 500px ;
    }

    .item__preview-slider {
        margin-bottom: 2%;

        border: solid 1px rgb(221, 220, 220);
        background-color: white;
        width: 80%;
        margin-right: 10%;
        margin-bottom: 10%;
    }

    .single-product-details {
        margin-right: 3%;
        width: 40%;
    }

    .divSumandoPD {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .addtocart-button {
        width: 50%;
    }

    
    .input-sumando {
      text-align: center;
      display: flex;
      justify-content: center;
        width: 50%;
    }

    .input-group {
        width: 50%;
    }

    .btnAddToCart {
        height: 3vi;
        width: 60%;
        border: solid 1px #01eea3;
    }

    /* Estilos para el botón de WhatsApp */
    .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
    }

    .whatsapp-button img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
    }

    .whatsapp-button img:hover {
        transform: scale(1.1);
    }

    /* Estilo del botón de carrito */
    #carrito {
        position: relative;
        cursor: pointer;
        justify-content: center;
        font-size: 16px;
        padding: 5%;
        background-color: #192223; /* Color de fondo del botón */
        color: #fff; /* Color del texto */
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
      }
  

  
      #carrito-logo {
        font-size: 20px;
      }
  
      /* Estilo de la lista desplegable */
      
      #lista-carrito {
        text-align: center;
        position: absolute;
        top: 100%;
        color: black;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        display: none;
        z-index: 3; /* Z-index superior aún al carrito */
        width: 350%; /* Ancho automático según el contenido */
        max-width: 350%; /* Ancho máximo (opcional) para evitar que la lista sea muy ancha */
      }
  
      /* Estilo de los elementos de la lista desplegable */
      .item-carrito {
        width: 100%;
        border-bottom: solid 1px grey;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
      }

      .precio-producto {
        margin-right: 5%;
        font-weight: bold;
        position: absolute;
        right: 0;
      }


      .item-carrito a {
        text-decoration: none;
        color: #333; /* Color del texto del enlace */
        margin-left: 8px;
      }
  
      .cantidad-producto {
        font-weight: bold;
        font-size: 150%;
        margin-right: 8px;
      }

      /* CARRITO EN PRODUCTO */
      .carritoOnProduct {
        width: 30%;

        float: right;
      }

      .priceOnProduct {
        width: 70%;
        float: left;
      }

      .eliminar-producto{
        color: #f83a00;
        font-weight: bold;
        margin: 1%;
      }

      #btnIniciarCompra{
        width: 100%;
        text-align: center;
        bottom: 0;
      }

      .btnCheckout {
      background-color: #192223;
      }

      #titulo-de-lista {
        width: 100%;
        text-align: center;
        background-color: #01eea3;
        color: white;
      }

      #total {
        font-weight: bold;
      }


      .cartelitoStock {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #192223;
        color: white;
        padding: 5px;
        font-size: 14px;
      }

      #stockSpan {
        width: auto;
        height: auto;
        top: 0;
        left: 0;
        background-color: #192223;
        color: white;
        font-size: 14px;
      }

      .checkout-form {
        display: flex;
        height: auto;
        width: 100%;
      }

      .form-data {
        height: auto;
        width: 70%;
        padding-top: 1%;
        padding-left: 5%;
        padding-right: 5%;
      }

      .form-data-values {
        display: flex;

      }

      .form-data-values input{
        width: 90%;
        height: 5vh;
      }

      .form-cart {
        height: auto;
        padding-top: 1%;
        padding-left: 2%;
        padding-right: 2%;
        background-color: lightgray;
        width: 30%;
      }

      #tittle-form-data {
        border-bottom: solid 1px grey;
      }

      #list-pedido{
        border-bottom: solid 3px grey;
        display: flex;
        width: 100%;
      }
      #gracias-checkout {
        text-align: center;
      }
      #info-pedido{
        width: 100%;
        display: flex;
        justify-content: center;
      }

      #info-pedido div{
        text-align: center;
        padding: 2%;
        border: solid 1px grey;
      }

      #info-pedido div span{
        font-size: 150%;
        font-weight: bold;
      }

      #detalles-pedido{
        width: 100%;
        display: flex;
      }

      #header-detalles-pedido {
        text-align: center;
        border: solid 1px lightgray;
        width: 100%;
        height: auto;
        background-color: #192223;
      }

      #direccion-facturacion{
        padding: 5%;
        width: 50%;
      }

      #direccion-facturacion span{
        font-weight: bold;
        font-size: 100%;
      }

      #lista-productos-pedido{
        width: 50%;
      }

      #lista-productos-pedido .cantidad-producto{
        margin-left: 1%;
      }

      #total-btn {
        display: flex;
        padding: 2%;
        width: 100%;
        height: auto;
        text-align: center;
        background-color: #192223;
      }

      #total-btn span{
        font-weight: bold;

        font-size: 200%;
        color: white;
      }

      #total-btn a{
        border: none;
        color: black;
        background-color: #01eea3;
      }

      #total-btn a:hover{
        border: none;
        color: black;
        background-color: #01eea3;
        box-shadow: 0 0 10px rgb(255, 255, 255);

      }
      
      .login--header {
        width: 100%;
        text-align: center;
        padding: 10%;
      }

      #logo-eureka300 {
        position: fixed; /* Fija la posición del logo */
        bottom: 0; /* Coloca el logo en la parte inferior */
        right: 0; /* Coloca el logo en la parte derecha */
        margin: 20px; /* Agrega un margen para separar el logo del borde de la pantalla */
    }

    #panelWebconfig {
        display: flex;
        width: 100%;
        text-align: center;
    }

    #vista-index {
        width: 80%;
        height: auto;
    }

    #vista-lateral-paneles {
        border: solid 1px rgb(221, 220, 220);
        width: 20%;
        height: auto;

    }

    .vista-lateral-paneles {
        display: flex;
        flex-direction: column;
      }
  
      .btnDespliegue {
        width: 100%;
        border: 1px solid #ffc46a;
        font-weight: bold;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        color: black;
        position: relative;
      }
  
      .contenidoDespliegue {
        display: none;
        padding: 10px;
        border: 1px solid #ffc46a;
      }
  
      .arrowDespliegue {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
  
      .arrowDespliegue:before {
        content: '▼'; /* Unicode character for down arrow */
        font-size: 16px;
      }

      .nav-link{
        font-weight: bold;
      }

      .dropdown {
        z-index: 999;
        position: relative;
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #192223;
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown-content a {
        color: #fff;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }

      .dropdown-content a:hover {
        background-color: #3d4b4d;
      }

      .colorDiv {
        text-align: center;
      }

      .colorDiv input {
        width: 35%;
      }

      .infopn {
        text-align: center; 
        margin-left: 1%; 
        margin-right: 1%; 
        margin-top: 3%;
        margin-bottom: 3%;

        color: black; 
        width: 30%; 
        height: auto; 
        padding: 2%; 
        border-radius: 5px 5px 5px 5px;
      }

      #bannerProduct {
        z-index: 9999;
        width: 100%;
        text-align: center;
        height: 10vh;
        margin-bottom: 2%;
        margin-top: 2%;

      }

      #bannerProductInt {
        z-index: 9999;
        padding: 1%;
        margin-right: 10%;
        margin-left: 10%;
        width: 80%;
        border-radius: 10px 10px 10px 10px;
        box-shadow: 5px 5px 5px #888888; /* Desplazamiento X, Desplazamiento Y, Desenfoque, Color */
      }

      #panelProductos {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 80vh;
        text-align: center;
      }
      
      #prodConfig {
        overflow: scroll;
        width: 40%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }
      
      #prodVista {
        overflow: scroll;
        width: 60%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }

      #prodVistaTienda {
        text-align: center;
        overflow: scroll;
        width: 100%;
        height: auto;
        border: 1px solid #ccc; /* Añado un borde para visualización */
      }

      #inputsProducts input, select, textarea {
        width: 100%;
      }

      .inputList {
        width: 100%;
      }


      .ProductCardPanel{
        display: flex;
        width: 80%;
        border: solid 1px gray;
        height: 100px;
        margin-top: 5%;
        margin-bottom: 5%;
        margin-right: 10%;
        margin-left: 10%;        
      }

      .imgProductBanner {
            width: auto;
            border: solid 1px gray;

      }

      .descripProductBanner {
        width: 70%;
        border: solid 1px gray;

      }

      .modifyProductBanner {
        padding: 1%;
        width: 20%;
        border: solid 1px gray;
      }

      .modifyProductBanner button{
        margin: 2%;
          width: 90%;
      }

      #searcherProductList input{
        width: 70%;
      }

      .previewSecundaria {
        width: 100px;
        height: 100px;
        margin: 1%;
      }

      .previewSecundariaEdit {
        width: 100px;
        height: 100px;
        margin: 1%;
      }

      .foootProductCard {
        margin-top: -3%;
      }

      #banner-categorias{
        padding-top: 1%;
        width: 100%;
        height: auto;
      }

      #banner-categorias-contenido {
        width: 100%;
      }

      #catPC {
        margin-right: 2%;
      }

      .cc {
        height: 60px !important;
      }

      #brand-display {
        display: flex;
      }
      
        /* BUSCADOR */ 

        #resultsList {
          list-style: none;
          padding: 0;
          position: absolute;
          margin-top: 7%;
          top: 100%;
          left: 0;
          width: 100%;
          max-height: 400px;
          overflow-y: auto;
          border: 1px solid #ccc;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          z-index: 9999; /* Establecemos un valor de z-index mayor para la lista de resultados */

      }

      #resultsList.hidden {
          display: none;
      }

      #resultsList li {
          margin: 0;
          padding: 10px;
          cursor: pointer;
      }

      #resultsList li:hover {
          background-color: #007bff;
          color: #fff;

      }

      .selected {
          background-color: #007bff;
          color: #fff;
      }

      .search--product{
        text-align: left;
      }
      .productos-relacionados {
        width: 100%;
        text-align: center;
      }
      #productosRelacionados {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
      }


      .banner-product-PA{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
        width: 100%;
      }  

      #banner-product-Tienda{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
        width: 100%;
      }  

      .product-PA {
        margin: 1%;
        display: flex;
        justify-content: center;
        width: 48%;
      }
      .product-PA:hover {
        cursor: pointer;
      }
      .imgProductBannerPA:hover {
        transform: scale(1.1);
        /* Escala al hacer hover */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }


      .imgProductBannerPA {
        border: solid 1px gray;
        max-height: 100%;
        max-width: 100%;
      }

      .descripProductBannerPA {
        background-color: white;

        width: 50%;
        height: 100%;
        border: solid 1px gray;
      }
      .titleProductCardPA{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        border: solid 1px gray;
      }
      .descripProductCardPA{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100px;
        border: solid 1px gray;
      }
      .foootProductCardPA {
        text-align: center;
        width: 100%;
        height: 30px;
        border: solid 1px gray;
      }

      .pricePA {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        border: solid 1px gray;
      }

      #panelPedidos{
        width: 100%;
      }

      #contenedorPanelPedidos{
        display: flex;
        justify-content: center;
        text-align: center;
      }

      #pedidosPanelVista{
        text-align: center;
        border: 1px solid #ccc; /* Añado un borde para visualización */

        width: 30%;
      }

      #pedidosVista{
        width: 70%;
      }

      .zonaPedido {
        width: 100%;
        border: 1px solid #ffc46a;
      }

      .zonaPedidoOptions {
        display: flex;
        width: 100%;
        border: 1px solid #ffc46a;
        font-weight: bold;
        text-align: center;
        color: black;
        position: relative;
      }

      .subdivPedidoSolicitado {
        width: 20%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ddd; /* Borde gris de 1px */
        background-color: #add8e6; /* Color de fondo celeste pastel */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .descargarPedidoSolicitado {
        text-decoration: none;
        color: #000;
        background-color: #ffec8b; /* Fondo amarillo taxi pastel */
        padding: 10px;
        box-sizing: border-box;
        transition: background-color 0.3s; /* Transición para el cambio de color */
      }

      .descargarPedidoSolicitado:hover {
          background-color: #ffd700; /* Cambio de color amarillo al pasar el cursor */
      }

      
      .eliminarPedidoSolicitado {
        width: 20%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #ff6666; /* Fondo rojo */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
    }

    .eliminarPedidoSolicitado:hover {
        background-color: #cc0000; /* Cambia el color al pasar el cursor */
    }

    #imgPedido {
      width: 100%;
      height: auto;
    }
    /* Fin PC */
}
  `
  const contenidoTIENDA = `
      
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
     <title id="title-web"></title>
     <!-- Favicon -->
     <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
     <style>
     body {
         display: none; /* Oculta el contenido inicialmente */
        }
    </style>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
    </head>
  <body>
  
      <div class="whatsapp-button">
        <a id="btnWhatsApp" href="#" target="_blank">
            <img src="../whatsapp-logo.png" alt="WhatsApp">
        </a>
      </div>
      <!--================================
          START HEADER AREA
      =================================-->
      <header style="background-color: #192223;" id="header">
        <div class="logo-header" >
            <a href="${nombreArchivo}.html">
                    <img id="logo-pc" src="#" alt="">
                    <img id="logo-mobile" src="#" alt="">
  
             </a>
        </div>
        <div class="searcher">
          <div class="input-group mb-3">
            <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
                aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
            <ul style="display: none;" id="resultsList"></ul>

            <button class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
        </div>
        </div>
  
  
    </header>
    <!--================================
        END HEADER AREA
    =================================-->
      <!--================================
          START NAV-SLIDER AREA
      =================================-->
      <section  id="nav-slider-area">
        <div id="nav-header" >
          <nav  class="navbar navbar-expand-lg" >
            <div class="container-fluid">
              <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="dropdown">
                      <a class="nav-link link-header" href="#">Categorias  ▼</a>
                      <div id="cat-display" class="dropdown-content">

                      </div>        
                  </li>
                  <div id="brand-display">

                  </div>
                  <li class="nav-item">
                    <a class="nav-link link-header" href="tienda.html">Tienda</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            <div id="div-carrito"  >
            <!-- Botón de carrito con lista desplegable -->
            <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()" onmouseout="ocultarListaCarrito()">
              <span id="cantidad-carrito" >(0)</span> <span id="carrito-logo">🛒</span> 
              
              <div id="lista-carrito">
                  <div id="titulo-de-lista">
                      <h3>Carrito de Compras</h3>
                  </div>
                  <div id="lista-productos">
  
                  </div>
                  <!-- Lista de productos en el carrito -->
                  <div id="mensaje-carrito-vacio">
                    <p>Tu carrito está vacío.</p>
                    <a href="tienda.html">IR A TIENDA</a>
                  </div>
                  <div id="btnIniciarCompra">
                      <div class="mb-3">
                        <span>TOTAL:</span>
                        <span style="float: right;" id="total"></span>
                      </div>
                      <div>
                          <a href="checkout.html" style="float: right;"  class="btn btn-primary btnCheckout">Iniciar Compra</a>
                          <button style="float: left;background-color: red;"  onclick="limpiarCarrito()" class="btn btn-primary btn--lg">Limpiar</button>    
                      </div>
                  </div>
              </div>
          </div>
            </div>
          </div>

      </section>
      <!--================================
          END NAV-SLIDER AREA
      =================================-->
      <!--================================
          START SHOPS LIST AREA
      =================================-->
      <section id="shops-list-area">
        <div id="prodVistaTienda">
          <h1 class="mb-3">TODOS LOS PRODUCTOS</h1>
          <div id="searcherProductList" class="mb-3">
            <input type="text" class="search-input" id="searchInputProductList" placeholder="Buscar Productos">
          </div>
          <div id="banner-product-Tienda">

  
          </div>
        </div>
  
      </section>
      <!--================================
          END SHOPS LIST AREA
      =================================-->
  
      <!--================================ 
          START FOOTER AREA
      =================================-->
      <footer id="footer-area">
        <div style="margin: 1%;" class="subfoot-t1">
          <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#" class="linksFooter">Eureka.ar</a>.</p>
        </div>
  
    </footer>
    <!--================================
        END FOOTER AREA
    =================================-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <script type="module" src="js.js" ></script>
  
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
        <script>
          window.onload = function(){

            obtenerProductosDesdeLocalStorage();
  
            agregarAlCarrito();
          }
  
        </script>
              <script>
                //carrito
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
                cantidadProducto.textContent = `+cantidadCarro+`;
            
        
        
                const enlaceProducto = document.createElement('a');
                enlaceProducto.className = 'title-product';
                enlaceProducto.href = '#';
                enlaceProducto.textContent = getShortTitleCart(titulo);
            
        
                const precioProducto = document.createElement('span');
                precioProducto.className = 'precio-producto';
                let prodCant = price.replace('$', '');
                let prodCant1 = prodCant.replace('.', '');
                let precio = prodCant1

                precioProducto.textContent = `+precioCarro+`;
total = parseInt(total) + parseInt(precio);
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
                document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
            
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
          if (title.length > 20) title = title.substring(0, 20);
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
            cantidadProducto.textContent = `+cantidadCarro+`;
        
        
        
            const enlaceProducto = document.createElement('a');
            enlaceProducto.href = '#';
            enlaceProducto.textContent = getShortTitleCart(titulo);
        
            const precioProducto = document.createElement('span');
            precioProducto.className = 'precio-producto';
            let prodCant = price.replace('$', '');
            let prodCant1 = prodCant.replace('.', '');
            let precio = prodCant1*cantidad
        
            precioProducto.textContent = $`+precioCarro+`;
            total = parseInt(total) + precio;
            nuevoItem.appendChild(cantidadProducto);
            nuevoItem.appendChild(enlaceProducto);
            nuevoItem.appendChild(precioProducto);
        
            listaCarrito.appendChild(nuevoItem);
        
            cantidadProductosEnCarrito += cantidad;
            document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
        
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

                // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
                function goToCat() {
          var Categoria = event.target.innerHTML;

          localStorage.titleCat = Categoria; 
          window.location = "product-category.html";
        }

                // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
        function goToBrand() {
          var brand = event.target.innerHTML;

          localStorage.titleBrand = brand; 
          window.location = "product-brand.html";
        }

              //FILTRAR PRODUCTOS EN BUSCADOR
      document.addEventListener("DOMContentLoaded", function () {
        // Obtén referencias al input y al contenedor de divs
        var filtroInput = document.getElementById("searchInputProductList");
        var contenedorDivs = document.getElementById("banner-product-Tienda");
  
        // Agrega un event listener al input para el evento 'input'
        filtroInput.addEventListener("input", function () {
          // Obtén el valor del input y conviértelo a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
          var filtro = filtroInput.value.toLowerCase();
  
          // Obtén todos los divs dentro del contenedor
          var divs = contenedorDivs.getElementsByClassName("productoFiltro");
  
          // Recorre cada div y muestra u oculta según el filtro
          for (var i = 0; i < divs.length; i++) {
            var textoDiv = divs[i].textContent.toLowerCase();
            if (textoDiv.includes(filtro)) {
              divs[i].style.display = "flex";
            } else {
              divs[i].style.display = "none";
            }
          }
        });
      });
              </script>
  </body>
  </html>
  
  
  `
  const contenidoCHECKOUT = `


  <!DOCTYPE html>
  <html lang="es">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <title id="title-web"></title>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>


    <!-- Favicon -->
    <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
    <style>
       body {
           display: none; /* Oculta el contenido inicialmente */
             }
     </style>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
  </head>
  
  <body id="shopList">
  
    <div class="whatsapp-button">
      <a id="btnWhatsApp" href="#" target="_blank">
          <img src="../whatsapp-logo.png" alt="WhatsApp">
      </a>
    </div>
    <!--================================
        START HEADER AREA
    =================================-->
    <header style="background-color: #192223;" id="header">
        <div class="logo-header" >
            <a href="${nombreArchivo}.html">
                    <img id="logo-pc" src="#" alt="">
                    <img id="logo-mobile" src="#" alt="">
             </a>
        </div>
        <div class="searcher">
         <div class="input-group mb-3">
             <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
                 aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
             <ul style="display: none;" id="resultsList"></ul>

             <button class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
         </div>
     </div>


    </header>
    <!--================================
        END HEADER AREA
    =================================-->
     <!--================================
         START NAV-SLIDER AREA
     =================================-->
     <section  id="nav-slider-area">
       <div id="nav-header" >
         <nav  class="navbar navbar-expand-lg" >
           <div class="container-fluid">
             <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNavDropdown">
               <ul class="navbar-nav">
                 <li class="dropdown">
                     <a class="nav-link link-header" href="#">Categorias  ▼</a>
                     <div id="cat-display" class="dropdown-content">

                     </div>        
                 </li>
                 <div id="brand-display">

                 </div>
                 <li class="nav-item">
                   <a class="nav-link link-header" href="tienda.html">Tienda</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                 </li>
               </ul>
             </div>
           </div>
         </nav>

         </div>

     </section>
     <!--================================
         END NAV-SLIDER AREA
     =================================-->

    <!--================================
          START CHECKOUT AREA
      =================================-->
    <section style="padding: 3% ; background-color: whitesmoke;">
      <div id="checkout-form" class="checkout-form">
        <div class="form-data">
          <h3 id="tittle-form-data">DETALLES DE FACTURACION</h3>
          <div class="form-data-values mb-3">
            <div class="col-md-6">
              <h5>Nombre</h5>
              <input id="name" type="text" placeholder="Tu Nombre Aqui">
            </div>
            <div class="col-md-6">
              <h5>Apellido</h5>
              <input id="lastname" type="text" placeholder="Tu Apellido Aqui">
            </div>
          </div> 
          <div class="form-data-values mb-3">
            <div class="col-md-6">
              <h5>Domicilio</h5>
              <input id="country" type="text" placeholder="Tu Domicilio Aqui">
            </div>
            <div class="col-md-6">
              <h5>Provincia</h5>
              <input id="province" type="text" placeholder="Tu Provincia Aqui">
            </div>
          </div>
          <div class="form-data-values mb-3">
            <div class="col-md-6">
              <h5>Ciudad</h5>
              <input id="city" type="text" placeholder="Tu Ciudad Aqui">
            </div>
            <div class="col-md-6">
              <h5>Codigo Postal</h5>
              <input id="postalCode" type="number" placeholder="5960">
            </div>
          </div>
          <div class="form-data-values mb-3">
            <div class="col-md-6">
              <h5>Telefono</h5>
              <input id="phone" type="text" placeholder="3415847965">
            </div>
            <div class="col-md-6">
              <h5>Email</h5>
              <input id="email" type="text" placeholder="alguien@gmail.com">
            </div>
          </div>
          <div style="width: 100%;" class=" mb-3">
            <h5>Notas del Pedido(Opcional)</h5>
            <textarea id="references" style="width: 100%;" name="textarea"  rows="10" cols="50"
              placeholder="Notas sobre tu pedido, por ejemplo, notas especiales de entrega."></textarea>
          </div>
        </div>
  
        <div class="form-cart">
          <h3 id="tittle-form-data" style="font-weight: bold;">Tu Pedido Nro <span id="pedidoNro"></span></h3>
  
          <div style="border-bottom: solid 1px grey; display: flex;">
            <h5>Productos</h5>
            <h5 style="margin-left: 38%;">Subtotal</h5>
          </div>
          <div id="lista-productos">
  
          </div>
          <div style="padding: 5%; border-bottom: solid 1px grey;">
            <span style="font-weight: bold;">TOTAL:</span>
            <span style="float: right;" id="total"></span>
          </div>
  
          <div id="subtotal-envio-total">
            <p style="display: none;" id="cantidad-carrito"></p>
            <div style="padding: 5%; height: auto;  border-bottom: solid 1px grey;" class="mb-3">
              <span style="float: left; font-weight: bold; margin-top: 1%;" class="mb-3">ENVIO</span>
  
              <div style="margin-left: 25%;">
  
                <select id="typeEnvio" class="form-control" placeholder="Escribe tu marca" aria-label="Username"
                aria-describedby="basic-addon1">
                  <option value="">Selecciona el Tipo de Envio</option>
                  <option value="Envio A Domicilio">Envio A Domicilio</option>
                  <option value="Retiro por el Local">Retiro por el Local.</option>
                </select>
              </div>
  
            </div>
          </div>
          <div style="padding: 5%; border-bottom: solid 1px grey;" id="opciones-de-pago">
            <span style="float: left; font-weight: bold; margin-top: 1%;" class="mb-3">PAGO</span>
  
            <div style="margin-left: 25%;">
              <select id="typePago" class="form-control" placeholder="Escribe tu marca" aria-label="Username"
              aria-describedby="basic-addon1">
                <option value="">Selecciona el Tipo de Pago</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                <option value="MercadoPago">MercadoPago</option>
              </select>
            </div>
          </div>
          <div style="margin-top: 1%; padding: 5%; text-align: center;" id="realizar-compra">
            <p>Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y
              para otras finalidades descritas en nuestra <a href="#">política de privacidad.</a></p>
            <button id="realizar-pedido" style="background-color:#192223;" class="btn btn-primary btn--lg">REALIZAR
              PEDIDO</button>
          </div>
        </div>
      </div>
      <div style="display: none;" id="order-received" >
        <div id="gracias-checkout" class="mb-3">
          <img id="logo-pcor" src="#" alt="">

          <h3 id="PedidoPCE">Pedido procesado con exito, muchas gracias!</h3>
        </div>
        <div id="info-pedido" class="mb-3">
          <div>
  
            <p>NUMERO DEL PEDIDO:</p>
  
            <span id="num-pedido">10995</span>
          </div>
          <div>
  
            <p>FECHA Y HORA:</p>
  
            <span id="fecha-pedido">13/10/2023</span>
          </div>
          <div>
  
            <p>EMAIL:</p>
  
            <span id="email-comprador">eureka.tiendas@gmail.com</span>
          </div>
          <div>
  
            <p>TOTAL:</p>
  
            <span style="color: red;" id="total-pedido">$10.000</span>
          </div>
          <div>
  
            <p>METODO DE PAGO:</p>
  
            <span id="tipo-pago-pedido">Transferencia Bancaria</span>
          </div>
        </div>
        <div id="header-detalles-pedido">
          <span style="color: white; font-weight: bold; font-size: 200%;" >DETALLES DEL PEDIDO</span>
        </div>
        <div id="detalles-pedido" class="mb-3">
  
          <div id="direccion-facturacion">
            <div>
              <span id="nombre-apellido" for=""></span>
            </div>
            <div>
              <span id="pais" for=""></span>
            </div>
            <div>
              <span id="provincia" for=""></span>
            </div>
            <div>
              <span id="ciudad" for=""></span>
            </div>
            <div>
              <span id="codigo-postal" for=""></span>
            </div>
            <div>
              <span id="telefono" for=""></span>
            </div>
            <div>
              <span id="correo-electronico" for=""></span>
            </div>
            <div>
              <span id="notas-de-pedido" for=""></span>
            </div>
          </div> 
            <div id="lista-productos-pedido">
  
            </div>
        </div>
        <div id="total-btn">
          <div style="width: 100%;" >
            <span>TOTAL:</span>
            <span id="total-checkout"></span>
          </div>
        </div>

        <div style="width: 100%; text-align: center; padding: 1%;" >
          <h3>Powered By:</h3><a href="www.myecom.com.ar"><h3 style="font-weight: bold; color: black;">www.myecom.com.ar</h3></a>

          <a id="btnEnviarPedido" class="btn btn-primary btn-header" >DESCARGAR PEDIDO!</a>
        </div>
      </div>
      <div style="display: none;" id="enviarAWhats">
        <div id="gracias-checkout" class="mb-3">
          <img id="logo-pcor" src="#" alt="">
          <h1>*ATENCION*</h1>
          <h2>La confirmacion se efectua al enviar el mensaje por whatsapp al vendedor.</h2>
          <h3>Tu pedido se proceso con exito, ahora enviale un mensaje al vendedor CONFIRMANDO y reenviarle la imagen del pedido que se descargo en tu dispositivo!</h3>
          
          <a id="btnEnviarAWhats" class="btn btn-primary btn-header" >ENVIAR PEDIDO AL VENDEDOR</a>

        </div>
      </div>
    </section>
    <!--================================
          END CHECKOUT AREA
      =================================-->
  
      <!--================================ 
          START FOOTER AREA
      =================================-->
      <footer id="footer-area">
          <div style="margin: 1%;" class="subfoot-t1">
            <p>© 2023 <a href="">${nombreArchivo} Theme</a>. All rights reserved. Created by <a href="#">Eureka.ar</a>.</p>
          </div>
  
      </footer>
      <!--================================
          END FOOTER AREA
      =================================-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"></script>
    <script type="module" src="js.js"></script>
  
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
      integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
      crossorigin="anonymous"></script>
    <script>
  
      window.onload = function () {

        obtenerProductosDesdeLocalStorage();
      }
      const realizarPedido = document.getElementById('realizar-pedido');
      const name1 = document.getElementById('name');
      const lastName = document.getElementById('lastname');
      const country = document.getElementById('country');
      const province = document.getElementById('province');
      const city = document.getElementById('city');
      const postalCode = document.getElementById('postalCode');
      const phoneNumber = document.getElementById('phone');
      const email = document.getElementById('email');
      const references = document.getElementById('references');

        //PASO PREVIO A ENVIAR AL VENDEDOR 
        const numPedido = document.getElementById('num-pedido');
        const fechaPedido = document.getElementById('fecha-pedido');
        const emailPedido = document.getElementById('email-comprador');
        const pagoPedido = document.getElementById('tipo-pago-pedido');

  
      realizarPedido.addEventListener('click', function () {
        if (name1.value == "" || lastName.value == "" ||
          country.value == "" || province.value == "" || city.value == "" ||
          postalCode.value == "" || phoneNumber.value == "" || email.value == "" ||
          references.value == "") {
          swal({
            title: "No Puedes Dejar Casilleros Vacios!",
            icon: "warning",
            button: "OK!",
          });
        } else {
          swal({
            title: "Chequeaste la info?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                swal("Pedido Procesado con Exito!", {
                  icon: "success",
                }).then(function () {
  
                  const nombre = document.getElementById('name').value;
                  const apellido = document.getElementById('lastname').value;
                  const pais = document.getElementById('country').value;
                  const provincia = document.getElementById('province').value;
                  const ciudad = document.getElementById('city').value;
                  const codigoPostal = document.getElementById('postalCode').value;
                  const telefono = document.getElementById('phone').value;
                  const correoElectronico = document.getElementById('email').value;
                  const notasPedido = document.getElementById('references').value;


                  document.getElementById('nombre-apellido').innerHTML = "Nombre y Apellido: " + nombre +" "+ apellido ;
                  document.getElementById('pais').innerHTML = "Domicilio: " + pais ;
                  document.getElementById('provincia').innerHTML = "Provincia: " + provincia ;
                  document.getElementById('ciudad').innerHTML = "Ciudad: " + ciudad ;
                  document.getElementById('codigo-postal').innerHTML = "Codigo Postal: " +  codigoPostal ;
                  document.getElementById('telefono').innerHTML = "Telefono: " +  telefono ;
                  document.getElementById('correo-electronico').innerHTML = "Email: " +  correoElectronico ;
                  document.getElementById('notas-de-pedido').innerHTML = "Notas: " +  notasPedido ;

                  const pagoPedido = document.getElementById('typePago').value;
                  const envioPedido = document.getElementById('typeEnvio').value;

                  var fechaActual = new Date();

                  // Obtén el año, mes, día, hora y minutos
                  var año = fechaActual.getFullYear();
                  var mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
                  var dia = fechaActual.getDate();
                  var hora = fechaActual.getHours();
                  var minutos = fechaActual.getMinutes();

                  // Formatea la fecha y hora como cadenas de texto
                  fechaPedido.textContent = `+timer+`;


                  emailPedido.textContent = correoElectronico;
                  pagoPedido.textContent = pagoPedido;

                  document.getElementById('checkout-form').style.display = "none";
                  document.getElementById('order-received').style.display = "block";
                  obtenerProductosDesdeLocalStorage()
                });
  
              } else {
                swal({
                  title: "Dale un vistazo Nuevamente!",
                  icon: "warning",
                });
              }
            });
        }
      });



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
let cantidadProductosEnCarrito = 0;

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
        cantidadProducto.textContent = `+cantidadCarro+`;
    


        const enlaceProducto = document.createElement('a');
        enlaceProducto.className = 'title-product';
        enlaceProducto.href = '#';
        enlaceProducto.textContent = getShortTitleCart(titulo);
    

        const precioProducto = document.createElement('span');
        precioProducto.className = 'precio-producto';
        let prodCant = price.replace('$', '');
        let prodCant1 = prodCant.replace('.', '');
        let precio = prodCant1

        precioProducto.textContent = `+precioCarro+`;
        total = parseInt(total) + parseInt(precio);
        nuevoItem.appendChild(cantidadProducto);
        nuevoItem.appendChild(enlaceProducto);
        nuevoItem.appendChild(precioProducto);
        document.getElementById('total').textContent = "$"+total;
        
        // Supongamos que tienes un objeto llamado "miObjeto"
        var totalCheckOut = document.getElementById('total-checkout');
        var totalPedido = document.getElementById('total-pedido');

        // Verificar si el objeto existe
        if (totalCheckOut !== null && typeof totalCheckOut !== 'undefined') {
            // El objeto existe, realiza la acción que deseas
            totalCheckOut.textContent = "$"+total/2;
            totalPedido.textContent = "$"+total/2;

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
        document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
    
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
  if (title.length > 20) title = title.substring(0, 20);
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
    cantidadProducto.textContent = `+cantidadCarro+`;



    const enlaceProducto = document.createElement('a');
    enlaceProducto.href = '#';
    enlaceProducto.textContent = getShortTitleCart(titulo);

    const precioProducto = document.createElement('span');
    precioProducto.className = 'precio-producto';
    let prodCant = price.replace('$', '');
    let prodCant1 = prodCant.replace('.', '');
    let precio = prodCant1*cantidad

    precioProducto.textContent = $`+precioCarro+`;
    total = parseInt(total) + precio;
    nuevoItem.appendChild(cantidadProducto);
    nuevoItem.appendChild(enlaceProducto);
    nuevoItem.appendChild(precioProducto);

    listaCarrito.appendChild(nuevoItem);

    cantidadProductosEnCarrito += cantidad;
    document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;

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
              // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
              function goToCat() {
          var Categoria = event.target.innerHTML;

          localStorage.titleCat = Categoria; 
          window.location = "product-category.html";
        }

                // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
        function goToBrand() {
          var brand = event.target.innerHTML;

          localStorage.titleBrand = brand; 
          window.location = "product-brand.html";
        }




    </script>
  </body>
  
  </html>
  
  `
  const contenidoPRODETAILS = `
  <!DOCTYPE html>
  <html lang="es">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <title id="title-web"></title>
      <!-- Favicon -->
      <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
      <style>
          body {
              display: none;
              /* Oculta el contenido inicialmente */
          }
          #productosRelacionadosCategoria {
              overflow: hidden;
              width: 100%;
              margin: auto;
              position: relative;
          }
  
          #productosRelacionados {
              display: flex;
              transition: transform 0.5s ease-in-out;
          }
  
          .shop--CardPD {
              min-width: 25%;
              box-sizing: border-box;
              overflow: hidden;
          }
  
          #prevPD, #nextPD {
              cursor: pointer;
              font-size: 24px;
              margin: auto 5px;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
          }
          
          #prevPD {
              left: 0;
          }
  
          #nextPD {
              right: 0;
          }
          @media (max-width: 600px) { 
              .info-product {
              display: none;
          }
          }
  
      </style>
      <script>
                  // Funciones para sumar y restar
                  function sumar() {
              var sumandoInput = document.getElementById("sumando");
              var valorActual = parseInt(sumandoInput.value);
              sumandoInput.value = valorActual + 1;
          }
  
          function restar() {
              var sumandoInput = document.getElementById("sumando");
              var valorActual = parseInt(sumandoInput.value);
              // Asegúrate de que el valor no sea negativo
              if (valorActual > 0) {
                  sumandoInput.value = valorActual - 1;
              }
          }
  
          function addToCart() {
              const inputCant = document.getElementById('sumando').value;
              agregarAlCarrito(document.getElementById("titleli").textContent, inputCant, document.getElementById("price").textContent);
              document.getElementById('sumando').value = 0;
          }
  
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
  
  function agregarAlCarrito(titulo, inputCant, price) {
              var cantidad = parseInt(inputCant, 10);
              if (cantidad > 0) {
                  const listaCarrito = document.getElementById('lista-productos');
                  const nuevoItem = document.createElement('div');
                  nuevoItem.className = 'item-carrito';
  
                  const cantidadProducto = document.createElement('span');
                  cantidadProducto.className = 'cantidad-producto';
                  cantidadProducto.textContent = `+cantidadCarro+`;
  
  
  
                  const enlaceProducto = document.createElement('a');
                  enlaceProducto.href = '#';
                  enlaceProducto.textContent = getShortTitleCart(titulo);
  
                  const precioProducto = document.createElement('span');
                  precioProducto.className = 'precio-producto';
                  let prodCant = price.replace('$', '');
                  let prodCant1 = prodCant.replace('.', '');
                  let precio = prodCant1 * cantidad
  
                  precioProducto.textContent = `+precioCarro+`;
                  total = parseInt(total) + precio;
                  nuevoItem.appendChild(cantidadProducto);
                  nuevoItem.appendChild(enlaceProducto);
                  nuevoItem.appendChild(precioProducto);
  
                  listaCarrito.appendChild(nuevoItem);
  
                  cantidadProductosEnCarrito += cantidad;
                  document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
  
                  cantidad.value = 1;
  
                  const nuevoProducto = {
                      nombre: titulo,
                      precio: "$" + precio,
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
                  localStorage.setItem('productosEnCarrito', JSON.stringify(carritoExistente));
              }
          }
  
          function getShortTitleCart(title) {
    if (title.length > 20) title = title.substring(0, 20);
    else return title;
    return title + "...";
  }
  
  function goToCat() {
           var Categoria = event.target.innerHTML;
  
           localStorage.titleCat = Categoria; 
           window.location = "product-category.html";
         }
  
                 // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
         function goToBrand() {
           var brand = event.target.innerHTML;
  
           localStorage.titleBrand = brand; 
           window.location = "product-brand.html";
         }
      </script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
  </head>
  
  <body>
      <div class="whatsapp-button">
          <a id="btnWhatsApp" href="#" target="_blank">
              <img src="../whatsapp-logo.png" alt="WhatsApp">
          </a>
      </div>
      <!--================================
              START HEADER AREA
          =================================-->
      <header id="header">
          <div class="logo-header">
              <a href="${nombreArchivo}.html">
                  <img id="logo-pc" src="#" alt="">
                  <img id="logo-mobile" src="#" alt="">
              </a>
          </div>
          <div class="searcher">
              <div class="input-group mb-3">
                  <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
                      aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
                  <ul style="display: none;" id="resultsList"></ul>
  
                  <button class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
              </div>
          </div>
  
  
      </header>
      <!--================================
              END HEADER AREA
          =================================-->
      <!--================================
              START NAV-SLIDER AREA
          =================================-->
      <section id="nav-slider-area">
          <div id="nav-header">
              <nav class="navbar navbar-expand-lg">
                  <div class="container-fluid">
                      <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                          aria-label="Toggle Navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul class="navbar-nav">
                              <li class="dropdown">
                                  <a class="nav-link link-header" href="#">Categorias ▼</a>
                                  <div id="cat-display" class="dropdown-content">
  
                                  </div>
                              </li>
                              <div id="brand-display">
  
                              </div>
                              <li class="nav-item">
                                  <a class="nav-link link-header" href="tienda.html">Tienda</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
  
              <div id="div-carrito">
                  <!-- Botón de carrito con lista desplegable -->
                  <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()"
                      onmouseout="ocultarListaCarrito()">
                      <span id="cantidad-carrito">(0)</span> <span id="carrito-logo">🛒</span>
  
                      <div id="lista-carrito">
                          <div id="titulo-de-lista">
                              <h3>Carrito de Compras</h3>
                          </div>
                          <div id="lista-productos">
  
                          </div>
                          <!-- Lista de productos en el carrito -->
                          <div id="mensaje-carrito-vacio">
                              <p>Tu carrito está vacío.</p>
                              <a href="tienda.html">IR A TIENDA</a>
                          </div>
                          <div id="btnIniciarCompra">
                              <div class="mb-3">
                                  <span>TOTAL:</span>
                                  <span style="float: right;" id="total"></span>
                              </div>
                              <div>
                                  <a href="checkout.html" style="float: right;"
                                      class="btn btn-primary btnCheckout">Iniciar Compra</a>
                                  <button style="float: left;background-color: red;" onclick="limpiarCarrito()"
                                      class="btn btn-primary btn--lg">Limpiar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!--================================
              END NAV-SLIDER AREA
          =================================-->
  
  
      <!--============================================
          START SINGLE PRODUCT DESCRIPTION AREA
      ==============================================-->
      <div class="single-product-area">
          <div class="single-product-img">
              <div class="item__preview-thumb">
                  <img id="prev-0" class="prevImg" src="" alt="">
                  <img id="prev-1" class="prevImg" src="" alt="">
                  <img id="prev-2" class="prevImg" src="" alt="">
                  <img id="prev-3" class="prevImg" src="" alt="">
                  <img id="prev-4" class="prevImg" src="" alt="">
              </div>
              <div class="item__preview-slider">
                  <div class="prev-slide">
                      <img id="bigimg" src=""
                          alt="Keep calm this isn't the end of the world, the preview is just missing.">
                  </div>
  
              </div>
              <!-- end /.item--preview-slider -->
  
          </div>
          <!-- end /.item__preview-thumb-->
          <div class="single-product-details">
              <div class="product-title-area mb-3">
                  <div class="product__title">
                      <h4 id="titleli">Productos Cargados Recientemente</h4>
                  </div>
              </div>
              <div class="pricePD">
                  <span id="stockSpan"></span>
  
                  <h1 id="price">
                      <sup>$</sup>999 -
                  </h1><br>
  
              </div>
              <div class="divSumandoPD mb-3">
                  <div class="input-sumando">
                      <div class="input-group">
                          <button class="btn btn-outline-secondary" type="button" onclick="restar()"
                              aria-expanded="false">-</button>
                          <input type="text" style="text-align: center;" class="form-control" id="sumando" value="0"
                              readonly>
                          <button class="btn btn-outline-secondary" type="button" onclick="sumar()"
                              aria-expanded="false">+</button>
                      </div>
  
                  </div>
                  <div id="btnAddToCart" class="addtocart-button">
                      <button onclick="addToCart()" id="btnPurchase" class="btnAddToCart btn-header">Agregar Al Carrito</button>
                  </div>
                  <!-- end /.purchase-button -->
              </div>
  
              <div class="fade show tab-pane product-tab active" id="product-details">
                  <div class="tab-content-wrapper">
                      <p id="description">Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut
                          scelerisque the
                          mattis, leo quam aliquet congue placerat mi id nisi interdum mollis. Praesent pharetra,
                          justo ut scel erisque the mattis, leo quam aliquet congue justo ut scelerisque. Praesent
                          pharetra, justo ut scelerisque the mattis, leo quam aliquet congue justo ut scelerisque.</p>
                  </div>
              </div>
          </div>
      </div>
      <!-- end /.col-md-4 -->
      <!--===========================================
          END SINGLE PRODUCT DESCRIPTION AREA
      ===============================================-->
      <!--===========================================
          START PRODUCTOS RELACIONADOS
        ===============================================-->
      <div class="productos-relacionados">
          <h3>PRODUCTOS RELACIONADOS</h3>
  
          <div id="productosRelacionadosCategoria">
              <div id="productosRelacionados">
                  <!-- Tus imágenes aquí -->
      
              </div>
              <div id="prevPD">&lt;</div>
              <div id="nextPD">&gt;</div>
          </div>
      </div>
  
      <!--===========================================
          END PRODUCTOS RELACIONADOS
        ===============================================-->
  
      <!--================================ 
            START FOOTER AREA
        =================================-->
      <footer id="footer-area">
          <div style="margin: 1%;" class="subfoot-t1">
              <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#"
                      class="linksFooter">MyEcom</a>.</p>
          </div>
  
      </footer>
      <!--================================
          END FOOTER AREA
      =================================-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"></script>
      <script type="module" src="js.js"></script>
  
      <script type="module" >
          
      //INICIO CONEXION A FIREBASE
      //CONECTAR FIREBASE
      //FIREBASE 
      // IMPORTS + CONFIGURATION
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
      import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
      from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";
  
      import { getDatabase, onValue, ref, set,push, child, get, update, remove }
      from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
  
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyAeYmYuIobZrOhJ2UVg2K_bRNsIamNYa10",
        authDomain: "myecom-415a4.firebaseapp.com",
        databaseURL: "https://myecom-415a4-default-rtdb.firebaseio.com",
        projectId: "myecom-415a4",
        storageBucket: "myecom-415a4.appspot.com",
        messagingSenderId: "219326371024",
        appId: "1:219326371024:web:a13405d51310e091377ad5",
        measurementId: "G-J7MJ3W5PZT"
      };
  
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const realdb = getDatabase();
  
  
  
          var productId = localStorage.id;
          var xxr = productId.replace('"', '')
          var xxrx = xxr.replace('"', '')
  
          window.onload = function () {
              obtenerProductosDesdeLocalStorage();
  
  
              
  
              GetAllInfo();
  
              EventosCambio();
              GetAllProductsEpanel();
  
          }
  
          var prodRelacionados = "";
          function putAllInfo(brand, category, description, name, price, sku, stock, zimgProduct, zimgSecundarias) {
  
              if(sku == xxrx) {
              document.getElementById('titleli').textContent = name;
              document.getElementById('price').textContent ="$"+ price;
              document.getElementById('description').textContent = description;
              document.getElementById('bigimg').src = zimgProduct;
              document.getElementById('prev-0').src = zimgProduct;
              document.getElementById('prev-1').src = zimgSecundarias[0];
              document.getElementById('prev-2').src = zimgSecundarias[1];
              document.getElementById('prev-3').src = zimgSecundarias[2];
              document.getElementById('prev-4').src = zimgSecundarias[3];
              prodRelacionados = category;
  
              //CARTEL STOCK
          var stk = "";
          if (stock <= 0) {
              stk = "SIN STOCK"
              document.getElementById('stockSpan').textContent = stk;
              document.getElementById('stockSpan').style.backgroundColor = "red";
              const btnAddCarrito = document.getElementById('btnPurchase');
              btnAddCarrito.textContent = "SIN STOCK";
              btnAddCarrito.disabled = !btnAddCarrito.disabled;
  
          } else {
              stk = "EN STOCK"
              document.getElementById('stockSpan').textContent = stk;
              document.getElementById('stockSpan').style.backgroundColor = "green";
  
          }
              } else {
                      
              }
        }
    
        function readAllInfo(Productos) {
  
          Productos.forEach(element => {
              putAllInfo(element.brand, element.category, element.description, element.name,
              element.price, element.sku, element.stock, element.zimgProduct, element.zimgSecundarias)
          });
        }
  
          function GetAllInfo() {
              const dbref = ref(realdb, "Usuarios/${nombreArchivo}/Productos");
    
              onValue(dbref, (snapshot) => {
                  var productos = [];
  
                  snapshot.forEach(childSnapshot => {
                  productos.push(childSnapshot.val());
                  });
                  readAllInfo(productos);
              })
          }
  
  
  
  
  
          // INICIO CREAR FUNCION PARA CAMBIAR LA IMAGEN GRANDE SEGUN CUAL IMAGEN PREVIA SE TOQUE
  
          function tomarID(id) {
              var indstart = id.indexOf('-') + 1;
              var indend = id.length;
              return Number(id.substring(indstart, indend));
          }
  
          function cambiarBigImage(event) {
              var index = tomarID(event.target.id);
  
              if (index == 0) {
                  var prev = document.getElementById('prev-0').getAttribute('src');
                  bigimg.src = prev;
              }
              if (index == 1) {
                  var prev = document.getElementById('prev-1').getAttribute('src');
                  bigimg.src = prev;
              }
  
              if (index == 2) {
                  var prev = document.getElementById('prev-2').getAttribute('src');
                  bigimg.src = prev;
              }
  
              if (index == 3) {
                  var prev = document.getElementById('prev-3').getAttribute('src');
                  bigimg.src = prev;
              }
  
              if (index == 4) {
                  var prev = document.getElementById('prev-4').getAttribute('src');
                  bigimg.src = prev;
              }
  
  
          }
  
          function EventosCambio() {
              var btns = document.getElementsByClassName('prevImg');
  
              for (let i = 0; i < btns.length; i++) {
  
                  btns[i].addEventListener('click', cambiarBigImage);
  
              }
          }
  
          // FIN CREAR FUNCION PARA CAMBIAR LA IMAGEN GRANDE SEGUN CUAL IMAGEN PREVIA SE TOQUE
  
  
  
  
          // Función para obtener los productos desde el localStorage
          function obtenerProductosDesdeLocalStorage() {
              const productosEnLocalStorage = localStorage.getItem('productosEnCarrito');
              const productosEnCarrito = productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
              for (let index = 0; index < productosEnCarrito.length; index++) {
                  const titulo = productosEnCarrito[index]['nombre'];
                  const cantidad = productosEnCarrito[index]['cantidad'];
                  const price = productosEnCarrito[index]['precio'];
  
                  const listaCarrito = document.getElementById('lista-productos');
                  const listaCarritoPedido = document.getElementById('order-received');
  
                  const nuevoItem = document.createElement('div');
                  nuevoItem.className = 'item-carrito';
  
                  const cantidadProducto = document.createElement('span');
                  cantidadProducto.className = 'cantidad-producto';
                  cantidadProducto.textContent = `+cantidadCarro+`;
  
  
  
                  const enlaceProducto = document.createElement('a');
                  enlaceProducto.className = 'title-product';
                  enlaceProducto.href = '#';
                  enlaceProducto.textContent = getShortTitleCart(titulo);
  
  
                  const precioProducto = document.createElement('span');
                  precioProducto.className = 'precio-producto';
                  let prodCant = price.replace('$', '');
                  let prodCant1 = prodCant.replace('.', '');
                  let precio = prodCant1 
  
                  precioProducto.textContent = `+precioCarro+`;
                  total = parseInt(total) + parseInt(precio);
                  nuevoItem.appendChild(cantidadProducto);
                  nuevoItem.appendChild(enlaceProducto);
                  nuevoItem.appendChild(precioProducto);
                  document.getElementById('total').textContent = "$" + total;
  
                  // Supongamos que tienes un objeto llamado "miObjeto"
                  var totalCheckOut = document.getElementById('total-checkout');
  
                  // Verificar si el objeto existe
                  if (totalCheckOut !== null && typeof totalCheckOut !== 'undefined') {
                      // El objeto existe, realiza la acción que deseas
                      totalCheckOut.textContent = "$" + total / 2;
                  }
  
  
                  if (listaCarritoPedido !== null && typeof listaCarritoPedido !== 'undefined') {
                      if (window.getComputedStyle(listaCarritoPedido).display === 'block') {
                          document.getElementById('lista-productos-pedido').appendChild(nuevoItem);
                      } else {
                          listaCarrito.appendChild(nuevoItem);
  
                      }
  
                  } else {
                      listaCarrito.appendChild(nuevoItem);
                  }
                  cantidadProductosEnCarrito += cantidad;
                  document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
  
  
              }
  
  
              return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
          }
  
                //INICIO LISTADO PRODUCTOS 
    
    
    
  
  
        var stockCartel = 0;
        var prodPanel = 0;
        function AddProductToListEpanel(brand, category, description, name, price, sku, stock, zimgProduct, zimgSecundarias) {
          if(zimgProduct == null){
            zimgProduct = "../imagenPrinciaplBase.png";
          }
  
          let html =
          `+addProductDetails+`
    
          let newCat = document.createElement('div');
          newCat.classList.add("shop--Card");
          newCat.classList.add("shop--CardPD");
          newCat.classList.add("productoFiltro");
          newCat.innerHTML = html;
          var OuterDivShopList = document.getElementById("productosRelacionados");
  
          OuterDivShopList.append(newCat);
         
          var stkCartel = "stock-" + stockCartel;
        if(stock <= 0)
        {
          document.getElementById(stkCartel).style.backgroundColor = "red";
          document.getElementById(stkCartel).textContent = "SIN STOCK";
        } else {
          document.getElementById(stkCartel).style.backgroundColor = "green";
          document.getElementById(stkCartel).textContent = "EN STOCK";
        }
        stockCartel++;
        AssignAllEvents();
  
      }
   
    
        function AddAllProductsToListEpanel(Productos) {
  
    
          Productos.forEach(element => {
            AddProductToListEpanel(element.brand, element.category, element.description, element.name,
              element.price, element.sku, element.stock, element.zimgProduct , element.zimgSecundarias)
          });
        }
    
    
        function GetAllProductsEpanel() {
          const dbref = ref(realdb, "Usuarios/${nombreArchivo}/Productos");
    
          onValue(dbref, (snapshot) => {
            var productos = [];
    
            snapshot.forEach(childSnapshot => {
              productos.push(childSnapshot.val());
            });
    
            AddAllProductsToListEpanel(productos);
          })
        }
  
        function getShortTitleProduct(title) {
          if (title.length > 24) title = title.substring(0, 24);
          else return title;
          return title + "...";
        }
  
        const slider = document.getElementById('productosRelacionados');
      const prevBtn = document.getElementById('prevPD');
      const nextBtn = document.getElementById('nextPD');
  
      let counter = 0;
      let autoSlideInterval;
  
      nextBtn.addEventListener('click', () => {
          counter++;
          updateSlider();
          resetAutoSlide();
      });
  
      prevBtn.addEventListener('click', () => {
          counter--;
          updateSlider();
          resetAutoSlide();
      });
  
      function updateSlider() {
          const size = document.querySelector('.shop--CardPD').clientWidth;
          slider.style.transform = `+sliderTransf1+`;
  
          // Slider infinito
          if (counter === 4) {
              setTimeout(() => {
                  slider.style.transition = 'none';
                  counter = 0;
                  slider.style.transform = 'translateX(0)';
                  setTimeout(() => {
                      slider.style.transition = 'transform 0.5s ease-in-out';
                  });
              }, 500);
          }
  
          if (counter === -1) {
              setTimeout(() => {
                  slider.style.transition = 'none';
                  counter = 3;
                  slider.style.transform = `+sliderTransf2+`;
                  setTimeout(() => {
                      slider.style.transition = 'transform 0.5s ease-in-out';
                  });
              }, 500);
          }
      }
  
      function autoSlide() {
          counter++;
          updateSlider();
      }
  
      function resetAutoSlide() {
          clearInterval(autoSlideInterval);
          autoSlideInterval = setInterval(autoSlide, 3000); // Cambia la imagen cada 3 segundos
      }
  
      // Inicia el slider automático al cargar la página
      resetAutoSlide();
  
                          //CLICKEAR PRODUCTO E IR A PRODUCT DETAIL CON SUS STATS
                          function GetProductIndex(id) {
                        var indstart = id.indexOf('-') + 1  ;
                        var indend = id.length;
                        return Number(id.substring(indstart, indend));
                    }
                    
                    function GotoProductDetails(event) {
                        var index = GetProductIndex(event.target.id);
                        localStorage.id = JSON.stringify(index);
                        console.log(localStorage.id);
                        window.location = "product-details.html";
                    }
        
                    function AssignAllEvents() {
                        var btns = document.getElementsByClassName('pdProductos');
                        for (let i = 0; i < btns.length; i++) {
                            btns[i].addEventListener('click', GotoProductDetails);
        
                        }
                    }
  
  
      </script>
  </body>
  
  </html>
  `
 const contenidoBRAND = `
     
 <!DOCTYPE html>
 <html lang="es">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
     <link rel="stylesheet" href="styles.css">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <title id="title-web"></title>
    <!-- Favicon -->
    <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
    <style>
    body {
        display: none; /* Oculta el contenido inicialmente */
       }
   </style>
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
   </head>
 <body>
 
     <div class="whatsapp-button">
       <a id="btnWhatsApp" href="#" target="_blank">
           <img src="../whatsapp-logo.png" alt="WhatsApp">
       </a>
     </div>
     <!--================================
         START HEADER AREA
     =================================-->
     <header style="background-color: #192223;" id="header">
       <div class="logo-header" >
           <a href="${nombreArchivo}.html">
                   <img id="logo-pc" src="#" alt="">
                   <img id="logo-mobile" src="#" alt="">
 
            </a>
       </div>
       <div class="searcher">
         <div class="input-group mb-3">
          <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
          aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
      <ul style="display: none;" id="resultsList"></ul>
           <button class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
          </div>
       </div>
 
 
   </header>
   <!--================================
       END HEADER AREA
   =================================-->
     <!--================================
         START NAV-SLIDER AREA
     =================================-->
     <section  id="nav-slider-area">
       <div id="nav-header" >
        <nav  class="navbar navbar-expand-lg" >
          <div class="container-fluid">
            <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="dropdown">
                    <a class="nav-link link-header" href="#">Categorias  ▼</a>
                    <div id="cat-display" class="dropdown-content">

                    </div>        
                </li>
                <div id="brand-display">

                </div>
                <li class="nav-item">
                  <a class="nav-link link-header" href="tienda.html">Tienda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
           <div id="div-carrito"  >
           <!-- Botón de carrito con lista desplegable -->
           <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()" onmouseout="ocultarListaCarrito()">
             <span id="cantidad-carrito" >(0)</span> <span id="carrito-logo">🛒</span> 
             
             <div id="lista-carrito">
                 <div id="titulo-de-lista">
                     <h3>Carrito de Compras</h3>
                 </div>
                 <div id="lista-productos">
 
                 </div>
                 <!-- Lista de productos en el carrito -->
                 <div id="mensaje-carrito-vacio">
                   <p>Tu carrito está vacío.</p>
                   <a href="tienda.html">IR A TIENDA</a>
                 </div>
                 <div id="btnIniciarCompra">
                     <div class="mb-3">
                       <span>TOTAL:</span>
                       <span style="float: right;" id="total"></span>
                     </div>
                     <div>
                         <a href="checkout.html" style="float: right;"  class="btn btn-primary btnCheckout">Iniciar Compra</a>
                         <button style="float: left;background-color: red;"  onclick="limpiarCarrito()" class="btn btn-primary btn--lg">Limpiar</button>    
                     </div>
                 </div>
             </div>
         </div>
           </div>
         </div>

     </section>
     <!--================================
         END NAV-SLIDER AREA
     =================================-->
     <!--================================
         START SHOPS LIST AREA
     =================================-->
     <section id="shops-list-area">
       <div id="bannerProduct" class="mb-4">
         <div id="bannerProductInt" class="colorHeader" >
           <h1 id="bannerProductTitle">TODOS LOS PRODUCTOS : </h1>
         </div>
       </div>
       <div class="banner-product-PA" id="banner-product-PB">

       </div>
 
 
     </section>
     <!--================================
         END SHOPS LIST AREA
     =================================-->
 
     <!--================================ 
         START FOOTER AREA
     =================================-->
     <footer id="footer-area">
       <div style="margin: 1%;" class="subfoot-t1">
         <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#" class="linksFooter">Eureka.ar</a>.</p>
       </div>
 
   </footer>
   <!--================================
       END FOOTER AREA
   =================================-->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
     <script type="module" src="js.js" ></script>
 
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
       <script>

         var titulo = localStorage.titleBrand;

         window.onload = function(){
           
           var title = document.getElementById('bannerProductTitle');

           title.textContent = "TODOS LOS PRODUCTOS DE "+ titulo;
 
           obtenerProductosDesdeLocalStorage();

 
           agregarAlCarrito();
         }
 

 
             function getShortTitle(title) {
                     if (title.length > 15) title = title.substring(0, 20);
                     else return title;
                     return title + "...";
                 }
 
       </script>
             <script>
               //carrito
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
               cantidadProducto.textContent = `+cantidadCarro+`;
           
       
       
               const enlaceProducto = document.createElement('a');
               enlaceProducto.className = 'title-product';
               enlaceProducto.href = '#';
               enlaceProducto.textContent = getShortTitleCart(titulo);
           
       
               const precioProducto = document.createElement('span');
               precioProducto.className = 'precio-producto';
               let prodCant = price.replace('$', '');
               let prodCant1 = prodCant.replace('.', '');
               let precio = prodCant1

              precioProducto.textContent = `+precioCarro+`;
total = parseInt(total) + parseInt(precio);
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
               document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
           
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
         if (title.length > 20) title = title.substring(0, 20);
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
           cantidadProducto.textContent = `+cantidadCarro+`;
       
       
       
           const enlaceProducto = document.createElement('a');
           enlaceProducto.href = '#';
           enlaceProducto.textContent = getShortTitleCart(titulo);
       
           const precioProducto = document.createElement('span');
           precioProducto.className = 'precio-producto';
           let prodCant = price.replace('$', '');
           let prodCant1 = prodCant.replace('.', '');
           let precio = prodCant1*cantidad
       
           precioProducto.textContent = $`+precioCarro+`;
           total = parseInt(total) + precio;
           nuevoItem.appendChild(cantidadProducto);
           nuevoItem.appendChild(enlaceProducto);
           nuevoItem.appendChild(precioProducto);
       
           listaCarrito.appendChild(nuevoItem);
       
           cantidadProductosEnCarrito += cantidad;
           document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
       
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

               // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
               function goToCat() {
         var Categoria = event.target.innerHTML;

         localStorage.titleCat = Categoria; 
         window.location = "product-category.html";
       }

               // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
       function goToBrand() {
         var brand = event.target.innerHTML;

         localStorage.titleBrand = brand; 
         window.location = "product-brand.html";
       }
             </script>
 </body>
 </html>
 
 
 `
 const contenidoCAT = `
      
 <!DOCTYPE html>
 <html lang="es">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
     <link rel="stylesheet" href="styles.css">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <title id="title-web"></title>
    <!-- Favicon -->
    <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
    <style>
    body {
        display: none; /* Oculta el contenido inicialmente */
       }
   </style>
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
   </head>
 <body>
 
     <div class="whatsapp-button">
       <a id="btnWhatsApp" href="#" target="_blank">
           <img src="../whatsapp-logo.png" alt="WhatsApp">
       </a>
     </div>
     <!--================================
         START HEADER AREA
     =================================-->
     <header style="background-color: #192223;" id="header">
       <div class="logo-header" >
           <a href="${nombreArchivo}.html">
                   <img id="logo-pc" src="#" alt="">
                   <img id="logo-mobile" src="#" alt="">
 
            </a>
       </div>
       <div class="searcher">
         <div class="input-group mb-3">
          <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
          aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
          <ul style="display: none;" id="resultsList"></ul>
           <button  class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
          </div>
       </div>
 
 
   </header>
   <!--================================
       END HEADER AREA
   =================================-->
     <!--================================
         START NAV-SLIDER AREA
     =================================-->
     <section  id="nav-slider-area">
       <div id="nav-header" >
        <nav  class="navbar navbar-expand-lg" >
          <div class="container-fluid">
            <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="dropdown">
                    <a class="nav-link link-header" href="#">Categorias  ▼</a>
                    <div id="cat-display" class="dropdown-content">

                    </div>        
                </li>
                <div id="brand-display">

                </div>
                <li class="nav-item">
                  <a class="nav-link link-header" href="tienda.html">Tienda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
           <div id="div-carrito"  >
           <!-- Botón de carrito con lista desplegable -->
           <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()" onmouseout="ocultarListaCarrito()">
             <span id="cantidad-carrito" >(0)</span> <span id="carrito-logo">🛒</span> 
             
             <div id="lista-carrito">
                 <div id="titulo-de-lista">
                     <h3>Carrito de Compras</h3>
                 </div>
                 <div id="lista-productos">
 
                 </div>
                 <!-- Lista de productos en el carrito -->
                 <div id="mensaje-carrito-vacio">
                   <p>Tu carrito está vacío.</p>
                   <a href="tienda.html">IR A TIENDA</a>
                 </div>
                 <div id="btnIniciarCompra">
                     <div class="mb-3">
                       <span>TOTAL:</span>
                       <span style="float: right;" id="total"></span>
                     </div>
                     <div>
                         <a href="checkout.html" style="float: right;"  class="btn btn-primary btnCheckout">Iniciar Compra</a>
                         <button style="float: left;background-color: red;"  onclick="limpiarCarrito()" class="btn btn-primary btn--lg">Limpiar</button>    
                     </div>
                 </div>
             </div>
         </div>
           </div>
         </div>

     </section>
     <!--================================
         END NAV-SLIDER AREA
     =================================-->
     <!--================================
         START SHOPS LIST AREA
     =================================-->
     <section id="shops-list-area">
       <div id="bannerProduct" class="mb-4">
         <div id="bannerProductInt" class="colorHeader" >
           <h1 id="bannerProductTitle">TODOS LOS PRODUCTOS : </h1>
         </div>
       </div>
       <div class="banner-product-PA" id="banner-product-PC">

       </div>
 
 
     </section>
     <!--================================
         END SHOPS LIST AREA
     =================================-->
 
     <!--================================ 
         START FOOTER AREA
     =================================-->
     <footer id="footer-area">
       <div style="margin: 1%;" class="subfoot-t1">
         <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#" class="linksFooter">Eureka.ar</a>.</p>
       </div>
 
   </footer>
   <!--================================
       END FOOTER AREA
   =================================-->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
     <script type="module" src="js.js" ></script>
 
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
       <script>

         var titulo = localStorage.titleCat;
         window.onload = function(){

           var title = document.getElementById('bannerProductTitle');

           title.textContent = "TODOS LOS PRODUCTOS DE "+ titulo;
           obtenerProductosDesdeLocalStorage();

           agregarAlCarrito();

         }

       </script>
             <script>
               //carrito
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
               cantidadProducto.textContent = `+cantidadCarro+`;
           
       
       
               const enlaceProducto = document.createElement('a');
               enlaceProducto.className = 'title-product';
               enlaceProducto.href = '#';
               enlaceProducto.textContent = getShortTitleCart(titulo);
           
       
               const precioProducto = document.createElement('span');
               precioProducto.className = 'precio-producto';
               let prodCant = price.replace('$', '');
               let prodCant1 = prodCant.replace('.', '');
               let precio = prodCant1

               precioProducto.textContent = `+precioCarro+`;
total = parseInt(total) + parseInt(precio);
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
               document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
           
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
         if (title.length > 20) title = title.substring(0, 20);
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
           cantidadProducto.textContent = `+cantidadCarro+`;
       
       
       
           const enlaceProducto = document.createElement('a');
           enlaceProducto.href = '#';
           enlaceProducto.textContent = getShortTitleCart(titulo);
       
           const precioProducto = document.createElement('span');
           precioProducto.className = 'precio-producto';
           let prodCant = price.replace('$', '');
           let prodCant1 = prodCant.replace('.', '');
           let precio = prodCant1*cantidad
       
           precioProducto.textContent = $`+precioCarro+`;
           total = parseInt(total) + precio;
           nuevoItem.appendChild(cantidadProducto);
           nuevoItem.appendChild(enlaceProducto);
           nuevoItem.appendChild(precioProducto);
       
           listaCarrito.appendChild(nuevoItem);
       
           cantidadProductosEnCarrito += cantidad;
           document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
       
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

               // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
               function goToCat() {
         var Categoria = event.target.innerHTML;

         localStorage.titleCat = Categoria; 
         window.location = "product-category.html";
       }

               // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
       function goToBrand() {
         var brand = event.target.innerHTML;

         localStorage.titleBrand = brand; 
         window.location = "product-brand.html";
       }
             </script>
 </body>
 </html>
 
 `
 const contenidoCONTACT = `

 <!DOCTYPE html>
 <html lang="es">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
         <!-- Font Awesome CSS -->
         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
     <link rel="stylesheet" href="styles.css">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <title id="title-web"></title>
     <!-- Favicon -->
     <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
     <style>
        body {
            display: none; /* Oculta el contenido inicialmente */
              }
      </style>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
   </head>
 <body id="shopList">
 
     <div class="whatsapp-button">
       <a id="btnWhatsApp" href="#" target="_blank">
           <img src="../whatsapp-logo.png" alt="WhatsApp">
       </a>
     </div>
     <!--================================
         START HEADER AREA
     =================================-->
     <header style="background-color: #192223;" id="header">
         <div class="logo-header" >
             <a href="${nombreArchivo}.html">
                     <img id="logo-pc" src="images/logo-tema1.png" alt="">
                     <img id="logo-mobile" src="images/logo-mobile.png" alt="">
 
              </a>
         </div>
         <div class="searcher">
          <div class="input-group mb-3">
              <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
                  aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
              <ul style="display: none;" id="resultsList"></ul>

              <button class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
          </div>
      </div>
 
 
     </header>
     <!--================================
         END HEADER AREA
     =================================-->
      <!--================================
          START NAV-SLIDER AREA
      =================================-->
      <section  id="nav-slider-area">
        <div id="nav-header" >
          <nav  class="navbar navbar-expand-lg" >
            <div class="container-fluid">
              <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="dropdown">
                      <a class="nav-link link-header" href="#">Categorias  ▼</a>
                      <div id="cat-display" class="dropdown-content">

                      </div>        
                  </li>
                  <div id="brand-display">

                  </div>
                  <li class="nav-item">
                    <a class="nav-link link-header" href="tienda.html">Tienda</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            <div id="div-carrito"  >
            <!-- Botón de carrito con lista desplegable -->
            <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()" onmouseout="ocultarListaCarrito()">
              <span id="cantidad-carrito" >(0)</span> <span id="carrito-logo">🛒</span> 
              
              <div id="lista-carrito">
                  <div id="titulo-de-lista">
                      <h3>Carrito de Compras</h3>
                  </div>
                  <div id="lista-productos">
  
                  </div>
                  <!-- Lista de productos en el carrito -->
                  <div id="mensaje-carrito-vacio">
                    <p>Tu carrito está vacío.</p>
                    <a href="tienda.html">IR A TIENDA</a>
                  </div>
                  <div id="btnIniciarCompra">
                      <div class="mb-3">
                        <span>TOTAL:</span>
                        <span style="float: right;" id="total"></span>
                      </div>
                      <div>
                          <a href="checkout.html" style="float: right;"  class="btn btn-primary btnCheckout">Iniciar Compra</a>
                          <button style="float: left;background-color: red;"  onclick="limpiarCarrito()" class="btn btn-primary btn--lg">Limpiar</button>    
                      </div>
                  </div>
              </div>
          </div>
            </div>
          </div>

      </section>
      <!--================================
          END NAV-SLIDER AREA
      =================================-->


         <!--================================
         START AFFILIATE AREA
     =================================-->
     <section class="contact-area section--padding" >
       <div  class="container">
           <div style="margin-top: 3%; width: auto; height: auto; padding: 2%; border-radius: 5px 5px 5px 5px;" class="col-md-12 btn-header">
               <div style="text-align: center;" class="product-title-area">
                       <h2>CONTACTO</h2>
               </div>
           </div>
                   <div style=" text-align: center; margin-top: 2.5%; margin-bottom: 2.5%;" class="row">
                       <div  class="col-lg-4 col-md-6 infopn btn-header">
                           <div class="contact_tile colorHeader">
                             <i class="bi bi-map"></i>
 
                               <span class="tiles__icon lnr lnr-map-marker"></span>
                               <i style="font-size: 300%;" class="fas fa-map-marker-alt"></i>
 
                               <h4 style="font-size: 200%;" class="tiles__title">Ubicación</h4>
 
                               <div  class="tiles__content">
                                  <h4> <a id="ubicationContact" href="https://www.google.com/maps" target="_blank">Link a Maps</a></h4>
                               </div>
                           </div>
                       </div>
                       <!-- end /.col-lg-4 col-md-6 -->
 
                       <div  class="col-lg-4 col-md-6 infopn btn-header">
                         <div class="contact_tile">
                               <i style="font-size: 300%;" class="fas fa-phone"></i>
 
                               <h4 style="font-size: 200%;" class="tiles__title">WhatsApp</h4>
                               <div class="tiles__content">
                                   <h4> <a id="phoneContact" href="https://wa.me/777777777" target="_blank">3J3M-PL0WH4TS</a></h4>
                               </div>        
 
                           </div>
                           <!-- end /.contact_tile -->
                       </div>
                       <!-- end /.col-lg-4 col-md-6 -->
 
                       <div  class="col-lg-4 col-md-6 infopn btn-header">
                         <div class="contact_tile">
                               <i style="font-size: 300%;" class="fas fa-envelope"></i>
 
                               <h4 style="font-size: 200%;" class="tiles__title">Gmail</h4>
                               <div class="tiles__content">
                                   <h4> <a id="mailContact" href="#">ejemplo</a></h4>                             
                               </div>
                           </div>
                           <!-- end /.contact_tile -->
                       </div>
                       <!-- end /.col-lg-4 col-md-6 -->
 
                   </div>
                   <!-- end /.row -->
 
           <!-- end /.row -->
       </div>
       <!-- end /.container -->
   </section>
   <!--================================
       END BREADCRUMB AREA
   =================================-->
     <!--================================ 
         START FOOTER AREA
     =================================-->
     <footer id="footer-area">
         <div style="margin: 1%;" class="subfoot-t1">
           <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#" class="linksFooter">Eureka.ar</a>.</p>
         </div>
 
     </footer>
     <!--================================
         END FOOTER AREA
     =================================-->

     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
     <script type="module" src="js.js" ></script>
 
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
      <script>
        //carrito
        //carrito 
let cantidadProductosEnCarrito = 0;

window.addEventListener('load', obtenerProductosDesdeLocalStorage);

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
        cantidadProducto.textContent = `+cantidadCarro+`;
    


        const enlaceProducto = document.createElement('a');
        enlaceProducto.className = 'title-product';
        enlaceProducto.href = '#';
        enlaceProducto.textContent = getShortTitleCart(titulo);
    

        const precioProducto = document.createElement('span');
        precioProducto.className = 'precio-producto';
        let prodCant = price.replace('$', '');
        let prodCant1 = prodCant.replace('.', '');
        let precio = prodCant1

        precioProducto.textContent = `+precioCarro+`;
        total = parseInt(total) + parseInt(precio);
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
        document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
    
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
  if (title.length > 20) title = title.substring(0, 20);
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
    cantidadProducto.textContent = `+cantidadCarro+`;



    const enlaceProducto = document.createElement('a');
    enlaceProducto.href = '#';
    enlaceProducto.textContent = getShortTitleCart(titulo);

    const precioProducto = document.createElement('span');
    precioProducto.className = 'precio-producto';
    let prodCant = price.replace('$', '');
    let prodCant1 = prodCant.replace('.', '');
    let precio = prodCant1*cantidad

    precioProducto.textContent = $`+precioCarro+`;
    total = parseInt(total) + precio;
    nuevoItem.appendChild(cantidadProducto);
    nuevoItem.appendChild(enlaceProducto);
    nuevoItem.appendChild(precioProducto);

    listaCarrito.appendChild(nuevoItem);

    cantidadProductosEnCarrito += cantidad;
    document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;

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

        // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
        function goToCat() {
          var Categoria = event.target.innerHTML;

          localStorage.titleCat = Categoria; 
          window.location = "product-category.html";
        }

                // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
        function goToBrand() {
          var brand = event.target.innerHTML;

          localStorage.titleBrand = brand; 
          window.location = "product-brand.html";
        }
      </script>
 </body>
 </html>
 
 `

 const contenidoJS = `

 //INICIO CONEXION A FIREBASE
 //CONECTAR FIREBASE
//FIREBASE 
// IMPORTS + CONFIGURATION
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getStorage, ref as sRef,uploadBytes,  uploadBytesResumable, getDownloadURL }
 from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

import { getDatabase, onValue, ref, set,push, child, get, update, remove }
 from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeYmYuIobZrOhJ2UVg2K_bRNsIamNYa10",
  authDomain: "myecom-415a4.firebaseapp.com",
  databaseURL: "https://myecom-415a4-default-rtdb.firebaseio.com",
  projectId: "myecom-415a4",
  storageBucket: "myecom-415a4.appspot.com",
  messagingSenderId: "219326371024",
  appId: "1:219326371024:web:a13405d51310e091377ad5",
  measurementId: "G-J7MJ3W5PZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const realdb = getDatabase();

//TRAER INFOD
var ArrayOfContacto = [];
var ArrayOfProducts = [];

window.addEventListener('load', Habilitado);

function GetData(){
 GetContacto();
 getAllData();
 GetAllCategory();
 GetAllBrand();
 GetAllBanners();
 GetAllColors() ;
 GetFont();
 addVista();
}

function Habilitado(){
  const dbref = ref(realdb);
  let ArrayOfHabilitado = [];
  let habilitado = [];

  get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {
    snapshot.forEach(cat => {
      ArrayOfHabilitado.push(cat.val());
    });
    habilitado.push(ArrayOfHabilitado[22]);
    if(habilitado[0] == 0){
      GetData();
    } else {
      alert("PAGINA DESHABILITADA TEMPORALMENTE");
    }
})
}

function addVista(){
  const dbref = ref(realdb);
  let ArrayOfVistas = [];
  get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {
    snapshot.forEach(cat => {
      ArrayOfVistas.push(cat.val());
    });
    var ultima = ArrayOfVistas.length - 2;
    var vistas = ArrayOfVistas[ultima];
    
    var actVista = vistas + 1 ;

    update(ref(realdb, "Usuarios/${nombreArchivo}" ),
    {
      zVistas: actVista

    })

});
}
   function GetContacto(){
     if (typeof document.getElementById('ubicationContact') === "object" && document.getElementById('ubicationContact') !== null) {
       // El objeto existe y es de tipo objeto, ejecutar código específico
       const inputUbicationModify = document.getElementById('ubicationContact');
       const inputPhoneModify = document.getElementById('phoneContact');
       const inputEmailModify = document.getElementById('mailContact');
       
       const dbref = ref(realdb);

       get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {
             snapshot.forEach(cat => {
               ArrayOfContacto.push(cat.val());
             });
             var emailContact = ArrayOfContacto[3];

             inputUbicationModify.href = ArrayOfContacto[7];
             inputPhoneModify.href = "https://wa.me/" + ArrayOfContacto[13];
             inputPhoneModify.textContent = ArrayOfContacto[13];
             inputEmailModify.textContent = emailContact;


         });
     
     } 

   }

   function getAllData(){
     const dbref = ref(realdb);

     get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot)=>{

         snapshot.forEach(prod =>{
           ArrayOfProducts.push(prod.val());
           
           const favicon = document.getElementById('favicon');
           const logoMobile = document.getElementById('logo-mobile');
           const logoPC = document.getElementById('logo-pc');
           const titleWeb = document.getElementById('title-web');

           if (typeof document.getElementById("logo-pcor") === "object" && document.getElementById("logo-pcor") !== null) {

           const logoPCOR = document.getElementById('logo-pcor');
           document.getElementById('PedidoPCE').textContent = "Tu Pedido en "+ArrayOfProducts[4]+" Fue Procesado con Exito!"
           const LinkLogoPCOR = ArrayOfProducts[1];
           logoPCOR.setAttribute("src", LinkLogoPCOR);

           }
           const LinkFavicon = ArrayOfProducts[0];
           const LinkLogoMobile = ArrayOfProducts[0];
           const LinkLogoPC = ArrayOfProducts[1];
           const LinkTitleWeb = ArrayOfProducts[4];

           favicon.setAttribute("href", LinkFavicon);
           logoMobile.setAttribute("src", LinkLogoMobile);
           logoPC.setAttribute("src", LinkLogoPC);
           titleWeb.textContent = LinkTitleWeb;

         });
     });

 }

 function AddAllData(){
   let i= 0;
   ArrayOfProducts.forEach(prod => {
       AddAData(prod, i++);
   });
   AddAData();
}

function AddAData(product, index){
 const favicon = document.getElementById('favicon');
 console.log(product.LinkOfFavicon[0]);

 const LinkFavicon = product.LinkOfFavicon[0];
 console.log(LinkFavicon)
 favicon.setAttribute("href", LinkFavicon);

}

document.addEventListener('keydown', (event) => {
 if (event.ctrlKey) {
     if (event.keyCode == 65 || event.keyCode == 97) {
         window.location = "epanel-${nombreArchivo}.html";

     }
 }
}, false);

//MOSTRAR LAS CATEGORIAS EN LA LISTA DESPLEGABLE Y MARCAS EN EL NAV
var ArrayOfCategory = [];
var ArrayOfBrand = [];

function GetAllCategory() {
   const dbref = ref(realdb);

   get(child(dbref, "Usuarios/${nombreArchivo}/zCategorias")).then((snapshot) => {
       snapshot.forEach(cat => {
           ArrayOfCategory.push(cat.val());

       });
       for (let index = 0; index < ArrayOfCategory.length; index++) {
             AddAPDC(ArrayOfCategory[index]);
             if (typeof document.getElementById('carousel-inner-catslider') === "object" && document.getElementById('carousel-inner-catslider') !== null) {

             AddCatSlider(ArrayOfCategory[index], ArrayOfCategory.length);
             AddBtnCatSlider(ArrayOfCategory[index]);
             }
           }
   });

}

function GetAllBrand() {
   const dbref = ref(realdb);

   get(child(dbref, "Usuarios/${nombreArchivo}/zMarcas")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfBrand.push(cat.val());

       });
       for (let index = 0; index < ArrayOfBrand.length; index++) {
             AddAPDCB(ArrayOfBrand[index]);
           }
   });

}


var OuterDivPDC = document.getElementById('cat-display');

var isx = 333;
   function AddAPDC(cat, index) {
   let html =
   `+contenidoInternoCat+`
   let newCat = document.createElement('li');
   newCat.innerHTML = html;
   OuterDivPDC.append(newCat);
       isx++;
}



var OuterDivCatSlider = document.getElementById('carousel-inner-catslider');

var catSlider = 0;
function AddCatSlider(cat, catMax) {
  if(catSlider == 0){
    let html =
    `+contenidoInternoCat2+`
    let newCat = document.createElement('div');
    newCat.classList.add('carousel-item');
    newCat.style.textAlign = "center";
    newCat.classList.add('carousel-category');
    newCat.classList.add('active');
    newCat.innerHTML = html;
    OuterDivCatSlider.append(newCat);
  } else {

    let html =

    `+contenidoInternoCat2+`

    let newCat = document.createElement('div');
    newCat.style.textAlign = "center";
    newCat.classList.add('carousel-item');
    newCat.classList.add('carousel-category');

    newCat.innerHTML = html;
    OuterDivCatSlider.append(newCat);
  }

  catSlider++;
  if(catSlider == catMax){
    var carouselCategory = document.getElementsByClassName('carousel-category');
  var xx = carouselCategory.length;
  if(catSlider <= carouselCategory.length){
    GetAllProductsEpanel();
    GetAllColors() ;

  } else {

  }
  }
}

var OuterDivBtnCatSlider = document.getElementById('carousel-indicators-slider');

var btnCatSliderVar = 0;
var btnCatSliderVarSlider = 1;

function AddBtnCatSlider(cat, index) {
if(btnCatSliderVar == 0){
  let html =
  `+buttonCatSliderVar+`
  let newCat = document.createElement('li');
  newCat.style.display = "none";
  newCat.innerHTML = html;
  OuterDivBtnCatSlider.append(newCat);

} else {    
  let html =                
 `+buttonCatSliderVar+`
 let newCat = document.createElement('li');
 newCat.style.display = "none";

 newCat.innerHTML = html;
 OuterDivBtnCatSlider.append(newCat);

}
btnCatSliderVar++;
btnCatSliderVarSlider++;
}

var OuterDivPDCB = document.getElementById('brand-display');

var isxs = 444;
   function AddAPDCB(cat, index) {
   let html =
   `+contenidoInternoBrand+`
   let newCat = document.createElement('li');
   newCat.classList.add('nav-item');
   newCat.innerHTML = html;
   OuterDivPDCB.append(newCat);
       isxs++;
}

//FIN MOSTRAR LAS CATEGORIAS EN LA LISTA DESPLEGABLE Y MARCAS EN EL NAV
//TRAER COLORES DEL HEADER 
//PONER Y ACTUALIZAR  COLORES EN EL HEADER 
var ArrayOfColorsHeader = [];
var ArrayOfColorsShopList = [];
var ArrayOfColorsProducto = [];
var ArrayOfColorsFooter = [];

function GetAllColors() {
   const dbref = ref(realdb);
   get(child(dbref, "Usuarios/${nombreArchivo}/zColores/Header")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfColorsHeader.push(cat.val());

       });

       const headerFondo = document.getElementById("header"); 
       const navHeaderFondo = document.getElementById("nav-header");
       const navLinkLetras = document.getElementsByClassName("link-header");
       const btnHeaderFondo = document.getElementsByClassName("btn-header");
       const btnHeaderLetras = document.getElementsByClassName("btn-header");

       headerFondo.style.backgroundColor = ArrayOfColorsHeader[0];
       navHeaderFondo.style.backgroundColor = ArrayOfColorsHeader[1];
       // Iterar sobre los elementos y cambiar el color del texto
       for (let i = 0; i < navLinkLetras.length; i++) {
         navLinkLetras[i].style.color = ArrayOfColorsHeader[2];
       }
       for (let i = 0; i < btnHeaderFondo.length; i++) {
         btnHeaderFondo[i].style.backgroundColor = ArrayOfColorsHeader[3];
       }
       for (let i = 0; i < btnHeaderLetras.length; i++) {
         btnHeaderLetras[i].style.color = ArrayOfColorsHeader[4];
       }
   });

   get(child(dbref, "Usuarios/${nombreArchivo}/zColores/ShopList")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfColorsShopList.push(cat.val());
       });


       if (typeof document.getElementById('banner-categorias') === "object" && document.getElementById('banner-categorias') !== null) {
         // El objeto existe y es de tipo objeto, ejecutar código específico
         const fondoShopListx = document.getElementById("banner-categorias"); 
         if (typeof document.getElementsByClassName('colorHeader') === "object" && document.getElementsByClassName('colorHeader') !== null) {
           // El objeto existe y es de tipo objeto, ejecutar código específico
           const fondoItems = document.getElementsByClassName('colorHeader'); 

           for (let i = 0; i < fondoItems.length; i++) {
             fondoItems[i].style.backgroundColor = ArrayOfColorsHeader[1];
             fondoItems[i].style.color = ArrayOfColorsHeader[2];

           }
         
         } 
         fondoShopListx.style.backgroundColor = ArrayOfColorsShopList[0];
         document.body.style.backgroundColor = ArrayOfColorsShopList[0];

       } 

   });

   get(child(dbref, "Usuarios/${nombreArchivo}/zColores/Producto")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfColorsProducto.push(cat.val());
       });

       const colorFondoProductosp = document.getElementsByClassName("Card");
       const colorPreciop = document.getElementsByClassName("precioColor");
       const colorFondoPreciop = document.getElementsByClassName("fondoPColor");
       const colorLinksp = document.getElementsByClassName("colorLinks");

       for (let i = 0; i < colorFondoProductosp.length; i++) {
         colorFondoProductosp[i].style.backgroundColor = ArrayOfColorsProducto[1];
       }
       for (let i = 0; i < colorPreciop.length; i++) {
         colorPreciop[i].style.color = ArrayOfColorsProducto[2];
       }
       for (let i = 0; i < colorFondoPreciop.length; i++) {
         colorFondoPreciop[i].style.backgroundColor = ArrayOfColorsProducto[3];
       }
       for (let i = 0; i < colorLinksp.length; i++) {
         colorLinksp[i].style.color = ArrayOfColorsProducto[0];
       }

   });

   get(child(dbref, "Usuarios/${nombreArchivo}/zColores/Footer")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfColorsFooter.push(cat.val());
       });

       const colorFondoFooterp = document.getElementById("footer-area"); 
       const colorLetrasFooterp = document.getElementById("footer-area");
       const colorLinksFooterp = document.getElementsByClassName("linksFooter");

       colorFondoFooterp.style.backgroundColor = ArrayOfColorsFooter[0];
       colorLetrasFooterp.style.color = ArrayOfColorsFooter[1];
       for (let i = 0; i < colorLinksFooterp.length; i++) {
         colorLinksFooterp[i].style.color = ArrayOfColorsFooter[2];
       }

   });

}

//FIN TRAER COLORES DEL HEADER
//PONER Y ACTUALIZAR TODOS LOS BANNERES EN EL HEADER
var ArrayOfBannersGet = [];

const bannerhp1 = document.getElementById("bannerHeader-1");
const bannerhp2 = document.getElementById("bannerHeader-2");
const bannerhp3 = document.getElementById("bannerHeader-3");
const bannerhp4 = document.getElementById("bannerHeader-4");
const bannerhp5 = document.getElementById("bannerHeader-5");
const bannersph = document.getElementById("subBannerHeaders");

function GetAllBanners() {
   const dbref = ref(realdb);
   get(child(dbref, "Usuarios/${nombreArchivo}/zBannersHeaderLinks")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfBannersGet.push(cat.val());

       });

       
       if (typeof document.getElementById('bannerHeader-1') === "object" && document.getElementById('bannerHeader-1') !== null) {
         // El objeto existe y es de tipo objeto, ejecutar código específico

         const bannerhp1 = document.getElementById("bannerHeader-1");
         const bannerhp2 = document.getElementById("bannerHeader-2");
         const bannerhp3 = document.getElementById("bannerHeader-3");
         const bannerhp4 = document.getElementById("bannerHeader-4");
         const bannerhp5 = document.getElementById("bannerHeader-5");

       //EN WEB
       if(ArrayOfBannersGet[0] == 0){
         bannerhp1.setAttribute("src", "../banner-header-ejemplo.png");
       }else{
         bannerhp1.setAttribute("src", ArrayOfBannersGet[0] + new Date().getTime());
       }

       if(ArrayOfBannersGet[1] == 0){
         bannerhp2.setAttribute("src", "../banner-header-ejemplo.png");
       }else{
         bannerhp2.setAttribute("src", ArrayOfBannersGet[1] + new Date().getTime());
       }

       if(ArrayOfBannersGet[2] == 0){
         bannerhp3.setAttribute("src", "../banner-header-ejemplo.png");
       }else{
         bannerhp3.setAttribute("src", ArrayOfBannersGet[2] + new Date().getTime());
       }

       if(ArrayOfBannersGet[3] == 0){
         bannerhp4.setAttribute("src", "../banner-header-ejemplo.png");
       }else{
         bannerhp4.setAttribute("src", ArrayOfBannersGet[3] + new Date().getTime());
       }

       if(ArrayOfBannersGet[4] == 0){
         bannerhp5.setAttribute("src", "../banner-header-ejemplo.png");
       }else{
         bannerhp5.setAttribute("src", ArrayOfBannersGet[4] + new Date().getTime());
       }


       
       } 

       if (typeof document.getElementById('subBannerHeaders') === "object" && document.getElementById('subBannerHeaders') !== null) {
         // El objeto existe y es de tipo objeto, ejecutar código específico
         const bannersph = document.getElementById("subBannerHeaders");

         if(ArrayOfBannersGet[5] == 0){
           bannersph.setAttribute("src", "../banner-head-chico-ejemplo.png");
         }else{
           bannersph.setAttribute("src", ArrayOfBannersGet[5] + new Date().getTime());
         }
       }

})
}

//FIN PONER Y ACTUALIZAR TODOS LOS BANNERS EN EL HEADER
//INICIO TRAER TIPO DE FUENTE
var ArrayOfFont = [];

function GetFont(){
 const dbref = ref(realdb);

 get(child(dbref, "Usuarios/${nombreArchivo}/zFuente")).then((snapshot) => {
       snapshot.forEach(cat => {
         ArrayOfFont.push(cat.val());
       });
       document.body.style.fontFamily = ArrayOfFont[0];
       document.body.style.display = "block";
   });
}
//FIN TRAER TIPO DE FUENTE 


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
panelProductos.style.display = "display";

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
    console.log("caca");
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
        alert('Por favor, selecciona una imagen.');
    }
  });
  
  } 

  if (typeof document.getElementById('btnImgSecundarias') === "object" && document.getElementById('btnImgSecundarias') !== null) {
        document.getElementById('btnImgSecundarias').addEventListener('click', function () {
            document.getElementById('fileInputSecundarias').click();
        });

        document.getElementById('fileInputSecundarias').addEventListener('change', function (event) {
            const fileInput = event.target;
            const imageContainer = document.querySelector('.contenedor-imgSecundarias');

            if (fileInput.files.length > 4) {
                alert("SOLO SE PERMITEN 4 IMAGENES");
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
                    newImage.alt = `+imgNX+`;
                    newImage.classList.add('previewSecundaria');
                    imageContainer.appendChild(newImage);
                };
                
                document.getElementById("btnImgSecundarias").textContent = "CAMBIAR IMAGENES";
                reader.readAsDataURL(file);
            }
        });
    
    } 


      //INICIO LISTADO PRODUCTOS 

 
      function getShortTitleProduct(title) {
        if (title.length > 40) title = title.substring(0, 40);
        else return title;
        return title + "...";
      }
      
      
      var stockCartel = 0;

      function AddProductToListEpanel(brand, category, description, name, price, sku, stock, zimgProduct, zimgSecundarias) {
        
        if (typeof document.getElementById(category) === "object" && document.getElementById(category) !== null) {
        if(zimgProduct == null){
          zimgProduct = "../imagenPrinciaplBase.png";
        }
        let html =

        `+cardProductDetails+`
  
        let newCat = document.createElement('div');
        newCat.classList.add("shop--Card");
        newCat.classList.add("productoFiltro");
        newCat.innerHTML = html;
        var OuterDivShopList = document.getElementById(category)
        OuterDivShopList.append(newCat);
        var stkCartel = "stock-" + stockCartel;
      if(stock <= 0)
      {
        document.getElementById(stkCartel).style.backgroundColor = "red";
        document.getElementById(stkCartel).textContent = "SIN STOCK";
      } else {
        document.getElementById(stkCartel).style.backgroundColor = "green";
        document.getElementById(stkCartel).textContent = "EN STOCK";
      }
  
        stockCartel++;
        }
        AssignAllEvents();
      }
  
      function AddAllProductsToListEpanel(Productos) {

  
        Productos.forEach(element => {
          AddProductToListEpanel(element.brand, element.category, element.description, element.name,
            element.price, element.sku, element.stock, element.zimgProduct, element.zimgSecundarias)
        });
      }
  
      
      function GetAllProductsEpanel() {
        const dbref = ref(realdb, "Usuarios/${nombreArchivo}/Productos");
  
        onValue(dbref, (snapshot) => {
          var productos = [];
  
          snapshot.forEach(childSnapshot => {
            productos.push(childSnapshot.val());
          });
          AddAllProductsToListEpanel(productos);
        })
      }

      
                    //CLICKEAR PRODUCTO E IR A PRODUCT DETAIL CON SUS STATS
                    function GetProductIndex(id) {
                      var indstart = id.indexOf('-') + 1  ;
                      var indend = id.length;
                      return Number(id.substring(indstart, indend));
                  }
                  
                  function GotoProductDetails(event) {
                      var index = GetProductIndex(event.target.id);
                      localStorage.id = JSON.stringify(index);
                      console.log(localStorage.id);
                      window.location = "product-details.html";
                  }
      
                  function AssignAllEvents() {
                      var btns = document.getElementsByClassName('pdProductos');
                      for (let i = 0; i < btns.length; i++) {
                          btns[i].addEventListener('click', GotoProductDetails);
      
                      }
                  }


      function getShortSearchTitle(title) {
        if (title.length > 30) title = title.substring(0, 30);
        else return title;
        return title + "...";
      }
      
      //FIN CARGA PRODUCTOS 
      //BUSCADOR POR INPUT
      if (typeof document.getElementById('searchInput') === "object" && document.getElementById('searchInput') !== null) {
        
        function GotoProductDetailsSearch(idprod) {
          console.log(idprod);
          var index = idprod;
          localStorage.id = JSON.stringify(index);


          window.location = "product-details.html";
      }
        
        const searchInput = document.getElementById("searchInput");
        const resultsList = document.getElementById("resultsList");
        let ProductsBuscador = [];
        const dbref = ref(realdb);

        get(child(dbref, "Usuarios/${nombreArchivo}/Productos")).then((snapshot) => {
              snapshot.forEach(cat => {
                ProductsBuscador.push(cat.val());
              });
          });

        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase();
            const products = [];
            for (let index = 0; index < ProductsBuscador.length; index++) {
                products.push(ProductsBuscador[index]);
            }

            // Agregar un ID numérico a cada producto
            const productsWithIds = products.map((product, index) => ({ id: products[index]['sku'], name: products[index]['name'], price: products[index]['price'] }));

            if (searchTerm.trim() === "") {
                clearResults();
                hideResults();
            } else {
                const filteredProducts = productsWithIds.filter(product => product.name.toLowerCase().includes(searchTerm) + product.price.toLowerCase().includes(searchTerm));
                displayResults(filteredProducts);
            }
        });

        function displayResults(results) {
            resultsList.innerHTML = "";
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add('search--product');
                listItem.textContent = getShortSearchTitle(result.name); //+"   Precio:$" + getShortSearchTitle(result.price)
                listItem.dataset.productId = result.id; // Establecer el ID como un atributo de datos


                listItem.addEventListener("click", () => {
                    let Prod = result.id;
                    var btns = document.getElementsByClassName('search--product');

                    for (let i = 0; i < btns.length; i++) {
                        btns[i].addEventListener('click', GotoProductDetailsSearch(Prod));

                    }
                });
                resultsList.appendChild(listItem);
            });

            showResults();
        }

        function clearResults() {
            resultsList.innerHTML = "";
        }
        
        function showResults() {
            resultsList.style.display = "block";
            
        }

        function hideResults() {
            resultsList.style.display = "none";
        }

        let selectedIndex = -1;
        let visibleItemCount = 6; // Cantidad de elementos visibles a la vez
        let firstVisibleIndex = 0;

        // Evento para mover la selección hacia arriba o abajo
        searchInput.addEventListener("keydown", function(event) {
            const listItems = resultsList.querySelectorAll("li");
            const listItems1 = resultsList.querySelectorAll("li").textContent;

            if (event.key === "ArrowDown") {
            if (selectedIndex < listItems.length - 1) {

                selectedIndex++;
            } else if (firstVisibleIndex + visibleItemCount < listItems.length) {
                firstVisibleIndex++;
            }
                updateSelection();
                scrollToSelected();
                event.preventDefault(); // Evita el comportamiento predeterminado de las flechas
            } else if (event.key === "ArrowUp") {
                if (selectedIndex > 0) {
                    selectedIndex--;
                } else if (firstVisibleIndex > 0) {
                    firstVisibleIndex--;
                }
                updateSelection();
                scrollToSelected();
                event.preventDefault(); // Evita el comportamiento predeterminado de las flechas
            }

                        // Función para actualizar la selección visual
            function updateSelection() {
                listItems.forEach((item, index) => {
                    if (index === selectedIndex) {
                        searchInput.value = item.textContent;
                        item.classList.add("selected");
                    } else {
                        item.classList.remove("selected");
                    }
                });
            }

                    // Función para desplazar hasta el elemento seleccionado
            function scrollToSelected() {
                if (selectedIndex >= 0) {
                    const selectedElement = listItems[selectedIndex];
                    resultsList.scrollTop = selectedElement.offsetTop;
                }
            }
        });


        //FIN Evento para mover la selección hacia arriba o abajo
        
        //ACCIONES DE BUSCADOR (ENTER/CLICK SOBRE BOTON EN BASE AL TEXTO)
        const btnSearchInput = document.getElementById("btnSearchInput");
        btnSearchInput.addEventListener("click", function() {
            event.preventDefault(); // Evitar enviar el formulario
            if(searchInput.value == null){

            }else{
                      // Busca la posición del primer punto
                      var indicePunto = searchInput.value.indexOf('.');

                      // Variable para almacenar la parte antes del primer punto
                      var parteAntesDelPunto;

                      // Si hay un punto, extrae la parte antes del primer punto
                      if (indicePunto !== -1) {
                          parteAntesDelPunto = searchInput.value.substring(0, indicePunto);
                      } else {
                          // Si no hay punto, la variable tomará el valor completo del input
                          parteAntesDelPunto = searchInput.value;
                      }
                const txtInSearch = parteAntesDelPunto;
                localStorage.Searcher = JSON.stringify(txtInSearch);
                window.location = "product-all.html";
            }
        });

        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && !btnSearchInput.disabled) {
                event.preventDefault(); // Evitar enviar el formulario
                if(searchInput.value == null){

                }else{
                      // Busca la posición del primer punto
                      var indicePunto = searchInput.value.indexOf('.');

                      // Variable para almacenar la parte antes del primer punto
                      var parteAntesDelPunto;

                      // Si hay un punto, extrae la parte antes del primer punto
                      if (indicePunto !== -1) {
                          parteAntesDelPunto = searchInput.value.substring(0, indicePunto);
                      } else {
                          // Si no hay punto, la variable tomará el valor completo del input
                          parteAntesDelPunto = searchInput.value;
                      }
                      console.log(parteAntesDelPunto);
                const txtInSearch = parteAntesDelPunto;
                    localStorage.Searcher = JSON.stringify(txtInSearch);
                    window.location = "product-all.html";
                }
            }
        });
      
      }
      ////////////////////////////////////////////
      ///INICIO CARGA PRODUCTOS EN PRODUCT-ALL///
      ///////////////////////////////////////////
      if (typeof document.getElementById('inputWC') === "object" && document.getElementById('inputWC') !== null) {
      

        window.addEventListener('load', GetAllProductsPA);
        const ArrayOfProductsPA = [];
        function GetAllProductsPA() {
            const dbref = ref(realdb);

            get(child(dbref, "Usuarios/${nombreArchivo}/Productos")).then((snapshot) => {

                    snapshot.forEach(prod => {
                        ArrayOfProductsPA.push(prod.val());

                    });
                    AddAllProductsPA(ArrayOfProductsPA);


                });


        }
        
        var ix = 0;

        function AddAllProductsPA(productos) {
            let id = 0;
            let filtro = [];
            let filtroCAT = [];
            let filtroCL1 = [];


            let i = 0;

            productos.forEach(prod => {
                    filtro.push(productos[i]['brand']);
                    filtroCAT.push(productos[i]['category']);
                    filtroCL1.push(productos[i]['name']);
                
                    i++;  
                });      
                // Obtener el valor ingresado en el campo de entrada
                let inputInfoWCPA = document.getElementById("inputWC");
                var inputInfoWCPAIN = inputInfoWCPA.value;
                const texto = inputInfoWCPAIN.toLowerCase();
                // Filtrar las frutas que coincidan con las primeras 5 letras
                const coincidencias = filtro.filter(product => product.toLowerCase().startsWith(texto));
                const coincidenciasCAT = filtroCAT.filter(product => product.toLowerCase().startsWith(texto));
                const coincidenciasCL1 = filtroCL1.filter(product => product.toLowerCase().startsWith(texto));


                // Mostrar las coincidencias en el resultado
                const resultado = document.getElementById("productsDivPA");
                const result = document.getElementById("resultCANT");
                let fruit = [];
                let fruit2 = [];
                let fruit3 = [];


                if (productos.length > 0) {
                    coincidencias.forEach(fruta => {

                        fruit.push( fruta);
                    });
                    coincidenciasCAT.forEach(fruta => {
                        fruit2.push( fruta);
                    });
                    coincidenciasCL1.forEach(fruta => {

                        fruit3.push( fruta);
                    });

                    var ij = 0;
                    var ig = 0;
                    for (let index = 0; index < productos.length; index++) {

                        if (productos[ij]['brand'] == fruit[ig] || productos[ij]['category'] == fruit2[ig]
                        || productos[ij]['name'] == fruit3[ig] ){
                            AddAProduct(productos[ij],ij);
                            AssignAllEvents();
                            ij++;
                            ig++;
                        } else {
                            ij++;
                        }
                }                              
                    }
 

        }


        var cantResults = 0;
        function AddAProduct(product, index ) {
                cantResults++; 
            let html =
                    `+imgProductBannerPA+`

            let newProd = document.createElement('div');
            newProd.classList.add('product-PA');
            newProd.innerHTML = html;
            var OuterDiv = document.getElementById("banner-product-PA"); 

            OuterDiv.append(newProd); 

            

            const qResults = document.getElementById("resultCANT");
            qResults.innerText = cantResults + " ";
            GetAllColors() ;
            }
            function getShortTitle(title) {
                if (title.length > 20) title = title.substring(0, 20);
                else return title;
                return title + "...";
            }

            function getShortDescrip(title) {
                if (title.length > 90) title = title.substring(0, 99);
                else return title;
                return title + "...";
            }

      }
      ////////////////////////////////////////////
      ///FIN CARGA PRODUCTOS EN PRODUCT-ALL///
      ///////////////////////////////////////////
      
      ////////////////////////////////////////////
      ///INICIO CARGA PRODUCTOS EN PRODUCT BRAND///
      ///////////////////////////////////////////
      if (typeof document.getElementById('banner-product-PB') === "object" && document.getElementById('banner-product-PB') !== null) {
      
        window.addEventListener('load', GetAllProductsPB);
        const ArrayOfProductsPB = [];
        function GetAllProductsPB() {
            const dbref = ref(realdb);

            get(child(dbref, "Usuarios/${nombreArchivo}/Productos")).then((snapshot) => {

                    snapshot.forEach(prod => {
                        ArrayOfProductsPB.push(prod.val());

                    });
                    AddAllProductsPB(ArrayOfProductsPB);


                });


        }
        
        var ix = 0;

        function AddAllProductsPB(productos) {
            let id = 0;
            let filtro = [];
            let filtroCAT = [];
            let filtroCL1 = [];


            let i = 0;

            productos.forEach(prod => {
                    filtro.push(productos[i]['brand']);

                    i++;  
                });      

                // Obtener el valor ingresado en el campo de entrada
                var inputInfoWCPAIN = titulo;
                const texto = inputInfoWCPAIN.toLowerCase();
                // Filtrar las frutas que coincidan con las primeras 5 letras
                const coincidencias = filtro.filter(product => product.toLowerCase().startsWith(texto));



                // Mostrar las coincidencias en el resultado

                let fruit = [];


                if (productos.length > 0) {
                    coincidencias.forEach(fruta => {
                        fruit.push( fruta);
                    });

                    var ij = 0;
                    var ig = 0;
                    for (let index = 0; index < productos.length; index++) {

                        if (productos[ij]['brand'] == fruit[ig] ){

                            AddAProduct(productos[ij],ij);
                            AssignAllEvents();
                            ij++;
                            ig++;
                        } else {
                            ij++;
                        }
                }                              
                    }
 

        }


        var cantResults = 0;
        function AddAProduct(product, index ) {
                cantResults++; 
            let html =
            `+addProductJS+`
          let newCat = document.createElement('div');
          newCat.classList.add("shop--CardCat");
          newCat.classList.add("productoFiltro");
          newCat.innerHTML = html;
          var stkCartel = "stock-" + stockCartel;   

            var OuterDiv = document.getElementById("banner-product-PB"); 

            OuterDiv.append(newCat); 

            if(product['stock'] <= 0)
            {
              document.getElementById(stkCartel).style.backgroundColor = "red";
              document.getElementById(stkCartel).textContent = "SIN STOCK";
            } else {
              document.getElementById(stkCartel).style.backgroundColor = "green";
              document.getElementById(stkCartel).textContent = "EN STOCK";
            }

            stockCartel++;

            
            GetAllColors() ;
            }
            function getShortTitle(title) {
                if (title.length > 20) title = title.substring(0, 20);
                else return title;
                return title + "...";
            }

            function getShortDescrip(title) {
                if (title.length > 90) title = title.substring(0, 99);
                else return title;
                return title + "...";
            }

      }
      ////////////////////////////////////////////
      ///FIN CARGA PRODUCTOS EN PRODUCT-BRAND///
      ///////////////////////////////////////////

      ////////////////////////////////////////////
      ///INICIO CARGA PRODUCTOS EN PRODUCT-CATEGORY///
      ///////////////////////////////////////////
      if (typeof document.getElementById('banner-product-PC') === "object" && document.getElementById('banner-product-PC') !== null) {
      
        window.addEventListener('load', GetAllProductsPB);
        const ArrayOfProductsPB = [];
        function GetAllProductsPB() {
            const dbref = ref(realdb);

            get(child(dbref, "Usuarios/${nombreArchivo}/Productos")).then((snapshot) => {

                    snapshot.forEach(prod => {
                        ArrayOfProductsPB.push(prod.val());

                    });
                    AddAllProductsPB(ArrayOfProductsPB);


                });


        }
        
        var ix = 0;

        function AddAllProductsPB(productos) {
            let id = 0;
            let filtro = [];
            let filtroCAT = [];
            let filtroCL1 = [];


            let i = 0;

            productos.forEach(prod => {
                    filtro.push(productos[i]['category']);

                    i++;  
                });      

                // Obtener el valor ingresado en el campo de entrada
                var inputInfoWCPAIN = titulo;
                const texto = inputInfoWCPAIN.toLowerCase();
                // Filtrar las frutas que coincidan con las primeras 5 letras
                const coincidencias = filtro.filter(product => product.toLowerCase().startsWith(texto));



                // Mostrar las coincidencias en el resultado

                let fruit = [];


                if (productos.length > 0) {
                    coincidencias.forEach(fruta => {
                        fruit.push( fruta);
                    });

                    var ij = 0;
                    var ig = 0;
                    for (let index = 0; index < productos.length; index++) {

                        if (productos[ij]['category'] == fruit[ig] ){

                            AddAProduct(productos[ij],ij);
                            AssignAllEvents();
                            ij++;
                            ig++;
                        } else {
                            ij++;
                        }
                }                              
                    }
 

        }


        var cantResults = 0;
        function AddAProduct(product, index ) {
                cantResults++; 
            let html =
            `+addProductJS2+`
          let newCat = document.createElement('div');
          newCat.classList.add("shop--CardCat");
          newCat.classList.add("productoFiltro");
          newCat.innerHTML = html;

          var stkCartel = "stock-" + stockCartel;   
 
            var OuterDiv = document.getElementById("banner-product-PC"); 

            OuterDiv.append(newCat); 

            if(product['stock'] <= 0)
            {
              document.getElementById(stkCartel).style.backgroundColor = "red";
              document.getElementById(stkCartel).textContent = "SIN STOCK";
            } else {
              document.getElementById(stkCartel).style.backgroundColor = "green";
              document.getElementById(stkCartel).textContent = "EN STOCK";
            }

            stockCartel++;
            
            GetAllColors() ;
            }
            function getShortTitle(title) {
                if (title.length > 20) title = title.substring(0, 20);
                else return title;
                return title + "...";
            }

            function getShortDescrip(title) {
                if (title.length > 90) title = title.substring(0, 99);
                else return title;
                return title + "...";
            }

      }
      ////////////////////////////////////////////
      ///FIN CARGA PRODUCTOS EN PRODUCT-CATEGORY///
      ///////////////////////////////////////////

      ////////////////////////////////////////////
      ///INICIO CARGA PRODUCTOS EN TIENDA///
      ///////////////////////////////////////////      
      if (typeof document.getElementById('banner-product-Tienda') === "object" && document.getElementById('banner-product-Tienda') !== null) {
        var OuterDivProductList = document.getElementById("banner-product-Tienda");

        window.addEventListener('load', GetAllProducts);

        function AddProductToList(brand, category, description, name, price, sku, stock, zimgProduct, zimgSecundarias) {
  
          let html =
            `+addProductJS3+`
        let newCat = document.createElement('div');
        newCat.classList.add("shop--CardCat");
        newCat.classList.add("productoFiltro");
        newCat.innerHTML = html;

        var stkCartel = "stock-" + stockCartel;   

          var OuterDiv = document.getElementById("banner-product-Tienda"); 

          OuterDiv.append(newCat); 

          if(stock <= 0)
          {
            document.getElementById(stkCartel).style.backgroundColor = "red";
            document.getElementById(stkCartel).textContent = "SIN STOCK";
          } else {
            document.getElementById(stkCartel).style.backgroundColor = "green";
            document.getElementById(stkCartel).textContent = "EN STOCK";
          }

          stockCartel++;
            AssignAllEvents();

        }
        
        function AddAllProductsToList(Productos) {
  
  
  
  
          OuterDivProductList.innerHTML = "";
          
          Productos.forEach(element => {
            AddProductToList(element.brand, element.category, element.description, element.name,
              element.price, element.sku, element.stock, element.zimgProduct, element.zimgSecundarias)
          });
        }
    
        function GetAllProducts() {
          const dbref = ref(realdb, "Usuarios/${nombreArchivo}/Productos");
          onValue(dbref, (snapshot) => {
            var productos = [];
    
            snapshot.forEach(childSnapshot => {
              productos.push(childSnapshot.val());
            });
    
            AddAllProductsToList(productos);
          })
        }
      }
      ////////////////////////////////////////////
      ///FIN CARGA PRODUCTOS EN TIENDA///
      /////////////////////////////////////////// 

      ////////////////////////////////////////////
      ///INICIO TRAER NUMERO DE PEDIDO DEL CHECKOUT///
      /////////////////////////////////////////// 
      if (typeof document.getElementById('typePago') === "object" && document.getElementById('typePago') !== null) {
        var totalNroPedidos = [];
        window.addEventListener('load', GetNumberOfPedidos);
        const ArrayOfPedidos = [];
        function GetNumberOfPedidos() {
            const dbref = ref(realdb);

            get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {

                    snapshot.forEach(prod => {
                      ArrayOfPedidos.push(prod.val());

                    });
                    document.getElementById('pedidoNro').textContent = ArrayOfPedidos[14];
                    document.getElementById('num-pedido').textContent = ArrayOfPedidos[14];
                    totalNroPedidos.push(ArrayOfPedidos[14]);

                });
        }

        const enviarAWhats = document.getElementById('btnEnviarAWhats');

        enviarAWhats.addEventListener('click', function(){
          const dbref = ref(realdb);

          console.log(totalNroPedidos);

          var namew = document.getElementById('name').value;
          var lastnamew = document.getElementById('lastname').value;
          var cityw = document.getElementById('city').value;
          var postalcodew = document.getElementById('postalCode').value;
          var emailw = document.getElementById('email').value;
          var referencesw = document.getElementById('references').value;
          var enviosw = document.getElementById('typeEnvio').value;
          var pagosw = document.getElementById('typePago').value; 
          var totalw = document.getElementById('total-checkout').textContent;
          let totalwx = totalw.replace(/$/g, '');



          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + totalNroPedidos ),
          {
            nroPedido: totalNroPedidos,
            comprador: namew + " " + lastnamew,
            ciudad: cityw,
            cp: postalcodew,
            email: emailw,
            referencias: referencesw,
            tipoEnvio: enviosw,
            tipoPago: pagosw,
            totalPago: totalwx,
            Pagado: "No",
            Enviado: "No",
            Cancelado: "No"

          })



          limpiarCarrito();

          window.location = "https://wa.me/3572550116?text=Hola%20soy%20"+namew+" "+lastnamew+"%20acabo%20de%20realizar%20la%20compra%20con%20Numero%20de%20Pedido%20*"+totalNroPedidos+"*%20,%20el%20cual%20abonare%20mediante%20*"+pagosw+"*%20y%20opte%20por%20*"+enviosw+"*.%20por%20un%20total%20de%20*"+totalwx+"*.%20Espero Respuestas!";
          
          totalNroPedidos[0]++;
          update(ref(realdb, "Usuarios/${nombreArchivo}"),
          {
            xPedidos: totalNroPedidos

          })
        })
      

      const enviarPedido = document.getElementById("btnEnviarPedido")

      enviarPedido.addEventListener('click',  async function(){
                  // Obtener el div que se va a capturar
            // Obtener el div que se va a capturar
            const contentDiv = document.getElementById('order-received');
            document.getElementById('btnEnviarPedido').style.display = "none";

            // Captura el contenido del div con html2canvas
            const canvas = await html2canvas(contentDiv);
            // Convierte el canvas a Blob
            // Convierte el canvas a Blob
            canvas.toBlob(async (blob) => {
              // Sube el archivo a Firebase Storage
              const storage = getStorage();
              const ImageAdress = "TheImages/${nombreArchivo}/Pedidos/" + totalNroPedidos;
              const storageRef = sRef(storage, ImageAdress);
              await uploadBytes(storageRef, blob);
              const downloadURL = await getDownloadURL(storageRef);

              swal({
                title: "Su Pedido Se Esta Descargando como Imagen!",
                icon: "success",
                button: "OK!",
              }).then(()=>{

              });

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + totalNroPedidos), {
                imgLinkPedido: downloadURL
                // Otros campos que puedas querer actualizar
              });

                
                
              // Genera un enlace de descarga
              const downloadLink = document.createElement('a');
              downloadLink.href = URL.createObjectURL(blob);

              downloadLink.download = 'Pedido-Marakas-'+totalNroPedidos+'.png';

              // Simula un clic en el enlace para iniciar la descarga
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);


              document.getElementById('order-received').style.display = "none";
              document.getElementById('enviarAWhats').style.display = "block";


          });
      })
    }
      ////////////////////////////////////////////
      ///FIN TRAER NUMERO DE PEDIDO DEL CHECKOUT///
      /////////////////////////////////////////// 
      

 `
  const contenidoEPANEL =  `
      <!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.17.5/dist/xlsx.full.min.js"></script>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title id="title-web"></title>
  <!-- Favicon -->
  <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
  <style>
    .dropdown {
      z-index: 999;
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #192223;
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown-content a {
      color: #fff;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #3d4b4d;
    }
  </style>
  <script>
  function pagoPedido(checkbox) {
    // Obtén el ID del checkbox
    var idCheckbox = checkbox.id;

    // Extrae el número del ID usando la función
    var numero = extraerDespuesDeGuion(idCheckbox);

    // Imprime el resultado
    document.getElementById('inputPagoPedido').value = Number(numero);
    btnPagoPedido.click();
  }
  function envioPedido(checkbox) {
    // Obtén el ID del checkbox
    var idCheckbox = checkbox.id;

    // Extrae el número del ID usando la función
    var numero = extraerDespuesDeGuion(idCheckbox);
    // Imprime el resultado
    document.getElementById('inputEnvioPedido').value = Number(numero);
    btnEnvioPedido.click();
  }

  function cancelarPedido(checkbox) {
    // Obtén el ID del checkbox
    var idCheckbox = checkbox.id;

    // Extrae el número del ID usando la función
    var numero = extraerDespuesDeGuion(idCheckbox);

    // Imprime el resultado
    document.getElementById('inputCancelarPedido').value = Number(numero);
    btnCancelarPedido.click();
  }

  function extraerDespuesDeGuion(id) {
// Verificar si el guion está presente en el ID
const indiceGuion = id.indexOf("-");

// Si hay un guion, extraer la parte después del guion
if (indiceGuion !== -1) {
  const parteDespues = id.substring(indiceGuion + 1);
  return parteDespues;
} else {
  // Si no hay guion, devolver el ID original
  return id;
}
}

    var editVar = 0;
    function editProductList(boton) {
      var valor = boton.value;
      if (editVar == 0) {
        toggleContent(21);
        const inputEditar = document.getElementById("skuEditar");

        inputEditar.value = valor;
        btnSearchEdit.click();
      } else {
        const inputEditar = document.getElementById("skuEditar");

        inputEditar.value = valor;
        btnSearchEdit.click();
      }

      editVar = 1;
    }

    //CARGAR PRODUCTOS DE EXCEL 
    function cargarListaExcel() {
      var inputFile = document.getElementById('inputExcel');
      var file = inputFile.files[0];

      if (file) {
        mostrarCargando();

        var formData = new FormData();
        formData.append('archivo', file);

        // Realizar la solicitud POST al servidor
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/cargar-archivo', true);
        xhr.onload = function () {
          if (xhr.status === 200) {
            // Mostrar mensaje de éxito
            mostrarExito();

            // Limpiar el campo de entrada de archivos
            inputFile.value = '';
          } else {
            // Mostrar mensaje de error
            mostrarError();
          }
        };
        xhr.onerror = function () {
          // Mostrar mensaje de error
          mostrarError();
        };
        xhr.send(formData);
      } else {
        mostrarError();
      }
    }

    function mostrarCargando() {
      swal({
        title: "Cargando..!",
        text: " Tu Archivo se esta Cargando!",
        icon: "success",
        button: "OK!",
      });
    }

    function mostrarExito() {
      swal({
        title: "Archivo cargado con exito!",
        icon: "success",
        button: "OK!",
      });
      toggleContent(25);
    }

    function mostrarError() {
      swal({
        title: "ERROR!",
        text: "Hubo un error al cargar el archivo!",
        icon: "warning",
        button: "OK!",
      });
    }


  </script>
</head>

<body>
  <!--================================
          START LOGIN AREA
        =================================-->
  <section style="display: none;" id="login">
    <div class="login--header">
      <div class="logo mb-3">
        <a href="${nombreArchivo}.html">
          <img id="logo-login" src="#" alt="logo image" class="img-fluid">
        </a>
      </div>
      <!-- end .login_header -->

      <div class="login-form mb-3">
        <h4 class="mb-3">Ingresar al EPanel</h4>
        <div class="form-group mb-3">
          <input id="userInp" type="text" class="text_field" placeholder="Ingresar Email...">
        </div>

        <div class="form-group mb-3">
          <input id="passInp" type="password" class="text_field" placeholder="Ingresar Contraseña...">
        </div>

        <button id="sub_btn" class="btn btn-primary btn--lg" type="button">Entrar!</button>
      </div>
      <!-- end .login--form -->
      <img id="logo-eureka300" src="../eureka-logo-300.png" alt="Logo">

    </div>
    <!-- end .cardify -->
  </section>
  <!--================================
              END LOGIN AREA
      =================================-->
  <section style="display: none;" id="panel-logueado">
    <!--================================
                  START HEADER AREA
              =================================-->
    <header>
      <div style="width: 70%;" class="logo-header">
        <a href="${nombreArchivo}.html">
          <img id="logo-pc" src="#" alt="">
          <img id="logo-mobile" src="#" alt="">
        </a>
      </div>
      <div style="display: inline-block; margin-top: 2%; margin-left: 28%; width: 30%;">
        <span>Powered By: </span>
        <img style="margin-bottom: 0%;" width="200px" height="50px" src="../eureka-logo.png" alt="">
      </div>
    </header>
    <!--================================
                    END HEADER AREA
                =================================-->
    <!--================================
                  START NAV-SLIDER AREA
              =================================-->
    <section style="background-color: #ffc46a;" id="nav-slider-area">
      <div id="nav-header-header">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">


                <li class="nav-item">
                  <a style="text-decoration: underline;" id="webConfig" class="nav-link" href="#">Web Config</a>
                </li>
                <li class="nav-item">
                  <a id="pProductos" class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                  <a id="pPedidos" class="nav-link" href="#">Pedidos</a>
                </li>

                <li class="nav-item">
                  <a id="pSoporte" class="nav-link" href="#">Soporte</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="div-carrito">
          <button id="btnCerrarSesion" class="btn btn-primary btn--lg">CERRAR SESION</button>
        </div>
      </div>
    </section>
    <!--================================
                    END NAV-SLIDER AREA
                =================================-->
    <div id="panelWebconfig">
      <div id="vista-lateral-paneles">
        <button class="btnDespliegue" onclick="toggleContent(1)">
          Logo / Favicon
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content1">
          <div>
            <div id="logo-image" class="mb-3">
              <div class="title--fr3">
                <h3>Logo</h3>
              </div>
              <div>
                <img height="100%" width="100%" id="logoDivPanel" src="??"></img>
                <button class="btn btn-primary" for="seleccionLogo" id="btnCambiarLogo" type="button">Cambiar!</button>
              </div>
              <div class="title--fr3">
                <h3>Favicon</h3>
              </div>
              <div>
                <img height="50%" width="100%" id="faviconDivPanel" src="??"></img>
                <button class="btn btn-primary" for="seleccionLogo" id="btnCambiarFavicon"
                  type="button">Cambiar!</button>
              </div>

            </div>
          </div>
        </div>
        <button class="btnDespliegue" onclick="toggleContent(2)">
          Header
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content2">
          <div class="title--fr3 mb-3">
            <h3>Menu Header</h3>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(11)">
            Categorias
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content11">
            <div id="divNavModify">
              <table id="tabla-categorias" class="table">
                <thead>
                  <th>Categorias</th>
                  <th>Eliminar</th>
                </thead>
                <tbody id="tbodycat">
                  <td>GRIFERIAS</td>
                </tbody>
              </table>
              <input id="catInp" style="text-align: center;" type="text" class="mb-3" placeholder="Agregar Categoria">

              <button class="btn btn-primary mb-3" id="btnAddCategory" type="button">Agregar</button>

            </div>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(12)">
            Marcas
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content12">
            <div id="divNavModify">

              <span>(Max. 3).</span>

              <table id="tabla-marcas" class="table">
                <thead>
                  <th>Marcas</th>
                  <th>Eliminar</th>
                </thead>
                <tbody id="tbodybrand">
                  <td>GRIFERIAS</td>
                </tbody>
              </table>
              <input id="brandInp" style="text-align: center;" type="text" class="mb-3" placeholder="Agregar Marca">

              <button class="btn btn-primary" id="btnAddBrand" type="button">Agregar</button>

            </div>
          </div>
        </div>
        <button class="btnDespliegue" onclick="toggleContent(3)">
          Banners
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content3">
          <div>
            <button class="btnDespliegue" onclick="toggleContent(14)">
              Banners Slider
              <span class="arrowDespliegue"></span>
            </button>
            <div class="contenidoDespliegue" id="content14">
              <div>
                <span style="font-weight: bold;">Banner 1</span>
                <img height="100%" width="100%" id="bannerHead-1" src="../banner-header-ejemplo.png"></img>
                <span>Recomendado: 1366x340 </span>
                <button class="btn btn-primary mb-3" id="btnChangeBanner1" type="button">Cambiar!</button>
              </div>
              <div>
                <span style="font-weight: bold;">Banner 2</span>
                <img height="100%" width="100%" id="bannerHead-2" src="../banner-header-ejemplo.png"></img>
                <span>Recomendado: 1366x340 </span>
                <button class="btn btn-primary mb-3" id="btnChangeBanner2" type="button">Cambiar!</button>
              </div>
              <div>
                <span style="font-weight: bold;">Banner 3</span>
                <img height="100%" width="100%" id="bannerHead-3" src="../banner-header-ejemplo.png"></img>
                <span>Recomendado: 1366x340 </span>
                <button class="btn btn-primary mb-3" id="btnChangeBanner3" type="button">Cambiar!</button>
              </div>
              <div>
                <span style="font-weight: bold;">Banner 4</span>
                <img height="100%" width="100%" id="bannerHead-4" src="../banner-header-ejemplo.png"></img>
                <span>Recomendado: 1366x340 </span>
                <button class="btn btn-primary mb-3" id="btnChangeBanner4" type="button">Cambiar!</button>
              </div>
              <div>
                <span style="font-weight: bold;">Banner 5</span>
                <img height="100%" width="100%" id="bannerHead-5" src="../banner-header-ejemplo.png"></img>
                <span>Recomendado: 1366x340 </span>
                <button class="btn btn-primary mb-3" id="btnChangeBanner5" type="button">Cambiar!</button>
              </div>
            </div>
            <button class="btnDespliegue" onclick="toggleContent(15)">
              SubBanner
              <span class="arrowDespliegue"></span>
            </button>
            <div class="contenidoDespliegue" id="content15">
              <div>
                <img height="50%" width="100%" id="subBannerHead" src="../banner-head-chico-ejemplo.png"></img>
                <span>Recomendado: 1366x142 </span>

                <button class="btn btn-primary" id="btnChangeSubBanner" type="button">Cambiar!</button>
              </div>
            </div>
          </div>
        </div>
        <button class="btnDespliegue" onclick="toggleContent(4)">
          Colores
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content4">
          <button class="btnDespliegue" onclick="toggleContent(16)">
            Header
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content16">
            <h5>Fondo Header</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorHeaderLogo" class="colorInput" onchange="cambiarHeader()">
              <label for="hexCodeInputHeader">Cód.:</label>
              <input type="text" id="hexCodeInputHeader" readonly>
            </div>
            <h5>Fondo Navegador</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorNav" class="colorInput" onchange="cambiarNav()">
              <label for="hexCodeInputNav">Cód.:</label>
              <input type="text" id="hexCodeInputNav" readonly>
            </div>

            <h5>Color de Letra Nav</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorNavItem" class="colorInput" onchange="cambiarNavItem()">
              <label for="hexCodeInputNavItem">Cód.:</label>
              <input type="text" id="hexCodeInputNavItem" readonly>
            </div>

            <h5>Fondo Botones</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorHeadBtns" class="colorInput" onchange="cambiarHeadBtns()">
              <label for="hexCodeInputHeadBtns">Cód.:</label>
              <input type="text" id="hexCodeInputHeadBtns" readonly>
            </div>

            <h5>Letras Botones</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorHeadBtnsLetras" class="colorInput" onchange="cambiarHeadBtnsLetras()">
              <label for="hexCodeInputHeadBtnsLetras">Cód.:</label>
              <input type="text" id="hexCodeInputHeadBtnsLetras" readonly>
            </div>
            <button class="btn btn-primary mb-3" id="btnModifyColorsHeader" type="button">Aplicar Cambios</button>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(17)">
            ShopList
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content17">
            <h5>Fondo ShopList</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorFondoShopList" class="colorInput" onchange="cambiarFondoShopList()">
              <label for="hexCodeFondoShopList">Cód.:</label>
              <input type="text" id="hexCodeFondoShopList" readonly>
            </div>

            <button class="btn btn-primary mb-3" id="btnModifyColorsShopList" type="button">Aplicar Cambios</button>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(18)">
            Productos
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content18">
            <h5>Fondo Producto</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorFondoProductos" class="colorInput" onchange="cambiarFondoProductos()">
              <label for="hexCodeFondoProductos">Cód.:</label>
              <input type="text" id="hexCodeFondoProductos" readonly>
            </div>
            <h5>Color Precio</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorPrecio" class="colorInput" onchange="cambiarColorPrecio()">
              <label for="hexCodeColorPrecio">Cód.:</label>
              <input type="text" id="hexCodeColorPrecio" readonly>
            </div>

            <h5>Fondo Precio</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorFondoPrecio" class="colorInput" onchange="cambiarFondoPrecio()">
              <label for="hexCodeFondoPrecio">Cód.:</label>
              <input type="text" id="hexCodeFondoPrecio" readonly>
            </div>

            <h5>Color Links</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorLinks" class="colorInput" onchange="cambiarColorLinks()">
              <label for="hexCodeColorLinks">Cód.:</label>
              <input type="text" id="hexCodeColorLinks" readonly>
            </div>

            <button class="btn btn-primary mb-3" id="btnModifyColorsProducto" type="button">Aplicar Cambios</button>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(19)">
            Footer
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content19">
            <h5>Fondo Footer</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorFondoFooter" class="colorInput" onchange="cambiarFondoFooter()">
              <label for="hexCodeFondoFooter">Cód.:</label>
              <input type="text" id="hexCodeFondoFooter" readonly>
            </div>
            <h5>Color Letras</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorLetrasFooter" class="colorInput" onchange="cambiarLetrasFooter()">
              <label for="hexCodeLetrasFooter">Cód.:</label>
              <input type="text" id="hexCodeLetrasFooter" readonly>
            </div>

            <h5>Color Links</h5>

            <div class="colorDiv mb-3">
              <input type="color" id="colorLinksFooter" class="colorInput" onchange="cambiarLinksFooter()">
              <label for="hexCodeLinksFooter">Cód.:</label>
              <input type="text" id="hexCodeLinksFooter" readonly>
            </div>

            <button class="btn btn-primary mb-3" id="btnModifyColorsFooter" type="button">Aplicar Cambios</button>
          </div>
        </div>
        <button class="btnDespliegue" onclick="toggleContent(8)">
          Tipo de Letra
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content8">
          <label for="fontSelector">Selecciona una fuente:</label>
          <select id="fontSelector" class="mb-3">
            <option value="Arial, sans-serif">Arial</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Georgia, serif">Georgia</option>
          </select>

          <h5 class="fontTest">Ejemplo de Fuente</h5>
          <p class="fontTest">Este es un párrafo de muestra para ver como quedaria el texto con el cambio de fuente.</p>
          <button class="btn btn-primary mb-3" id="btnModifyLetra" type="button">Aplicar Cambios</button>
        </div>
        <button class="btnDespliegue" onclick="toggleContent(7)">
          Contacto
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content7">
          <div style="text-align: center;" id="contactModify">

            <div style="text-align: center;" id="logo-image" class="mb-3">
              <div class="title--fr3 mb-3">
                <h3>Ubicación</h3>
              </div>
              <div style="width: 100%;">
                <input type="text" id="inputUbication" class="form-control">
              </div>
              <span>Pega aqui el link que te provee <a href="https://www.google.com/maps" target="_blank">Google
                  Maps!</a></span>
            </div>
            <div style="text-align: center;" id="logo-image" class="mb-3">
              <div class="title--fr3 mb-3">
                <h3>WhatsApp</h3>
              </div>
              <div style="width: 100%;">
                <input type="text" id="inputPhone" class="form-control">
              </div>
              <span>Este sera el numero donde recibiras todas las consultas y compras!</span>
            </div>
            <div style="text-align: center;" id="logo-image" class="mb-3">
              <div class="title--fr3 mb-3">
                <h3>Email</h3>
              </div>
              <div style="width: 100%;">
                <input type="text" id="inputEmail" class="form-control">
              </div>
              <span>El Email donde podran contactarse contigo proveedores y mas!</span>

            </div>
            <button class="btn btn-primary mb-3" id="btnModifyContacto" type="button">Aplicar Cambios</button>

          </div>
        </div>
        <button class="btnDespliegue" onclick="toggleContent(5)">
          Envios
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content5">En Desarrollo</div>
        <button class="btnDespliegue" onclick="toggleContent(6)">
          Pagos
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content6">En Desarrollo</div>
        <button id="estadoTienda" style="background-color: lightgreen;" class="btnDespliegue" onclick="toggleContent(55)">
        ESTADO DE TIENDA
        <span class="arrowDespliegue"></span>
      </button>
      <div class="contenidoDespliegue" id="content55">
        <div class="mb-3">
          <h4>Deshabilitar Tienda</h4>
          <p>Esta opcion deshabilitara/habilitara tu tienda para los usuarios.</p>
          <button id="btnDeshabilitarTienda" style="background-color: yellow; color: black;display: none;" class="btn btn-primary">DESHABILITAR</button>
          <button id="btnHabilitarTienda" style="background-color: lightgreen; color: black; display: none;" class="btn btn-primary">HABILITAR</button>
  
        </div>
        <div class="mb-3">
          <h4>Eliminar Tienda</h4>
          <p>Esta opcion eliminara tu tienda <span style="font-weight: bold;">junto a todas sus configuraciones y archivos</span> .</p>
          <button id="btnEliminarTienda" style="background-color: red;" class="btn btn-primary">ELIMINAR</button>
        </div>
      </div>
     </div>

      <div id="vista-index">
        <!--================================
              START HEADER AREA
          =================================-->
        <header id="header">
          <div class="logo-header">
            <a href="${nombreArchivo}.html">
              <img id="logo-pc-header" src="#" alt="">
              <img id="logo-mobile" src="#" alt="">
            </a>
          </div>
          <div class="searcher">
            <div class="input-group mb-3">
              <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto"
                aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-primary btn-header" type="button" id="button-addon2">Buscar</button>
            </div>
          </div>


        </header>
        <!--================================
            END HEADER AREA
        =================================-->
        <!--================================
            START NAV-SLIDER AREA
        =================================-->
        <section id="nav-slider-area">
          <div id="nav-header">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link link-header" href="#">Home</a>
                    </li>
                    <li class="dropdown">
                      <a class="nav-link link-header" href="#">Categorias ▼</a>
                      <div id="cat-display" class="dropdown-content">

                      </div>
                    </li>
                    <div style="display: flex;" id="brand-display">

                    </div>
                    <li class="nav-item">
                      <a class="nav-link link-header" href="tienda.html">Tienda</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div id="div-carrito">
              <!-- Botón de carrito con lista desplegable -->
              <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()"
                onmouseout="ocultarListaCarrito()">
                <span id="cantidad-carrito">(0)</span> <span id="carrito-logo">🛒</span>

                <div id="lista-carrito">
                  <div id="titulo-de-lista">
                    <h3>Carrito de Compras</h3>
                  </div>
                  <div id="lista-productos">

                  </div>
                  <!-- Lista de productos en el carrito -->
                  <div id="mensaje-carrito-vacio">
                    <p>Tu carrito está vacío.</p>
                    <a href="tienda.html">IR A TIENDA</a>
                  </div>
                  <div id="btnIniciarCompra">
                    <div class="mb-3">
                      <span>TOTAL:</span>
                      <span style="float: right;" id="total"></span>
                    </div>
                    <div>
                      <a href="checkout.html" style="float: right;" class="btn btn-primary btnCheckout">Iniciar
                        Compra</a>
                      <button style="float: left;background-color: red;" onclick="limpiarCarrito()"
                        class="btn btn-primary btn--lg">Limpiar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="carouselHeader" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="4" aria-label="Slide 5"></button>

            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img id="bannerHeader-1" src="#" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img id="bannerHeader-2" src="#" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img id="bannerHeader-3" src="#" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img id="bannerHeader-4" src="#" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img id="bannerHeader-5" src="#" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselHeader" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </section>
        <!--================================
            END NAV-SLIDER AREA
        =================================-->

        <!--================================
            START SHOPS LIST AREA
        =================================-->
        <section id="shops-list-area">
          <div class="banners">
            <img id="subBannerHeaders" src="#" class="d-block w-100" alt="...">
          </div>
          <div id="banner-categorias">
            <div id="banner-categorias-contenido">

              <div id="carrousel-banner-categorias" class="carousel slide" data-bs-ride="carousel">
                <div id="carousel-indicators-slider" class="carousel-indicators">

                </div>
                <div id="carousel-inner-catslider" class="carousel-inner">

                </div>
                <button class="carousel-control-prev cc" type="button" data-bs-target="#carrousel-banner-categorias"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next cc" type="button" data-bs-target="#carrousel-banner-categorias"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div style="margin-top: 0;" class="shopList" id="shopList">


          </div>


        </section>
        <!--================================
            END SHOPS LIST AREA
        =================================-->

        <!--================================ 
            START FOOTER AREA
        =================================-->
        <footer id="footer-area">
          <div style="margin: 1%;" class="subfoot-t1">
            <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#"
                class="linksFooter">MyEcom</a>.</p>
          </div>

        </footer>
        <!--================================
            END FOOTER AREA
        =================================-->
      </div>
    </div>
    <div id="panelProductos" style="display: none;">
      <div id="prodConfig">

        <button class="btnDespliegue" onclick="toggleContent(20)">
          CARGAR UN PRODUCTO
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content20">
          <div class="modules__content">

            <div class="form-group mb-3">
              <label>Nombre del Producto
                <span>(Max 60 Caracteres)</span>
              </label>
              <input type="text" id="nameProduct" maxlength="60" class="text_field inputList"
                placeholder="Ingresa el nombre de producto aqui...">
            </div>


            <div class="form-group mb-3">
              <label>Seleccionar Categoria:</label>
              <div class="select-wrap select-wrap2">
                <select name="country" id="catProduct" class="text_field">
                  <option value="">Selecciona Una</option>
                </select>
                <span class="lnr lnr-chevron-down"></span>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-group">
                    <label>SKU:</label>
                    <input type="number" maxlength="11" id="skuProduct" class="text_field inputList"
                      placeholder="Codigo de Sistema...">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-group">
                    <label>Precio:</label>
                    <input type="text" maxlength="11" id="priceProduct" class="text_field inputList"
                      placeholder="00.00">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-group">
                    <label>Marca:</label>
                    <input type="text" maxlength="11" id="marcaProduct" class="text_field inputList" placeholder="FV">
                  </div>
                </div>
              </div>
              <!-- end /.col-md-6 -->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="form-group">
                    <label>Stock:</label>
                    <input type="text" maxlength="11" id="stockProduct" class="text_field inputList"
                      placeholder="Ej: 4">
                  </div>
                </div>
              </div>
              <!-- end /.col-md-6 -->

            </div>
            <!-- end /.row -->




            <div class="form-group no-margin mb-3">
              <p class="label">Descripción del Producto</p>
              <!--<div id="trumbowyg-demo"></div>-->
              <textarea id="descripProduct" placeholder="Ingresa la descripcion de producto aqui..."
                maxlength="200"></textarea>

            </div>

          </div>


          <div id="divNavModify" style="border: solid 1px gray; padding: 1%;" class="mb-3">
            <p>Imagen Principal</p>


            <img src="../imagenPrinciaplBase.png" alt="Imagen predefinida" id="imgPrincipal" width="250px"
              style="margin-bottom: 5%;" height="250px">
            <button id="btnImgPrincipal" class="btn btn-primary btn--lg">CARGAR IMAGEN</button>
            <input class="btn btn-primary mb-3" type="file" id="fileInputPrincipal" accept="image/*"
              style="display: none;">

          </div>

          <div id="divNavModify" style="border: solid 1px gray; padding: 1%;" class="mb-3">
            <p>Imagenes Secundarias</p>
            <div class="contenedor-imgSecundarias">

              <img class="previewSecundaria" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                alt="No Data Filter">
              <img class="previewSecundaria" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                alt="No Data Filter">
              <img class="previewSecundaria" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                alt="No Data Filter">
              <img class="previewSecundaria" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                alt="No Data Filter">
            </div>

            <button id="btnImgSecundarias" class="btn btn-primary btn--lg">CARGAR IMAGENES</button>

            <input class="btn btn-primary mb-3" type="file" id="fileInputSecundarias" accept="image/*" multiple
              style="display: none;">

          </div>

          <button class="btn btn-primary mb-3" style="margin: 5%;" id="btnAddProducto" type="button">CARGAR
            PRODUCTO</button>

        </div>
        <button class="btnDespliegue" onclick="toggleContent(21)">
          EDITAR PRODUCTO
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content21">
          <p>TRAER PRODUCTO PARA EDITAR</p>
          <div style="border: solid 1px grey; padding: 2%;" class="mb-3">
            <input id="skuEditar" maxlength="20" type="text" placeholder="SKU del Producto">
            <button id="btnSearchEdit" class="btn btn-primary">BUSCAR</button>
          </div>
          <div id="panelEditar" style="display: none;">
            <div class="modules__content">

              <div class="form-group mb-3">
                <label>Nombre del Producto
                  <span>(Max 60 Caracteres)</span>
                </label>
                <input type="text" id="nameProductEdit" maxlength="60" class="text_field inputList"
                  placeholder="Ingresa el nombre de producto aqui...">
              </div>


              <div class="form-group mb-3">
                <label>Seleccionar Categoria:</label>
                <div class="select-wrap select-wrap2">
                  <select name="country" id="catProductEdit" class="text_field">
                    <option value="">Selecciona Una</option>
                  </select>
                  <span class="lnr lnr-chevron-down"></span>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                      <label>SKU:</label>
                      <input type="number" maxlength="11" id="skuProductEdit" class="text_field inputList"
                        placeholder="Codigo de Sistema..." disabled>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Precio:</label>
                      <input type="text" maxlength="11" id="priceProductEdit" class="text_field inputList"
                        placeholder="00.00">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Marca:</label>
                      <input type="text" maxlength="11" id="marcaProductEdit" class="text_field inputList"
                        placeholder="FV">
                    </div>
                  </div>
                </div>
                <!-- end /.col-md-6 -->
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Stock:</label>
                      <input type="text" maxlength="11" id="stockProductEdit" class="text_field inputList"
                        placeholder="Ej: 4">
                    </div>
                  </div>
                </div>
                <!-- end /.col-md-6 -->

              </div>
              <!-- end /.row -->





              <div class="form-group no-margin mb-3">
                <p class="label">Descripción del Producto</p>
                <!--<div id="trumbowyg-demo"></div>-->
                <textarea id="descripProductEdit" placeholder="Ingresa la descripcion de producto aqui..."
                  maxlength="200"></textarea>

              </div>

            </div>


            <div id="divNavModify" style="border: solid 1px gray; padding: 1%;" class="mb-3">
              <p>Imagen Principal</p>
              <img id="imgPrincipalEdit" width="250px" style="margin-bottom: 5%;" height="250px"
                src="../imagenPrinciaplBase.png" alt="No Data Filter">

              <button id="btnEditImgPrincipal" class="btn btn-primary btn--lg">CAMBIAR IMAGENES</button>

              <input class="btn btn-primary mb-3" type="file" id="fileInputEditImgPrincipal" accept="image/*" multiple
                style="display: none;">


            </div>

            <div id="divNavModify" style="border: solid 1px gray; padding: 1%;" class="mb-3">
              <p>Imagenes Secundarias</p>
              <div class="contenedor-imgSecundariasEdit">
                <img class="previewSecundariaEdit" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                  alt="No Data Filter">
                <img class="previewSecundariaEdit" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                  alt="No Data Filter">
                <img class="previewSecundariaEdit" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                  alt="No Data Filter">
                <img class="previewSecundariaEdit" width="100px" height="100px" src="../imagenPrinciaplBase.png"
                  alt="No Data Filter">
              </div>
              <button id="btnImgSecundariasEdit" class="btn btn-primary btn--lg">CAMBIAR IMAGENES</button>

              <input class="btn btn-primary mb-3" type="file" id="fileInputEditImgSecundarias" accept="image/*" multiple
                style="display: none;">


            </div>

            <button class="btn btn-primary mb-3" style="margin: 5%;" id="btnEditarProducto" type="button">EDITAR
              PRODUCTO</button>
          </div>

        </div>
        <button class="btnDespliegue" onclick="toggleContent(22)">
          CARGAR EXCEL
          <span class="arrowDespliegue"></span>
        </button>
        <div class="contenidoDespliegue" id="content22">
          <h3>CARGAR EXCEL DE PRODUCTOS</h3>
          <button class="btnDespliegue" onclick="toggleContent(23)">
            Modelo Excel MyEcom
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content23">
            <div style="border: solid 1px grey; padding: 2%;" class="mb-3">
              Descargar Modelo de Excel:
              <a href="../../recursos/ModeloMyEcom.xlsx" download="modeloMyEcom.xlsx">DESCARGAR</a>
            </div>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(24)">
            Descargar Mi Excel
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content24">
            <div style="border: solid 1px grey; padding: 2%;" class="mb-3">
              Descargar <span style="font-weight: bold;">Mi Lista</span>:
              <a href="excel/${nombreArchivo}.xlsx" download="${nombreArchivo}.xlsx">DESCARGAR</a>
            </div>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(25)">
            Reemplazar Mi Excel
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content25">
            <input type="file" id="inputExcel" class="btn btn-primary mb-3">
            <button type="submit" class="btn btn-primary mb-3" onclick="cargarListaExcel()">Reemplazar Excel</button>
          </div>
          <button class="btnDespliegue" onclick="toggleContent(26)">
            ACTUALIZAR LISTAS
            <span class="arrowDespliegue"></span>
          </button>
          <div class="contenidoDespliegue" id="content26">
            <button type="submit" class="btn btn-primary mb-3" id="actListas">ACTUALIZAR LISTAS</button>

          </div>

        </div>

      </div>
      <div id="prodVista">
        <h1 class="mb-3">LISTADO DE PRODUCTOS</h1>
        <div id="searcherProductList">
          <input type="text" class="search-input" id="searchInputProductList" placeholder="Buscar Productos">
        </div>
        <div id="productList">
          <div class="ProductCardPanel">
            <div class="imgProductBanner">
              <img id="imgProductBanner" width="auto" height="100%" src="../imagenPrinciaplBase.png"
                alt="No Data Filter">
            </div>
            <div class="descripProductBanner">
              <div class="titleProductCard">
                <span style="font-weight: bold;">TITULO DEL PRODUCTO</span>
              </div>
              <div class="descripProductCard">
                <p>Este es un producto de prueba para verificar que todo...
                </p>
              </div>
              <div class="foootProductCard">
                <span>Categoria: <span style="font-weight: bold;" id="catPC">PRUEBA</span></span>
                <span>Marca: <span style="font-weight: bold;" id="brandPC">PRUEBA</span></span>
              </div>
              <div class="foootProductCard1">
                <span>SKU: <span style="font-weight: bold;" id="brandPC">1213</span></span>
                <span>Precio: <span style="font-weight: bold;" id="pricePC">$3.500</span></span>
              </div>
            </div>
            <div class="modifyProductBanner">
              <button class="btn btn-primary" onclick="toggleContent(21)">EDITAR</button>
              <button class="btn btn-primary btn-danger">ELIMINAR</button>

            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    </div>
    <div id="panelPedidos" style="display: none;">
      <div id="contenedorPanelPedidos">

        <div id="pedidosPanelVista">
          <p style="margin-top: 1%;">BUSCAR PEDIDO</p>
          <div style="border: solid 1px grey; padding: 2%; margin-right: 2%; margin-left: 2%;" class="mb-3">
            <input id="skuBuscarPedido" maxlength="20" type="text" placeholder="Numero del Pedido">
            <button id="btnSearchPedido" class="btn btn-primary">BUSCAR</button>
          </div>
          <button class="btnDespliegue" id="btnPedidosPendientes">
            PEDIDOS PENDIENTES
            <span class="arrowDespliegue"></span>
          </button>
          <button class="btnDespliegue" id="btnPedidosCompletados">
            PEDIDOS COMPLETADOS
            <span class="arrowDespliegue"></span>
          </button>
          <button class="btnDespliegue" id="btnPedidosCancelados">
            PEDIDOS CANCELADOS
            <span class="arrowDespliegue"></span>
          </button>

        </div>
        <div id="pedidosVista">
          <div id="ultimoPedido">
            <h3 style="margin-top: 1%;">ULTIMO PEDIDO</h3>
            <div style="margin-left: 2%; margin-right: 2%; width: 96% !important;" class="zonaPedido">
              <div class="zonaPedidoOptions">
                <div class="subdivPedidoSolicitado">
                  <span>NUMERO: <span id="numLastPedido"></span></span>
                </div>
                <div class="subdivPedidoSolicitado">
                  <span>TOTAL <span id="totalLastPedido"></span></span>
                </div>
                <div class="subdivPedidoSolicitado">
                  <span style="margin-right: 10%;">PAGO</span>
                  <input id="pagoLastPedido" type="checkbox" />
                </div>
                <div class="subdivPedidoSolicitado">
                  <span style="margin-right: 10%;">ENVIO</span>
                  <input id="envioLastPedido" type="checkbox" />
                </div>
                <div class="subdivPedidoSolicitado descargarPedidoSolicitado">
                  <a id="descargarUltimoPedido" href="#" style="text-decoration: none; color: black;">DESCARGAR</a>
                </div>
                <div class="eliminarPedidoSolicitado">
                  <span style="margin-right: 10%;">CANCELAR</span>
                  <input id="btnCancelarLastPedido" type="checkbox" />
                </div>
              </div>
              <div id="imgPedido">
                <img id="imgLastPedido" width="100%" height="100%" src="#" alt="No Data Filter">
              </div>

            </div>
          </div>
          <div style="display: none;" id="pedidosSolicitados">
            <h3 style="margin-top: 1%;">PEDIDO SOLICITADO</h3>
            <div style="margin-left: 2%; margin-right: 2%; width: 96% !important;" class="zonaPedido">
              <div class="zonaPedidoOptions">
                <div class="subdivPedidoSolicitado">
                  <span>NUMERO: <span id="nroPedidoSolicitado"></span></span>
                </div>
                <div class="subdivPedidoSolicitado">
                  <span>TOTAL <span id="nroTotalPedidoSolicitado"></span></span>
                </div>
                <div class="subdivPedidoSolicitado">
                  <span style="margin-right: 10%;">PAGO</span>
                  <input id="pagoPedidoSolicitado" type="checkbox" />
                </div>
                <div class="subdivPedidoSolicitado">
                  <span style="margin-right: 10%;">ENVIO</span>
                  <input id="envioPedidoSolicitado" type="checkbox" />
                </div>
                <div class="subdivPedidoSolicitado descargarPedidoSolicitado">
                  <a href="#" id="descargarPedidoSolicitado" style="text-decoration: none; color: black;">DESCARGAR</a>
                </div>
                <div class="eliminarPedidoSolicitado">
                  <span style="margin-right: 10%;">CANCELAR</span>
                  <input id="btnCancelarPedidoSolicitado" type="checkbox" />
                </div>
              </div>
              <div id="imgPedido">
                <img id="imgPedidoSolicitado" width="100%" height="100%" src="#" alt="No Data Filter">
              </div>

            </div>
          </div>
          <div style="display: none;" id="pedidosPendientes">
            <h3 style="margin-top: 1%;" class="mb-3">PEDIDOS PENDIENTES</h3>
            <button id="btnCancelarPedido" style="display:none"></button>
            <input id="inputCancelarPedido" style="display: none;" />
            <button id="btnPagoPedido" style="display:none"></button>
            <input id="inputPagoPedido" style="display: none;" />
            <button id="btnEnvioPedido" style="display:none"></button>
            <input id="inputEnvioPedido" style="display: none;" />
            <div id="pedidosPendientesList">

            </div>
          </div>
          <div style="display: none;" id="pedidosCompletados">
            <h3 style="margin-top: 1%;" class="mb-3">PEDIDOS COMPLETOS</h3>
            <div id="pedidosCompletadosList">

            </div>

          </div>
          <div style="display: none;" id="pedidosCancelados">
            <h3 style="margin-top: 1%;" class="mb-3">PEDIDOS CANCELADOS</h3>
            <div id="pedidosCanceladosList">

            </div>

          </div>
        </div>
      </div>

    </div>
    <div id="panelSoporte" style="display: none;">
      <p>cacona</p>

    </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>


  <script src="../js.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>
  <!--================================
              START SCRIPT BASE
          =================================-->
  <script>
    var price = localStorage.price;
    var prod = localStorage.prod;
    var titulo = localStorage.Titulo;
    window.onload = function () {


      obtenerProductosDesdeLocalStorage();

      agregarAlCarrito();
      AssignAllEvents();
    }

    //CLICKEAR PRODUCTO E IR A PRODUCT DETAIL CON SUS STATS
    function GetProductIndex(id) {
      var indstart = id.indexOf('-') + 1;
      var indend = id.length;
      return Number(id.substring(indstart, indend));
    }

    function GotoProductDetails(event) {
      var index = GetProductIndex(event.target.id);

      if (index == 0) {
        const titulo = document.getElementById('titulo-p0').value;
        const bigimg = document.getElementById('p0').value;
        const price = document.getElementById('pr0').value;
        const stock = document.getElementById('stk0').value;
        localStorage.price = price;
        localStorage.prod = 0;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }
      if (index == 1) {
        const titulo = document.getElementById('titulo-p1').value;
        const bigimg = document.getElementById('p1').value;
        const price = document.getElementById('pr1').value;
        const stock = document.getElementById('stk1').value;
        localStorage.price = price;
        localStorage.prod = 1;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }

      if (index == 2) {
        const titulo = document.getElementById('titulo-p2').value;
        const bigimg = document.getElementById('p2').value;
        const price = document.getElementById('pr2').value;
        const stock = document.getElementById('stk2').value;
        localStorage.price = price;
        localStorage.prod = 2;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }

      if (index == 3) {
        const titulo = document.getElementById('titulo-p3').value;
        const bigimg = document.getElementById('p3').value;
        const price = document.getElementById('pr3').value;
        const stock = document.getElementById('stk3').value;
        localStorage.price = price;
        localStorage.prod = 3;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }

      if (index == 4) {
        const titulo = document.getElementById('titulo-p4').value;
        const bigimg = document.getElementById('p4').value;
        const price = document.getElementById('pr4').value;
        const stock = document.getElementById('stk4').value;
        localStorage.price = price;
        localStorage.prod = 4;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }
      if (index == 5) {
        const titulo = document.getElementById('titulo-p5').value;
        const bigimg = document.getElementById('p5').value;
        const price = document.getElementById('pr5').value;
        const stock = document.getElementById('stk5').value;
        localStorage.price = price;
        localStorage.prod = 5;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }
      if (index == 6) {
        const titulo = document.getElementById('titulo-p6').value;
        const bigimg = document.getElementById('p6').value;
        const price = document.getElementById('pr6').value;
        const stock = document.getElementById('stk6').value;
        localStorage.price = price;
        localStorage.prod = 6;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }

      if (index == 7) {
        const titulo = document.getElementById('titulo-p7').value;
        const bigimg = document.getElementById('p7').value;
        const price = document.getElementById('pr7').value;
        const stock = document.getElementById('stk7').value;
        localStorage.price = price;
        localStorage.prod = 7;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }

      if (index == 8) {
        const titulo = document.getElementById('titulo-p8').value;
        const bigimg = document.getElementById('p8').value;
        const price = document.getElementById('pr8').value;
        const stock = document.getElementById('stk8').value;
        localStorage.price = price;
        localStorage.prod = 8;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }

      if (index == 9) {
        const titulo = document.getElementById('titulo-p9').value;
        const bigimg = document.getElementById('p9').value;
        const price = document.getElementById('pr9').value;
        const stock = document.getElementById('stk9').value;
        localStorage.price = price;
        localStorage.prod = 9;
        localStorage.Titulo = titulo;
        localStorage.Imagen = bigimg;
        localStorage.Stock = stock;
        window.location = "product-details.html";

      }


    }

    function getShortTitleDescription(title) {
      if (title.length > 40) title = title.substring(0, 40);
      else return title;
      return title + "...";
    }

    function getShortTitleProduct(title) {
      if (title.length > 24) title = title.substring(0, 24);
      else return title;
      return title + "...";
    }

    function AssignAllEvents() {
      var btns = document.getElementsByClassName('productoT1');

      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', GotoProductDetails);

      }
    }

    //CAMBIAR COLORES 
    function cambiarHeader() {
      const colorHeaderLogo = document.getElementById('colorHeaderLogo');
      const hexCodeInput = document.getElementById('hexCodeInputHeader');

      const selectedColor = colorHeaderLogo.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const miDiv = document.getElementById('header');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      miDiv.style.backgroundColor = nuevoColor;
    }

    function cambiarNav() {
      const colorHeaderLogo = document.getElementById('colorNav');
      const hexCodeInput = document.getElementById('hexCodeInputNav');

      const selectedColor = colorHeaderLogo.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const miDiv = document.getElementById('nav-header');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      miDiv.style.backgroundColor = nuevoColor;
    }

    function cambiarNavItem() {
      const colorHeaderLogo = document.getElementById('colorNavItem');
      const hexCodeInput = document.getElementById('hexCodeInputNavItem');

      const selectedColor = colorHeaderLogo.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('link-header');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.color = nuevoColor;
      }
    }

    function cambiarHeadBtns() {
      const colorHeaderLogo = document.getElementById('colorHeadBtns');
      const hexCodeInput = document.getElementById('hexCodeInputHeadBtns');

      const selectedColor = colorHeaderLogo.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('btn-header');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.backgroundColor = nuevoColor;
      }
    }

    function cambiarHeadBtnsLetras() {
      const colorHeaderLogo = document.getElementById('colorHeadBtnsLetras');
      const hexCodeInput = document.getElementById('hexCodeInputHeadBtnsLetras');

      const selectedColor = colorHeaderLogo.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('btn-header');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.color = nuevoColor;
      }
    }

    function cambiarFondoShopList() {
      const colorFondoShopList = document.getElementById('colorFondoShopList');
      const hexCodeInput = document.getElementById('hexCodeFondoShopList');

      const selectedColor = colorFondoShopList.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const miDiv = document.getElementById('shopList');
      const bannerCategorias = document.getElementById('banner-categorias');

      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      miDiv.style.backgroundColor = nuevoColor;
      bannerCategorias.style.backgroundColor = nuevoColor;

    }

    function cambiarFondoProductos() {
      const colorFondoProductos = document.getElementById('colorFondoProductos');
      const hexCodeInput = document.getElementById('hexCodeFondoProductos');

      const selectedColor = colorFondoProductos.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('Card');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.backgroundColor = nuevoColor;
      }
    }

    function cambiarColorPrecio() {
      const colorPrecio = document.getElementById('colorPrecio');
      const hexCodeInput = document.getElementById('hexCodeColorPrecio');

      const selectedColor = colorPrecio.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('precioColor');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.color = nuevoColor;
      }
    }

    function cambiarFondoPrecio() {
      const colorFondoPrecio = document.getElementById('colorFondoPrecio');
      const hexCodeInput = document.getElementById('hexCodeFondoPrecio');

      const selectedColor = colorFondoPrecio.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('fondoPColor');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.backgroundColor = nuevoColor;
      }
    }

    function cambiarColorLinks() {
      const colorLinks = document.getElementById('colorLinks');
      const hexCodeInput = document.getElementById('hexCodeColorLinks');

      const selectedColor = colorLinks.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('colorLinks');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.color = nuevoColor;
      }
    }

    function cambiarFondoFooter() {
      const colorLinks = document.getElementById('colorFondoFooter');
      const hexCodeInput = document.getElementById('hexCodeFondoFooter');

      const selectedColor = colorLinks.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementById('footer-area');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      elementosConClase.style.backgroundColor = nuevoColor;
    }

    function cambiarLetrasFooter() {
      const colorLinks = document.getElementById('colorLetrasFooter');
      const hexCodeInput = document.getElementById('hexCodeLetrasFooter');

      const selectedColor = colorLinks.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementById('footer-area');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      elementosConClase.style.color = nuevoColor;
    }

    function cambiarLinksFooter() {
      const colorLinks = document.getElementById('colorLinksFooter');
      const hexCodeInput = document.getElementById('hexCodeLinksFooter');

      const selectedColor = colorLinks.value;

      // Convertir el color RGB a formato hexadecimal
      const hexCode = rgbToHex(getRGB(selectedColor));
      hexCodeInput.value = hexCode;

      const elementosConClase = document.getElementsByClassName('linksFooter');
      const nuevoColor = hexCode; // Cambia esto por el color que desees

      // Iterar sobre los elementos y cambiar el color del texto
      for (let i = 0; i < elementosConClase.length; i++) {
        elementosConClase[i].style.color = nuevoColor;
      }
    }

    // Función para obtener los componentes RGB del color
    function getRGB(color) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);

      const data = ctx.getImageData(0, 0, 1, 1).data;
      return { r: data[0], g: data[1], b: data[2] };
    }

    // Función para convertir los componentes RGB a formato hexadecimal
    function rgbToHex(rgb) {
      return '#' + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
    }

    // Función para convertir un componente RGB a formato hexadecimal
    function componentToHex(c) {
      const hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }



  </script>
  <!--================================
              END SCRIPT BASE
          =================================-->
  <!--================================
              START TRAER DATOS
          =================================-->
  <script type="module">
    //CONECTAR FIREBASE
    //FIREBASE 
    // IMPORTS + CONFIGURATION
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
    import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
      from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

    import { getDatabase, onValue, ref, set, push, child, get, update, remove }
      from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAeYmYuIobZrOhJ2UVg2K_bRNsIamNYa10",
      authDomain: "myecom-415a4.firebaseapp.com",
      databaseURL: "https://myecom-415a4-default-rtdb.firebaseio.com",
      projectId: "myecom-415a4",
      storageBucket: "myecom-415a4.appspot.com",
      messagingSenderId: "219326371024",
      appId: "1:219326371024:web:a13405d51310e091377ad5",
      measurementId: "G-J7MJ3W5PZT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const realdb = getDatabase();

    //LOGIN
    //REFERENCIAS
    Logueado();

    const username = document.getElementById('userInp');
    const pass = document.getElementById('passInp');
    const submit = document.getElementById('sub_btn');
    const cerrarSesion = document.getElementById('btnCerrarSesion');

    //AUTENTICATION PROCESS
    function AuthenticateUser() {
      const dbRef = ref(realdb);

      get(child(dbRef, "Usuarios/${nombreArchivo}")).then((snapshot) => {
        if (snapshot.exists()) {
          let dbpass = decPass(snapshot.val().brandPassword);
          let email = snapshot.val().brandEmail;

          if (dbpass == pass.value && email == username.value) {
            login(snapshot.val());

          }
          else {
            swal({
              title: "Usuario o Contraseña Incorrecta!",
              icon: "warning",
              button: "OK!",
            });
          }
        }
        else {
          swal({
            title: "Usuario o Contraseña Invalida!",
            icon: "warning",
            button: "OK!",
          });
        }
      });

    }

    //DECRIPT 
    function decPass(dbpass) {
      var pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
      return pass12.toString(CryptoJS.enc.Utf8);
    }

    //LOGIN 
    function login(username) {

      if (username) {
        sessionStorage.setItem('user', JSON.stringify(username));

        let log = 1;
        set(ref(realdb, "Usuarios/${nombreArchivo}/log"), {
          log: log

        });
        const secLogin = document.getElementById('login');
        const secLogueado = document.getElementById('panel-logueado');

        secLogin.style.display = "none";
        secLogueado.style.display = "block"
      }

    }

    function Desloguear() {
      let log = 0;
      set(ref(realdb, "Usuarios/${nombreArchivo}/log"), {
        log: log

      });

      window.location = "${nombreArchivo}.html";
    }

    const log = [];

    function Logueado() {
      const dbRef = ref(realdb);

      get(child(dbRef, "Usuarios/${nombreArchivo}/log")).then((snapshot) => {
        snapshot.forEach(prod => {
          log.push(prod.val());

        });
        const secLogin = document.getElementById('login');
        const secLogueado = document.getElementById('panel-logueado');
        if (log == 0) {
          secLogin.style.display = "block";
          secLogueado.style.display = "none"
        } else {
          secLogin.style.display = "none";
          secLogueado.style.display = "block"
        }
      });

    }

    // Asignar eventos
    submit.addEventListener('click', AuthenticateUser);
    cerrarSesion.addEventListener('click', Desloguear)

    //FIN LOGIN


    var ArrayOfProducts = [];
    window.addEventListener('load', getAllData);


    function getAllData() {
      const dbref = ref(realdb);
      get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {

        snapshot.forEach(prod => {
          ArrayOfProducts.push(prod.val());
          const favicon = document.getElementById('favicon');
          const logoMobile = document.getElementById('logo-mobile');
          const logoPC = document.getElementById('logo-pc');
          const logoPCH = document.getElementById('logo-pc-header');

          const logoDivPanel = document.getElementById('logoDivPanel');
          const faviconDivPanel = document.getElementById('faviconDivPanel');

          const logoLogin = document.getElementById('logo-login');
          const titleWeb = document.getElementById('title-web');

          //CHEQUEAR SI ESTA HABILITADO
          for (let index = 0; index < ArrayOfProducts.length; index++) {
            if(ArrayOfProducts[index] == 0){
            document.getElementById("btnDeshabilitarTienda").style.display = "inline-block";
            document.getElementById("btnHabilitarTienda").style.display = "none";

            } else if (ArrayOfProducts[index] == 1){
            document.getElementById("btnHabilitarTienda").style.display = "inline-block";
            document.getElementById("btnDeshabilitarTienda").style.display = "none";

            }
            
          }

          //FIN CHEQUEAR SI ESTA HABILITADO


          const LinkFavicon = ArrayOfProducts[0];
          const LinkLogo = ArrayOfProducts[1];
          const LinkTitleWeb = ArrayOfProducts[4];


          favicon.setAttribute("href", LinkFavicon);
          logoMobile.setAttribute("src", LinkFavicon);
          logoPC.setAttribute("src", LinkLogo);
          logoPCH.setAttribute("src", LinkLogo);
          logoDivPanel.setAttribute("src", LinkLogo);
          faviconDivPanel.setAttribute("src", LinkFavicon);



          logoLogin.setAttribute("src", LinkLogo);
          titleWeb.textContent = LinkTitleWeb;




        });
      });
      GetAllCategory();
      GetAllBrand();
      GetAllColors();
      GetAllBanners();
      GetFont();
      GetContacto();
      GetAllProducts();
      GetAllPedidos();
      GetAllInfoPedidos();
    }



    function AddAllData() {
      let i = 0;
      ArrayOfProducts.forEach(prod => {
        AddAData(prod, i++);
      });
      AddAData();
    }

    function AddAData(product, index) {
      const favicon = document.getElementById('favicon');

      const LinkFavicon = product.LinkOfFavicon[0];
      favicon.setAttribute("href", LinkFavicon);

    }


    //CAMBIAR LOGO Y FAVICON
    //CARGA LOGO
    var Files = [];
    var FileReaders = [];
    var ImageLinksArray = [];

    const btnCambiarLogo = document.getElementById('btnCambiarLogo');


    function IsAllImagesUploaded() {
      return ImageLinksArray.length == Files.length;
    }

    function RestoreBack() {
      selBtn.disabled = false;
    }

    btnCambiarLogo.addEventListener('click', OpenFileDialog);

    function OpenFileDialog() {
      Files = [];

      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArray(e.target.files);
        CreateImgTags();
      }

      inp.click();

    }

    function AssignImgsToFilesArray(thefiles) {
      let num = Files.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - Files.length);

      for (let i = 0; i < looplim; i++) {
        Files.push(thefiles[i]);
      }

    }

    function CreateImgTags() {


      for (let i = 0; i < Files.length; i++) {
        FileReaders[i] = new FileReader();

        FileReaders[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReaders[i].result;
        }
        FileReaders[i].readAsDataURL(Files[i]);

        for (let i = 0; i < Files.length; i++) {
          changeLogo(Files[i], i);

        }
      }

    }

    function changeLogo(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/imgLogo#" + (imgNo + 1);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Logo...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Logo Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArray.push(downloadURL);
            if (IsAllImagesUploaded()) {
              swal({
                title: "Logo Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {
                reloadLogoFavicon();

              });
            }
          });
        });

    }

    //FIN CAMBIO LOGO
    //INICIO CAMBIO FAVICON
    var FilesF = [];
    var FileReadersF = [];
    var ImageLinksArrayF = [];

    const btnCambiarFavicon = document.getElementById('btnCambiarFavicon');


    function IsAllImagesUploadedF() {
      return ImageLinksArrayF.length == FilesF.length;
    }



    btnCambiarFavicon.addEventListener('click', OpenFileDialogF);

    function OpenFileDialogF() {
      FilesF = [];

      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayF(e.target.files);
        CreateImgTagsF();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayF(thefiles) {
      let num = FilesF.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesF.length);

      for (let i = 0; i < looplim; i++) {
        FilesF.push(thefiles[i]);
      }

    }

    function CreateImgTagsF() {


      for (let i = 0; i < FilesF.length; i++) {
        FileReadersF[i] = new FileReader();

        FileReadersF[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersF[i].result;
        }
        FileReadersF[i].readAsDataURL(FilesF[i]);

        for (let i = 0; i < FilesF.length; i++) {
          changeFavicon(FilesF[i], i);

        }
      }

    }

    function changeFavicon(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/imgFavicon#" + (imgNo + 1);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Favicon...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Favicon Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayF.push(downloadURL);
            if (IsAllImagesUploadedF()) {
              swal({
                title: "Favicon Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {
                reloadLogoFavicon();
              });
            }
          });
        });

    }

    var ArrayOfLF = [];

    function reloadLogoFavicon() {
      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {

        snapshot.forEach(prod => {
          ArrayOfLF.push(prod.val());
          const favicon = document.getElementById('favicon');
          const logoMobile = document.getElementById('logo-mobile');
          const logoPC = document.getElementById('logo-pc');
          const logoPCH = document.getElementById('logo-pc-header');

          const logoDivPanel = document.getElementById('logoDivPanel');
          const faviconDivPanel = document.getElementById('faviconDivPanel');

          const LinkFavicon = ArrayOfLF[0] + new Date().getTime();
          const LinkLogo = ArrayOfLF[1] + new Date().getTime();

          favicon.setAttribute("href", LinkFavicon);
          logoMobile.setAttribute("src", LinkFavicon);
          logoPC.setAttribute("src", LinkLogo);
          logoPCH.setAttribute("src", LinkLogo);
          logoDivPanel.setAttribute("src", LinkLogo);
          faviconDivPanel.setAttribute("src", LinkFavicon);

          ImageLinksArray = [];
          ImageLinksArrayF = [];
        });
      });
    }

    //FIN CAMBIO FAVICON
    //INICIO AGREGAR CATEGORIAS
    //GESTION DE CATEGORIAS
    //REFERENCES 
    const catInp = document.getElementById('catInp');
    const btnAddCategory = document.getElementById('btnAddCategory');

    //VALIDACIONES

    function isEmptyOrSpacesCat(str) {
      return str === null || str.match(/^ *$/) !== null;
    }

    function ValidationCat() {

      if (isEmptyOrSpacesCat(catInp.value)) {
        swal({
          title: "No puedes agregar un campo vacio!",
          icon: "warning",
          button: "OK!",
        });
        return false;
      }

      return true;
    }

    function addCategory() {
      if (!ValidationCat()) {
        return;
      };

      const dbRef = ref(realdb);



      get(child(dbRef, "Usuarios/${nombreArchivo}/zCategorias/" + catInp.value)).then((snapshot) => {
        if (snapshot.exists()) {
          swal({
            title: "Categoria Existente!",
            icon: "warning",
            button: "OK!",
          });

        }
        else {

          set(ref(realdb, "Usuarios/${nombreArchivo}/zCategorias/" + catInp.value),
            {

              category: catInp.value

            })
            .then(() => {

              swal({
                title: "Excelente!",
                text: "Categoria Agregada Exitosamente!",
                icon: "success",
                button: "Volver al Panel",
              }).then(function () {

                catInp.value = '';
              });
            })
            .catch((error) => {
              alert("error" + error);
            })

          recargarDivIndexCat();

        }
      });
    }


    // Asignar eventos
    btnAddCategory.addEventListener('click', addCategory);

    //MOSTRAR TABLA CATEGORIAS 
    //fillin the table 
    var tbodycat = document.getElementById('tbodycat');

    let ixnx = 1;
    let ixncx = 1;


    function AddItemToTableCat(categoria) {

      let trow = document.createElement("tr");
      let td1 = document.createElement('td');
      td1.innerHTML = categoria;

      trow.appendChild(td1);


      if (ixnx > 0) {
        ixnx++;
      }


      var ControlDiv = document.createElement("div");


      ControlDiv.innerHTML = '<button id="' + ixnx + '" type="button" class="btn btn-danger btn-sm my-2 ml-2" data-toggle="modal" >Eliminar</button>'


      setTimeout(function () {

        if (ixncx > 0) {
          ixncx++;
        }
        //ELIMINAR 
        var idxx = document.getElementById(ixncx);

        idxx.onclick = function () {
          swal({
            title: "Estas Seguro?",
            text: "BORRARAS " + categoria,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                remove(ref(realdb, "Usuarios/${nombreArchivo}/zCategorias/" + categoria), {
                  category: null
                });

                swal("Categoria eliminada con Exito!", {
                  icon: "success",
                });
                recargarDivIndexCat();

              } else {
                swal("Poof! Tu Categoria esta a salvo!");
              }
            });

        }


      }, 1000);

      trow.appendChild(ControlDiv);

      tbodycat.appendChild(trow);


    }


    function AddAllItemsToTableCat(Categorias) {
      tbodycat.innerHTML = "";
      Categorias.forEach(element => {
        AddItemToTableCat(element.category);
      });
    }

    //Getting all data

    function GetAllDataRealTimeCat() {
      const dbRef = ref(realdb, "Usuarios/${nombreArchivo}/zCategorias");

      onValue(dbRef, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());

        });

        AddAllItemsToTableCat(productos);
      })
    }



    window.onload = GetAllDataRealTimeCat();
    //FINAL CARGAR CATEGORIAS
    //INICIO AGREGAR MARCAS
    //INICIO AGREGAR CATEGORIAS
    //GESTION DE CATEGORIAS
    //REFERENCES 
    const brandInp = document.getElementById('brandInp');
    const btnAddBrand = document.getElementById('btnAddBrand');

    //VALIDACIONES


    function ValidationBrand() {

      if (isEmptyOrSpacesCat(brandInp.value)) {
        swal({
          title: "No puedes agregar un campo vacio!",
          icon: "warning",
          button: "OK!",
        });
        return false;
      }

      return true;
    }

    function addBrand() {
      if (!ValidationBrand()) {
        return;
      };

      const dbRef = ref(realdb);



      get(child(dbRef, "Usuarios/${nombreArchivo}/zMarcas/" + brandInp.value)).then((snapshot) => {
        if (snapshot.exists()) {
          swal({
            title: "Marca Existente!",
            icon: "warning",
            button: "OK!",
          });

        }
        else {

          set(ref(realdb, "Usuarios/${nombreArchivo}/zMarcas/" + brandInp.value),
            {

              brand: brandInp.value

            })
            .then(() => {

              swal({
                title: "Excelente!",
                text: "Marca Agregada Exitosamente!",
                icon: "success",
                button: "Volver al Panel",
              }).then(function () {

                brandInp.value = '';
              });
            })
            .catch((error) => {
              alert("error" + error);
            })

          recargarDivIndexBrand();

        }
      });
    }


    // Asignar eventos
    btnAddBrand.addEventListener('click', addBrand);

    //MOSTRAR TABLA CATEGORIAS 
    //fillin the table 
    var tbodybrand = document.getElementById('tbodybrand');

    let ixnxx = 33;
    let ixncxx = 33;


    function AddItemToTableBrand(marca) {

      let trow = document.createElement("tr");
      let td1 = document.createElement('td');
      td1.innerHTML = marca;

      trow.appendChild(td1);


      if (ixnxx > 0) {
        ixnxx++;
      }


      var ControlDiv = document.createElement("div");


      ControlDiv.innerHTML = '<button id="' + ixnxx + '" type="button" class="btn btn-danger btn-sm my-2 ml-2" data-toggle="modal" >Eliminar</button>'


      setTimeout(function () {

        if (ixncxx > 0) {
          ixncxx++;
        }
        //ELIMINAR 
        var idxxx = document.getElementById(ixncxx);

        idxxx.onclick = function () {
          swal({
            title: "Estas Seguro?",
            text: "BORRARAS " + marca,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                remove(ref(realdb, "Usuarios/${nombreArchivo}/zMarcas/" + marca), {
                  brand: null
                });

                swal("Marca eliminada con Exito!", {
                  icon: "success",
                });
                recargarDivIndexBrand();

              } else {
                swal("Poof! Tu Marca esta a salvo!");
              }
            });

        }


      }, 1000);

      trow.appendChild(ControlDiv);

      tbodybrand.appendChild(trow);


    }


    function AddAllItemsToTableBrand(Marcas) {
      tbodybrand.innerHTML = "";
      Marcas.forEach(element => {
        AddItemToTableBrand(element.brand);
      });
    }

    //Getting all data

    function GetAllDataRealTimeBrand() {
      const dbRef = ref(realdb, "Usuarios/${nombreArchivo}/zMarcas");

      onValue(dbRef, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());

        });

        AddAllItemsToTableBrand(productos);
      })
    }



    window.onload = GetAllDataRealTimeBrand();
    //FINAL AGREGAR MARCAS
    //ESTE CODIGO TAMBIEN IRIA EN EL INDEX.HTML
    //MOSTRAR LAS CATEGORIAS EN LA LISTA DESPLEGABLE Y MARCAS EN EL NAV
    var ArrayOfCategory = [];
    var ArrayOfBrand = [];

    function GetAllCategory() {
      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}/zCategorias")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfCategory.push(cat.val());

        });

        for (let index = 0; index < ArrayOfCategory.length; index++) {
          AddAPDC(ArrayOfCategory[index]);
          AddCTPC(ArrayOfCategory[index]);
          AddCTPCE(ArrayOfCategory[index]);
          AddCatSlider(ArrayOfCategory[index], ArrayOfCategory.length);
          AddBtnCatSlider(ArrayOfCategory[index]);
        }
      });

    }

    function GetAllBrand() {
      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}/zMarcas")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfBrand.push(cat.val());

        });
        for (let index = 0; index < ArrayOfBrand.length; index++) {
          AddAPDCB(ArrayOfBrand[index]);
        }
      });

    }

    var OuterDivPDC = document.getElementById('cat-display');

    var isx = 333;
    function AddAPDC(cat, index) {
      let html =
        `+contenidoInternoCat+`
      let newCat = document.createElement('li');
      newCat.innerHTML = html;
      OuterDivPDC.append(newCat);
      isx++;

    }

    var OuterDivPDCX = document.getElementById('catProduct');

function AddCTPC(cat, index) {
  let html =
    `+catListDespliegue+`
  let newCat = document.createElement('option');
  newCat.value = cat.category;
  newCat.innerHTML = html;
  OuterDivPDCX.append(newCat);

}

var OuterDivPDCXE = document.getElementById('catProductEdit');

function AddCTPCE(cat, index) {
  let html =
    `+catListDespliegue+`
  let newCat = document.createElement('option');
  newCat.value = cat.category;
  newCat.innerHTML = html;
  OuterDivPDCXE.append(newCat);

}

    var OuterDivCatSlider = document.getElementById('carousel-inner-catslider');

    var catSlider = 0;
    function AddCatSlider(cat) {
      if (catSlider == 0) {
        let html =
          `+contenidoInternoCat2+`
        let newCat = document.createElement('div');
        newCat.classList.add('carousel-item');
        newCat.classList.add('carousel-category');
        newCat.classList.add('active');
        newCat.innerHTML = html;
        OuterDivCatSlider.append(newCat);
      } else {

      }

      if (catSlider == 0) {
        var carouselCategory = document.getElementsByClassName('carousel-category');
        var xx = carouselCategory.length;
        if (catSlider <= carouselCategory.length) {
          GetAllProductsEpanel();
        } else {

        }
      }
      catSlider++;

    }

    var OuterDivBtnCatSlider = document.getElementById('carousel-indicators-slider');

    var btnCatSliderVar = 0;
    var btnCatSliderVarSlider = 1;

    function AddBtnCatSlider(cat, index) {
      let html =
        `+buttonCatSliderVar+`
      let newCat = document.createElement('li');
      newCat.style.display = "none";
      newCat.innerHTML = html;
      OuterDivBtnCatSlider.append(newCat);

      btnCatSliderVar++;
      btnCatSliderVarSlider++;
    }

    var OuterDivPDCB = document.getElementById('brand-display');

    var isxs = 444;
    function AddAPDCB(cat, index) {
      let html =
        `+contenidoInternoBrand+`
      let newCat = document.createElement('li');
      newCat.classList.add('nav-item');
      newCat.innerHTML = html;
      OuterDivPDCB.append(newCat);
      isxs++;
    }
    //FIN MOSTRAR LAS CATEGORIAS EN LA LISTA DESPLEGABLE Y MARCAS EN EL NAV
    //PONER Y ACTUALIZAR  COLORES EN EL HEADER 
    var ArrayOfColorsHeader = [];
    var ArrayOfColorsShopList = [];
    var ArrayOfColorsProducto = [];
    var ArrayOfColorsFooter = [];
    var ArrayOfFont = [];



    const fondoHeader = document.getElementById("hexCodeInputHeader");
    const fondoNavegador = document.getElementById("hexCodeInputNav");
    const colorLetrasNav = document.getElementById("hexCodeInputNavItem");
    const fondoBotonesHeader = document.getElementById("hexCodeInputHeadBtns");
    const letraBotonesHeader = document.getElementById("hexCodeInputHeadBtnsLetras");
    const fondoShopList = document.getElementById("hexCodeFondoShopList");
    const fondoProductos = document.getElementById("hexCodeFondoProductos");
    const colorPrecio = document.getElementById("hexCodeColorPrecio");
    const fondoPrecio = document.getElementById("hexCodeFondoPrecio");
    const colorLinks = document.getElementById("hexCodeColorLinks");
    const colorFondoFooter = document.getElementById("hexCodeFondoFooter");
    const colorLetrasFooter = document.getElementById("hexCodeLetrasFooter");
    const colorLinksFooter = document.getElementById("hexCodeLinksFooter");


    function GetAllColors() {
      const dbref = ref(realdb);
      get(child(dbref, "Usuarios/${nombreArchivo}/zColores/Header")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfColorsHeader.push(cat.val());

        });
        fondoHeader.value = ArrayOfColorsHeader[0];
        fondoNavegador.value = ArrayOfColorsHeader[1];
        colorLetrasNav.value = ArrayOfColorsHeader[2];
        fondoBotonesHeader.value = ArrayOfColorsHeader[3];
        letraBotonesHeader.value = ArrayOfColorsHeader[4];


        const colorHeaderLogo = document.getElementById("colorHeaderLogo");
        const colorNav = document.getElementById("colorNav");
        const colorNavItem = document.getElementById("colorNavItem");
        const colorHeadBtns = document.getElementById("colorHeadBtns");
        const colorHeadBtnsLetras = document.getElementById("colorHeadBtnsLetras");


        colorHeaderLogo.value = ArrayOfColorsHeader[0];
        colorNav.value = ArrayOfColorsHeader[1];
        colorNavItem.value = ArrayOfColorsHeader[2];
        colorHeadBtns.value = ArrayOfColorsHeader[3];
        colorHeadBtnsLetras.value = ArrayOfColorsHeader[4];

        const headerFondo = document.getElementById("header");
        const navHeaderFondo = document.getElementById("nav-header");
        const navLinkLetras = document.getElementsByClassName("link-header");
        const btnHeaderFondo = document.getElementsByClassName("btn-header");
        const btnHeaderLetras = document.getElementsByClassName("btn-header");

        headerFondo.style.backgroundColor = ArrayOfColorsHeader[0];
        navHeaderFondo.style.backgroundColor = ArrayOfColorsHeader[1];
        // Iterar sobre los elementos y cambiar el color del texto
        for (let i = 0; i < navLinkLetras.length; i++) {
          navLinkLetras[i].style.color = ArrayOfColorsHeader[2];
        }
        for (let i = 0; i < btnHeaderFondo.length; i++) {
          btnHeaderFondo[i].style.backgroundColor = ArrayOfColorsHeader[3];
        }
        for (let i = 0; i < btnHeaderLetras.length; i++) {
          btnHeaderLetras[i].style.color = ArrayOfColorsHeader[4];
        }
      });
      get(child(dbref, "Usuarios/${nombreArchivo}/zColores/ShopList")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfColorsShopList.push(cat.val());
        });

        fondoShopList.value = ArrayOfColorsShopList[0];

        const colorFondoShopList = document.getElementById("colorFondoShopList");

        colorFondoShopList.value = ArrayOfColorsShopList[0];
        const fondoShopListx = document.getElementById("shopList");
        const bannerCategorias = document.getElementById('banner-categorias');

        fondoShopListx.style.backgroundColor = ArrayOfColorsShopList[0];
        bannerCategorias.style.backgroundColor = ArrayOfColorsShopList[0];

      });

      get(child(dbref, "Usuarios/${nombreArchivo}/zColores/Producto")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfColorsProducto.push(cat.val());
        });

        colorLinks.value = ArrayOfColorsProducto[0];
        fondoProductos.value = ArrayOfColorsProducto[1];
        colorPrecio.value = ArrayOfColorsProducto[2];
        fondoPrecio.value = ArrayOfColorsProducto[3];

        const colorFondoProductos = document.getElementById("colorFondoProductos");
        const colorPreciox = document.getElementById("colorPrecio");
        const colorFondoPrecio = document.getElementById("colorFondoPrecio");
        const colorLinksx = document.getElementById("colorLinks");

        colorLinksx.value = ArrayOfColorsProducto[0];
        colorFondoProductos.value = ArrayOfColorsProducto[1];
        colorPreciox.value = ArrayOfColorsProducto[2];
        colorFondoPrecio.value = ArrayOfColorsProducto[3];

        const colorFondoProductosp = document.getElementsByClassName("Card");
        const colorPreciop = document.getElementsByClassName("precioColor");
        const colorFondoPreciop = document.getElementsByClassName("fondoPColor");
        const colorLinksp = document.getElementsByClassName("colorLinks");

        for (let i = 0; i < colorFondoProductosp.length; i++) {
          colorFondoProductosp[i].style.backgroundColor = ArrayOfColorsProducto[1];
        }
        for (let i = 0; i < colorPreciop.length; i++) {
          colorPreciop[i].style.color = ArrayOfColorsProducto[2];
        }
        for (let i = 0; i < colorFondoPreciop.length; i++) {
          colorFondoPreciop[i].style.backgroundColor = ArrayOfColorsProducto[3];
        }
        for (let i = 0; i < colorLinksp.length; i++) {
          colorLinksp[i].style.color = ArrayOfColorsProducto[0];
        }

      });

      get(child(dbref, "Usuarios/${nombreArchivo}/zColores/Footer")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfColorsFooter.push(cat.val());
        });

        colorFondoFooter.value = ArrayOfColorsFooter[0];
        colorLetrasFooter.value = ArrayOfColorsFooter[1];
        colorLinksFooter.value = ArrayOfColorsFooter[2];

        const colorFondoFooterx = document.getElementById("colorFondoFooter");
        const colorLetrasFooterx = document.getElementById("colorLetrasFooter");
        const colorLinksFooterx = document.getElementById("colorLinksFooter");

        colorFondoFooterx.value = ArrayOfColorsFooter[0];
        colorLetrasFooterx.value = ArrayOfColorsFooter[1];
        colorLinksFooterx.value = ArrayOfColorsFooter[2];

        const colorFondoFooterp = document.getElementById("footer-area");
        const colorLetrasFooterp = document.getElementById("footer-area");
        const colorLinksFooterp = document.getElementsByClassName("linksFooter");

        colorFondoFooterp.style.backgroundColor = ArrayOfColorsFooter[0];
        colorLetrasFooterp.style.color = ArrayOfColorsFooter[1];
        for (let i = 0; i < colorLinksFooterp.length; i++) {
          colorLinksFooterp[i].style.color = ArrayOfColorsFooter[2];
        }

      });

    }

    function GetFont() {
      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}/zFuente")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfFont.push(cat.val());
        });


        fontSelector.value = ArrayOfFont[0];

        let fontTestx = document.getElementById('vista-index')
        fontTestx.style.fontFamily = ArrayOfFont[0];

        let fontTest = document.getElementsByClassName('fontTest')
        for (let index = 0; index < fontTest.length; index++) {

          fontTest[index].style.fontFamily = ArrayOfFont[0];
        }

      });
    }

    var ArrayOfContacto = [];
    const inputUbicationModify = document.getElementById('inputUbication');
    const inputPhoneModify = document.getElementById('inputPhone');
    const inputEmailModify = document.getElementById('inputEmail');

    function GetContacto() {
      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfContacto.push(cat.val());
        });
        inputUbicationModify.value = ArrayOfContacto[7];
        inputPhoneModify.value = ArrayOfContacto[13];
        inputEmailModify.value = ArrayOfContacto[6];

      });
    }

    const modificarColoresHeader = document.getElementById("btnModifyColorsHeader");
    modificarColoresHeader.addEventListener('click', function () {
      set(ref(realdb, "Usuarios/${nombreArchivo}/zColores/Header"), {

        color1: fondoHeader.value,
        color2: fondoNavegador.value,
        color3: colorLetrasNav.value,
        color4: fondoBotonesHeader.value,
        color5: letraBotonesHeader.value
      });
      swal({
        title: "Colores Cambiados con Exito!",
        icon: "success",
        button: "Continuar!"
      }).then(() => {
      });
    })

    const modificarColoresShopList = document.getElementById("btnModifyColorsShopList");
    modificarColoresShopList.addEventListener('click', function () {
      set(ref(realdb, "Usuarios/${nombreArchivo}/zColores/ShopList"), {

        color6: fondoShopList.value

      });
      swal({
        title: "Colores Cambiados con Exito!",
        icon: "success",
        button: "Continuar!"
      }).then(() => {
      });
    })

    const modificarColoresProducto = document.getElementById("btnModifyColorsProducto");
    modificarColoresProducto.addEventListener('click', function () {
      set(ref(realdb, "Usuarios/${nombreArchivo}/zColores/Producto"), {

        color7: fondoProductos.value,
        color8: colorPrecio.value,
        color9: fondoPrecio.value,
        color10: colorLinks.value

      });
      swal({
        title: "Colores Cambiados con Exito!",
        icon: "success",
        button: "Continuar!"
      }).then(() => {
      });
    })

    const modificarColoresFooter = document.getElementById("btnModifyColorsFooter");
    modificarColoresFooter.addEventListener('click', function () {
      set(ref(realdb, "Usuarios/${nombreArchivo}/zColores/Footer"), {

        color11: colorFondoFooter.value,
        color12: colorLetrasFooter.value,
        color13: colorLinksFooter.value,

      });
      swal({
        title: "Colores Cambiados con Exito!",
        icon: "success",
        button: "Continuar!"
      }).then(() => {
      });
    })
    const modificarContacto = document.getElementById("btnModifyContacto");
    modificarContacto.addEventListener('click', function () {
      update(ref(realdb, "Usuarios/${nombreArchivo}"), {

        inputEmail: inputEmailModify.value,
        whatsappNumber: inputPhoneModify.value,
        inputGoogleMaps: inputUbicationModify.value,

      });
      swal({
        title: "Datos Cambiados con Exito!",
        icon: "success",
        button: "Continuar!"
      }).then(() => {
      });
    })
    //FIN PONER Y ACTUALIZAR COLORES EN EL HEADER
    //PONER Y ACTUALIZAR TODOS LOS BANNERES EN EL HEADER
    var ArrayOfBannersGet = [];
    const bannerh1 = document.getElementById("bannerHead-1");
    const bannerh2 = document.getElementById("bannerHead-2");
    const bannerh3 = document.getElementById("bannerHead-3");
    const bannerh4 = document.getElementById("bannerHead-4");
    const bannerh5 = document.getElementById("bannerHead-5");
    const bannersh = document.getElementById("subBannerHead");

    const bannerhp1 = document.getElementById("bannerHeader-1");
    const bannerhp2 = document.getElementById("bannerHeader-2");
    const bannerhp3 = document.getElementById("bannerHeader-3");
    const bannerhp4 = document.getElementById("bannerHeader-4");
    const bannerhp5 = document.getElementById("bannerHeader-5");
    const bannersph = document.getElementById("subBannerHeaders");

    function GetAllBanners() {
      const dbref = ref(realdb);
      get(child(dbref, "Usuarios/${nombreArchivo}/zBannersHeaderLinks")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfBannersGet.push(cat.val());

        });

        if (ArrayOfBannersGet[0] == 0) {
          bannerh1.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerh1.setAttribute("src", ArrayOfBannersGet[0] + new Date().getTime());
        }

        if (ArrayOfBannersGet[1] == 0) {
          bannerh2.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerh2.setAttribute("src", ArrayOfBannersGet[1] + new Date().getTime());
        }

        if (ArrayOfBannersGet[2] == 0) {
          bannerh3.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerh3.setAttribute("src", ArrayOfBannersGet[2] + new Date().getTime());
        }

        if (ArrayOfBannersGet[3] == 0) {
          bannerh4.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerh4.setAttribute("src", ArrayOfBannersGet[3] + new Date().getTime());
        }

        if (ArrayOfBannersGet[4] == 0) {
          bannerh5.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerh5.setAttribute("src", ArrayOfBannersGet[4] + new Date().getTime());
        }

        if (ArrayOfBannersGet[5] == 0) {
          bannersh.setAttribute("src", "../banner-head-chico-ejemplo.png");
        } else {
          bannersh.setAttribute("src", ArrayOfBannersGet[5] + new Date().getTime());
        }

        //EN WEB
        if (ArrayOfBannersGet[0] == 0) {
          bannerhp1.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerhp1.setAttribute("src", ArrayOfBannersGet[0] + new Date().getTime());
        }

        if (ArrayOfBannersGet[1] == 0) {
          bannerhp2.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerhp2.setAttribute("src", ArrayOfBannersGet[1] + new Date().getTime());
        }

        if (ArrayOfBannersGet[2] == 0) {
          bannerhp3.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerhp3.setAttribute("src", ArrayOfBannersGet[2] + new Date().getTime());
        }

        if (ArrayOfBannersGet[3] == 0) {
          bannerhp4.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerhp4.setAttribute("src", ArrayOfBannersGet[3] + new Date().getTime());
        }

        if (ArrayOfBannersGet[4] == 0) {
          bannerhp5.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerhp5.setAttribute("src", ArrayOfBannersGet[4] + new Date().getTime());
        }

        if (ArrayOfBannersGet[5] == 0) {
          bannersph.setAttribute("src", "../banner-head-chico-ejemplo.png");
        } else {
          bannersph.setAttribute("src", ArrayOfBannersGet[5] + new Date().getTime());
        }

      })
    }

    //FIN PONER Y ACTUALIZAR TODOS LOS BANNERS EN EL HEADER
    //FIN ESTE CODIGO TAMBIEN IRIA EN EL INDEX.HTML


    function recargarDivIndexCat() {

      // Realizar una solicitud fetch para obtener la nueva información
      fetch('epanel-${nombreArchivo}.html') // Cambia 'tu_archivo.html' por la URL correcta
        .then(response => {
          if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
          }
          return response.text();
        })
        .then(data => {
          // Crear un elemento temporal para extraer el contenido del div
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = data;

          // Obtener el contenido del div específico
          var nuevoContenido = tempDiv.querySelector('#cat-display').innerHTML;

          // Actualizar el contenido del div con la nueva información
          document.getElementById('cat-display').innerHTML = nuevoContenido;
          actualizarDataCat();
        })
        .catch(error => {
          console.error('Error al cargar la información: ', error);
        });
    }


    function actualizarDataCat() {
      ArrayOfCategory = [];
      GetAllCategory();
    }

    function recargarDivIndexBrand() {

      // Realizar una solicitud fetch para obtener la nueva información
      fetch('epanel-${nombreArchivo}.html') // Cambia 'tu_archivo.html' por la URL correcta
        .then(response => {
          if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
          }
          return response.text();
        })
        .then(data => {
          // Crear un elemento temporal para extraer el contenido del div
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = data;

          // Obtener el contenido del div específico
          var nuevoContenido = tempDiv.querySelector('#brand-display').innerHTML;

          // Actualizar el contenido del div con la nueva información
          document.getElementById('brand-display').innerHTML = nuevoContenido;
          actualizarDataBrand();
        })
        .catch(error => {
          console.error('Error al cargar la información: ', error);
        });
    }

    function actualizarDataBrand() {
      ArrayOfBrand = [];
      GetAllBrand();
      GetAllColors();

    }

    //INICIO CAMBIAR BANNERS
    //INICIO BANNER 1
    var FilesB = [];
    var FileReadersB = [];
    var ImageLinksArrayB = [];

    const btnChangeBanner1 = document.getElementById('btnChangeBanner1');


    function IsAllImagesUploadedB() {
      return ImageLinksArrayB.length == FilesB.length;
    }



    btnChangeBanner1.addEventListener('click', OpenFileDialogB);

    function OpenFileDialogB() {
      FilesB = [];


      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayB(e.target.files);
        CreateImgTagsB();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayB(thefiles) {
      let num = FilesB.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesB.length);

      for (let i = 0; i < looplim; i++) {
        FilesB.push(thefiles[i]);
      }

    }

    function CreateImgTagsB() {


      for (let i = 0; i < FilesB.length; i++) {
        FileReadersB[i] = new FileReader();

        FileReadersB[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersB[i].result;
        }
        FileReadersB[i].readAsDataURL(FilesB[i]);

        for (let i = 0; i < FilesB.length; i++) {
          changeBanner1(FilesB[i], i);

        }
      }

    }

    function changeBanner1(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/banners-head/imgBanneHead#" + (imgNo + 1);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Banner...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Banner Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayB.push(downloadURL);
            if (IsAllImagesUploadedB()) {
              swal({
                title: "Banner Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {

                update(ref(realdb, "Usuarios/${nombreArchivo}/zBannersHeaderLinks"),
                  {
                    banner1: ImageLinksArrayB

                  })
                reloadBanners();

              });
            }
          });
        });


    }
    //FIN BANNER 1
    //INICIO BANNER 2
    var FilesB1 = [];
    var FileReadersB1 = [];
    var ImageLinksArrayB1 = [];

    const btnChangeBanner2 = document.getElementById('btnChangeBanner2');


    function IsAllImagesUploadedB1() {
      return ImageLinksArrayB1.length == FilesB1.length;
    }



    btnChangeBanner2.addEventListener('click', OpenFileDialogB1);

    function OpenFileDialogB1() {
      FilesB1 = [];


      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayB1(e.target.files);
        CreateImgTagsB1();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayB1(thefiles) {
      let num = FilesB1.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesB1.length);

      for (let i = 0; i < looplim; i++) {
        FilesB1.push(thefiles[i]);
      }

    }

    function CreateImgTagsB1() {


      for (let i = 0; i < FilesB1.length; i++) {
        FileReadersB1[i] = new FileReader();

        FileReadersB1[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersB1[i].result;
        }
        FileReadersB1[i].readAsDataURL(FilesB1[i]);

        for (let i = 0; i < FilesB1.length; i++) {
          changeBanner2(FilesB1[i], i);

        }
      }

    }

    function changeBanner2(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/banners-head/imgBanneHead#" + (imgNo + 2);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Banner...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Banner Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayB1.push(downloadURL);
            if (IsAllImagesUploadedB1()) {
              swal({
                title: "Banner Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {

                update(ref(realdb, "Usuarios/${nombreArchivo}/zBannersHeaderLinks"),
                  {
                    banner2: ImageLinksArrayB1

                  })
                reloadBanners();

              });
            }
          });
        });


    }
    //FIN BANNER 2
    //INICIO BANNER 3
    var FilesB2 = [];
    var FileReadersB2 = [];
    var ImageLinksArrayB2 = [];

    const btnChangeBanner3 = document.getElementById('btnChangeBanner3');


    function IsAllImagesUploadedB2() {
      return ImageLinksArrayB2.length == FilesB2.length;
    }



    btnChangeBanner3.addEventListener('click', OpenFileDialogB2);

    function OpenFileDialogB2() {
      FilesB2 = [];


      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayB2(e.target.files);
        CreateImgTagsB2();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayB2(thefiles) {
      let num = FilesB2.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesB2.length);

      for (let i = 0; i < looplim; i++) {
        FilesB2.push(thefiles[i]);
      }

    }

    function CreateImgTagsB2() {


      for (let i = 0; i < FilesB2.length; i++) {
        FileReadersB2[i] = new FileReader();

        FileReadersB2[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersB2[i].result;
        }
        FileReadersB2[i].readAsDataURL(FilesB2[i]);

        for (let i = 0; i < FilesB2.length; i++) {
          changeBanner3(FilesB2[i], i);

        }
      }

    }

    function changeBanner3(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/banners-head/imgBanneHead#" + (imgNo + 3);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Banner...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Banner Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayB2.push(downloadURL);
            if (IsAllImagesUploadedB2()) {
              swal({
                title: "Banner Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {

                update(ref(realdb, "Usuarios/${nombreArchivo}/zBannersHeaderLinks"),
                  {
                    banner3: ImageLinksArrayB2

                  })
                reloadBanners();

              });
            }
          });
        });


    }
    //FIN BANNER 3
    //INICIO BANNER 4
    var FilesB3 = [];
    var FileReadersB3 = [];
    var ImageLinksArrayB3 = [];

    const btnChangeBanner4 = document.getElementById('btnChangeBanner4');


    function IsAllImagesUploadedB3() {
      return ImageLinksArrayB3.length == FilesB3.length;
    }



    btnChangeBanner4.addEventListener('click', OpenFileDialogB3);

    function OpenFileDialogB3() {
      FilesB3 = [];


      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayB3(e.target.files);
        CreateImgTagsB3();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayB3(thefiles) {
      let num = FilesB3.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesB3.length);

      for (let i = 0; i < looplim; i++) {
        FilesB3.push(thefiles[i]);
      }

    }

    function CreateImgTagsB3() {


      for (let i = 0; i < FilesB3.length; i++) {
        FileReadersB3[i] = new FileReader();

        FileReadersB3[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersB3[i].result;
        }
        FileReadersB3[i].readAsDataURL(FilesB3[i]);

        for (let i = 0; i < FilesB3.length; i++) {
          changeBanner4(FilesB3[i], i);

        }
      }

    }

    function changeBanner4(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/banners-head/imgBanneHead#" + (imgNo + 4);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Banner...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Banner Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayB3.push(downloadURL);
            if (IsAllImagesUploadedB3()) {
              swal({
                title: "Banner Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {

                update(ref(realdb, "Usuarios/${nombreArchivo}/zBannersHeaderLinks"),
                  {
                    banner4: ImageLinksArrayB3

                  })
                reloadBanners();

              });
            }
          });
        });


    }
    //FIN BANNER 4
    //INICIO BANNER 5
    var FilesB4 = [];
    var FileReadersB4 = [];
    var ImageLinksArrayB4 = [];

    const btnChangeBanner5 = document.getElementById('btnChangeBanner5');


    function IsAllImagesUploadedB4() {
      return ImageLinksArrayB4.length == FilesB4.length;
    }



    btnChangeBanner5.addEventListener('click', OpenFileDialogB4);

    function OpenFileDialogB4() {
      FilesB4 = [];


      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayB4(e.target.files);
        CreateImgTagsB4();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayB4(thefiles) {
      let num = FilesB4.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesB4.length);

      for (let i = 0; i < looplim; i++) {
        FilesB4.push(thefiles[i]);
      }

    }

    function CreateImgTagsB4() {


      for (let i = 0; i < FilesB4.length; i++) {
        FileReadersB4[i] = new FileReader();

        FileReadersB4[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersB4[i].result;
        }
        FileReadersB4[i].readAsDataURL(FilesB4[i]);

        for (let i = 0; i < FilesB4.length; i++) {
          changeBanner5(FilesB4[i], i);

        }
      }

    }

    function changeBanner5(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/banners-head/imgBanneHead#" + (imgNo + 5);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando Banner...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio Banner Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayB4.push(downloadURL);
            if (IsAllImagesUploadedB4()) {
              swal({
                title: "Banner Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {

                update(ref(realdb, "Usuarios/${nombreArchivo}/zBannersHeaderLinks"),
                  {
                    banner5: ImageLinksArrayB4

                  })
                reloadBanners();

              });
            }
          });
        });


    }
    //FIN BANNER 5
    //INICIO SUB BANNER 
    var FilesB5 = [];
    var FileReadersB5 = [];
    var ImageLinksArrayB5 = [];

    const btnChangeSubBanner = document.getElementById('btnChangeSubBanner');


    function IsAllImagesUploadedB5() {
      return ImageLinksArrayB5.length == FilesB5.length;
    }



    btnChangeSubBanner.addEventListener('click', OpenFileDialogB5);

    function OpenFileDialogB5() {
      FilesB5 = [];


      let inp = document.createElement('input');
      inp.type = 'file';
      inp.multiple = 'multiple';


      inp.onchange = (e) => {
        AssignImgsToFilesArrayB5(e.target.files);
        CreateImgTagsB5();
      }

      inp.click();

    }

    function AssignImgsToFilesArrayB5(thefiles) {
      let num = FilesB5.length + thefiles.length;
      let looplim = (num <= 1) ? thefiles.length : (1 - FilesB5.length);

      for (let i = 0; i < looplim; i++) {
        FilesB5.push(thefiles[i]);
      }

    }

    function CreateImgTagsB5() {


      for (let i = 0; i < FilesB5.length; i++) {
        FileReadersB5[i] = new FileReader();

        FileReadersB5[i].onload = function () {
          var img = document.createElement('img');
          img.id = 'imgNo' + i;
          img.classList.add('imgs');
          img.src = FileReadersB5[i].result;
        }
        FileReadersB5[i].readAsDataURL(FilesB5[i]);

        for (let i = 0; i < FilesB5.length; i++) {
          changeSubBanner(FilesB5[i], i);

        }
      }

    }

    function changeSubBanner(imgToUpload, imgNo) {

      const metadata = {
        contentType: imgToUpload.type
      };
      const storage = getStorage();
      const ImageAdress = "TheImages/${nombreArchivo}/banners-head/imgBanneHead#" + (imgNo + 6);
      const storageRef = sRef(storage, ImageAdress);
      const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

      UploadTask.on('state_changed', (snapshot) => {
        swal({
          title: "Cambiando SubBanner...",
          icon: "success"
        });
      },
        (error) => {
          swal({
            title: "Cambio SubBanner Fallida",
            icon: "error",
            button: "OK!",
          });
        },
        () => {
          getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArrayB5.push(downloadURL);
            if (IsAllImagesUploadedB5()) {
              swal({
                title: "SubBanner Cambiado con Exito!",
                icon: "success",
                button: "Continuar!"
              }).then(() => {

                update(ref(realdb, "Usuarios/${nombreArchivo}/zBannersHeaderLinks"),
                  {
                    banner6: ImageLinksArrayB5

                  })
                reloadBanners();

              });
            }
          });
        });


    }
    //FIN SUB BANNER

    function reloadBanners() {
      var ArrayOfBanners = [];

      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}/zBannersHeaderLinks")).then((snapshot) => {

        snapshot.forEach(prod => {
          ArrayOfBanners.push(prod.val());
        });
        const bannerHead1 = document.getElementById('bannerHead-1');
        const bannerHead2 = document.getElementById('bannerHead-2');
        const bannerHead3 = document.getElementById('bannerHead-3');
        const bannerHead4 = document.getElementById('bannerHead-4');
        const bannerHead5 = document.getElementById('bannerHead-5');
        const subBannerHead = document.getElementById('subBannerHead');

        const bannerp1 = document.getElementById("bannerHeader-1");
        const bannerp2 = document.getElementById("bannerHeader-2");
        const bannerp3 = document.getElementById("bannerHeader-3");
        const bannerp4 = document.getElementById("bannerHeader-4");
        const bannerp5 = document.getElementById("bannerHeader-5");
        const bannersp = document.getElementById("subBannerHeaders");

        if (ArrayOfBanners[0] == 0) {
          bannerHead1.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerHead1.setAttribute("src", ArrayOfBanners[0] + new Date().getTime());
        }

        if (ArrayOfBanners[1] == 0) {
          bannerHead2.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerHead2.setAttribute("src", ArrayOfBanners[1] + new Date().getTime());
        }

        if (ArrayOfBanners[2] == 0) {
          bannerHead3.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerHead3.setAttribute("src", ArrayOfBanners[2] + new Date().getTime());
        }

        if (ArrayOfBanners[3] == 0) {
          bannerHead4.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerHead4.setAttribute("src", ArrayOfBanners[3] + new Date().getTime());
        }

        if (ArrayOfBanners[4] == 0) {
          bannerHead5.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerHead5.setAttribute("src", ArrayOfBanners[4] + new Date().getTime());
        }

        if (ArrayOfBanners[5] == 0) {
          subBannerHead.setAttribute("src", "../banner-head-chico-ejemplo.png");
        } else {
          subBannerHead.setAttribute("src", ArrayOfBanners[5] + new Date().getTime());
        }

        //EN WEB
        if (ArrayOfBanners[0] == 0) {
          bannerp1.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerp1.setAttribute("src", ArrayOfBanners[0] + new Date().getTime());
        }

        if (ArrayOfBanners[1] == 0) {
          bannerp2.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerp2.setAttribute("src", ArrayOfBanners[1] + new Date().getTime());
        }

        if (ArrayOfBanners[2] == 0) {
          bannerp3.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerp3.setAttribute("src", ArrayOfBanners[2] + new Date().getTime());
        }

        if (ArrayOfBanners[3] == 0) {
          bannerp4.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerp4.setAttribute("src", ArrayOfBanners[3] + new Date().getTime());
        }

        if (ArrayOfBanners[4] == 0) {
          bannerp5.setAttribute("src", "../banner-header-ejemplo.png");
        } else {
          bannerp5.setAttribute("src", ArrayOfBanners[4] + new Date().getTime());
        }

        if (ArrayOfBanners[5] == 0) {
          bannersp.setAttribute("src", "../banner-head-chico-ejemplo.png");
        } else {
          bannersp.setAttribute("src", ArrayOfBanners[5] + new Date().getTime());
        }
      });

      ImageLinksArrayB = [];
      ImageLinksArrayB1 = [];
      ImageLinksArrayB2 = [];
      ImageLinksArrayB3 = [];
      ImageLinksArrayB4 = [];
      ImageLinksArrayB5 = [];


    }

    //FIN CAMBIAR BANNERS
    //INICIO CAMBIO DE FUENTE
    // JavaScript para cambiar la fuente al seleccionar una opción en la lista desplegable
    const fontSelector = document.getElementById('fontSelector');

    fontSelector.addEventListener('change', function () {
      const selectedFont = fontSelector.value;
      let fontTest = document.getElementsByClassName('fontTest')
      for (let index = 0; index < fontTest.length; index++) {

        fontTest[index].style.fontFamily = selectedFont;
      }

    });

    const btnModifyLetra = document.getElementById('btnModifyLetra');

    btnModifyLetra.addEventListener('click', function () {
      const selectedFont = fontSelector.value;
      let fontTest = document.getElementById('vista-index')
      fontTest.style.fontFamily = selectedFont;
      set(ref(realdb, "Usuarios/${nombreArchivo}/zFuente"), {

        fuente: selectedFont

      });
      swal({
        title: "Fuente Cambiada con Exito!",
        icon: "success",
        button: "Continuar!"
      }).then(() => {
      });
    });

    //FIN CAMBIO DE FUENTE 
    //INICIO PANEL DE PRODUCTOS 
    //INICIO CARGA DE PRODUCTO
    const btnAddProduct = document.getElementById('btnAddProducto');




    btnAddProduct.addEventListener('click', function () {
      const dbRef = ref(realdb);

      let nameProduct = document.getElementById('nameProduct').value;
      let catProduct = document.getElementById('catProduct').value;
      let skuProduct = document.getElementById('skuProduct').value;
      let priceProduct = document.getElementById('priceProduct').value;
      let marcaProduct = document.getElementById('marcaProduct').value;
      let stockProduct = document.getElementById('stockProduct').value;
      let descripProduct = document.getElementById('descripProduct').value;
      const imgName = document.getElementById('fileInputPrincipal');
      const imgSecundarias = document.getElementById('fileInputSecundarias');

      if (nameProduct == "" || catProduct == "" || skuProduct == "" || priceProduct == "" ||
        marcaProduct == "" || stockProduct == "" || descripProduct == "" || imgName.files[0] == null || imgSecundarias.files[0] == null) {
        swal({
          title: "No puedes dejar campos vacios!",
          icon: "error",
          button: "OK!",
        });
      } else {
        get(child(dbRef, "Usuarios/${nombreArchivo}/Productos/" + skuProduct)).then((snapshot) => {
          if (snapshot.exists()) {
            swal({
              title: "Este Codigo de Producto Ya Existe!",
              icon: "warning",
              button: "OK!",
            });

          }
          else {
            set(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuProduct), {

              name: nameProduct,
              category: catProduct,
              sku: skuProduct,
              price: priceProduct,
              brand: marcaProduct,
              stock: stockProduct,
              description: descripProduct

            });



            const imgToUploadx = imgName.files[0];
            var imgProduct = [];

            var imgNamePrincipal = "IMG"

            const metadatax = {
              contentType: imgToUploadx.type
            };


            const storage = getStorage();
            const ImageAdress = "TheImages/${nombreArchivo}/Productos/" + skuProduct + "/" + (imgNamePrincipal + "0");
            const storageRef = sRef(storage, ImageAdress);
            const UploadTask = uploadBytesResumable(storageRef, imgToUploadx, metadatax);


            UploadTask.on('state_changed', (snapshot) => {

            },
              (error) => {

              },
              () => {
                getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                  imgProduct.push(downloadURL);
                  if (IsAllImagesUploadedB5()) {

                    update(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuProduct),
                      {
                        zimgProduct: imgProduct,
                        zimgSecundarias: null
                      })


                  }
                });
              });


            for (let i = 0; i < Math.min(imgSecundarias.files.length, 4); i++) {

              const imgToUpload = imgSecundarias.files[i];
              var imgProductS = [];
              var indName = i + 1;
              var imgNamePrincipal = "IMG"

              const metadata = {
                contentType: imgToUpload.type
              };


              const storage = getStorage();
              const ImageAdress = "TheImages/${nombreArchivo}/Productos/" + skuProduct + "/" + (imgNamePrincipal + indName);
              const storageRef = sRef(storage, ImageAdress);
              const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);


              UploadTask.on('state_changed', (snapshot) => {

              },
                (error) => {

                },
                () => {
                  getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                    imgProductS.push(downloadURL);
                    if (IsAllImagesUploadedB5()) {

                      update(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuProduct),
                        {
                          zimgProduct: imgProduct,
                          zimgSecundarias: imgProductS

                        })

                    }
                  });

                });

            }

            let nameProductX = document.getElementById('nameProduct');
            let catProductX = document.getElementById('catProduct');
            let skuProductX = document.getElementById('skuProduct');
            let priceProductX = document.getElementById('priceProduct');
            let marcaProductX = document.getElementById('marcaProduct');
            let stockProductX = document.getElementById('stockProduct');
            let descripProductX = document.getElementById('descripProduct');

            nameProductX.value = '';
            catProductX.value = '';
            skuProductX.value = '';
            priceProductX.value = '';
            marcaProductX.value = '';
            stockProductX.value = '';
            descripProductX.value = '';

            var imgPrincipalx = document.getElementById("imgPrincipal");
            imgPrincipalx.src = "../imagenPrinciaplBase.png";

            var imgSecundariax = document.getElementsByClassName("previewSecundaria");

            for (let index = 0; index < imgSecundariax.length; index++) {
              imgSecundariax[index].src = "../imagenPrinciaplBase.png";

            }

            document.getElementById("btnImgPrincipal").textContent = "CARGAR IMAGEN";
            document.getElementById("btnImgSecundarias").textContent = "CARGAR IMAGENES";

            imgProduct = [];
            imgProductS = [];


            toggleContent(20);

            cargaExitosa();

          }
        });
      }



    });


    //SETEO DE PRECIOS A MILES 
    Number.prototype.format = function (n, x, s, c) {
      let re = '\d(?=(\d{' + (x || 3) + '})+' + (n > 0 ? '\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));
      return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };
    // Restricts input for the given textbox to the given inputFilter.
    function setInputFilter(textbox, inputFilter) {
      ["input"].forEach(function (event) {
        textbox.addEventListener(event, function () {
          if (this.id === "priceProduct") {
            if (this.value !== "") {
              let str = this.value;
              let oldstr = str.substring(0, str.length - 1);
              let millares = ".";
              let decimales = ",";
              str = str.split(millares).join("");
              if (isNaN(str)) {
                this.value = oldstr;
              } else {
                let numero = parseInt(str);
                this.value = numero.format(0, 3, millares, decimales);
              }
            }
          }
        });
      });
    }
    setInputFilter(document.getElementById("priceProduct"), function (value) {
      //declare an object RegExp
      let regex = new RegExp(/^-?d*$/);
      //test the regexp
      return regex.test(value);
    });

    //FIN CARGA DE PRODUCTO
    //INICIO EDITAR PRODUCTOS

    const btnSearchEdit = document.getElementById("btnSearchEdit")
    const panelEditar = document.getElementById("panelEditar");

    let skuProductEdit = [];
    btnSearchEdit.addEventListener('click', function () {
      const skuEditar = document.getElementById("skuEditar").value;

      let nameProductEditar = document.getElementById('nameProductEdit');
      let catProductEditar = document.getElementById('catProductEdit');
      let skuProductEditar = document.getElementById('skuProductEdit');
      let priceProductEditar = document.getElementById('priceProductEdit');
      let marcaProductEditar = document.getElementById('marcaProductEdit');
      let stockProductEditar = document.getElementById('stockProductEdit');
      let descripProductEditar = document.getElementById('descripProductEdit');

      const dbRef = ref(realdb);
      get(child(dbRef, "Usuarios/${nombreArchivo}/Productos/" + skuEditar)).then((snapshot) => {
        if (snapshot.exists() && skuEditar != "") {

          snapshot.forEach(cat => {
            skuProductEdit.push(cat.val());
          });
          swal({
            title: "Producto cargado para editar!",
            icon: "success",
            button: "OK!",
          });

          nameProductEditar.value = skuProductEdit[3];
          catProductEditar.value = skuProductEdit[1];
          skuProductEditar.value = skuProductEdit[5];
          priceProductEditar.value = skuProductEdit[4];
          marcaProductEditar.value = skuProductEdit[0];
          stockProductEditar.value = skuProductEdit[6];
          descripProductEditar.value = skuProductEdit[2];

          var imgPrincipalxi = document.getElementById("imgPrincipalEdit");

          if (skuProductEdit[7][0] == undefined) {
            imgPrincipalxi.src = "../imagenPrinciaplBase.png";


          } else {
            imgPrincipalxi.src = skuProductEdit[7][0];

          }

          var imgSecundariaxi = document.getElementsByClassName("previewSecundariaEdit");

          if (skuProductEdit[8][0] == undefined) {
            for (let index = 0; index < imgSecundariaxi.length; index++) {
              imgSecundariaxi[index].src = "../imagenPrinciaplBase.png";

            }
          } else {
            for (let index = 0; index < imgSecundariaxi.length; index++) {
              imgSecundariaxi[index].src = skuProductEdit[8][index];

            }
          }


          panelEditar.style.display = "block";
          skuProductEdit = [];

        }
        else {
          swal({
            title: "Este Codigo No Existe!",
            icon: "warning",
            button: "OK!",
          });
          panelEditar.style.display = "none";
        }
      });
    })



    const btnEditProduct = document.getElementById("btnEditarProducto");

    btnEditProduct.addEventListener('click', function () {
      const dbRef = ref(realdb);

      let nameProduct = document.getElementById('nameProductEdit').value;
      let catProduct = document.getElementById('catProductEdit').value;
      let skuProduct = document.getElementById('skuProductEdit').value;
      let priceProduct = document.getElementById('priceProductEdit').value;
      let marcaProduct = document.getElementById('marcaProductEdit').value;
      let stockProduct = document.getElementById('stockProductEdit').value;
      let descripProduct = document.getElementById('descripProductEdit').value;


      if (nameProduct == "" || catProduct == "" || skuProduct == "" || priceProduct == "" ||
        marcaProduct == "" || stockProduct == "" || descripProduct == "") {
        swal({
          title: "No puedes dejar campos vacios!",
          icon: "error",
          button: "OK!",
        });
      } else {
        get(child(dbRef, "Usuarios/${nombreArchivo}/Productos/" + skuProduct)).then((snapshot) => {

          update(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuProduct), {

            name: nameProduct,
            category: catProduct,
            sku: skuProduct,
            price: priceProduct,
            brand: marcaProduct,
            stock: stockProduct,
            description: descripProduct

          });

          const imgName = document.getElementById('fileInputEditImgPrincipal');
          const imgSecundarias = document.getElementById('fileInputEditImgSecundarias');

          if (imgName.files[0] == null) {

          } else {
            const imgToUploadx = imgName.files[0];
            var imgProduct = [];

            var imgNamePrincipal = "IMG"

            const metadatax = {
              contentType: imgToUploadx.type
            };


            const storage = getStorage();
            const ImageAdress = "TheImages/${nombreArchivo}/Productos/" + skuProduct + "/" + (imgNamePrincipal + "0");
            const storageRef = sRef(storage, ImageAdress);
            const UploadTask = uploadBytesResumable(storageRef, imgToUploadx, metadatax);


            UploadTask.on('state_changed', (snapshot) => {

            },
              (error) => {

              },
              () => {
                getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                  imgProduct.push(downloadURL);
                  if (IsAllImagesUploadedB5()) {

                    update(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuProduct),
                      {
                        zimgProduct: imgProduct,
                      })


                  }
                });
              });
          }

          if (imgSecundarias.files[0] == null) {

          } else {

            for (let i = 0; i < Math.min(imgSecundarias.files.length, 4); i++) {

              const imgToUpload = imgSecundarias.files[i];
              var imgProductS = [];
              var indName = i + 1;
              var imgNamePrincipal = "IMG"

              const metadata = {
                contentType: imgToUpload.type
              };


              const storage = getStorage();
              const ImageAdress = "TheImages/${nombreArchivo}/Productos/" + skuProduct + "/" + (imgNamePrincipal + indName);
              const storageRef = sRef(storage, ImageAdress);
              const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);


              UploadTask.on('state_changed', (snapshot) => {

              },
                (error) => {

                },
                () => {
                  getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                    imgProductS.push(downloadURL);
                    if (IsAllImagesUploadedB5()) {

                      update(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuProduct),
                        {
                          zimgSecundarias: imgProductS

                        })


                    }
                  });
                });
            }
          }

          let nameProductX = document.getElementById('nameProductEdit');
          let catProductX = document.getElementById('catProductEdit');
          let skuProductX = document.getElementById('skuProductEdit');
          let priceProductX = document.getElementById('priceProductEdit');
          let marcaProductX = document.getElementById('marcaProductEdit');
          let stockProductX = document.getElementById('stockProductEdit');
          let descripProductX = document.getElementById('descripProductEdit');

          let skuEditar = document.getElementById("skuEditar");

          nameProductX.value = '';
          catProductX.value = '';
          skuProductX.value = '';
          priceProductX.value = '';
          marcaProductX.value = '';
          stockProductX.value = '';
          descripProductX.value = '';
          skuEditar.value = '';
          imgName.value = '';
          imgSecundarias.value = '';

          var panelEditar = document.getElementById("panelEditar");

          panelEditar.style.display = "none";
          editVar = 0;
          toggleContent(21);


        });
        edicionExitosa()
      }



    });

    function edicionExitosa() {
      swal({
        title: "Producto Editado con Exito!",
        icon: "success",
        button: "Continuar!"
      })

    }

    function cargaExitosa() {

      swal({
        title: "Producto Cargado con Exito!",
        icon: "success",
        button: "Continuar!"
      })
    }

    //SETEO DE PRECIOS A MILES 
    Number.prototype.format = function (n, x, s, c) {
      let re = '\d(?=(\d{' + (x || 3) + '})+' + (n > 0 ? '\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));
      return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };
    // Restricts input for the given textbox to the given inputFilter.
    function setInputFilterEdit(textbox, inputFilter) {
      ["input"].forEach(function (event) {
        textbox.addEventListener(event, function () {
          if (this.id === "priceProductEdit") {
            if (this.value !== "") {
              let str = this.value;
              let oldstr = str.substring(0, str.length - 1);
              let millares = ".";
              let decimales = ",";
              str = str.split(millares).join("");
              if (isNaN(str)) {
                this.value = oldstr;
              } else {
                let numero = parseInt(str);
                this.value = numero.format(0, 3, millares, decimales);
              }
            }
          }
        });
      });
    }
    setInputFilter(document.getElementById("priceProductEdit"), function (value) {
      //declare an object RegExp
      let regex = new RegExp(/^-?d*$/);
      //test the regexp
      return regex.test(value);
    });
    //FIN EDITAR PRODUCTOS
    //INICIO LISTADO PRODUCTOS 



    var ArrayOfProductsList = [];

    function getAllProducts() {

      const dbref = ref(realdb);

      get(child(dbref, "Usuarios/${nombreArchivo}/Productos")).then((snapshot) => {
        snapshot.forEach(cat => {
          ArrayOfProductsList.push(cat.val());

        });
        for (let index = 0; index < ArrayOfProductsList.length; index++) {
          AddProductToList(ArrayOfProductsList[index]);
        }
      });

    }

    var OuterDivProductList = document.getElementById('productList');

    let skuID = 300;
    function AddProductToList(brand, category, description, name, price, sku, stock, zimgProduct) {

      if (zimgProduct == null) {
        zimgProduct = "../imagenPrinciaplBase.png";
      }
      let html =

        `+addProduct+`

      let newCat = document.createElement('div');
      newCat.classList.add("ProductCardPanel");
      newCat.classList.add("productoFiltro");
      newCat.innerHTML = html;
      OuterDivProductList.append(newCat);

      //BOTON ELIMINAR DE LA PRODUCT LIST 

      var idDelete = document.getElementById(skuID);

      idDelete.onclick = function () {

        swal({
          title: "Estas Seguro?",
          text: "BORRARAS ESTE ARTICULO",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              remove(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + sku), {
                name: null,
                category: null,
                sku: null,
                price: null,
                brand: null,
                stock: null,
                description: null,
                zimgProduct: null,
                zimgSecundarias: null
              });
              swal("Tu Producto Se Elimino con Exito!", {
                icon: "success",
              });
              const skuEdit = document.getElementById("skuEditar");
              if (skuEdit.value == sku) {
                let nameProductX = document.getElementById('nameProductEdit');
                let catProductX = document.getElementById('catProductEdit');
                let skuProductX = document.getElementById('skuProductEdit');
                let priceProductX = document.getElementById('priceProductEdit');
                let marcaProductX = document.getElementById('marcaProductEdit');
                let stockProductX = document.getElementById('stockProductEdit');
                let descripProductX = document.getElementById('descripProductEdit');

                let skuEditar = document.getElementById("skuEditar");

                nameProductX.value = '';
                catProductX.value = '';
                skuProductX.value = '';
                priceProductX.value = '';
                marcaProductX.value = '';
                stockProductX.value = '';
                descripProductX.value = '';
                skuEditar.value = '';


                var imgPrincipalxi = document.getElementById("imgPrincipalEdit");

                imgPrincipalxi.src = "../imagenPrinciaplBase.png";

                var imgSecundariaxi = document.getElementsByClassName("previewSecundariaEdit");

                for (let index = 0; index < imgSecundariaxi.length; index++) {
                  imgSecundariaxi[index].src = "../imagenPrinciaplBase.png";

                }

                var panelEditar = document.getElementById("panelEditar");

                panelEditar.style.display = "none";
                editVar = 0;
                toggleContent(21);
              } else {

              }
            } else {
              swal("Poof! Tu producto esta a salvo!");
            }
          });


      }
      skuID++;


    }

    function AddAllProductsToList(Productos) {

      OuterDivProductList.innerHTML = "";

      Productos.forEach(element => {
        AddProductToList(element.brand, element.category, element.description, element.name,
          element.price, element.sku, element.stock, element.zimgProduct)
      });
    }

    function GetAllProducts() {
      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/Productos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        AddAllProductsToList(productos);
      })
    }



    //FIN LISTADO PRODUCTOS 

    //FILTRAR PRODUCTOS EN BUSCADOR 
    //FILTRAR PRODUCTOS EN BUSCADOR
    document.addEventListener("DOMContentLoaded", function () {
      // Obtén referencias al input y al contenedor de divs
      var filtroInput = document.getElementById("searchInputProductList");
      var contenedorDivs = document.getElementById("productList");

      // Agrega un event listener al input para el evento 'input'
      filtroInput.addEventListener("input", function () {
        // Obtén el valor del input y conviértelo a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
        var filtro = filtroInput.value.toLowerCase();

        // Obtén todos los divs dentro del contenedor
        var divs = contenedorDivs.getElementsByClassName("productoFiltro");

        // Recorre cada div y muestra u oculta según el filtro
        for (var i = 0; i < divs.length; i++) {
          var textoDiv = divs[i].textContent.toLowerCase();
          if (textoDiv.includes(filtro)) {
            divs[i].style.display = "flex";
          } else {
            divs[i].style.display = "none";
          }
        }
      });
    });

    const actListas = document.getElementById("actListas");

    actListas.addEventListener('click', function () {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/obtener-contenido-excel', true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          // Obtener el contenido del archivo Excel como JSON
          var contenidoExcel = JSON.parse(xhr.responseText);

          // Mostrar el contenido en el div
          for (let index = 0; index < contenidoExcel.length; index++) {
            cargarExcelAlServer(contenidoExcel[index]);
          }
        } else {
          swal({
            title: "Debes Cargar Una Lista Primero!",
            icon: "warning",
            button: "Continuar!"
          })
        }
      };
      xhr.send();
    })

    function cargarExcelAlServer(producto) {
      var sku = producto['Sku'];
      var skuE = sku.toString();

      var name = producto['Nombre'];
      var nameE = name.toString();

      var category = producto['Categoria'];
      var categoryE = category.toString();

      var price = producto['Precio'];
      var priceE = price.toString();

      var brand = producto['Marca'];
      var brandE = brand.toString();

      var stock = producto['Stock'];
      var stockE = stock.toString();
      var description = producto['Descripcion Breve'];
      var descriptionE = description.toString();

      update(ref(realdb, "Usuarios/${nombreArchivo}/Productos/" + skuE), {
        name: nameE,
        category: categoryE,
        sku: skuE,
        price: priceE,
        brand: brandE,
        stock: stockE,
        description: descriptionE

      });
      swal("Lista Cambiada con Exito!", {
        icon: "success",
      });
      toggleContent(26);
    }
    //FIN PANEL DE PRODUCTOS 

    //INICIO LISTADO PRODUCTOS 





    var stockCartel = 0;
    var prodPanel = 0;
    function AddProductToListEpanel(brand, category, description, name, price, sku, stock, zimgProduct, zimgSecundarias) {
      if (prodPanel <= 2) {

        if (zimgProduct == null) {
          zimgProduct = "../imagenPrinciaplBase.png";
        }

        let html =
        `+cardProduct+`


        let newCat = document.createElement('div');
        newCat.classList.add("shop--Card");
        newCat.classList.add("productoFiltro");
        newCat.innerHTML = html;
        var OuterDivShopList = document.getElementById(category)

        OuterDivShopList.append(newCat);

        var stkCartel = "stock-" + stockCartel;
        if (stock <= 0) {
          document.getElementById(stkCartel).style.backgroundColor = "red";
          document.getElementById(stkCartel).textContent = "SIN STOCK";
        } else {
          document.getElementById(stkCartel).style.backgroundColor = "green";
          document.getElementById(stkCartel).textContent = "EN STOCK";
        }
      }
      stockCartel++;
      prodPanel++;


    }

    function AddAllProductsToListEpanel(Productos) {


      Productos.forEach(element => {
        AddProductToListEpanel(element.brand, element.category, element.description, element.name,
          element.price, element.sku, element.stock, element.zimgProduct, element.zimgSecundarias)
      });
    }


    function GetAllProductsEpanel() {
      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/Productos");

      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        AddAllProductsToListEpanel(productos);
      })
    }
    //FIN CARGA PRODUCTOS 

    //INICIO PANEL PEDIDOS
    const btnSearchPedido = document.getElementById('btnSearchPedido');

    btnSearchPedido.addEventListener('click', function () {
      document.getElementById('ultimoPedido').style.display = "none"
      document.getElementById('pedidosCompletados').style.display = "none"
      document.getElementById('pedidosPendientes').style.display = "none"
      document.getElementById('pedidosCancelados').style.display = "none"
      document.getElementById('pedidosSolicitados').style.display = "block"

    });

    const btnPedidosCompletados = document.getElementById('btnPedidosCompletados');

    btnPedidosCompletados.addEventListener('click', function () {
      document.getElementById('ultimoPedido').style.display = "none"
      document.getElementById('pedidosPendientes').style.display = "none"
      document.getElementById('pedidosCancelados').style.display = "none"
      document.getElementById('pedidosSolicitados').style.display = "none"
      document.getElementById('pedidosCompletados').style.display = "block"

    })

    const btnPedidosPendientes = document.getElementById('btnPedidosPendientes');

    btnPedidosPendientes.addEventListener('click', function () {
      document.getElementById('ultimoPedido').style.display = "none"
      document.getElementById('pedidosCompletados').style.display = "none"
      document.getElementById('pedidosPendientes').style.display = "block"
      document.getElementById('pedidosCancelados').style.display = "none"
      document.getElementById('pedidosSolicitados').style.display = "none"
    })
    const btnPedidosCancelados = document.getElementById('btnPedidosCancelados');

    btnPedidosCancelados.addEventListener('click', function () {
      document.getElementById('ultimoPedido').style.display = "none"
      document.getElementById('pedidosCompletados').style.display = "none"
      document.getElementById('pedidosPendientes').style.display = "none"
      document.getElementById('pedidosCancelados').style.display = "block"
      document.getElementById('pedidosSolicitados').style.display = "none"
    })

    var nroLastPedido = 0;
    function GetAllPedidosInfo(Productos) {
      var lastPedido = Number(Productos.length - 1);

      document.getElementById('numLastPedido').textContent = Productos[lastPedido]['nroPedido'];
      document.getElementById('totalLastPedido').textContent = Productos[lastPedido]['totalPago'];
      document.getElementById('imgLastPedido').src = Productos[lastPedido]['imgLinkPedido'];
      nroLastPedido = Productos[lastPedido]['nroPedido'];

      if (Productos[lastPedido]['Pagado'] == "No") {
        document.getElementById('pagoLastPedido').checked = false;
      } else {
        document.getElementById('pagoLastPedido').checked = true;

      }

      if (Productos[lastPedido]['Enviado'] == "No") {
        document.getElementById('envioLastPedido').checked = false;
      } else {
        document.getElementById('envioLastPedido').checked = true;

      }

      if (Productos[lastPedido]['Cancelado'] == "No") {
        document.getElementById('btnCancelarLastPedido').checked = false;
      } else {
        document.getElementById('btnCancelarLastPedido').checked = true;
      }

      for (let index = 0; index < Productos.length; index++) {
        if (Productos[index]['Pagado'] == "No") {
          document.getElementById('pagoPedido-' + Productos[index]['nroPedido']).checked = false;
        } else {
          document.getElementById('pagoPedido-' + Productos[index]['nroPedido']).checked = true;

        }

        if (Productos[index]['Enviado'] == "No") {
          document.getElementById('envioPedido-' + Productos[index]['nroPedido']).checked = false;
        } else {
          document.getElementById('envioPedido-' + Productos[index]['nroPedido']).checked = true;

        }

        if (Productos[index]['Cancelado'] == "No") {
          document.getElementById('btnCancelarPedido-' + Productos[index]['nroPedido']).checked = false;
        } else {
          document.getElementById('btnCancelarPedido-' + Productos[index]['nroPedido']).checked = true;
        }

      }


      // Productos.forEach(element => {
      //   AddProductToList(element.brand, element.category, element.description, element.name,
      //     element.price, element.sku, element.stock, element.zimgProduct)
      // });
    }

    function GetAllInfoPedidos() {
      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        GetAllPedidosInfo(productos);
      })
    }

    document.getElementById('pagoLastPedido').addEventListener('change', function () {


      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;
        if (document.getElementById('pagoLastPedido').checked) {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + productos[lastPedidoID]['nroPedido']), {

            Pagado: "Si"

          });
        } else {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + productos[lastPedidoID]['nroPedido']), {

            Pagado: "No"

          });
        }

      })
    })

    document.getElementById('envioLastPedido').addEventListener('change', function () {


      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;
        if (document.getElementById('envioLastPedido').checked) {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + productos[lastPedidoID]['nroPedido']), {

            Enviado: "Si"

          });
        } else {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + productos[lastPedidoID]['nroPedido']), {

            Enviado: "No"

          });
        }

      })
    })
    //BOTON DESCARGAR ULTIMO PEDIDO
    // Obtener el botón por su ID
    var descargarBtnLastPedido = document.getElementById("descargarUltimoPedido");

    // Agregar un evento de clic al botón
    descargarBtnLastPedido.addEventListener("click", function () {
      // URL de la imagen que deseas descargar
      var imageUrl = document.getElementById("imgLastPedido").src;

      // Realizar una solicitud fetch para obtener la imagen
      fetch(imageUrl)
        .then(response => response.blob()) // Convertir la respuesta a un objeto blob
        .then(blob => {
          // Crear un objeto de URL para la imagen blob
          var url = URL.createObjectURL(blob);

          // Crear un enlace (a) para iniciar la descarga
          var enlace = document.createElement("a");
          enlace.href = url;
          enlace.download = "Pedido-Marakas-" + nroLastPedido + ".jpg";  // Nombre del archivo descargado

          // Simular un clic en el enlace para iniciar la descarga
          document.body.appendChild(enlace);
          enlace.click();
          document.body.removeChild(enlace);

          // Liberar el objeto de URL después de la descarga
          URL.revokeObjectURL(url);
        })
        .catch(error => console.error("Error al descargar la imagen:", error));
    });

    //BOTON CANCELAR 
    document.getElementById('btnCancelarLastPedido').addEventListener('click', function () {


      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;
        if (document.getElementById('btnCancelarLastPedido').checked) {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + productos[lastPedidoID]['nroPedido']), {

            Cancelado: "Si"

          });
        } else {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + productos[lastPedidoID]['nroPedido']), {

            Cancelado: "No"

          });
        }

      })
    })
    //FIN BOTON CANCELAR PEDIDO 
    //TRAER PEDIDOS A PEDIDOS PENDIENTES




    var contentPedidosList = 300;
    function AddPedidoToList(Cancelado, Enviado, Pagado, ciudad,
      comprador, cp, email, imgLinkPedido, nroPedido, totalPago) {
        if(Cancelado == "Si"){
      let html =
        `+addPedidosCancelados+`


      let newCat = document.createElement('div');
      newCat.innerHTML = html;
      var OuterDivShopList = document.getElementById("pedidosCanceladosList")
      OuterDivShopList.append(newCat);

      } else if(Pagado == "Si" && Enviado == "Si") {
        let html =
        `+addPedidosCompletados+`


      let newCat = document.createElement('div');
      newCat.innerHTML = html;
      var OuterDivShopList = document.getElementById("pedidosCompletadosList")
      OuterDivShopList.append(newCat);

      } else {
        let html =
        `+addPedidosPendientes+`


      let newCat = document.createElement('div');
      newCat.innerHTML = html;
      var OuterDivShopList = document.getElementById("pedidosPendientesList")
      OuterDivShopList.append(newCat);

      }
      contentPedidosList++;
    }

    function AddAllPedidosToList(Pedidos) {
      var OuterDivShopList = document.getElementById("pedidosPendientesList");
      var OuterDivShopListx = document.getElementById("pedidosCanceladosList");
      var OuterDivShopListxx = document.getElementById("pedidosCompletadosList");

      OuterDivShopList.innerHTML = "";
      OuterDivShopListx.innerHTML = "";
      OuterDivShopListxx.innerHTML = "";

      Pedidos.forEach(element => {
        AddPedidoToList(element.Cancelado, element.Enviado, element.Pagado, element.ciudad,
          element.comprador, element.cp, element.email, element.imgLinkPedido, element.nroPedido, element.totalPago)
      });
    }

    function GetAllPedidos() {
      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        AddAllPedidosToList(productos);
      })
    }
    //FIN TRAER PEDIDOS A PEDIDOS PENDIENTES 
    //TRAER PEDIDO SOLICITADO 
    const btnTraerPedido = document.getElementById('btnSearchPedido');

    btnTraerPedido.addEventListener('click', function () {
      const buscarPedidoInput = document.getElementById('skuBuscarPedido');

      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });
        var noExiste = 0;
        for (let index = 0; index < productos.length; index++) {
          if (productos[index]['nroPedido'] == buscarPedidoInput.value) {
            showPedidoSolicitado(buscarPedidoInput.value, index);
            noExiste = 1;
          }
        }
        if (noExiste == 0) {
          swal({
            title: "Pedido no encontrado!",
            icon: "warning",
            button: "OK!",
          });
        }
      })

    })

    var descargaPedidoSolicitado = 0;
    function showPedidoSolicitado(pedido, index) {

      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });
        for (let index = 0; index < productos.length; index++) {
          if (productos[index]['nroPedido'] == pedido) {
            document.getElementById('nroPedidoSolicitado').textContent = productos[index]['nroPedido'];
            document.getElementById('nroTotalPedidoSolicitado').textContent = productos[index]['totalPago'];
            document.getElementById('imgPedidoSolicitado').src = productos[index]['imgLinkPedido'];
            descargaPedidoSolicitado = productos[index]['nroPedido'];
            document.getElementById('btnCancelarPedidoSolicitado').value = productos[index]['nroPedido'];
            document.getElementById('pagoPedidoSolicitado').value = productos[index]['nroPedido'];
            document.getElementById('envioPedidoSolicitado').value = productos[index]['nroPedido'];

            if (productos[index]['Pagado'] == "No") {
              document.getElementById('pagoPedidoSolicitado').checked = false;
            } else {
              document.getElementById('pagoPedidoSolicitado').checked = true;

            }

            if (productos[index]['Enviado'] == "No") {
              document.getElementById('envioPedidoSolicitado').checked = false;
            } else {
              document.getElementById('envioPedidoSolicitado').checked = true;

            }

            if (productos[index]['Cancelado'] == "No") {
              document.getElementById('btnCancelarPedidoSolicitado').checked = false;
            } else {
              document.getElementById('btnCancelarPedidoSolicitado').checked = true;
            }

          }
        }
      })
    }

    // Obtener el botón por su ID
    var descargarBtnLastPedido = document.getElementById("descargarPedidoSolicitado");

    // Agregar un evento de clic al botón
    descargarBtnLastPedido.addEventListener("click", function () {
      // URL de la imagen que deseas descargar
      var imageUrl = document.getElementById('imgPedidoSolicitado').src;

      // Realizar una solicitud fetch para obtener la imagen
      fetch(imageUrl)
        .then(response => response.blob()) // Convertir la respuesta a un objeto blob
        .then(blob => {
          // Crear un objeto de URL para la imagen blob
          var url = URL.createObjectURL(blob);

          // Crear un enlace (a) para iniciar la descarga
          var enlace = document.createElement("a");
          enlace.href = url;
          enlace.download = "Pedido-Marakas-" + descargaPedidoSolicitado + ".jpg";  // Nombre del archivo descargado

          // Simular un clic en el enlace para iniciar la descarga
          document.body.appendChild(enlace);
          enlace.click();
          document.body.removeChild(enlace);

          // Liberar el objeto de URL después de la descarga
          URL.revokeObjectURL(url);

          swal({
            title: "Descargando Pedido!",
            text: " Tu Archivo se esta Cargando!",
            icon: "success",
            button: "OK!",
          });

        })
        .catch(error => console.error("Error al descargar la imagen:", error));
    });

    //BOTON CANCELAR 
    document.getElementById('btnCancelarPedidoSolicitado').addEventListener('click', function () {


      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        var idPedido = document.getElementById('btnCancelarPedidoSolicitado').value;
        var idPedidoNumber = Number(idPedido);

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;

        for (let index = 0; index < productos.length; index++) {
          if (productos[index]['nroPedido'] == idPedidoNumber) {
            if (document.getElementById('btnCancelarPedidoSolicitado').checked) {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Cancelado: "Si"

              });
            } else {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Cancelado: "No"

              });
            }
          } else {

          }

        }

      })
    })

    document.getElementById('pagoPedidoSolicitado').addEventListener('click', function () {


      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        var idPedido = document.getElementById('pagoPedidoSolicitado').value;
        var idPedidoNumber = Number(idPedido);

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;
        if (document.getElementById('pagoPedidoSolicitado').checked) {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

            Pagado: "Si"

          });
        } else {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

            Pagado: "No"

          });
        }

      })
    })

    document.getElementById('envioPedidoSolicitado').addEventListener('click', function () {


      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        var idPedido = document.getElementById('envioPedidoSolicitado').value;
        var idPedidoNumber = Number(idPedido);

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;
        if (document.getElementById('envioPedidoSolicitado').checked) {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

            Enviado: "Si"

          });
        } else {

          update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

            Enviado: "No"

          });
        }

      })
    })

    const btnCancelarPedido = document.getElementById('btnCancelarPedido');

    btnCancelarPedido.addEventListener('click', function () {

      const inputCancelarPedido = document.getElementById('inputCancelarPedido').value;

      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        var idPedidoNumber = Number(inputCancelarPedido);

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;

        for (let index = 0; index < productos.length; index++) {
          if (productos[index]['nroPedido'] == idPedidoNumber) {
            if (document.getElementById('btnCancelarPedido-' + idPedidoNumber).checked) {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Cancelado: "Si"

              });
              swal({
                title: "Pedido Cancelado..!",
                text: " Pedido movido a la pestaña de Pedidos Cancelados!",
                icon: "success",
                button: "OK!",
              });
            } else {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Cancelado: "No"

              });
            }
          } else {

          }

        }
      })
    })

    const btnEnvioPedido = document.getElementById('btnEnvioPedido');

    btnEnvioPedido.addEventListener('click', function () {

      const inputCancelarPedido = document.getElementById('inputEnvioPedido').value;

      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        var idPedidoNumber = Number(inputCancelarPedido);

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;

        for (let index = 0; index < productos.length; index++) {
          if (productos[index]['nroPedido'] == idPedidoNumber) {
            if (document.getElementById('envioPedido-' + idPedidoNumber).checked) {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Enviado: "Si"

              });
            } else {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Enviado: "No"

              });
            }

            if (document.getElementById('envioPedido-' + idPedidoNumber).checked && document.getElementById('pagoPedido-' + idPedidoNumber).checked) {
              swal({
                title: "Pedido Completado..!",
                text: "Pedido enviado a Pedidos Completados.",
                icon: "success",
                button: "OK!",
              });
            }
          } else {

          }

        }
      })
    })

    const btnPagoPedido = document.getElementById('btnPagoPedido');

    btnPagoPedido.addEventListener('click', function () {

      const inputCancelarPedido = document.getElementById('inputPagoPedido').value;

      const dbref = ref(realdb, "Usuarios/${nombreArchivo}/zPedidos");
      onValue(dbref, (snapshot) => {
        var productos = [];

        var idPedidoNumber = Number(inputCancelarPedido);

        snapshot.forEach(childSnapshot => {
          productos.push(childSnapshot.val());
        });

        var lastPedidoID = productos.length - 1;

        for (let index = 0; index < productos.length; index++) {
          if (productos[index]['nroPedido'] == idPedidoNumber) {
            if (document.getElementById('pagoPedido-' + idPedidoNumber).checked) {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Pagado: "Si"

              });
            } else {

              update(ref(realdb, "Usuarios/${nombreArchivo}/zPedidos/" + idPedidoNumber), {

                Pagado: "No"

              });
            }

            if (document.getElementById('envioPedido-' + idPedidoNumber).checked && document.getElementById('pagoPedido-' + idPedidoNumber).checked) {
              swal({
                title: "Pedido Completado..!",
                text: "Pedido enviado a Pedidos Completados.",
                icon: "success",
                button: "OK!",
              });
            }
          } else {

          }

        }
      })
    })
    //FIN TRAER PEDIDO SOLICITADO
    //FIN PANEL PEDIDOS
    
    //HABILITAR Y DESHABILITAR TIENDA 
    const btnDeshabilitar = document.getElementById('btnDeshabilitarTienda');
    const btnHabilitar = document.getElementById('btnHabilitarTienda');
    const btnEstadoTienda = document.getElementById('estadoTienda');

    btnDeshabilitar.addEventListener('click', function(){
      update(ref(realdb, "Usuarios/${nombreArchivo}"), {

        zVvhabilitado: 1,
          
      });
      swal({
        title: "Tienda Deshabilitada con Exito!",
        icon: "success",
        button: "Continuar!"  
      }).then(() => {
        btnDeshabilitar.style.display = "none";
        btnHabilitar.style.display = "inline-block";
      });    
    })

    
    btnHabilitar.addEventListener('click', function(){
      update(ref(realdb, "Usuarios/${nombreArchivo}"), {

        zVvhabilitado: 0,
          
      });
      swal({
        title: "Tienda Habilitada con Exito!",
        icon: "success",
        button: "Continuar!"  
      }).then(() => {
        btnDeshabilitar.style.display = "inline-block";
        btnHabilitar.style.display = "none";

      });    
    })
    //FIN HABILITAR Y DESHABILITAR TIENDA
  </script>
  <!--================================
              END TRAER DATOS
     =================================-->

</body>

</html>
  `
  const contenidoProductAll = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <title id="title-web"></title>
      <!-- Favicon -->
      <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="#">
      <style>
          body {
              display: none;
              /* Oculta el contenido inicialmente */
          }
  
          #banner-PA {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 15vh;
              width: 100%;
              background-color: pink;
          }
      </style>
      <script>
          // Funciones para sumar y restar
          function sumar() {
              var sumandoInput = document.getElementById("sumando");
              var valorActual = parseInt(sumandoInput.value);
              sumandoInput.value = valorActual + 1;
          }
  
          function restar() {
              var sumandoInput = document.getElementById("sumando");
              var valorActual = parseInt(sumandoInput.value);
              // Asegúrate de que el valor no sea negativo
              if (valorActual > 0) {
                  sumandoInput.value = valorActual - 1;
              }
          }
  
          function addToCart() {
              const inputCant = document.getElementById('sumando').value;
              agregarAlCarrito(document.getElementById("titleli").textContent, inputCant, document.getElementById("price").textContent);
              document.getElementById('sumando').value = 0;
          }
  
          let cantidadProductosEnCarrito = 0;
  
  
  
          function mostrarListaCarrito() {
              const listaCarrito = document.getElementById('lista-carrito');
              listaCarrito.style.display = 'block';
              document.getElementById('total').textContent = "$" + total;
              document.getElementById('titulo-de-lista').style.display = cantidadProductosEnCarrito > 0 ? 'block' : 'none';
              document.getElementById('btnIniciarCompra').style.display = cantidadProductosEnCarrito > 0 ? 'block' : 'none';
              document.getElementById('mensaje-carrito-vacio').style.display = cantidadProductosEnCarrito === 0 ? 'block' : 'none';
          }
  
          function ocultarListaCarrito() {
              const listaCarrito = document.getElementById('lista-carrito');
              listaCarrito.style.display = 'none';
          }
  
  
          function limpiarCarrito() {
              localStorage.setItem('productosEnCarrito', '');
              location.reload();
          }
  
          let productosEnCarrito = [];
          var total = 0;
  
          function agregarAlCarrito(titulo, inputCant, price) {
              var cantidad = parseInt(inputCant, 10);
              if (cantidad > 0) {
                  const listaCarrito = document.getElementById('lista-productos');
                  const nuevoItem = document.createElement('div');
                  nuevoItem.className = 'item-carrito';
  
                  const cantidadProducto = document.createElement('span');
                  cantidadProducto.className = 'cantidad-producto';
                  cantidadProducto.textContent = `+cantidadCarro+`;
  
  
  
                  const enlaceProducto = document.createElement('a');
                  enlaceProducto.href = '#';
                  enlaceProducto.textContent = getShortTitleCart(titulo);
  
                  const precioProducto = document.createElement('span');
                  precioProducto.className = 'precio-producto';
                  let prodCant = price.replace('$', '');
                  let prodCant1 = prodCant.replace('.', '');
                  let precio = prodCant1 * cantidad
  
                  precioProducto.textContent = `+precioCarro+`;
                  total = parseInt(total) + precio;
                  nuevoItem.appendChild(cantidadProducto);
                  nuevoItem.appendChild(enlaceProducto);
                  nuevoItem.appendChild(precioProducto);
  
                  listaCarrito.appendChild(nuevoItem);
  
                  cantidadProductosEnCarrito += cantidad;
                  document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
  
                  cantidad.value = 1;
  
                  const nuevoProducto = {
                      nombre: titulo,
                      precio: "$" + precio,
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
                  localStorage.setItem('productosEnCarrito', JSON.stringify(carritoExistente));
              }
          }
  
          function getShortTitleCart(title) {
              if (title.length > 20) title = title.substring(0, 20);
              else return title;
              return title + "...";
          }
  
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
                 cantidadProducto.textContent = `+cantidadCarro+`;
             
         
         
                 const enlaceProducto = document.createElement('a');
                 enlaceProducto.className = 'title-product';
                 enlaceProducto.href = '#';
                 enlaceProducto.textContent = getShortTitleCart(titulo);
             
         
                 const precioProducto = document.createElement('span');
                 precioProducto.className = 'precio-producto';
                 let prodCant = price.replace('$', '');
                 let prodCant1 = prodCant.replace('.', '');
                 let precio = prodCant1
  
                precioProducto.textContent = `+precioCarro+`;
  total = parseInt(total) + parseInt(precio);
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
                 document.getElementById('cantidad-carrito').textContent = `+cantProdCarro+`;
             
                 cantidad.value = 1;
         
             }
         
         
             return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
         }
         function getShortTitle(title) {
             if (title.length > 15) title = title.substring(0, 20);
             else return title;
             return title + "...";
         }
         
  
                                 // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
                                 function goToCat() {
           var Categoria = event.target.innerHTML;
  
           localStorage.titleCat = Categoria; 
           window.location = "product-category.html";
         }
  
                 // Función que asigna el evento de clic a todos los enlaces con la clase "miClase"
         function goToBrand() {
           var brand = event.target.innerHTML;
  
           localStorage.titleBrand = brand; 
           window.location = "product-brand.html";
         }
      </script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899573033698105"
     crossorigin="anonymous"></script>
  </head>
  
  <body class="preload home3">
      <div class="whatsapp-button">
          <a id="btnWhatsApp" href="#" target="_blank">
              <img src="../whatsapp-logo.png" alt="WhatsApp">
          </a>
      </div>
      <!--================================
              START HEADER AREA
          =================================-->
      <header id="header">
          <div class="logo-header">
              <a href="${nombreArchivo}.html">
                  <img id="logo-pc" src="#" alt="">
                  <img id="logo-mobile" src="#" alt="">
              </a>
          </div>
          <div class="searcher">
              <div class="input-group mb-3">
                  <input id="searchInput" type="text" class="form-control" placeholder="Buscar Producto..."
                      aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
                  <ul style="display: none;" id="resultsList"></ul>
  
                  <button class="btn btn-primary btn-header" type="button" id="btnSearchInput">Buscar</button>
              </div>
          </div>
  
  
      </header>
      <!--================================
                  END HEADER AREA
              =================================-->
      <!--================================
                  START NAV-SLIDER AREA
              =================================-->
      <section id="nav-slider-area">
          <div id="nav-header">
              <nav  class="navbar navbar-expand-lg" >
                  <div class="container-fluid">
                    <a class="navbar-brand link-header" href="${nombreArchivo}.html">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav">
                        <li class="dropdown">
                            <a class="nav-link link-header" href="#">Categorias  ▼</a>
                            <div id="cat-display" class="dropdown-content">
    
                            </div>        
                        </li>
                        <div id="brand-display">
    
                        </div>
                        <li class="nav-item">
                          <a class="nav-link link-header" href="tienda.html">Tienda</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link link-header" href="contact.html">CONTACTO</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
  
              <div id="div-carrito">
                  <!-- Botón de carrito con lista desplegable -->
                  <div id="carrito" class="btn-header" onmouseover="mostrarListaCarrito()"
                      onmouseout="ocultarListaCarrito()">
                      <span id="cantidad-carrito">(0)</span> <span id="carrito-logo">🛒</span>
  
                      <div id="lista-carrito">
                          <div id="titulo-de-lista">
                              <h3>Carrito de Compras</h3>
                          </div>
                          <div id="lista-productos">
  
                          </div>
                          <!-- Lista de productos en el carrito -->
                          <div id="mensaje-carrito-vacio">
                              <p>Tu carrito está vacío.</p>
                              <a href="tienda.html">IR A TIENDA</a>
                          </div>
                          <div id="btnIniciarCompra">
                              <div class="mb-3">
                                  <span>TOTAL:</span>
                                  <span style="float: right;" id="total"></span>
                              </div>
                              <div>
                                  <a href="checkout.html" style="float: right;"
                                      class="btn btn-primary btnCheckout">Iniciar Compra</a>
                                  <button style="float: left;background-color: red;" onclick="limpiarCarrito()"
                                      class="btn btn-primary btn--lg">Limpiar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="banner-PA" class="btn-header">
              <h1><span id="resultCANT" style="font-weight: bold; font-size: 100%;">0 </span>Resultados para: <span
                      id="resultID" style="font-weight: bold; font-size: 100%;">PRODUCTO</span> </h1>
          </div>
      </section>
      <!--================================
                  END NAV-SLIDER AREA
              =================================-->
  
  
  
      <!--================================
          START PRODUCTS AREA
      =================================-->
      <section class="products section--padding2">
          <!-- start .col-md-4 -->
          <div style="display: none;"> <input type="text" id="inputWC"></div>
              <div class="banner-product-PA" id="banner-product-PA">
  
              </div>
  
  
          <!-- end /.container -->
      </section>
      <!--================================
          END PRODUCTS AREA
      =================================-->
  
  
  
      <!--================================ 
            START FOOTER AREA
        =================================-->
      <footer id="footer-area">
          <div style="margin: 1%;" class="subfoot-t1">
              <p>© 2023 <a href="" class="linksFooter">${nombreArchivo}</a>. All rights reserved. Created by <a href="#"
                      class="linksFooter">MyEcom</a>.</p>
          </div>
  
      </footer>
      <!--================================
          END FOOTER AREA
      =================================-->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"></script>
      <script type="module" src="js.js"></script>
  
      <!--//////////////////// JS GOES HERE ////////////////-->
  
      <!-- endinject -->
      <script type="module">
  
          var inputInfo = localStorage.Searcher;
          let inputInfoWC = inputInfo.replace(/"/g, '');
          let inputInfoWCPA = document.getElementById("inputWC");
          inputInfoWCPA.value = inputInfoWC;
          const inpInfo = document.getElementById("resultID");
          obtenerProductosDesdeLocalStorage();
          inpInfo.textContent = inputInfo;
  
  
  
      </script>
  </body>
  
  </html>
  `

  const carpetaRaiz = path.resolve(__dirname);
  const rutaArchivoINDEX = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `${nombreArchivo}.html`);
  const rutaArchivoCSS = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `styles.css`);
  const rutaArchivoTIENDA = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `tienda.html`);
  const rutaArchivoCHECKOUT = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `checkout.html`);
  const rutaArchivoPRODETAILS = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `product-details.html`);
  const rutaArchivoBrand = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `product-brand.html`);
  const rutaArchivoCat = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `product-category.html`);
  const rutaArchivoCONTACT = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `contact.html`);
  const rutaArchivoJS = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `js.js`);
  const rutaArchivoEPANEL = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `epanel-${nombreArchivo}.html`);
  const rutaArchivoProductAll = path.join(carpetaRaiz, 'tiendas', `${nombreArchivo}`, `product-all.html`);


  const carpetaDestino = path.dirname(rutaArchivoINDEX,rutaArchivoCSS,rutaArchivoTIENDA,rutaArchivoCHECKOUT,
                          rutaArchivoPRODETAILS,rutaArchivoBrand,rutaArchivoCat,rutaArchivoCONTACT,
                          rutaArchivoEPANEL, rutaArchivoJS, rutaArchivoProductAll);

  if (!fs.existsSync(carpetaDestino)) {
    fs.mkdirSync(carpetaDestino, { recursive: true });
  }


  fs.writeFileSync(rutaArchivoINDEX, contenidoINDEX);
  fs.writeFileSync(rutaArchivoCSS, contenidoCSS);
  fs.writeFileSync(rutaArchivoTIENDA, contenidoTIENDA);
  fs.writeFileSync(rutaArchivoCHECKOUT, contenidoCHECKOUT);
  fs.writeFileSync(rutaArchivoPRODETAILS, contenidoPRODETAILS);
  fs.writeFileSync(rutaArchivoBrand, contenidoBRAND);
  fs.writeFileSync(rutaArchivoCat, contenidoCAT);
  fs.writeFileSync(rutaArchivoProductAll, contenidoProductAll);

  fs.writeFileSync(rutaArchivoCONTACT, contenidoCONTACT);
  fs.writeFileSync(rutaArchivoJS, contenidoJS);
  fs.writeFileSync(rutaArchivoEPANEL, contenidoEPANEL);
  


  xx = nombreArchivo;


});


// Configuración de Multer para el manejo de archivos
const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
      const uploadDir = 'tiendas/'+xx+'/excel';
      if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Establecer el nombre del archivo como "${nombreArchivo}"
    const nombreArchivox = xx + path.extname(file.originalname);
    cb(null, nombreArchivox);
},
});

const upload = multer({ storage: storage });

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta de carga de archivos
app.post('/cargar-archivo', upload.single('archivo'), (req, res) => {
  console.log('Archivo cargado:', req.file);
  res.json({ mensaje: 'Archivo cargado con éxito' });
});

// Ruta para obtener el contenido del archivo Excel
app.get('/obtener-contenido-excel', (req, res) => {
  // Ruta completa del archivo Excel (ajusta la ruta según tu estructura)
  const filePath = path.join(__dirname, 'tiendas',xx, 'excel',xx+'.xlsx');

  // Leer el archivo Excel y convertirlo a JSON
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const contenidoExcel = xlsx.utils.sheet_to_json(worksheet);

  // Enviar el contenido como respuesta JSON
  res.json(contenidoExcel);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
