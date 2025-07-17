document.addEventListener('DOMContentLoaded', () => {
  let products = [];

  const container = document.getElementById('catalogo-grid');
  const searcher = document.getElementById('searcher');
  const loader = document.getElementById('loader');

  loader.style.display = 'flex';

  fetch(
    'https://script.google.com/macros/s/AKfycbwokSXszVHIVyQJhID-3q8bUadBZJwPPe2wLlcbX1QP0lIOgZQ-R32IMXOprHc6KVSuZA/exec'
  )
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = 'none';

      products = data;
      createCategoryButton(products);
      renderProducts(products);
    });

  function renderProducts(list) {
    container.innerHTML = '';
    list.forEach((prod) => {
      const card = document.createElement('article');
      card.classList.add('product-card', 'fade-in');

      console.log(prod.img);
      card.innerHTML = `
          <img src="${prod.img}" alt="${prod.name}" class="zoom-img" />
          <h3>${prod.name}</h3>
          <p>$${prod.price}</p>
        `;

      container.appendChild(card);
    });

    zoom();
  }

  searcher.addEventListener('input', () => {
    filter();
  });

  function filter() {
    const text = searcher.value.toLowerCase();
    const category =
      document.querySelector('.filters .active').dataset.category;
    const filtered = products.filter((prod) => {
      const normalize = (str) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const textEqual = normalize(prod.name.toLowerCase()).includes(
        normalize(text)
      );
      const categoryEqual = category === 'todos' || prod.category === category;
      return textEqual && categoryEqual;
    });

    renderProducts(filtered);
  }

  function zoom() {
    document.querySelectorAll('.zoom-img').forEach((img) => {
      img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal-img');
        modal.innerHTML = `
                <div class="overlay" onclick="closeModal()"></div>
                <div class="modal-content">
                    <i class="bi bi-x-lg close-btn" onClick="closeModal()" title="Cerrar"></i>
                    <img src="${img.src}" alt="${img.alt}" />
                </div>
            `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
      });
    });
  }

  window.closeModal = function () {
    document.querySelector('.modal-img')?.remove();
    document.body.style.overflow = '';
  };

  function createCategoryButton(products) {
    const filtersContainer = document.getElementById('filters');
    filtersContainer.innerHTML = '';

    // BOTON TODOS
    const allBtn = document.createElement('button');
    allBtn.textContent = 'Todos';
    allBtn.dataset.category = 'todos';
    allBtn.classList.add('active');

    filtersContainer.appendChild(allBtn);

    // CATEGORIAS
    const categories = [
      ...new Set(products.map((prod) => prod.category))
    ].sort();

    // BOTON POR CATEGORIA
    categories.forEach((category) => {
      const btn = document.createElement('button');
      btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      btn.dataset.category = category;

      filtersContainer.appendChild(btn);
    });

    document.querySelectorAll('.filters button').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelector('.filters .active')?.classList.remove('active');
        btn.classList.add('active');
        filter();
      });
    });
  }
});
