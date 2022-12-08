const lupa = document.getElementById("btnLupa");
const cuadroBusq = document.getElementById("cuadroBusqueda");

lupa.addEventListener("click", () => {
    /* cuadroBusq.style.display = "block"; */
    cuadroBusq.classList.add("displayBlock");
});

document.addEventListener("keyup", e => {
    if(e.target.matches("#buscador")) {
        document.querySelectorAll(".producto").forEach(producto => {
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? producto.style.display = "flex" : producto.style.display = "none";
        });
    }
});