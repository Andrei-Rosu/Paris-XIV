/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        nom     : "LIEGEARD",
        prenom  : "Hugo",
        moyenne : {
            francais : 4,
            math     : 8,
            physique : 18
        }
    },
    {
        nom     : "DUPOUX",
        prenom  : "Marie-Pierre",
        moyenne : {
            francais : 19,
            math     : 12,
            physique : 12,
            italien  : 11
        }
    },
    {
        nom     : "ELIE",
        prenom  : "Romain",
        moyenne : {
            francais : 16,
            math     : 15,
            physique : 10,
            latin    : 11,
            chinois  : 12,
            histoire : 15
        }
    },
];

// -- lesFlemards.js

function w(CeciEstUnParametreDeMaFonction) {
    document.write(CeciEstUnParametreDeMaFonction);
}

function l(e) {
    console.log(e);
}

l(PremierTrimestre);

w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for(let i = 0 ; i < PremierTrimestre.length ; i++) {

    // -- On récupère l'Objet Etudiant de l'Itération
    let Etudiant = PremierTrimestre[i];

    // -- Aperçu dans la console
    l(Etudiant);

    // -- Ici, mes variables seront remises à 0 à chaque nouveau étudiant(itération).
    var NombreDeMatiere = 0, SommeDesNotes = 0;

    // -- Afficher le Prénom et le Nom d'un Etudiant
    w('<li>');
        w(Etudiant.prenom + ' ' + Etudiant.nom);
        // -- Afficher la moyenne de l'étudiant aux différentes matières
        w('<ul>');
            for(let matiere in Etudiant.moyenne) {
                l(matiere);
                l(Etudiant.moyenne[matiere])

                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

                w('<li>');
                    w( matiere + ' : ' + Etudiant.moyenne[matiere] );
                w('</li>');
            } // -- Fin de la Boucle Matière
            w('<li>');
                w('<strong>Moyenne Générale : </strong>' + ( SommeDesNotes / NombreDeMatiere ).toFixed(2) );
            w('</li>');
        w('</ul>');
    w('</li><br>');
} // -- Fin de la Boucle Etudiant
w('</ol>');