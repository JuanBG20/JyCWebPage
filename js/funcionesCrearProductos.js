// Funcion para crear productos comunes
function crearPr(idRow, imgPr, descPr, precioPr, boton, modalBoton) {
    const row = document.getElementById(idRow);

    const divA = document.createElement("div");
    const divB = document.createElement("div");
    const divC = document.createElement("div");
    const imgA = document.createElement("img");
    const p = document.createElement("p");

    row.classList.add("row", "d-flex", "justify-content-evenly", "quitBorder");

    divA.style.display = "flex"

    divA.classList.add("col-sm-10", "col-md-2", "flex-column", "mt-4", "p-3", "border", "rounded", "producto");
    divB.classList.add("col-12", "d-flex", "justify-content-center", "align-items-center");
    divC.classList.add("col-12", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-light", "text-center", "mt-2");
    imgA.classList.add("imgPr");
    p.classList.add("text-primary", "mt-3");

    imgA.setAttribute("src", imgPr);
    imgA.setAttribute("loading", "lazy");
    imgA.setAttribute("alt", "J&C " + descPr);

    divA.innerText = descPr;
    divC.innerText = descPr;
    p.innerText = precioPr;

    divA.style.fontSize = "0";
    divC.style.fontSize = "15px";

    row.appendChild(divA);
    divA.appendChild(divB);
    divA.appendChild(divC);
    divB.appendChild(imgA);
    divC.appendChild(p);

    if(boton) {
        const button = document.createElement("button");

        button.classList.add("btn", "btn-outline-primary");

        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#" + modalBoton);

        button.innerText = "Ver todos";

        divC.appendChild(button);
    }
}