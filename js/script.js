// come voglio strutturare il carosello?

/*
- preparare l'array con le immagini (sperando di capire come prendere quelle presenti nella consegna)
- tradurre in variabili gli elem html
- creare una variabile di indice
--> premuta freccia su
    ° l'indice aumenta di un'unità
    ° mostrare l'immagine del array associata a quel valore di indice
--> premuta freccia giù
    ° l'indice diminuisce di una unità
    ° mostrare l'immagine del array associata a quel valore di indice
*/

// - preparare l'array con le immagini (sperando di capire come prendere quelle presenti nella consegna)

const immagini = [
    "consegna/img/01.webp",
    "consegna/img/02.webp",
    "consegna/img/03.webp",
    "consegna/img/04.webp",
    "consegna/img/05.webp",
];

// tradurre in variabili gli elem html
let frecciaSuEl = document.getElementById("freccia-su");
let frecciaGiuEl = document.getElementById('freccia-giù');
let immagineEl = document.getElementById("img-interattiva");

// creare una variabile di indice

let index = 0;

// verifico inserendo nel parametro src il valore della prima img del array.
immagineEl.src = immagini[index];

// inizio a programmare l'evento click
frecciaSuEl.addEventListener("click", function() {
    //aumento il valore dell'indice
    index++;
    // ° mostrare l'immagine del array associata a quel valore di indice

    immagineEl.src = immagini[index];
});

//ripeto ma rovesciando le funzioni

frecciaGiuEl.addEventListener("click", function() {

    index--;

    immagineEl.src = immagini[index];
});