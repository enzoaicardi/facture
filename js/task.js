// TASK OBJECTS

var TVA = null;
var heure = 30;
var jour = 100;
var devise = '€';
var noprice = '--- ';

var gtask = [

    {
        nom: "Création d'un site web",
        sub: [1, 2, 3, 4]
    },
    {
        nom: "Réalisation d'un site web",
        sub: [4]
    },
    {
        nom: "Maintenance d'un site web",
        sub: [5, 6, 7, 8]
    },

    {
        nom: "Création d'un logo",
        sub: [1, 2, 3, 9, 10]
    },
    {
        nom: "Réalisation d'un logo",
        sub: [3, 9, 10]
    },

    {
        nom: "Création d'une infographie/maquette",
        sub: [1, 2, 3, 11]
    },
    {
        nom: "Réalisation d'une infographie/maquette",
        sub: [3, 11]
    }

];

var task = [

    {nom: "", prix: 0},
    // 0

    {nom: "Elaboration d'une charte graphique"},
    {nom: "Création de pistes"},
    {nom: "Création du design final"},
    // 3
    
    {nom: "Codage d'un site web"},
    {nom: "Hébergement d'un site web"},
    {nom: "Réservation d'un nom de domaine"},
    {nom: "Configuration de la zone DNS"},
    {nom: "Maintenance"},
    // 8
    
    {nom: "Réalisation de plusieurs logos vectoriels"},
    {nom: "Envoi d'une présentation détaillée de la création"},
    // 10

    {nom: "Exportation et remise du fichier"},
    {nom: "Impression par un tiers"}

];

var currentTasks = {

}