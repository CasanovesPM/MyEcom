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


if (typeof document.getElementById('btnIndex') === "object" && document.getElementById('btnIndex') !== null) {

    window.addEventListener('load', addTiendas);

//TRAER TIENDAS// 
function addTiendasToList(product, index){
            const name = product['brandName'];
            const arrayDePalabras = name.replace(/\s+/g, '');
<<<<<<< HEAD
<<<<<<< HEAD
            if(product['zVvhabilitado'] == 0){

                let html =
                `
                        <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
                        <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                        <div class="overlay-card">
                            <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
                        </div>
                `
                let newProd = document.createElement('div');
                newProd.classList.add('Card');
                newProd.innerHTML = html;
                var OuterDiv = document.getElementById("shopsList"); 
    
                OuterDiv.append(newProd); 
                
            }
=======
=======
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
            let html =
            `
                    <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
                    <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                    <div class="overlay-card">
                        <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
                    </div>
            `
            let newProd = document.createElement('div');
            newProd.classList.add('Card');
            newProd.innerHTML = html;
            var OuterDiv = document.getElementById("shopsList"); 

            OuterDiv.append(newProd); 
            
<<<<<<< HEAD
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
}

let ArrayOfOrdenMasMenos = [];
function addTiendas(){
    const dbref = ref(realdb);
    let ArrayOfTiendas = [];
    get(child(dbref, "Usuarios/")).then((snapshot) => {
      snapshot.forEach(cat => {
        ArrayOfTiendas.push(cat.val());
      });
      for (let index = 0; index < ArrayOfTiendas.length; index++) {

        ArrayOfOrdenMasMenos.push(ArrayOfTiendas[index]['zVistas']);
      }
      
      // Ordenar el array de mayor a menor
      ArrayOfOrdenMasMenos.sort(function(a, b) {
          return b - a;
      });

      // Imprimir el array ordenado en la consola
      var indexx = 0;
      var indexxx = 0;
      for (let index = 0; index < 15; index++) {
        if(ArrayOfTiendas[indexxx]['zVistas'] == ArrayOfOrdenMasMenos[indexx]){
          addTiendasToList(ArrayOfTiendas[indexxx]);
          indexx++;
          indexxx = 0;
        }else {
          indexxx++;
        }

      }

  });

  }
        //BUSCADOR POR INPUT
        if (typeof document.getElementById('searchInput') === "object" && document.getElementById('searchInput') !== null) {
        
        function GoToTiendaWeb(idprod) {
          console.log(idprod);
          var index = idprod;
          localStorage.id = JSON.stringify(index);
          const name = index;
          const arrayDePalabras = name.replace(/\s+/g, '');  
          console.log(arrayDePalabras);
          
          window.location = "/tiendas/"+arrayDePalabras+"/"+arrayDePalabras+".html"
          //window.location = "product-details.html";
      }
        
        const searchInput = document.getElementById("searchInput");
        const resultsList = document.getElementById("resultsList");
        let ProductsBuscador = [];
        const dbref = ref(realdb);

        get(child(dbref, "Usuarios/")).then((snapshot) => {
              snapshot.forEach(cat => {
                ProductsBuscador.push(cat.val());
              });
          });
          console.log(ProductsBuscador);

        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase();
            const products = [];
            for (let index = 0; index < ProductsBuscador.length; index++) {
<<<<<<< HEAD
<<<<<<< HEAD
                if(ProductsBuscador[index]['zVvhabilitado'] == 0){
                    products.push(ProductsBuscador[index]);

                }
=======
                products.push(ProductsBuscador[index]);
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                products.push(ProductsBuscador[index]);
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
            }

            // Agregar un ID numérico a cada producto
            const productsWithIds = products.map((product, index) => ({ id: products[index]['brandName'], name: products[index]['brandName'], category: products[index]['marketType']}));

            if (searchTerm.trim() === "") {
                clearResults();
                hideResults();
            } else {
                const filteredProducts = productsWithIds.filter(product => product.name.toLowerCase().includes(searchTerm) + product.category.toLowerCase().includes(searchTerm));
                displayResults(filteredProducts);
            }
        });

        function displayResults(results) {
            resultsList.innerHTML = "";
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add('search--product');
                listItem.textContent = result.name +"- " + result.category; //+"   Precio:$" + getShortSearchTitle(result.price)
                listItem.dataset.productId = result.id; // Establecer el ID como un atributo de datos


                listItem.addEventListener("click", () => {
                    let Prod = result.id;
                    var btns = document.getElementsByClassName('search--product');

                    for (let i = 0; i < btns.length; i++) {
                        btns[i].addEventListener('click', GoToTiendaWeb(Prod));

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

        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evitar enviar el formulario
                if(searchInput.value == null){

                }else{
                      // Busca la posición del primer punto
                      var indicePunto = searchInput.value.indexOf('-');
                      console.log(indicePunto);
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
                    const name = parteAntesDelPunto;
                    const arrayDePalabras = name.replace(/\s+/g, '');  
                    console.log(arrayDePalabras);
                    window.location = "/tiendas/"+arrayDePalabras+"/"+arrayDePalabras+".html"
                }
            }
        });
      
      }


}

if (typeof document.getElementById('btnCategoryPage') === "object" && document.getElementById('btnCategoryPage') !== null) {
    var deturno = "";
    // El objeto existe y es de tipo objeto, ejecutar código específico

    const btnBuscarCategoria = document.getElementById('btnBuscarCategoria');


    btnBuscarCategoria.addEventListener('click', function(){
        deturno = document.getElementById('typeSelector').value;
        document.getElementById('catDeTurno').textContent = deturno;
        document.getElementById('categoriaSeleccionada').style.display = "block";
        document.getElementById('imgCat99').style.display = "none";


        addTiendas();
    });


//TRAER TIENDAS// 

function addTiendasToList(product, index){
  let vacia = 0;      
<<<<<<< HEAD
<<<<<<< HEAD
  if(product['marketType'] == deturno && product['zVvhabilitado'] == 0){   
=======
  if(product['marketType'] == deturno){   
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
  if(product['marketType'] == deturno){   
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
    const name = product['brandName'];
    const arrayDePalabras = name.replace(/\s+/g, '');   
            let html =
            `
                    <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                    <p class="pieShop">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                    <div class="overlay-card">
                        <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                    <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                    <div class="overlay-card">
                        <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                    <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                    <div class="overlay-card">
                        <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                    </div>
            `
            let newProd = document.createElement('div');
            newProd.classList.add('Card');
            newProd.innerHTML = html;
            var OuterDiv = document.getElementById("shopsList"); 

            OuterDiv.append(newProd); 
            vacia = 1;
          } else {

          }
          
          if(vacia == 0){
            let html =
            `
                  <h3>Aun no hay tiendas creadas en esta Categoria!</h3>
            `
            let newProd = document.createElement('div');
            newProd.innerHTML = html;
            var OuterDiv = document.getElementById("shopsList"); 

            OuterDiv.append(newProd)

          }
}

function addTiendas(){
  let ArrayOfOrdenMasMenos = [];

  document.getElementById("shopsList").innerHTML = '';

    const dbref = ref(realdb);
    let ArrayOfTiendas = [];
    get(child(dbref, "Usuarios/")).then((snapshot) => {
      snapshot.forEach(cat => {
        ArrayOfTiendas.push(cat.val());
      });

      for (let index = 0; index < ArrayOfTiendas.length; index++) {

        ArrayOfOrdenMasMenos.push(ArrayOfTiendas[index]['zVistas']);
      }
      
      // Ordenar el array de mayor a menor
      ArrayOfOrdenMasMenos.sort(function(a, b) {
          return b - a;
      });

      // Imprimir el array ordenado en la consola
      var indexx = 0;
      var indexxx = 0;
      for (let index = 0; index < 15; index++) {
        if(ArrayOfTiendas[indexxx]['zVistas'] == ArrayOfOrdenMasMenos[indexx]){
          console.log(ArrayOfOrdenMasMenos[indexx]);

          addTiendasToList(ArrayOfTiendas[indexxx]);
          indexx++;
          indexxx = 0;
        }else {
          indexxx++;
        }

      }

  });

  }
        //BUSCADOR POR INPUT
        if (typeof document.getElementById('searchInput') === "object" && document.getElementById('searchInput') !== null) {
        
        function GoToTiendaWeb(idprod) {
          console.log(idprod);
          var index = idprod;
          localStorage.id = JSON.stringify(index);
          const name = index;
          const arrayDePalabras = name.replace(/\s+/g, '');  
          console.log(arrayDePalabras);
          window.location = "/tiendas/"+arrayDePalabras+"/"+arrayDePalabras+".html"
          //window.location = "product-details.html";
      }
        
        const searchInput = document.getElementById("searchInput");
        const resultsList = document.getElementById("resultsList");
        let ProductsBuscador = [];
        const dbref = ref(realdb);

        get(child(dbref, "Usuarios/")).then((snapshot) => {
              snapshot.forEach(cat => {
                ProductsBuscador.push(cat.val());
              });
          });
          console.log(ProductsBuscador);

        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase();
            const products = [];
            for (let index = 0; index < ProductsBuscador.length; index++) {
                products.push(ProductsBuscador[index]);
            }

            // Agregar un ID numérico a cada producto
            const productsWithIds = products.map((product, index) => ({ id: products[index]['brandName'], name: products[index]['brandName'], category: products[index]['marketType']}));

            if (searchTerm.trim() === "") {
                clearResults();
                hideResults();
            } else {
                const filteredProducts = productsWithIds.filter(product => product.name.toLowerCase().includes(searchTerm) + product.category.toLowerCase().includes(searchTerm));
                displayResults(filteredProducts);
            }
        });

        function displayResults(results) {
            resultsList.innerHTML = "";
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add('search--product');
                listItem.textContent = result.name +"- " + result.category; //+"   Precio:$" + getShortSearchTitle(result.price)
                listItem.dataset.productId = result.id; // Establecer el ID como un atributo de datos


                listItem.addEventListener("click", () => {
                    let Prod = result.id;
                    var btns = document.getElementsByClassName('search--product');

                    for (let i = 0; i < btns.length; i++) {
                        btns[i].addEventListener('click', GoToTiendaWeb(Prod));

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

        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evitar enviar el formulario
                if(searchInput.value == null){

                }else{
                      // Busca la posición del primer punto
                      var indicePunto = searchInput.value.indexOf('-');
                      console.log(indicePunto);
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
                    const name = parteAntesDelPunto;
                    const arrayDePalabras = name.replace(/\s+/g, '');  
                    console.log(arrayDePalabras);
                    window.location = "/tiendas/"+arrayDePalabras+"/"+arrayDePalabras+".html"
                }
            }
        });
      
      }

}

if (typeof document.getElementById('btnAllMarkets') === "object" && document.getElementById('btnAllMarkets') !== null) {

    window.addEventListener('load', addTiendas);

//TRAER TIENDAS// 
function addTiendasToList(product, index){
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "A" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "A"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "A"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');  
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListA"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListA"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "B" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "B"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "B"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListB"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListB"); 

        OuterDiv.append(newProd); 
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "C" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "C"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "C"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListC"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListC"); 

        OuterDiv.append(newProd); 
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "D" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "D"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "D"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListD"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListD"); 

        OuterDiv.append(newProd); 
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "E" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "E"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "E"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListE"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListE"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "F" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "F"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "F"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListF"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListF"); 

        OuterDiv.append(newProd); 
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "G" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "G"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "G"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListG"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListG"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "H" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "H"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "H"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListH"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListH"); 

        OuterDiv.append(newProd); 
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "I" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "I"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "I"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListI"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListI"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "J" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "J"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "J"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListJ"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListJ"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "K" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "K"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "K"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListK"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListK"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "L" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "L"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "L"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListL"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListL"); 

        OuterDiv.append(newProd); 
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "M" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "M"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "M"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListM"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListM"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "N" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "N"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "N"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListN"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListN"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "Ñ" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "Ñ"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "Ñ"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListÑ"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListÑ"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "O" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "O"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "O"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListO"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListO"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "P" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "P"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "P"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListP"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListP"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "Q" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "Q"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "Q"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListQ"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListQ"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "R" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "R"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "R"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListR"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListR"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "S" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "S"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "S"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListS"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListS"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "T" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "T"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "T"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListT"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListT"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "U" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "U"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "U"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListU"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListU"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "V" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "V"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "V"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListV"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListV"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "W" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "W"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "W"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListW"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListW"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "X" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "X"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "X"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListX"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListX"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
    if(product['brandName'][0] == "Y" && product['zVvhabilitado'] == 0){
=======
    if(product['brandName'][0] == "Y"){
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
    if(product['brandName'][0] == "Y"){
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListY"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListY"); 

        OuterDiv.append(newProd); 
    }
<<<<<<< HEAD
<<<<<<< HEAD
        if(product['brandName'][0] == "Z" && product['zVvhabilitado'] == 0){
=======
=======
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
    if(product['brandName'][0] == "X"){
        const name = product['brandName'];
        const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListX"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListX"); 

        OuterDiv.append(newProd); 
    }
        if(product['brandName'][0] == "Z"){
<<<<<<< HEAD
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
            const name = product['brandName'];
            const arrayDePalabras = name.replace(/\s+/g, '');
        let html =
        `
                <img id="imgShop-" width="100%" style="padding-top:20%; padding-bottom:25%;" src="`+product['LinkOfLogo'][0]+`"  alt="images/cards/shop--card.png">
<<<<<<< HEAD
<<<<<<< HEAD
                <p class="pieShop" >Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" target="_blank" class="boton-card">Visitar Tienda</a>
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 162e48a824e645cf22f0348330d1dbbb32c068a8
=======
                <p class="pieShop" style="color:white;">Visitas: <span style="font-weight:bold;">`+product['zVistas']+`</span></p>
                <div class="overlay-card">
                    <a href="tiendas/`+arrayDePalabras+`/`+arrayDePalabras+`.html" class="boton-card">Visitar Tienda</a>
>>>>>>> 27c9b345ec524bfa7eecae855f32bd122508bb85
                </div>
        `
        let newProd = document.createElement('div');
        newProd.classList.add('Card');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListZ"); 

        OuterDiv.append(newProd); 
    } else {
        let html =
        `
                <h3>Aun no hay tiendas que inicien con esta Letra, se el Primero!</h3>
        `
        let newProd = document.createElement('div');
        newProd.innerHTML = html;
        var OuterDiv = document.getElementById("shopsListZ"); 

        OuterDiv.append(newProd); 
    }
}

let ArrayOfOrdenMasMenos = [];
function addTiendas(){
    const dbref = ref(realdb);
    let ArrayOfTiendas = [];
    get(child(dbref, "Usuarios/")).then((snapshot) => {
      snapshot.forEach(cat => {
        ArrayOfTiendas.push(cat.val());
      });
      for (let index = 0; index < ArrayOfTiendas.length; index++) {

        ArrayOfOrdenMasMenos.push(ArrayOfTiendas[index]['zVistas']);
      }
      
      // Ordenar el array de mayor a menor
      ArrayOfOrdenMasMenos.sort(function(a, b) {
          return b - a;
      });

      // Imprimir el array ordenado en la consola
      var indexx = 0;
      var indexxx = 0;
      for (let index = 0; index < 15; index++) {
        if(ArrayOfTiendas[indexxx]['zVistas'] == ArrayOfOrdenMasMenos[indexx]){
          addTiendasToList(ArrayOfTiendas[indexxx]);
          indexx++;
          indexxx = 0;
        }else {
          indexxx++;
        }

      }

  });

  }
        //BUSCADOR POR INPUT
        if (typeof document.getElementById('searchInput') === "object" && document.getElementById('searchInput') !== null) {
        
        function GoToTiendaWeb(idprod) {
          console.log(idprod);
          var index = idprod;
          const name = index;
          const arrayDePalabras = name.replace(/\s+/g, '');  
          localStorage.id = JSON.stringify(arrayDePalabras);
          console.log(arrayDePalabras);
          window.location = "/tiendas/"+arrayDePalabras+"/"+arrayDePalabras+".html"
          //window.location = "product-details.html";
      }
        
        const searchInput = document.getElementById("searchInput");
        const resultsList = document.getElementById("resultsList");
        let ProductsBuscador = [];
        const dbref = ref(realdb);

        get(child(dbref, "Usuarios/")).then((snapshot) => {
              snapshot.forEach(cat => {
                ProductsBuscador.push(cat.val());
              });
          });
          console.log(ProductsBuscador);

        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase();
            const products = [];
            for (let index = 0; index < ProductsBuscador.length; index++) {
                products.push(ProductsBuscador[index]);
            }


            // Agregar un ID numérico a cada producto
            const productsWithIds = products.map((product, index) => ({ id: products[index]['brandName'], name: products[index]['brandName'], category: products[index]['marketType']}));

            if (searchTerm.trim() === "") {
                clearResults();
                hideResults();
            } else {
                const filteredProducts = productsWithIds.filter(product => product.name.toLowerCase().includes(searchTerm) + product.category.toLowerCase().includes(searchTerm));
                displayResults(filteredProducts);
            }
        });

        function displayResults(results) {
            resultsList.innerHTML = "";
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add('search--product');
                listItem.textContent = result.name +"- " + result.category; //+"   Precio:$" + getShortSearchTitle(result.price)
                listItem.dataset.productId = result.id; // Establecer el ID como un atributo de datos


                listItem.addEventListener("click", () => {
                    let Prod = result.id;
                    var btns = document.getElementsByClassName('search--product');

                    for (let i = 0; i < btns.length; i++) {
                        btns[i].addEventListener('click', GoToTiendaWeb(Prod));

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

        searchInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Evitar enviar el formulario
                if(searchInput.value == null){

                }else{
                      // Busca la posición del primer punto
                      var indicePunto = searchInput.value.indexOf('-');
                      console.log(indicePunto);
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
                    const name = parteAntesDelPunto;
                    const arrayDePalabras = name.replace(/\s+/g, '');
                    console.log(arrayDePalabras);

                    window.location = "/tiendas/"+arrayDePalabras+"/"+arrayDePalabras+".html"
                }
            }
        });
      
      }


}