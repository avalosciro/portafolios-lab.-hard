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
   2. Una función 'callback' (función anónima) que contAiene el bloque de instrucciones
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

// ── Modal Arquitectura ────────────────────────────────────────────────────────

const botonArquitectura  = document.getElementById('btn-arquitectura');
const modalArquitectura  = document.getElementById('modal-arquitectura');
const botonCerrarArq     = document.getElementById('btn-cerrar-arquitectura');

botonArquitectura.addEventListener('click', function() {
    modalArquitectura.showModal();
});

botonCerrarArq.addEventListener('click', function() {
    modalArquitectura.close();
});

/* Lógica de Tabs */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const tabId = btn.getAttribute('data-tab');

        /* Quitar activo de todos */
        tabBtns.forEach(function(b) { b.classList.remove('tab-activo'); });
        tabContents.forEach(function(c) { c.classList.remove('tab-content-activo'); });

        /* Activar el seleccionado */
        btn.classList.add('tab-activo');
        document.getElementById('tab-' + tabId).classList.add('tab-content-activo');
    });
});

const botonprocesador  = document.getElementById('btn-procesador');
const modalprocesador  = document.getElementById('modal-procesador');
const botonCerrarprocesador    = document.getElementById('btn-cerrar-procesador');

botonArquitectura.addEventListener('click', function() {
    modalArquitectura.showModal();
});

botonCerrarArq.addEventListener('click', function() {
    modalArquitectura.close();
});

/* Lógica de Tabs */
const tabbtns = document.querySelectorAll('.tab-btn');
const tabcontents = document.querySelectorAll('.tab-content');

tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const tabId = btn.getAttribute('data-tab');

        /* Quitar activo de todos */
        tabBtns.forEach(function(b) { b.classList.remove('tab-activo'); });
        tabContents.forEach(function(c) { c.classList.remove('tab-content-activo'); });

        /* Activar el seleccionado */
        btn.classList.add('tab-activo');
        document.getElementById('tab-' + tabId).classList.add('tab-content-activo');
    });
});
// Pon un <canvas id="particleCanvas"></canvas> en tu HTML donde quieras el efecto

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const PARTICLE_COUNT = 250;
const CONNECT_DIST = 120;
const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
let particles = [];

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.r = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    const dx = mouse.x - this.x, dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      this.x -= dx * 0.03;
      this.y -= dy * 0.03;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(140,120,255,${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECT_DIST) {
        const alpha = (1 - dist / CONNECT_DIST) * 0.4;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(140,120,255,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
    const dx = mouse.x - particles[i].x;
    const dy = mouse.y - particles[i].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150) {
      const alpha = (1 - dist / 150) * 0.6;
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = `rgba(180,160,255,${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animate);
}

animate();