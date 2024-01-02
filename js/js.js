if (typeof document.getElementById('navCategorias') === "object" && document.getElementById('navCategorias') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico

    const btnMiTienda = document.getElementById('navCategorias');


    btnMiTienda.addEventListener('click', function(){
        
        window.location = "category.html";

    });

} 

if (typeof document.getElementById('navMarkets') === "object" && document.getElementById('navMarkets') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico

    const btnMiTienda = document.getElementById('navMarkets');


    btnMiTienda.addEventListener('click', function(){
        
        window.location = "all-markets.html";

    });

}  

if (typeof document.getElementById('navContact') === "object" && document.getElementById('navContact') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico

    const btnMiTienda = document.getElementById('navContact');


    btnMiTienda.addEventListener('click', function(){
        
        window.location = "contact.html";

    });
    if (typeof document.getElementById('btnEnviarContacto') === "object" && document.getElementById('btnEnviarContacto') !== null) {

    const btnEnviarDatosContacto = document.getElementById("btnEnviarContacto");

    btnEnviarDatosContacto.addEventListener('click', function(){
        document.getElementById("contactFormularios").style.display = "none";
        document.getElementById("smsSuccessContact").style.display = "block";

        const inputName = document.getElementById("inputNameContact").value;
        const inputEmail = document.getElementById("inputEmailContact").value;
        const inputMensaje = document.getElementById("inputMensajeContact").value;

        console.log(inputName +  " " + inputEmail + " " + inputMensaje)

    });

    const btnIrAHome = document.getElementById("btnIrAHome");

    btnIrAHome.addEventListener('click', function(){
        window.location = "index.html";
    })
}
}  

if (typeof document.getElementById('navDonate') === "object" && document.getElementById('navDonate') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico

    const btnMiTienda = document.getElementById('navDonate');


    btnMiTienda.addEventListener('click', function(){
        
        window.location = "donate.html";

    });

} 


if (typeof document.getElementById('btnMiTienda') === "object" && document.getElementById('btnMiTienda') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico

    const btnMiTienda = document.getElementById('btnMiTienda');


    btnMiTienda.addEventListener('click', function(){
        
        document.getElementById('subHeaderSearcher').style.display = "none";
        document.getElementById('shops-list-area').style.display = "none";  
        document.getElementById('subCategorias').style.display = "none";

        document.getElementById('login-create-area').style.display = "block";
    });

} 

if (typeof document.getElementById('btnComenzar') === "object" && document.getElementById('btnComenzar') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btnComenzar = document.getElementById('btnComenzar');


    btnComenzar.addEventListener('click', function(){
        window.location = "iniciar-revolucion.html";
    });

} 

if (typeof document.getElementById('btnIngresar') === "object" && document.getElementById('btnIngresar') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btnIngresar = document.getElementById('btnIngresar');


    btnIngresar.addEventListener('click', function(){
        window.location = "mi-tienda.html";
    });

} 



if (typeof document.getElementById('btnBToFR0') === "object" && document.getElementById('btnBToFR0') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btn = document.getElementById('btnBToFR0');


    btn.addEventListener('click', function(){
        
        document.getElementById('form-revolucion-1').style.display = "none";
        document.getElementById('form-revolucion-0').style.display = "block";

    });

} 

if (typeof document.getElementById('btnToFR2') === "object" && document.getElementById('btnToFR2') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btn = document.getElementById('btnToFR2');


    btn.addEventListener('click', function(){
        
        document.getElementById('form-revolucion-1').style.display = "none";
        document.getElementById('form-revolucion-2').style.display = "block";

    });

} 

if (typeof document.getElementById('btnBToFR1') === "object" && document.getElementById('btnBToFR1') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btn = document.getElementById('btnBToFR1');


    btn.addEventListener('click', function(){
        
        document.getElementById('form-revolucion-2').style.display = "none";
        document.getElementById('form-revolucion-1').style.display = "block";

    });

} 

if (typeof document.getElementById('btnToFR3') === "object" && document.getElementById('btnToFR3') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btn = document.getElementById('btnToFR3');


    btn.addEventListener('click', function(){
        if(!ValidationB()){
            return;
        };
        document.getElementById('IniciarDiv').style.display = "none";
        document.getElementById('form-revolucion-3').style.display = "block";

    });

} 

if (typeof document.getElementById('btnBToFR2') === "object" && document.getElementById('btnBToFR2') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btn = document.getElementById('btnBToFR2');


    btn.addEventListener('click', function(){

        document.getElementById('form-revolucion-3').style.display = "none";
        document.getElementById('IniciarDiv').style.display = "block";
        document.getElementById('elegant-img').style.display = "block";


    });

} 




if (typeof document.getElementById('btnBToFR3') === "object" && document.getElementById('btnBToFR3') !== null) {
    // El objeto existe y es de tipo objeto, ejecutar código específico
    const btn = document.getElementById('btnBToFR3');


    btn.addEventListener('click', function(){

        document.getElementById('form-revolucion-4').style.display = "none";
        document.getElementById('form-revolucion-3').style.display = "block";


    });

} 



//Validar Campos Vacios
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function ValidationA(){

    if(isEmptyOrSpaces(brandEmail.value) ||
        isEmptyOrSpaces(brandPassword.value)){
            swal({
            title: "No puedes dejar ningun campo vacio",
            icon: "warning",
            button: "OK!",
            });
            return false;
        }

    return true;
}

function ValidationB(){
    let nameregex = /^[a-zA-Z\s]+$/;
    let userregex = /^[a-zA-Z0-9]{5,}$/;

    if(isEmptyOrSpaces(titularName.value) || isEmptyOrSpaces(titularLastname.value) ||
     isEmptyOrSpaces(brandName.value) ||  isEmptyOrSpaces(whatsappNumber.value)){
            swal({
            title: "No puedes dejar ningun campo vacio",
            icon: "warning",
            button: "OK!",
            });
            return false;
        }



    return true;
}

function ValidationC(){

    if(isEmptyOrSpaces(seleccionLogo.value) || isEmptyOrSpaces(seleccionFavicon.value) ||
        isEmptyOrSpaces(inputGoogleMaps.value) || isEmptyOrSpaces(inputEmail.value)){
            swal({
            title: "No puedes dejar ningun campo vacio",
            icon: "warning",
            button: "OK!",
            });
            return false;
        }

    return true;
}


