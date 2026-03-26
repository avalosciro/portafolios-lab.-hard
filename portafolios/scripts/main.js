/* ============================================================
   MAIN.JS - PORTAFOLIO DE LABORATORIO 2026
   Autor: Ciro Avalos - 5to Año
   ============================================================ */


/* --- ETAPA 4: MANIPULACIÓN DEL DOM E INTERACTIVIDAD --- */

/* PASO 1: INSTANCIAR REFERENCIAS A LOS NODOS DEL DOM
   Utilizamos el método getElementById() perteneciente al objeto global 'document'.
   Este método recibe como parámetro un string (cadena de texto) con el valor del atributo 'id'
   del elemento HTML, y retorna la referencia a ese nodo en el DOM.
   Guardamos estas referencias declarando constantes (const) para asegurar que
   la referencia en memoria no sea reasignada.
*/
const botonAbrir   = document.getElementById('btn-diagnostico');
const botonCerrar  = document.getElementById('btn-cerrar');
const ventanaModal = document.getElementById('modal-info');


/* PASO 2: REGISTRO DE MANEJADORES DE EVENTOS (EVENT LISTENERS)
   Invocamos el método addEventListener() sobre los nodos de los botones.
   Este método recibe dos parámetros obligatorios:
   1. El tipo de evento a escuchar (el string 'click').
   2. Una función 'callback' (función anónima) que contiene el bloque de instrucciones
      que se ejecutará o "disparará" cuando el evento ocurra.
*/

botonAbrir.addEventListener('click', function() {
    /* Invocamos el método nativo showModal() perteneciente a la API del elemento HTMLDialogElement.
       Este método renderiza la etiqueta <dialog> en la capa superior (top layer) del navegador,
       bloqueando la interacción con el resto del documento principal (comportamiento modal). */
    ventanaModal.showModal();
});

botonCerrar.addEventListener('click', function() {
    /* Invocamos el método nativo close() sobre el nodo del dialog.
       Este método cambia el estado del elemento a oculto y devuelve el foco al documento. */
    ventanaModal.close();
});


/* --- ETAPA 7: LÓGICA DEL MODO OSCURO (ESTILO SUTIL) --- */

/* PASO 1: Capturamos el nodo del botón flotante
   Al igual que en la Etapa 4, usamos getElementById() para obtener
   la referencia al botón que definimos en el HTML con id="btn-tema".
*/
const botonTema = document.getElementById('btn-tema');

/* PASO 2: Escuchamos el evento de clic
   Registramos un addEventListener de tipo 'click' sobre el botón flotante.
   Cada vez que el usuario haga clic, se ejecutará la función callback.
*/
botonTema.addEventListener('click', function() {

    /* classList.toggle() es el método clave de esta etapa.
       Funciona como un interruptor real:
       - Si el <body> NO tiene la clase 'modo-oscuro' → se la agrega.
       - Si el <body> YA tiene la clase 'modo-oscuro'  → se la quita.
       El CSS de la Etapa 7 se encarga del resto de la magia visual. */
    document.body.classList.toggle('modo-oscuro');

    /* Lógica Condicional (if / else):
       Evaluamos el estado actual del body para decidir qué ícono mostrar.
       classList.contains() retorna true si la clase existe, false si no. */
    if (document.body.classList.contains('modo-oscuro')) {
        /* Modo oscuro ACTIVO → mostramos el sol para indicar que se puede volver a la luz */
        botonTema.textContent = '☀';
    } else {
        /* Modo oscuro INACTIVO → mostramos la luna para indicar que se puede oscurecer */
        botonTema.textContent = '☽';
    }
});