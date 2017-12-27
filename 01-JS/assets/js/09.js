/* ---------------------------------
           LES BOUCLES 💀 ☠️
-----------------------------------*/

// -- La boucle FOR

// -- Pour i = 1 ; tant que i <= strictement inférieur ou égale à 10 ; alors j'incrémente i de 1.
for(let i = 1 ; i <= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

var j = 1;
while(j <= 10) {

    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');

    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++;

}

    /* -------------------------------
                EXERCICE
    -------------------------------- */

    // -- Supposons le tableau suivant :
    var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo'];

    /* -- CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms du tableau suivant dans la console ou sur votre page. */

for(let i = 0 ; i < 7 ; i++) {
    console.log(Prenoms[i]);
}

console.log(' - - - ');
console.log(Prenoms);

for(let i = 0 ; i < Prenoms.length ; i++) {
    console.log(Prenoms[i]);
}

console.log(' - - - ');
var j = 0;
while(j < Prenoms.length) {
    console.log(Prenoms[j]);
    j++; 
}

console.log(' - - - ');
// -- Même exercice avec la boucle ForEach
// -- ATTENTION A LA PERFORMANCE !!!

Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice) {
    console.log(prenom);
}

// https://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
// https://leftshift.io/4-javascript-optimisations-you-should-know
