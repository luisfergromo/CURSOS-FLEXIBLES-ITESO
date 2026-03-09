// Cintillo header del sitio
$('body').append("<div class='container-fluid bg-amarillo cintillo'>" +
  "<div class='row'>" +
    "<div class='container'>" +
      "<div class='row'>" +
        "<div class='col-md-6'></div>" +
        "<div class='col-md-6'>" +
          "<ul>" +
            "<li><a href='https://diplomados.iteso.mx/' target='_blank'>Educación continua</a></li>" +
          "</ul>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>" +
"</div>");

// Función para esperar a que un elemento exista en el DOM
function waitForElement(selector, callback) {
    var interval = setInterval(function() {
        if ($(selector).length) {
            callback();
            clearInterval(interval);
        }
    }, 100); // Revisa cada 100ms
}

// Slider home mejorado
waitForElement('#home-page', function() {
    // Verificamos si ya existe para no duplicarlo
    if ($('.slider-container').length === 0) {
        $('#home-page').append(
            "<div class='slider-container'>" +
                "<input id='slide-dot-1' type='radio' name='slides' checked>" +
                "<div class='slide slide-1'></div>" +
                "<input id='slide-dot-2' type='radio' name='slides'>" +
                "<div class='slide slide-2'></div>" +
                "<input id='slide-dot-3' type='radio' name='slides'>" +
                "<div class='slide slide-3'></div>" +
            "</div>"
        );
    }
});

/* Script Google Tag Manger (Head)
var gtmScript = document.createElement('script');
gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MKL6JD7Q';
gtmScript.async = true;
document.head.appendChild(gtmScript);
*/
/*Script Google Tag Manager (Body)
var gtmIframe = document.createElement('iframe');
gtmIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MKL6JD7Q';
gtmIframe.height = '0';
gtmIframe.width = '0';
gtmIframe.style.display = 'none';
gtmIframe.style.visibility = 'hidden';
document.body.appendChild(gtmIframe);
*/
/* https://community.canvaslms.com/t5/Canvas-Catalog-Discussion/Canvas-Catalog-Connect-With-Google-Tag-Manager/m-p/591995
*/

$('.product-value').append("<p class='moneda'>"+"MXN"+"</p>");

$('#app-footer').append(
  "<div class='container-fluid bg-azul-footer'>" +
    "<div class='container'>" +
      "<div class='row'>" +
        "<div class='col-md-12 contenido-principal'>" +
          "<h2 class='txt-blanco'>Instituto Tecnológico y de Estudios Superiores de Occidente</h2>" +
          "<h3 class='txt-blanco'>Periférico Sur Manuel Gómez Morín # 8585 C.P. 45604 Tlaquepaque Jalisco, México</h3>" +
          "<a class='tel-footer' href='tel:523336693434'> +52 33 3669 3434</a><br>" +
          "<a class='tel-footer' href='https://wa.link/d3un6v'>WhatsApp: +52 33 22586257</a><br>" +
          "<a class='tel-footer' href='mailto:diplomados@iteso.mx'>diplomados@iteso.mx</a><br>" +
        "</div>" +
        "<div class='col-md-12 redes-sociales'>" +
          "<div class='redes'> " +
            "<a href='https://www.facebook.com/ITESO/' class='me-4 text-reset btn-outline-light btn-floating'>" +
              "<div class='social'><i class='fab fa-facebook-f fa-3x' style='color: #00c4ff;'></i></div>" +
              "<p>Facebook</p>" +
            "</a>" +
            "<a href='https://twitter.com/ITESO' class='me-4 text-reset btn-outline-light btn-floating'>" +
              "<div class='social'><i class='fa-brands fa-x-twitter fa-3x' style='color: #00c4ff;'></i></div>" +
              "<p>Twitter</p>" +
            "</a>" +
            "<a href='https://www.instagram.com/itesouniversidad/' class='me-4 text-reset btn-outline-light btn-floating'>" +
              "<div class='social'><i class='fab fa-instagram fa-3x' style='color: #00c4ff;'></i></div>" +
              "<p>Instagram</p>" +
            "</a>" +
            "<a href='https://www.youtube.com/c/ITESOuniversidad' class='me-4 text-reset btn-outline-light btn-floating'>" +
              "<div class='social'><i class='fab fa-youtube fa-3x' style='color: #00c4ff;'></i></div>" +
              "<p>Youtube</p>" +
            "</a>" +
            "<a href='https://www.tiktok.com/@itesouniversidad' class='me-4 text-reset btn-outline-light btn-floating'>" +
              "<div class='social'><i class='fab fa-tiktok fa-3x' style='color: #00c4ff;'></i></div>" +
              "<p>TikTok</p>" +
            "</a>" +
            "<a href='https://www.linkedin.com/school/iteso-universidad/' class='me-4 text-reset btn-outline-light btn-floating'>" +
              "<div class='social'><i class='fab fa-linkedin-in fa-3x' style='color: #00c4ff;'></i></div>" +
              "<p>LinkedIn</p>" +
            "</a>" +
          "</div>" +
        "</div>" +
        "<div class='col-md-12 logos-footer'>" +
          "<ul class=''>" +
            "<li class='seleccionado'>" +
              "<a target='_blank' href='http://educacionjesuita.com.mx/'>" +
                "<img width='125px' alt='' data-fileentryid='20153' src='https://iteso.mx/documents/123/20150/logo-suj.svg/f16a1f50-12e5-9f33-b23f-adcc5613f317?t=1635968264178'>" +
              "</a>" +
            "</li>" +
            "<li class='seleccionado'>" +
              "<a target='_blank' href='https://www.ausjal.org/'>" +
                "<img width='125px' alt='' data-fileentryid='20157' src='https://iteso.mx/documents/123/20150/logo-ausjal.svg/e4e435f0-60c1-9cd2-fb7d-338be3ef6c54?t=1635968264178'>" +
              "</a>" +
            "</li>" +
            "<li class='seleccionado'>" +
              "<a target='_blank' href='http://www.anuies.mx/'>" +
                "<img width='125px' alt='' data-fileentryid='20161' src='https://iteso.mx/documents/123/20150/logo-anuies.svg/b534b3ec-f107-cedc-634b-0740757834c3?t=1635968264178'>" +
              "</a>" +
            "</li>" +
            "<li class='seleccionado'>" +
              "<a target='_blank' href='https://www.fimpes.org.mx/'>" +
                "<img width='125px' alt='' data-fileentryid='20165' src='https://iteso.mx/documents/123/20150/logo-fimpes.svg/21fc3f60-4825-a7b9-7e42-1d991d69ba8f?t=1635968264178'>" +
              "</a>" +
            "</li>" +
            "<li class='seleccionado'>" +
              "<a target='_blank' href=''>" +
                "<img width='125px' alt='' data-fileentryid='20169' src='https://iteso.mx/documents/123/20150/logo-excelencia-academica.svg/14b0cc00-a7a8-aafa-7dc3-d2c5b993913c?t=1635968264178'>" +
              "</a>" +
            "</li>" +
          "</ul>" +
        "</div>" +
        "<div class='col-md-12'>" +
          "<a href='https://datospersonales.iteso.mx/'>" +
            "<p class='txt-blanco'>Aviso de privacidad</p>" +
          "</a>" +
        "</div>" +
      "</div>" +
    "</div>" +
  "</div>"
);


// Crear el contenedor para el iframe y el botón flotante
var container = document.createElement("div");
container.style.position = "sticky";
container.style.bottom = "0";
container.style.right = "0";
document.body.appendChild(container);

// Crear el iframe
var iframe = document.createElement("iframe");
iframe.src = "https://web.powerva.microsoft.com/environments/Default-6f0348f2-e498-45c9-84f4-c6d81dcffdfe/bots/cra81_bot1/webchat?__version__=2";
iframe.setAttribute("frameborder", "0");
iframe.style.width = "300px";
iframe.style.height = "400px"; // Ajusté la altura a 400px para una mejor visualización
iframe.style.display = "none";
iframe.style.position = "fixed";
iframe.style.bottom = "80px"; // Lo posiciona cerca del botón
iframe.style.right = "20px";
iframe.style.zIndex = "9999"; // Asegura que esté por encima de otros elementos
document.body.appendChild(iframe);

// Crear el botón flotante
var floatingButton = document.createElement("button");
floatingButton.innerHTML = "<img src='https://diplomados.iteso.mx/documents/86112/6015612/BOTON+SOPORTE_PANT_652.png' />"; // Usando un emoji como ícono, puedes cambiarlo por una imagen
floatingButton.style.position = "fixed";
floatingButton.style.bottom = "20px"; // Distancia desde la parte inferior de la ventana
floatingButton.style.right = "20px"; // Distancia desde el lado derecho de la ventana
floatingButton.style.backgroundColor = "#fdc510"; // Color del botón, puedes cambiarlo
floatingButton.style.color = "white";
// floatingButton.style.border = "none";
floatingButton.style.borderRadius = "50%";
floatingButton.style.width = "60px";
floatingButton.style.height = "60px";
floatingButton.style.fontSize = "24px";
floatingButton.style.cursor = "pointer";
floatingButton.style.zIndex = "9999"; // Asegura que esté por encima de otros elementos
document.body.appendChild(floatingButton);

// Agregar un event listener al botón para alternar la visibilidad del iframe
floatingButton.addEventListener("click", function() {
    if (iframe.style.display === "none") {
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
});

// Modificar texto de Inscripción en ventana de enrrollment
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el span con la clase específica
    var spanElement = document.querySelector('#registration > form > span > div.Registration__SignInButton > a > span > span');
var spanTextoRegistro = document.querySelector('#registration > form > span > span.text-center.Registration__SignupLabel.css-1yj0g2r-view--block > span');
var nombreCompleto = document.querySelector('#registration > form > span > span.RegistrationBody__InputFields.css-1mstt4z-view > div:nth-child(1) > label > span > span:nth-child(1) > span:nth-child(1) > span');
var apellido = document.querySelector('#registration > form > span > span.RegistrationBody__InputFields.css-1mstt4z-view > div:nth-child(2) > label > span > span:nth-child(1) > span:nth-child(1) > span');

    
    // Verifica si el span existe y su contenido es "Registrarse para inscribirse"
    if (spanElement && spanElement.textContent === "Registrarse para inscribirse") {
        // Cambia el contenido del span
        spanElement.textContent = "Inicia Sesión para inscribirte";
    }
if (spanTextoRegistro) {
        // Cambia el contenido del span
        spanTextoRegistro .textContent = "¿No tienes una cuenta? ¡Inscríbete aquí!";
    }
if (nombreCompleto) {
        // Cambia el contenido del span
        nombreCompleto.textContent = "Nombre completo*";
    }
if (apellido) {
        // Cambia el contenido del span
        apellido.textContent = "Apellidos*";
    }
});

let heroStrong = document.querySelector("#feature > div > div > div:nth-child(2) > p:nth-child(3) > strong:nth-child(1)");
    if (heroStrong) {
        heroStrong.textContent = heroStrong.textContent.replace("A ritmo propio","Autogestivo");
    } else {
      // console.warn("heroStrong element not found");
    }


/**************************************************/
//Change Enrollment Notice
let productEnrollmentNotice = $('.ProductEnrollment__Notice');
     if (productEnrollmentNotice.length > 0) {
        productEnrollmentNotice.text("La inscripción para este curso aún no está disponible. Por favor, regresa pronto.");
    } else {
        // console.warn("ProductEnrollment__Notice not found");
    }

// Clarity 
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sk3l5t5hxi");
