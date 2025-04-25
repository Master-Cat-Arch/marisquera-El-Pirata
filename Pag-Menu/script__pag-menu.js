const MostProd = document.getElementById("container-productos");
const Details1 = document.getElementById("details-1");

if(window.innerWidth < 700){Details1.removeAttribute("open");}

DtMenu.forEach(Prodt  =>{
    MostrarMenu(Prodt);
});



function MostrarMenu(Prodt2){
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
}
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

function Cevi(){OctionSummary("Ceviche");}  /* NUEVO */
function Tost(){OctionSummary("Tostadas");}
function Coct(){OctionSummary("Cocteles");}
function Bota(){OctionSummary("Botanas");}
function Bali(){OctionSummary("Balitas");}
function FiCa(){OctionSummary("F.C.");}
function Otro(){OctionSummary("Otros");}
function Bebi(){OctionSummary("Bebidas");}
function Mich(){OctionSummary("Micheladas");}

