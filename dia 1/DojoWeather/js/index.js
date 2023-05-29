function changeCity(elemnt){
    alert("cargando el clima...");
}
function aceptarCookies( elemnt ){
    let cookiesContainer = elemnt.closest(".cookies");
    cookiesContainer.remove();
} 
function cambiarMetrica(element) {
    let temperatura = document.querySelectorAll(".max, .min");
    console.log("temperatura");


    

        for (let i = 0; i < temperatura.length; i++) {
            let tempActual = Number(temperatura[i].textContent);
            if (element.value === "celcius") {
            let ResultadosCelcius = (tempActual - 32)/1.8;
            temperatura[i].textContent = parseInt(ResultadosCelcius)   
            }
        else{
            let resultadoFarenheit = (9/5)* tempActual + 32;
            temperatura[i].textContent = parseInt(resultadoFarenheit)
        }    
        }
    }
