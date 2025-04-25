//Funcion para cerrar el menu al hacer clic en cada una de las occiones o botones
function CerrarInp(){
    Che = document.getElementById("open-menu");//Seleccion de checkbox
    Che.checked = !Che.checked;//Cambio de estado para cerrar
}

//Funcion para que al hacer click derecho en la imagen el contenedor de la informacion principal de leo y al body tambien cambie de imagen
function CambioImg(){
    Fond = document.getElementById('categoria');//Seleccion del contenedor de informacion principal
    Fond.style.backgroundImage = "url(../Img/img-leo2.jpg)";//Cambio de imagen
    document.body.style.backgroundImage = "url(../Img/Shrek-Rock.png)";//Seleccion del body y cambio de fondo por una imagen
}