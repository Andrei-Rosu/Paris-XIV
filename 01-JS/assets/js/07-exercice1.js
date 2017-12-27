/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// 1. Initialisation des Variables
var dateObj         = new Date();
var anneeActuelle   = dateObj.getFullYear();

// 2. Création d'une fonction
function Hello() {

    // 2a. Je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?","<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b. Je lui demande son age
    let age = parseInt( prompt("Hello " + prenom + " ! How old are you ?","<Saisir votre Age>") );
    console.log(age);
    console.log(typeof age);

    // 2c. Déduire l'année de naissance, et l'afficher dans une "alert".
    alert("AMAZING ! So you were born in " + ( anneeActuelle - age ) + " ! " );

    // 2d. J'affiche tout ça dans la page (Récapitulatif)
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " years old !");
}

// 2. Execution de ma Fonction 
Hello();