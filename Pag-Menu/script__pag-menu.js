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
                <label><b>Precio: $${Prodt2.percio}</b></label>
                <p>${'X'.repeat(Prodt2.estrellas)}</p>
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
function Tost(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Tostadas"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function Coct(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Cocteles"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function Bota(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Botanas"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function Bali(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Balitas"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function FiCa(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "F.C."){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function Otro(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Otros"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function Bebi(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Bebidas"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}
function Mich(){
    MostProd.innerHTML=""
    DtMenu.forEach(Prodt =>{
        if(Prodt.categoria == "Micheladas"){
          MostrarMenu(Prodt);  
        }
    });
    Details1.removeAttribute("open");
}

