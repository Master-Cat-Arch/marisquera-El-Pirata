
// #########################################################################################
console.log('DtMenu:', DtMenu); // Verifica si DtMenu está definido y contiene datos
const MostProd = document.getElementById("container-productos");
const Details1 = document.getElementById("details-1");


if(window.innerWidth < 700){Details1.removeAttribute("open");}

DtMenu.forEach(Prodt  =>{
    MostrarMenu(Prodt);
});

// ##########################################################################################

async function cargarMenu() {
    try {
        const response = await fetch('localhost/marisquera-El-Pirata-2/Pag-Menu/index.php');
        const texto = await response.text();
        console.log('Respuesta del servidor:', texto); // Verifica la respuesta aquí
        const data = JSON.parse(texto);

        if (data.error) {
            console.error('Error del servidor :( :', data.error);
            return;
        }

        DtMenu = data; // Almacena los datos en DtMenu
        Todo(); // Muestra todos los platillos
    } catch (error) {
        console.error('Error al cargar el menú ;´v :', error);
    }
}


// Función para renderizar un platillo en el contenedor
function MostrarMenu(Prodt2) {
    console.log('Mostrando platillo:', Prodt2); // Verifica los datos del platillo
    const CreaDiv = document.createElement("div");
    CreaDiv.classList.add("cont-prod");
    
    CreaDiv.innerHTML = `
        <div class="cont-img">
            <a href="#"><img src="../Img/${Prodt2.Img}" alt="${Prodt2.Nombre}"></a>
        </div>
        <div class="info-prod">
            <h6>${Prodt2.Nombre}</h6>
            <hr>
            <div class="pre-estr">
                <label class="prod-precio"><b>Precio: $${Prodt2.Precio}</b></label>
                <p class="prod-estrellas">${'★'.repeat(Prodt2.Estrellas || 0)}</p>
                <label class="prod-tamano"><b>${Prodt2.Tamaño || 'N/A'}</b></label>
            </div>
        </div>
    `;
    MostProd.appendChild(CreaDiv);
}


// Función genérica para filtrar y mostrar platillos por categoría desde la base de datos
async function OctionSummary(OctSum) {
    console.log(`Filtrando por categoría: ${OctSum}`);
    MostProd.innerHTML = ""; // Limpia el contenedor

    try {
        // Realiza una solicitud al servidor con la categoría seleccionada
        const response = await fetch(`index.php?Categoria=${encodeURIComponent(OctSum)}`);
        const data = await response.json();

        if (data.error) {
            console.error('Error del servidor (Octsumary/Categoría) :', data.error);
            return;
        }

        console.log('Datos recibidos del servidor:', data);

        // Muestra los platillos recibidos
        data.forEach(Prodt => {
            MostrarMenu(Prodt);
        });
    } catch (error) {
        console.error('Error al filtrar por categoría :c :', error);
    }

    Details1.removeAttribute("open"); // Cierra el menú desplegable si está abierto
}


async function buscarPorPlatillo(platillo) {
    console.log(`Buscando platillo específico: ${platillo}`);
    MostProd.innerHTML = ""; // Limpia el contenedor

    try {
        // Realiza una solicitud al servidor con el nombre del platillo
        const response = await fetch(`index.php?Platillo=${encodeURIComponent(platillo)}`);
        const data = await response.json();

        if (data.error) {
            console.error('Error del servidor:', data.error);
            return;
        }

        console.log('Datos recibidos del servidor:', data);

        // Muestra los platillos recibidos
        data.forEach(Prodt => {
            MostrarMenu(Prodt);
        });
    } catch (error) {
        console.error('Error al buscar el platillo:', error);
    }

    Details1.removeAttribute("open"); // Cierra el menú desplegable si está abierto
}


// #############################################################################################



// Función para mostrar todos los platillos desde la base de datos
async function Todo() {
    MostProd.innerHTML = ""; // Limpia el contenedor

    try {
        // Realiza una solicitud al servidor para obtener todos los platillos
        const response = await fetch('index.php?categoria=Todos');
        const data = await response.json();

        if (data.error) {
            console.error('Error del servidor:', data.error);
            return;
        }

        console.log('Datos recibidos del servidor:', data);

        // Muestra todos los platillos recibidos
        data.forEach(Prodt => {
            MostrarMenu(Prodt);
        });
    } catch (error) {
        console.error('Error al cargar todos los platillos:', error);
    }

    Details1.removeAttribute("open"); // Cierra el menú desplegable si está abierto
}
// Función para mostrar solo las tostadas
function Tost() {
    OctionSummary("Tostadas");
}
// Función para mostrar solo los cocteles
function Coct() {OctionSummary("Cocteles");}
// Función para mostrar solo las botanas
function Bota() {OctionSummary("Botanas");}
// Función para mostrar solo las balitas
function Bali() {OctionSummary("Balitas");}
// Función para mostrar solo los filetes y camarones
function FiCa() {OctionSummary("F.C.");}
// Función para mostrar solo otros platillos
function Otro() {OctionSummary("Otros");}
// Función para mostrar solo las bebidas
function Bebi(){OctionSummary("Bebidas");}
// Función para mostrar solo las micheladas
function Mich() {OctionSummary("Micheladas");}




/*function MostrarMenu(Prodt2){
    const CreaDiv = document.createElement("div");
    CreaDiv.classList.add("cont-prod");
    CreaDiv.innerHTML=`
        <div class="cont-img">
            <a href="#"><img src="../Img/${Prodt2.img}"></a>
        </div>
        <div class="info-prod">
            <h6>${Prodt2.nombre}</h6>
            <hr>
            <div class="pre-estr">
                <label class="prod-precio"><b>Precio: $${Prodt2.percio}</b></label>
                <p class="prod-estrellas">${'⭐'.repeat(Prodt2.estrellas)}</p>
                <label class="prod-tamano"><b>${Prodt2.tamano}</b></label>
            </div>
        </div>`;
   MostProd.appendChild(CreaDiv);
}*/


/*
function Todo(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        MostrarMenu(Prodt);  
    });
    Details1.removeAttribute("open");
}
function CerrarInp(){
    Che = document.getElementById("open-menu");
    Che.checked = !Che.checked
}
function OctionSummary(OctSum){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == OctSum){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}

function Tost(){OctionSummary("Tostadas");}
function Coct(){OctionSummary("Cocteles");}
function Bota(){OctionSummary("Botanas");}
function Bali(){OctionSummary("Balitas");}
function FiCa(){OctionSummary("F.C.");}
function Otro(){OctionSummary("Otros");}
function Bebi(){OctionSummary("Bebidas");}
function Mich(){OctionSummary("Micheladas");}
*/

