document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  const socials = document.getElementById('socials');
  const links = navbar.querySelectorAll('a');

  let menuVisible = false;
  let animating = false;

  toggle.addEventListener('click', () => {
    if (animating) return; // Prevenir doble clic durante animación

    if (!menuVisible) {
      // Mostrar menú
      navbar.classList.remove('fade-out');
      navbar.classList.add('fade-in', 'show');
      logo.classList.add('show');
      socials.classList.add('show');
      document.body.classList.add('menu-abierto');
      document.documentElement.classList.add('menu-abierto');
      menuVisible = true;
    } else {
      // Ocultar menú
      animating = true;
      navbar.classList.remove('fade-in');
      navbar.classList.add('fade-out');
      logo.classList.remove('show');
      socials.classList.remove('show');
      document.body.classList.remove('menu-abierto');
      document.documentElement.classList.remove('menu-abierto');

      navbar.addEventListener(
        'animationend',
        () => {
          navbar.classList.remove('fade-out', 'show');
          animating = false;
        },
        { once: true }
      );
      menuVisible = false;
    }
  });

  // Cerrar menú al hacer clic en un enlace
  links.forEach((link) =>
    link.addEventListener('click', () => {
      if (!menuVisible) return;
      animating = true;
      navbar.classList.remove('fade-in');
      navbar.classList.add('fade-out');
      logo.classList.remove('show');
      socials.classList.remove('show');
      document.body.classList.remove('menu-abierto');
      document.documentElement.classList.remove('menu-abierto');

      navbar.addEventListener(
        'animationend',
        () => {
          navbar.classList.remove('fade-out', 'show');
          animating = false;
          menuVisible = false;
        },
        { once: true }
      );
    })
  );

  // Cambiar fondo al hacer scroll
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled', 'shrink');
    } else {
      header.classList.remove('header-scrolled', 'shrink');
    }
  });
});
