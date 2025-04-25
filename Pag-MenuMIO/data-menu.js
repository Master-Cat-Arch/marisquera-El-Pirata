let DtMenu = []; // Declara DtMenu como una variable global
console.log('Datos en DtMenu:', DtMenu);


async function cargarMenu() 
{
    try 
    {
        const response = await fetch('http://localhost/marisquera-El-Pirata-2/Pag-Menu/index.php');
        const texto = await response.text();
        console.log('Texto recibido del servidor:', texto); // Depuración: Verifica la respuesta como texto

        const data = JSON.parse(texto);
        console.log('Datos convertidos a JSON:', data); // Depuración: Verifica los datos convertidos

        if (data.error) {
            console.error('Error del servidor:', data.error);
            return;
        }

        DtMenu = data; // Almacena los datos en DtMenu
        console.log('Datos cargados en DtMenu:', DtMenu); // Depuración: Verifica que DtMenu tenga datos

        const container = document.getElementById('container-productos');
        container.innerHTML = ''; // Limpia el contenedor

        data.forEach(platillo => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('cont-prod');

            productoDiv.innerHTML = `
                <div class="cont-img">
                    <a href="#"><img src="../Img/${platillo.Img}" alt="${platillo.Nombre}"></a>
                </div>
                <div class="info-prod">
                    <h6>${platillo.Nombre}</h6>
                    <hr>
                    <div class="pre-estr">
                        <label class="prod-precio"><b>Precio: $${platillo.Precio}</b></label>
                        <p class="prod-estrellas">${'⭐'.repeat(platillo.Estrellas)}</p>
                        <label class="prod-tamano"><b>${platillo.Tamaño}</b></label>
                    </div>
                </div>
            `;
            container.appendChild(productoDiv);
        });
    } catch (error) {
        console.error('Error al cargar el menú:', error);
    }
}
// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarMenu);


/*
const DtMenu = [
    //// Tostadas ////
    {
        id:"101",
        img:"img_tost-ceviche.jpg",
        nombre:"Tostadas de Ceviche",
        categoria:"Tostadas",
        estrellas:4,
        percio:55,
        tamano:"Normal"
    },{
        id:"102",
        img:"img_tost-ceviche-guisado.webp",
        nombre:"Tostadas de Ceviche Guisado",
        categoria:"Tostadas",
        estrellas:4,
        percio:55,
        tamano:"Normal"
    },{
        id:"103",
        img:"img_tost-ceviche-camaron.jpg",
        nombre:"Tostadas de Camaron",
        categoria:"Tostadas",
        estrellas:3,
        percio:105,
        tamano:"Normal"
    },{
        id:"104",
        img:"img_tost-ceviche-calamar.jpeg",
        nombre:"Tostadas de Calamar",
        categoria:"Tostadas",
        estrellas:4,
        percio:105,
        tamano:"Normal"
    },{
        id:"105",
        img:"img_tost-ceviche-mixta.jpeg",
        nombre:"Tostadas Mixtas",
        categoria:"Tostadas",
        estrellas:3,
        percio:105,
        tamano:"Normal"
    },

    //// Cocteles ////
    {
        id:"201",
        img:"img_cam-cal-ost.jpg",
        nombre:"Camaron,Calamar y Ostion",
        categoria:"Cocteles",
        estrellas:4,
        percio:145,
        tamano:"Chico"
    },{
        id:"202",
        img:"img_cam-cal-ost.jpg",
        nombre:"Camaron,Calamar y Ostion",
        categoria:"Cocteles",
        estrellas:3,
        percio:160,
        tamano:"Mediano"
    },{
        id:"203",
        img:"img_cam-cal-ost.jpg",
        nombre:"Camaron,Calamar y Ostion",
        categoria:"Cocteles",
        estrellas:4,
        percio:175,
        tamano:"Chavela (Grande)"
    },

    //// Botanas ////
    {
        id:"301",
        img:"img_ceviche-camaron.jpg",
        nombre:"Covinacion de Ceviche y Camaron",
        categoria:"Botanas",
        estrellas:5,
        percio:220,
        tamano:"Chico-Mediano-Grande"
    },

    //// Balitas ////
    {
        id:"401",
        img:"img_balitas.png",
        nombre:"Balitas",
        categoria:"Balitas",
        estrellas:4,
        percio:30,
        tamano:"Chico"
    },
    {
        id:"401",
        img:"img_balitas.png",
        nombre:"Balitas",
        categoria:"Balitas",
        estrellas:4,
        percio:60,
        tamano:"Mediano"
    },
    {
        id:"401",
        img:"img_balitas.png",
        nombre:"Balitas",
        categoria:"Balitas",
        estrellas:4,
        percio:80,
        tamano:"Grande"
    },
    
    //// Filetes y Camarones ////
    {
        id:"501",
        img:"img_f.c.enpanizado.jpg",
        nombre:"F.C. Enpanizados",
        categoria:"F.C.",
        estrellas:5,
        percio:250,
        tamano:"Normal"
    },{
        id:"502",
        img:"img-leo2.jpg",
        nombre:"F.C. al Mojo de Ajo",
        categoria:"F.C.",
        estrellas:3,
        percio:250,
        tamano:"Normal"
    },{
        id:"503",
        img:"img-leo2.jpg",
        nombre:"F.C.a la Diabla",
        categoria:"F.C.",
        estrellas:4,
        percio:250,
        tamano:"Normal"
    },{
        id:"504",
        img:"img-leo2.jpg",
        nombre:"F.C. a la Veracruzana",
        categoria:"F.C.",
        estrellas:4,
        percio:250,
        tamano:"Normal"
    },

    //// Otros paltillos
    {
        id:"601",
        img:"img_caldo-camaron.png",
        nombre:"Caldo de Camaron",
        categoria:"Otros",
        estrellas:4,
        percio:150,
        tamano:"Normal"
    },{
        id:"602",
        img:"img_nuggets.jpg",
        nombre:"Nuggets",
        categoria:"Otros",
        estrellas:5,
        percio:90,
        tamano:"Normal"
    },{
        id:"603",
        img:"img_papas-francesa.jpg",
        nombre:"Papas a la Francesa",
        categoria:"Otros",
        estrellas:5,
        percio:70,
        tamano:"Normal"
    },{
        id:"604",
        img:"img_dedos-queso.webp",
        nombre:"Deditos de Queso",
        categoria:"Otros",
        estrellas:3,
        percio:70,
        tamano:"Normal"
    },


    //// Bebidas ////
    {
        id:"701",
        img:"img_cocacola.webp",
        nombre:"CocaCola",
        categoria:"Bebidas",
        estrellas:5,
        percio:30,
        tamano:"500ml"
    },{
        id:"702",
        img:"img_fresca.jpg",
        nombre:"Fresca",
        categoria:"Bebidas",
        estrellas:4,
        percio:30,
        tamano:"500ml"
    },{
        id:"703",
        img:"img_fanta.jpg",
        nombre:"Fanta",
        categoria:"Bebidas",
        estrellas:4,
        percio:30,
        tamano:"500ml"
    },{
        id:"704",
        img:"img_cerveza-corona.jpg",
        nombre:"Cervesa Corona (Clara y Oscura)",
        categoria:"Bebidas",
        estrellas:5,
        percio:35,
        tamano:"335ml"
    },{
        id:"705",
        img:"img_cidral-mundent.jpg",
        nombre:"Cidral Mundent",
        categoria:"Bebidas",
        estrellas:4,
        percio:30,
        tamano:"500ml"
    },

    //// Micheladas ////
    {
        id:"801",
        img:"img_michelada.jpg",
        nombre:"Micheladas",
        categoria:"Micheladas",
        estrellas:5,
        percio:90,
        tamano:"350ml"
    },
];*/
