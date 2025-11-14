
// script.js - interacción del formulario principal y validaciones
document.addEventListener('DOMContentLoaded', () => {
  // Formulario interactivo en index.html
  const nombreInput = document.getElementById('nombre');
  const colorInput = document.getElementById('color');
  const mensajeDiv = document.getElementById('mensaje');
  const saludarBtn = document.getElementById('saludar');
  const cambiarFondoBtn = document.getElementById('cambiarFondo');
  const limpiarBtn = document.getElementById('limpiar');
  const body = document.body;

  // Estado inicial
  const initialBg = getComputedStyle(document.body).backgroundColor || '#fff8e7';

  // Validar y saludar
  if (saludarBtn) {
    saludarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nombre = nombreInput.value.trim();
      const color = colorInput.value || '#ff6600';
      if (!nombre) {
        mensajeDiv.textContent = '¡Por favor ingresa tu nombre!';
        mensajeDiv.classList.add('error');
        mensajeDiv.classList.remove('success');
        mensajeDiv.style.color = '';
        mensajeDiv.classList.add('fade');
        return;
      }
      mensajeDiv.textContent = `¡Hola, ${nombre}!`;
      mensajeDiv.style.color = color;
      mensajeDiv.classList.remove('error');
      mensajeDiv.classList.add('success');
      // Animación sencilla
      mensajeDiv.style.transform = 'scale(1.08)';
      setTimeout(() => { mensajeDiv.style.transform = 'scale(1)'; }, 450);
    });
  }

  // Cambiar color de fondo con transición
  if (cambiarFondoBtn) {
    cambiarFondoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const color = colorInput.value || '#ff6600';
      body.style.transition = 'background-color 0.6s ease';
      body.style.backgroundColor = color;
    });
  }

  // Limpiar formulario y restaurar estado inicial
  if (limpiarBtn) {
    limpiarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nombreInput.value = '';
      colorInput.value = '#ff6600';
      mensajeDiv.textContent = '';
      mensajeDiv.classList.remove('error','success');
      body.style.transition = 'background-color 0.4s ease';
      body.style.backgroundColor = initialBg;
    });
  }

  // FAQ comportamiento (si existe)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const ans = item.querySelector('.faq-answer');
      if (!ans) return;
      ans.style.display = (ans.style.display === 'block') ? 'none' : 'block';
    });
  });

  // Validación simple del formulario de contacto (si existe)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (ev) => {
      const nombreC = document.getElementById('contact-nombre');
      const emailC = document.getElementById('contact-email');
      const msgC = document.getElementById('contact-msg');
      let ok = true;
      [nombreC,emailC,msgC].forEach(inp=>{
        if(!inp.value.trim()){ inp.style.borderColor = '#c62828'; ok=false; } else { inp.style.borderColor = '#ccc'; }
      });
      if(!ok){ ev.preventDefault(); alert('Completa todos los campos del formulario de contacto.'); }
    });
  }
});
