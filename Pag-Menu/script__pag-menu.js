// Función para cargar los platillos desde la base de datos
async function cargarPlatillos() {
    try {
        const response = await fetch('obtener_platillos.php');
        const platillos = await response.json();
        
        const contenedor = document.getElementById('container-productos');
        contenedor.innerHTML = ''; // Limpiar el contenedor

        platillos.forEach(platillo => {
            const estrellas = '★'.repeat(platillo.Estrellas) + '☆'.repeat(5 - platillo.Estrellas);
            
            const platilloHTML = `
                <div class="cont-prod">
                    <div class="cont-img">
                        <a href="#"><img src="${platillo.Img}"></a>
                    </div>
                    <div class="info-prod">
                        <h6>${platillo.Nombre}</h6>
                        <hr>
                        <div class="pre-estr">
                            <label class="prod-precio"><b>Precio: $${platillo.Precio}</b></label>
                            <p class="prod-estrellas">'⭐'${estrellas}</p>
                            <label class="prod-tamano"><b>${platillo.Tamano}</b></label>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += platilloHTML;
        });
    } catch (error) {
        console.error('Error al cargar los platillos:', error);
    }
}

// Cargar los platillos cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarPlatillos);

// #########################################################################################

const MostProd = document.getElementById("container-productos");
const Details1 = document.getElementById("details-1");

if(window.innerWidth < 700){Details1.removeAttribute("open");}

DtMenu.forEach(Prodt  =>{
    MostrarMenu(Prodt);
});



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

