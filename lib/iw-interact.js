/* ──────────────────────────────────────────────────────
   Instituto Webinar — Sistema de interactividad
   Conexión texto ↔ visual para smart diagrams.

   Convención HTML:
     - Container con atributo `data-iw-diagram`
     - Items de la lista con `data-iw-target="id-x"`
     - Elementos del SVG con `data-iw-segment="id-x"`
     - Match por id → al hacer hover en cualquiera de los dos,
       el otro se "activa" y los demás se atenúan.

   Animación stagger:
     - Container con `data-iw-stagger`: sus hijos directos
       entran con fade-up secuencial.
   ────────────────────────────────────────────────────── */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-iw-diagram]').forEach(initDiagram);
    document.querySelectorAll('[data-iw-presenter]').forEach(initPresenter);
  });

  /* ────────────────────────────────────────────────────
     PRESENTER MODE
     El equipo invoca esto cuando quiere control manual:
     bullets ocultos al cargar, aparecen con flecha derecha,
     desaparecen con flecha izquierda. Espacio también avanza.
     ──────────────────────────────────────────────────── */
  function initPresenter(container) {
    var items = Array.prototype.slice.call(container.children);
    if (items.length === 0) return;

    items.forEach(function (el, i) {
      el.classList.add('iw-presenter-item');
      if (i > 0) el.classList.add('is-hidden');
    });

    var current = 0;
    var max = items.length - 1;

    document.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'ArrowRight' || k === ' ' || k === 'PageDown' || k === 'ArrowDown') {
        e.preventDefault();
        if (current < max) {
          current++;
          items[current].classList.remove('is-hidden');
        }
      } else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'ArrowUp') {
        e.preventDefault();
        if (current > 0) {
          items[current].classList.add('is-hidden');
          current--;
        }
      } else if (k === 'Home') {
        e.preventDefault();
        items.forEach(function (el, i) {
          if (i === 0) el.classList.remove('is-hidden');
          else el.classList.add('is-hidden');
        });
        current = 0;
      } else if (k === 'End') {
        e.preventDefault();
        items.forEach(function (el) { el.classList.remove('is-hidden'); });
        current = max;
      }
    });
  }

  function initDiagram(container) {
    var items = container.querySelectorAll('[data-iw-target]');
    var segments = container.querySelectorAll('[data-iw-segment]');

    items.forEach(function (item) {
      var id = item.getAttribute('data-iw-target');
      item.addEventListener('mouseenter', function () { activate(container, id); });
      item.addEventListener('mouseleave', function () { deactivate(container); });
      item.addEventListener('focus',      function () { activate(container, id); });
      item.addEventListener('blur',       function () { deactivate(container); });
    });

    segments.forEach(function (seg) {
      var id = seg.getAttribute('data-iw-segment');
      seg.addEventListener('mouseenter', function () { activate(container, id); });
      seg.addEventListener('mouseleave', function () { deactivate(container); });
    });
  }

  function activate(container, id) {
    container.classList.add('iw-has-active');
    container.querySelectorAll('[data-iw-target], [data-iw-segment]').forEach(function (el) {
      var elId = el.getAttribute('data-iw-target') || el.getAttribute('data-iw-segment');
      var match = elId === id;
      el.classList.toggle('is-active', match);
      el.classList.toggle('is-dimmed', !match);
    });
    // Iconos dinámicos: el icono cuyo data-iw-icon matchea el id se hace visible
    container.querySelectorAll('[data-iw-icon]').forEach(function (el) {
      el.classList.toggle('is-active-icon', el.getAttribute('data-iw-icon') === id);
    });
  }

  function deactivate(container) {
    container.classList.remove('iw-has-active');
    container.querySelectorAll('.is-active, .is-dimmed, .is-active-icon').forEach(function (el) {
      el.classList.remove('is-active', 'is-dimmed', 'is-active-icon');
    });
  }
})();
