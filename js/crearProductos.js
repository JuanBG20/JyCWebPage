// Precios de productos
const pLlaverosSimples = "$150";
const pLlaverosComplejos = "$200";

const pMates = "$1500";

const pMFlexi = "$200";

const pSoportesB = "$800";
const pSoportesG = "$500";

const pCuadrosSimples = "$1500";
const pCuadrosComplejos = "$2000";
const pCuadrosNegros = "$1800";

const pRompecabezas = "$800";
const pCLinea = "$1100";

const pEsfNav = "$100";
const pPesebre = "$550";

// Llaveros FILA 1
crearPr("lRow1", "img/productos/llaveros/river.jpg", "Llavero River", pLlaverosComplejos);
crearPr("lRow1", "img/productos/llaveros/boca.jpg", "Llavero Boca", pLlaverosComplejos);
crearPr("lRow1", "img/productos/llaveros/huracan.jpg", "Llavero Club Huracan", pLlaverosComplejos);
crearPr("lRow1", "img/productos/llaveros/pelotaFutbol.jpg", "Llavero Pelota de Fútbol", pLlaverosSimples);
crearPr("lRow1", "img/productos/llaveros/pelotaBasket.jpg", "Llavero Pelota de Basquet", pLlaverosComplejos);

// Llaveros FILA 2
crearPr("lRow2", "img/productos/llaveros/rayo.jpg", "Llavero Rayo", pLlaverosSimples);
crearPr("lRow2", "img/productos/llaveros/sombreroSeleccionadorHP.jpg", "Llavero Sombrero Seleccionador", pLlaverosSimples);
crearPr("lRow2", "img/productos/llaveros/auto.jpg", "Llavero Auto", pLlaverosComplejos);
crearPr("lRow2", "img/productos/llaveros/corona.jpg", "Llavero Corona", pLlaverosSimples);
crearPr("lRow2", "img/productos/llaveros/gimnasta.jpg", "Llavero Gimnasta", pLlaverosSimples);

// Llaveros FILA 3
crearPr("lRow3", "img/productos/llaveros/letraA.jpg", "Llavero Letra A", pLlaverosSimples);
crearPr("lRow3", "img/productos/llaveros/rosa.jpg", "Llavero Rosa", pLlaverosComplejos);
crearPr("lRow3", "img/productos/llaveros/spiderman.jpg", "Llavero Spiderman", pLlaverosComplejos);
crearPr("lRow3", "img/productos/llaveros/superman.jpg", "Llavero Superman", pLlaverosComplejos);
crearPr("lRow3", "img/productos/llaveros/pokeball.jpg", "Llavero Pokeball", pLlaverosComplejos);

// Llaveros FILA 4
crearPr("lRow4", "img/productos/llaveros/teAmoPapa.jpg", "Llavero Llavero Te Amo Papá", pLlaverosComplejos);
crearPr("lRow4", "img/productos/llaveros/iLoveMama.jpg", "Llaveros Día de la Madre", pLlaverosComplejos, true, "modalLDM");
crearPr("lRow4", "img/productos/llaveros/felizDiaV1.jpg", "Llaveros Feliz Día", pLlaverosComplejos, true, "modalLFD");
crearPr("lRow4", "img/productos/llaveros/pieCeleste.jpg", "Llaveros Piecitos", pLlaverosComplejos, true, "modalLP");

// Mates FILA 1
crearPr("mRow1", "img/productos/mates/river.jpg", "Mate River", pMates);
crearPr("mRow1", "img/productos/mates/boca.jpg", "Mate Boca", pMates);
crearPr("mRow1", "img/productos/mates/pelotaFutbol.jpg", "Mate Pelota de Fútbol", pMates);
crearPr("mRow1", "img/productos/mates/spiderman.jpg", "Mate Spiderman", pMates);

// Muñecos Flexibles FILA 1
crearPr("mfRow1", "img/productos/figurasFlexibles/lagarto.jpg", "Muñeco Lagarto", pMFlexi);
crearPr("mfRow1", "img/productos/figurasFlexibles/pulpo.jpg", "Muñeco Pulpo", pMFlexi);
crearPr("mfRow1", "img/productos/figurasFlexibles/tRex.jpg", "Muñeco T-Rex", pMFlexi);
crearPr("mfRow1", "img/productos/figurasFlexibles/velociraptor.jpg", "Muñeco Velociraptor", pMFlexi);
crearPr("mfRow1", "img/productos/figurasFlexibles/triceraptor.jpg", "Muñeco Triceraptor", pMFlexi);

// Muñecos Flexibles FILA 2
crearPr("mfRow2", "img/productos/figurasFlexibles/perro.jpg", "Muñeco Perro", pMFlexi);
crearPr("mfRow2", "img/productos/figurasFlexibles/elefante.jpg", "Muñeco Elefante", pMFlexi);
crearPr("mfRow2", "img/productos/figurasFlexibles/tortuga.jpg", "Muñeco Tortuga", pMFlexi);

// Soporte para Celulares FILA 1
crearPr("scRow1", "img/productos/portacelulares/comunAmarillo.jpg", "Portacelulares Versión Básica", pSoportesB, true, "modalPB");
crearPr("scRow1", "img/productos/portacelulares/gatoMarmol.jpg", "Portacelulares Versión Gatitos", pSoportesG, true, "modalPG");

// Cuadros FILA 1
crearPr("cuaRow1", "img/productos/cuadros/tripticoMapamundi.jpg", "Cuadro Mapamundi Tríptico", pCuadrosSimples);
crearPr("cuaRow1", "img/productos/cuadros/tripticoHojas.jpg", "Cuadro Hojas Tríptico", pCuadrosSimples);
crearPr("cuaRow1", "img/productos/cuadros/cuboRubik.jpg", "Cuadro Cubo de Rubik", pCuadrosSimples);
crearPr("cuaRow1", "img/productos/cuadros/tripticoParis.jpg", "Cuadro Torre Eiffel", pCuadrosComplejos);
crearPr("cuaRow1", "img/productos/cuadros/gatoNegro.jpg", "Cuadro Gato Negro", pCuadrosNegros);

// Cuadros FILA 2
crearPr("cuaRow2", "img/productos/cuadros/newYork.jpg", "Cuadro New York", pCuadrosSimples, true, "modalCNY");
crearPr("cuaRow2", "img/productos/cuadros/safari.jpg", "Cuadro Safari", pCuadrosSimples, true, "modalCS");

// Juegos FILA 1
crearPr("jRow1", "img/productos/juegos/rompecabezasLeon.jpg", "Rompecabezas León", pRompecabezas);
crearPr("jRow1", "img/productos/juegos/rompecabezasSerpiente.jpg", "Rompecabezas Serpiente", pRompecabezas);
crearPr("jRow1", "img/productos/juegos/rompecabezasElefante.jpg", "Rompecabezas Elefante", pRompecabezas);
crearPr("jRow1", "img/productos/juegos/rompecabezasConejo.jpg", "Rompecabezas Conejo", pRompecabezas);
crearPr("jRow1", "img/productos/juegos/4enLinea.jpeg", "4 en Línea", pCLinea);

// Navidad FILA 1
crearPr("navRow1", "img/productos/navidad/esferasVarias.jpg", "Esferas de Navidad con Formas", pEsfNav);
crearPr("navRow1", "img/productos/navidad/esferasPalabras.jpg", "Esferas de Navidad con Palabras", pEsfNav);
crearPr("navRow1", "img/productos/navidad/pesebre.jpeg", "Pesebre Estrella", pPesebre);

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