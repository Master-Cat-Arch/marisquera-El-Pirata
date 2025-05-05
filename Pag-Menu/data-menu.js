let DtMenu = []; // Declara DtMenu como una variable global
console.log('Datos en DtMenu:', DtMenu);

//########### FUNCION PARA CARGAR DATOS DEL MENU DE LA BASE DE DATOS ###########//
async function cargarMenu() 
{
    try 
    {
        const response = await fetch('https://mariscoselpirata.x10.mx/marisquera-El-Pirata/Pag-Menu/'); // Cambia la URL según tu API
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json(); // Convierte la respuesta a JSON
        console.log('Datos cargados:', data); // Depuración: Verifica los datos recibidos

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