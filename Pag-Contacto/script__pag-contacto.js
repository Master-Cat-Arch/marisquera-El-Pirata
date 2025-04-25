//Variables globales para guardar el mensaje y poder pasar entre funciones
let Nombre = "";
let Gmail = "";
let Mensaj = "";

//Funcion para optener el valor del formulario y su mensaje y enviarlo a la base de datos o por correo
function Mensaje(){
    //Optencion de valore
    Nombre = document.getElementById("input_name").value;
    Gmail = document.getElementById("input_gmail").value;
    Mensaj = document.getElementById("input_message").value;

    //Accion para cambiar el fondo por una imagen
    if(Gmail=="" && Mensaj==""){//Los inputs de gmai y mensaje tienen que estar basios
        switch(Nombre){
            /* Valores para el cambio de fondo */
            case "migue": document.body.style.backgroundImage = "url(../Img/img-Migue2.png)";break;
            case "osvi": document.body.style.backgroundImage = "url(../Img/img-Osvi2.png)";break;
            case "leo": document.body.style.backgroundImage = "url(../Img/img-leo2.jpg)";break;
        }
    }
    
    /* Aqui escribe el codigo para poder guardar el mensaje o para enviar por correo */
    alert(`Nombre: ${Nombre}\nGmail: ${Gmail}\nMes: ${Mensaj}`)
}

//Funcion para cerrar el menu al hacer clic en cada una de las occiones o botones
function CerrarInp(){
    Che = document.getElementById("open-menu");//Seleccion de checkbox
    Che.checked = !Che.checked;//Cambio de estado para cerrar
}