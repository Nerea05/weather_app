    // Sección colapsable 
    let btnMas= document.querySelector(".btn-mas");
    let btnCerrar= document.querySelector(".btn-cerrar");
    let collapsibleSection= document.querySelector(".collapsible-section");
    btnMas.addEventListener('click', ()=>{
        if(collapsibleSection.style.display === 'none' ){
            collapsibleSection.style.display = 'block';

        } else{
            collapsibleSection.style.display = 'none';
            btnMas.style.display = 'block';
        }  
    })

    //Captura de elementos del DOM
    let cabecera= document.querySelector(".imagen-cabecera-box");
    let buscador=  document.querySelector(".form");
    let searchInput= document.querySelector("#search_input");
    let grados=  document.querySelector(".grados");
    let ciudad=  document.querySelector(".city");  
    let tiempoActual=  document.querySelector(".loc-weather"); 
    let maxTemp=  document.querySelector("#max-temp"); 
    let minTemp=  document.querySelector("#min-temp");
    let humidity=  document.querySelector("#humidity-number");
    let rain=  document.querySelector("#rain-number"); 
    let wind=  document.querySelector("#wind-number");
    //Declaración de funciones secundarias
    //const cambiarfondo=()=>{}
    


    //Declaración de la función getWeatherData ( función principal)
    
        //Hacer un request a la API y conseguir un objeto que contenga los datos 
        const getWeatherData= async (city)=>{
            const res= await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`,{
                "headers": {
                    'X-RapidAPI-Key': 'afa0213788msh0ba5e6aa0ac3b02p1a3af7jsncc616ffa1464',
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
                }
            });
            const data = await res.json();
            console.log(data);
        }
        // Cargar una ciudad por defecto 
         window.onload = ()=>{
        getWeatherData("Montejo de la Sierra");}
        // Cambiar el fondo de pantalla según el tiempo
        //cambiarfondo(data);
        //mostrar los datos en pantalla
    buscador.addEventListener("submit", e=>{
       e.preventDefault(); // evitar que el formulario se envíe
        getWeatherData(searchInput.value)
        console.log (searchInput);
    //});
    


    

