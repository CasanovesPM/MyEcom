

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

window.addEventListener('load', GetData);

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

function addVista(){
  const dbref = ref(realdb);
  let ArrayOfVistas = [];
  get(child(dbref, "Usuarios/Yami")).then((snapshot) => {
    snapshot.forEach(cat => {
      ArrayOfVistas.push(cat.val());
    });
    var ultima = ArrayOfVistas.length - 1;
    var vistas = ArrayOfVistas[ultima];
    
    var actVista = vistas + 1 ;

    update(ref(realdb, "Usuarios/Yami" ),
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

       get(child(dbref, "Usuarios/Yami")).then((snapshot) => {
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

     get(child(dbref, "Usuarios/Yami")).then((snapshot)=>{

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
         window.location = "epanel-Yami.html";

     }
 }
}, false);

//MOSTRAR LAS CATEGORIAS EN LA LISTA DESPLEGABLE Y MARCAS EN EL NAV
var ArrayOfCategory = [];
var ArrayOfBrand = [];

function GetAllCategory() {
   const dbref = ref(realdb);

   get(child(dbref, "Usuarios/Yami/zCategorias")).then((snapshot) => {
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

   get(child(dbref, "Usuarios/Yami/zMarcas")).then((snapshot) => {
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
   `<a id="` +isx+ `" href="#" onclick="goToCat()" class="Category--Web">`+cat.category+`</a>`
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
    `<div class="d-block w-100"><a href="#" style="text-decoration: none; font-weight: bold; font-size: 250% !important;" class="colorLinks">` + cat.category + `</a></div><div style="display:flex;flex-wrap: wrap; justify-content: center;" id="`+ cat.category + `"></div>`
    let newCat = document.createElement('div');
    newCat.classList.add('carousel-item');
    newCat.style.textAlign = "center";
    newCat.classList.add('carousel-category');
    newCat.classList.add('active');
    newCat.innerHTML = html;
    OuterDivCatSlider.append(newCat);
  } else {

    let html =

    `<div class="d-block w-100"><a href="#" style="text-decoration: none; font-weight: bold; font-size: 250% !important;" class="colorLinks">` + cat.category + `</a></div><div style="display:flex;flex-wrap: wrap; justify-content: center;" id="`+ cat.category + `"></div>`

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
  `<button type="button" style="display: none;" data-bs-target="#carrousel-banner-categorias" data-bs-slide-to="` + btnCatSliderVar + `" class="active" aria-current="true" aria-label="Slide ` + btnCatSliderVarSlider + `"></button>`
  let newCat = document.createElement('li');
  newCat.style.display = "none";
  newCat.innerHTML = html;
  OuterDivBtnCatSlider.append(newCat);

} else {    
  let html =                
 `<button type="button" style="display: none;" data-bs-target="#carrousel-banner-categorias" data-bs-slide-to="` + btnCatSliderVar + `" class="active" aria-current="true" aria-label="Slide ` + btnCatSliderVarSlider + `"></button>`
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
   `<a id="` +isxs+ `" class="nav-link link-header brands" href="#" onclick="goToBrand()">`+cat.brand+`</a>`
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
   get(child(dbref, "Usuarios/Yami/zColores/Header")).then((snapshot) => {
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

   get(child(dbref, "Usuarios/Yami/zColores/ShopList")).then((snapshot) => {
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

   get(child(dbref, "Usuarios/Yami/zColores/Producto")).then((snapshot) => {
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

   get(child(dbref, "Usuarios/Yami/zColores/Footer")).then((snapshot) => {
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
   get(child(dbref, "Usuarios/Yami/zBannersHeaderLinks")).then((snapshot) => {
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

 get(child(dbref, "Usuarios/Yami/zFuente")).then((snapshot) => {
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
                    newImage.alt = `Imagen ${i + 1}`;
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

        `<div id="product-`+ sku + `" class="Card pdProductos" ><a id="product-`+ sku + `" href="#" class="producto pdProductos"><img id="product-`+ sku + `" class="producto img-principal-product pdProductos" src="`+ zimgProduct + `" alt=""><img id="productS-`+ sku + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ zimgSecundarias[0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ sku + `" class="info-product"><div id="product-`+ sku + `" class="productTitle pdProductos"><p  id="product-`+ sku + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(name) + `</p></div><div id="product-`+ sku + `"  class="price fondoPColor pdProductos"><span id="product-`+ sku + `" class="producto precioProduct precioColor pdProductos">$`+ price + `</span></div></div></a></div>`
  
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
        const dbref = ref(realdb, "Usuarios/Yami/Productos");
  
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

        get(child(dbref, "Usuarios/Yami/Productos")).then((snapshot) => {
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

            get(child(dbref, "Usuarios/Yami/Productos")).then((snapshot) => {

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
                    `<div class="imgProductBannerPA pdProductos"><img width="auto" height="250px" id="product-`+ product["sku"] + `" class="pdProductos" src="`+ product["zimgProduct"] + `" alt=""></div><div id="product-`+ product["sku"] + `" class="descripProductBannerPA pdProductos"><div class="titleProductCardPA btn-header pdProductos"><span id="product-`+ product["sku"] + `" style="font-weight: bold;" >`+ product["name"] + `</span></div><div id="product-`+ product["sku"] + `" class="descripProductCardPA"><p id="product-`+ product["sku"] + `">`+ product["description"] + `</p></div><div id="product-`+ product["sku"] + `" class="foootProductCardPA "><span>Categoria: <span style="font-weight: bold;" id="catPC">`+ product["category"] + `</span></span><span>Marca: <span style="font-weight: bold;" id="brandPC">`+ product["brand"] + `</span></span></div><div id="product-`+ product["sku"] + `" class="pricePA fondoPColor pdProductos"><span id="`+ product["sku"] + `" style="font-weight: bold; font-size: 300%;" class="precioColor" id="precioPA">$`+ product["sku"] + `</span></div></div>`

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

            get(child(dbref, "Usuarios/Yami/Productos")).then((snapshot) => {

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
            `<div id="product-`+ product["sku"] + `" class="Card pdProductos" ><a id="product-`+ product["sku"] + `" href="#" class="producto pdProductos"><img id="product-`+ product["sku"] + `" class="producto img-principal-product pdProductos" src="`+ product["zimgProduct"] + `" alt=""><img id="productS-`+ product["sku"] + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ product["zimgSecundarias"][0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ product["sku"] + `" class="info-product"><div id="product-`+ product["sku"] + `" class="productTitle pdProductos"><p  id="product-`+ product["sku"] + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(product["name"]) + `</p></div><div id="product-`+ product["sku"] + `"  class="price fondoPColor pdProductos"><span id="product-`+ product["sku"] + `" class="producto precioProduct precioColor pdProductos">$`+ product["price"] + `</span></div></div></a></div>`
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

            get(child(dbref, "Usuarios/Yami/Productos")).then((snapshot) => {

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
            `<div id="product-`+ product["sku"] + `" class="Card pdProductos" ><a id="product-`+ product["sku"] + `" href="#" class="producto pdProductos"><img id="product-`+ product["sku"] + `" class="producto img-principal-product pdProductos" src="`+ product["zimgProduct"] + `" alt=""><img id="productS-`+ product["sku"] + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ product["zimgSecundarias"][0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ product["sku"] + `" class="info-product"><div id="product-`+ product["sku"] + `" class="productTitle pdProductos"><p  id="product-`+ product["sku"] + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(product["name"]) + `</p></div><div id="product-`+ product["sku"] + `"  class="price fondoPColor pdProductos"><span id="product-`+ product["sku"] + `" class="producto precioProduct precioColor pdProductos">$`+ product["price"] + `</span></div></div></a></div>`
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
            `<div id="product-`+ sku + `" class="Card pdProductos" ><a id="product-`+ sku + `" href="#" class="producto pdProductos"><img id="product-`+ sku + `" class="producto img-principal-product pdProductos" src="`+ zimgProduct + `" alt=""><img id="productS-`+ sku + `"  class="producto img-principal-product-secundaria pdProductos" src="`+ zimgSecundarias[0] + `" alt=""><div id="stock-`+ stockCartel + `" class="cartelitoStock pdProductos"></div><div id="product-`+ sku + `" class="info-product"><div id="product-`+ sku + `" class="productTitle pdProductos"><p  id="product-`+ sku + `" value="IPhone" style="font-weight: bold;" class=" producto colorLinks pdProductos">`+ getShortTitleProduct(name) + `</p></div><div id="product-`+ sku + `"  class="price fondoPColor pdProductos"><span id="product-`+ sku + `" class="producto precioProduct precioColor pdProductos">$`+ price + `</span></div></div></a></div>`
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
          const dbref = ref(realdb, "Usuarios/Yami/Productos");
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

            get(child(dbref, "Usuarios/Yami")).then((snapshot) => {

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



          update(ref(realdb, "Usuarios/Yami/zPedidos/" + totalNroPedidos ),
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
          update(ref(realdb, "Usuarios/Yami"),
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
              const ImageAdress = "TheImages/Yami/Pedidos/" + totalNroPedidos;
              const storageRef = sRef(storage, ImageAdress);
              await uploadBytes(storageRef, blob);
              const downloadURL = await getDownloadURL(storageRef);

              swal({
                title: "Su Pedido Se Esta Descargando como Imagen!",
                icon: "success",
                button: "OK!",
              }).then(()=>{

              });

              update(ref(realdb, "Usuarios/Yami/zPedidos/" + totalNroPedidos), {
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
      

 