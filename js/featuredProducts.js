document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loaderDestacados');

  loader.style.display = 'flex';

  fetch(
    'https://script.google.com/macros/s/AKfycbwokSXszVHIVyQJhID-3q8bUadBZJwPPe2wLlcbX1QP0lIOgZQ-R32IMXOprHc6KVSuZA/exec'
  )
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = 'none';

      const container = document.getElementById('featured-products');
      const featuredProducts = data.filter(
        (product) => product.featured == true
      );

      featuredProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Precio: $${product.price}</p>
        `;

        container.appendChild(productCard);
      });
    })
    .catch((error) => {
      loader.innerHTML = '<p>Error al cargar destacados.</p>';

      console.error('Error fetching products:', error);
    });
});
