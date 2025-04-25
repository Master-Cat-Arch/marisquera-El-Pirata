//Funcion para cerrar el menu al hacer clic en cada una de las occiones o botones
function CerrarInp(){
    Che = document.getElementById("open-menu");//Seleccion de checkbox
    Che.checked = !Che.checked;//Cambio de estado para cerrar
}

//Funcion para que al hacer click derecho en la imagen principal se cambie de imagen y al body igual
function CambioImg(){
    const ImgPrincipal = document.getElementById('img-especialidad');//Seleccion de imgagen principal
    ImgPrincipal.src = "img/img-leo2.jpg";//Cambio de imagen
    document.body.style.backgroundImage = "url(Img/Shrek-Rock.png)"//Seleccion de body y cambio de fondo por una imagen
}