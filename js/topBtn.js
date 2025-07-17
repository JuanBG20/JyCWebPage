document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      btn.classList.add('btn-scrolled');
    } else {
      btn.classList.remove('btn-scrolled');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
});
