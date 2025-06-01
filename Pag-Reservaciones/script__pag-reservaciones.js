//Variables para guardar los valore del formulario y hacer su recervacion
let DatosReser = {
    Name: "",
    Gmail: "",
    Number: "",
    Number2: "",
    Date: "",
    Info: ""
}


function Reservar(){
    const Forms = document.querySelectorAll('form');//Selectores
    const Inf = document.getElementById('inp_info');//--
    Forms.forEach(Forms => {//Revisa el formulario
        const inputs = Forms.querySelectorAll('input');
        inputs.forEach(input => {//Revisa los valores de los inputs
            let Nombre = input.name;
            let Valor = input.value;
            switch(Nombre){//Busca el nombre del input y coloca el valor correspondiente en su variable asignada
                case "inp_name": DatosReser.Name = Valor; break;
                case "inp_gmail": DatosReser.Gmail = Valor; break;
                case "inp_number": DatosReser.Number = Valor; break;
                case "inp_number2": DatosReser.Number2 = Valor; break;
                case "inp_date": DatosReser.Date = Valor; break;
            }
        });
    });
    DatosReser.Info = Inf.value

    /* Aqui escribe el codigo para poder guardar la reservacion o para enviar por correo */
    alert(`
        Nombre: ${DatosReser.Name}\n
        Correo: ${DatosReser.Gmail}\n
        Telefono: ${DatosReser.Number}\n
        Telefono2: ${DatosReser.Number2}\n
        Fecha: ${DatosReser.Date}\n
        Informacion: ${DatosReser.Info}`)

    //Accion para cambiar el fondo y el contenedor del formulario por una imagen
    if(DatosReser.Number=="" && DatosReser.Number2==""){//Los inputs de telefono y telefono2 tienen que estar bacios
        switch(DatosReser.Name){
            /* Valores para el cambio de fondo y del contenedor del formulario */
            case "migue": 
                document.body.style.backgroundImage = "url(../Img/img-Migue2.png)";
                document.getElementById('reservacion').style.backgroundImage = "url(../Img/img-Migue2.png)";
                break;
            case "osvi": 
                document.body.style.backgroundImage = "url(../Img/img-Osvi2.png)";
                document.getElementById('reservacion').style.backgroundImage = "url(../Img/img-Osvi2.png)";
                break;
            case "leo": 
                document.body.style.backgroundImage = "url(../Img/img-leo2.jpg)";
                document.getElementById('reservacion').style.backgroundImage = "url(../Img/img-leo2.jpg)";
                break;
        }
    }
    
}

//Funcion para borrar los valores del formulario de recervaciones
function Borrar(){
    const Forms = document.querySelectorAll('form');//Selectores
    const Inf = document.getElementById('inp_info');//--
    Inf.value = "";
    Forms.forEach(Forms => {//Revisa el formulario
        const inputs = Forms.querySelectorAll('input');
        inputs.forEach(input => {//Revisa los valores de los inputs
            //Vacia los valores del formulario exepto de los botones
            if(!(input.type == "button"))input.value = "";
        });
    });
}

//Funcion para cerrar el menu al hacer clic en cada una de las occiones o botones
function CerrarInp(){
    Che = document.getElementById("open-menu");//Seleccion de checkbox
    Che.checked = !Che.checked;//Cambio de estado para cerrar
}