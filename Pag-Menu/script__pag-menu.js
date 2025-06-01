
// ####################### COMPROBANDO BASE DE DATOS #########################################
console.log('DtMenu:', DtMenu); // Verifica si DtMenu está definido y contiene datos
const MostProd = document.getElementById("container-productos");
const Details1 = document.getElementById("details-1");

if(window.innerWidth < 700){Details1.removeAttribute("open");}

if (DtMenu.length === 0) {
    console.warn('DtMenu está vacío. Asegúrate de cargar los datos antes de usarlo.');
} else {
    DtMenu.forEach(Prodt => {
        MostrarMenu(Prodt);
    });
}


// ############################## FUNCIONES PARA EL MENÚ #################################
async function cargarMenu() 
{
    try {
        const response = await fetch('https://mariscoselpirata.x10.mx/marisquera-El-Pirata/Pag-Menu/menuConexion.php');
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const texto = await response.text();
        console.log('Respuesta del servidor:', texto); // Depuración
        const data = JSON.parse(texto);

        if (data.error) {
            console.error('Error del servidor :( [CargarMenú]:', data.error);
            return;
        }

        DtMenu = data; // Almacena los datos en DtMenu
        console.log('Datos cargados en DtMenu:', DtMenu); // Depuración
        Todo(); // Muestra todos los platillos
    } catch (error) {
        console.error('Error al cargar el menú ;´v :', error);
    }
}


// Función para renderizar un platillo en el contenedor
function MostrarMenu(Prodt2) 
{
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
                <p class="prod-estrellas">${'⭐'.repeat(Prodt2.Estrellas || 0)}</p>
                <label class="prod-tamano"><b>${Prodt2.Tamaño || 'N/A'}</b></label>
            </div>
        </div>
    `;
    if (!Prodt2 || !Prodt2.Nombre || !Prodt2.Precio) {
    console.warn('Datos incompletos para el platillo:', Prodt2);
    return;
}
    MostProd.appendChild(CreaDiv);
}


// Función genérica para filtrar y mostrar platillos por CATEGORÍA desde la base de datos
async function OctionSummary(OctSum) 
{   //normaliza la categoría a minúsculas y elimina espacios en blanco
    const categoriaNormalizada = OctSum.trim().toLowerCase();
    console.log(`Filtrando por categoría: ${categoriaNormalizada}`);
    MostProd.innerHTML = ""; // Limpia el contenedor

    console.log(`Filtrando por categoría: ${OctSum}`);
    MostProd.innerHTML = ""; // Limpia el contenedor

    try 
    {
        // Realiza una solicitud al servidor con la categoría seleccionada
        const response = await fetch(`menuConexion.php?Categoria=${encodeURIComponent(OctSum)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        if (data.error) {
            console.error('Error del servidor (Octsumary/Categoría) :', data.error);
            return;
        }
        console.log('Datos recibidos del servidor (categoría) :', data);

        // Muestra los platillos recibidos
        data.forEach(Prodt => {
            MostrarMenu(Prodt);
        });

    } catch (error) 
        {
            console.error('Error al filtrar por categoría :c :', error);
        }
   // Details1.removeAttribute("open"); // Cierra el menú desplegable si está abierto
}


async function buscarPorPlatillo(platillo) {
    console.log(`Buscando platillo específico: ${platillo}`);
    MostProd.innerHTML = ""; // Limpia el contenedor

    try 
    {
        // Realiza una solicitud al servidor con el nombre del platillo
        const response = await fetch(`menuConexion.php?Platillo=${encodeURIComponent(platillo)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        if (data.error) {
            console.error('Error del servidor (nombre del platillo) :', data.error);
            return;
        }
        console.log('Datos recibidos del servidor (nombre) :', data);

        // Muestra los platillos recibidos
        data.forEach(Prodt => {
            MostrarMenu(Prodt);
        });

    } catch (error) 
        {
            console.error('Error al buscar el platillo :', error);
        }
    // Details1.removeAttribute("open"); // Cierra el menú desplegable si está abierto
}



// ##################### SELECCIÓN DE PLATILLOS ESPECÍFICOS #####################################

// Función para mostrar todos los platillos desde la base de datos
async function Todo() {
    MostProd.innerHTML = ""; // Limpia el contenedor

    try 
    {
        // Realiza una solicitud al servidor para obtener todos los platillos
        const response = await fetch('menuConexion.php?categoria=Todos');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        if (data.error) {
            console.error('Error del servidor (obtener todos los platillos) :', data.error);
            return;
        }
        console.log('Datos recibidos del servidor (todos los platillos) :', data);

        // Muestra todos los platillos recibidos
        data.forEach(Prodt => {
            MostrarMenu(Prodt);
        });
    } catch (error) 
        {
            console.error('Error al cargar todos los platillos :', error);
        }
   // Details1.removeAttribute("open"); // Cierra el menú desplegable si está abierto
}

//Funcion para mostrar solo los ceviches
function Cevi() {OctionSummary("Ceviche");}  /* NUEVO */
// Función para mostrar solo las tostadas :
function Tost() {OctionSummary("Tostadas");}
// Función para mostrar solo los cocteles :
function Coct() {OctionSummary("Cocteles");}
// Función para mostrar solo las botanas :
function Bota() {OctionSummary("Botanas");}
// Función para mostrar solo las balitas :
function Bali() {OctionSummary("Balitas");}
// Función para mostrar solo los filetes y camarones :
function FiCa() {OctionSummary("F.C.");}
// Función para mostrar solo otros platillos :
function Otro() {OctionSummary("Otros");}
// Función para mostrar solo las bebidas :
function Bebi(){OctionSummary("Bebidas");}
// Función para mostrar solo las micheladas :
function Mich() {OctionSummary("Micheladas");}

document.addEventListener('DOMContentLoaded', () => {
    Todo(); // Carga todos los platillos al abrir el menú
});