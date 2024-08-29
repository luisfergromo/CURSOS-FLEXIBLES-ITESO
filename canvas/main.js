/*
*********************************************************************
CUSTOM JS 
Author: lromo@iteso.mx
*********************************************************************
*/
// Crear el iframe
var iframe = document.createElement("iframe");
iframe.src = "https://web.powerva.microsoft.com/environments/Default-6f0348f2-e498-45c9-84f4-c6d81dcffdfe/bots/cra81_bot1/webchat?__version__=2";
iframe.setAttribute("frameborder", "0");
iframe.style.width = "300px";
iframe.style.height = "400px"; // AjustÃ© la altura a 400px para una mejor visualizaciÃ³n
iframe.style.display = "none";
iframe.style.position = "fixed";
iframe.style.bottom = "80px"; // Lo posiciona cerca del botÃ³n
iframe.style.right = "20px";
iframe.style.zIndex = "9999"; // Asegura que estÃ© por encima de otros elementos
document.body.appendChild(iframe);

// Crear el botÃ³n flotante
var floatingButton = document.createElement("button");
floatingButton.innerHTML = "💬"; // Usando un emoji como Ã­cono, puedes cambiarlo por una imagen
floatingButton.style.position = "fixed";
floatingButton.style.bottom = "20px"; // Distancia desde la parte inferior de la ventana
floatingButton.style.right = "20px"; // Distancia desde el lado derecho de la ventana
floatingButton.style.backgroundColor = "#19447b"; // Color del botÃ³n, puedes cambiarlo
floatingButton.style.color = "white";
floatingButton.style.border = "none";
floatingButton.style.borderRadius = "50%";
floatingButton.style.width = "60px";
floatingButton.style.height = "60px";
floatingButton.style.fontSize = "24px";
floatingButton.style.cursor = "pointer";
floatingButton.style.zIndex = "9999"; // Asegura que estÃ© por encima de otros elementos
document.body.appendChild(floatingButton);

// Agregar un event listener al botÃ³n para alternar la visibilidad del iframe
floatingButton.addEventListener("click", function() {
    if (iframe.style.display === "none") {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
});



// Asegúrate de que el código se ejecute después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contenedor existente con el ID 'right-side-wrapper'
    const rightSideWrapper = document.getElementById('right-side-wrapper');
  
    // Crear el elemento <aside> con id 'new-progress' y rol 'complementary'
    const asideElement = document.createElement('aside');
    asideElement.id = 'new-progress';
    asideElement.role = 'complementary';
  
    // Añadir el <aside> al contenedor principal
    rightSideWrapper.appendChild(asideElement);
  
    // Función para mostrar los datos en el contenedor HTML
    function displayResponse(data) {
      // Limpia el contenido anterior
      asideElement.innerHTML = '';
  
      if (data.errors) {
        // En caso de error, muestra los mensajes de error
        const errorList = document.createElement('ul');
        data.errors.forEach(error => {
          const errorItem = document.createElement('li');
          errorItem.textContent = error.message;
          errorList.appendChild(errorItem);
        });
        asideElement.appendChild(errorList);
      } else {
        // Crear la barra de progreso
        const progress = data.requirement_count > 0
          ? Math.round((data.requirement_completed_count / data.requirement_count) * 100)
          : 0;
  
        const progressBar = `
          <progress value="${data.requirement_completed_count}" max="${data.requirement_count}"></progress>
          <p>${progress}% completado</p>
        `;
        
        // Añadir el div de progreso al <aside>
        asideElement.innerHTML = `
          <div id="new-progress">
            ${progressBar}
          </div>
          <p><strong>Requerimientos Completados:</strong> ${data.requirement_completed_count}</p>
          <p><strong>Total de Requerimientos:</strong> ${data.requirement_count}</p>
          <!--p><strong>Completado el:</strong> ${data.completed_at ? new Date(data.completed_at).toLocaleString() : 'N/A'}</p-->
          ${data.next_requirement_url 
            ? `<a href="${data.next_requirement_url}"><strong>Ir al siguiente requerimiento</strong></a>`
            : 'N/A'}
          </p>
        `;
      }
    }
  
    // Función para obtener el ID del curso de la URL
    function getCourseIdFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('courseId');
    }
  
    // Función para obtener el ID del usuario actual desde el objeto ENV
    function getCurrentUserId() {
      return ENV.current_user_id;
    }
  
    // Función para obtener el ID del contexto actual (curso) desde el objeto ENV
    function getCurrentContextId() {
      return ENV.current_context.id;
    }
  
    // Obtener los IDs
    const courseId = getCourseIdFromUrl() || getCurrentContextId();
    const studentId = getCurrentUserId();
  
    // Función para obtener los datos del progreso del estudiante
    function fetchData(courseId, studentId) {
      fetch(`https://cursosflexiblesiteso.instructure.com/api/v1/courses/${courseId}/users/${studentId}/progress`)
        .then(response => response.json())
        .then(data => displayResponse(data)) // Llama a displayResponse con los datos obtenidos
        .catch(error => {
          console.error('Error fetching data:', error);
          displayResponse({ errors: [{ message: 'Error fetching data' }] }); // Muestra un mensaje de error genérico
        });
    }
  
    // Llamar a fetchData con los IDs obtenidos
    fetchData(courseId, studentId);
  });
  
