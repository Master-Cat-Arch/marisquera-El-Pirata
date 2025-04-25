//Funcion para cerrar el menu al hacer clic en cada una de las occiones o botones
function CerrarInp(){
    Che = document.getElementById("open-menu");//Seleccion de checkbox
    Che.checked = !Che.checked;//Cambio de estado para cerrar
}

//Funciones para cambiar de imagen al hacer clic derecho
function CambioImgLeo(){
    Leo = document.getElementById('Leo');//Seleccion de imagen
    Leo.src = "../Img/img-leo2.jpg";//Cambio de imagen
}
function CambioImgOsvi(){
    Osvi = document.getElementById('Osvi');//Seleccion de imagen
    Osvi.src = "../Img/img-Osvi2.png";//Cambio de imagen
}
function CambioImgMig(){
    Migue = document.getElementById('Migue');//Seleccion de imagen
    Migue.src = "../Img/img-Migue2.png";//Cambio de imagen
}

//Funcion para que al precionar ciertas teclas cambien de imagen
document.addEventListener('keydown',
    function(event){//Funcion para verificar que teclas se precionaro
        switch(event.key){//Verificar la tecla precionada
            case "l":CambioImgLeo(); break;
            case "o":CambioImgOsvi(); break;
            case "m":CambioImgMig(); break;
        }
    }
);