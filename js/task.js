// TASK OBJECTS

var gtask = [

    {
        nom: "Initialisation PC [Windows 10]",
        sub: [1,2,3,4,5,6],
        prix: 30
    },

    {
        nom: "Réinstallation OS [Windows 10]",
        sub: [8,9,10,11],
        prix: 20
    },

    {
        nom: "Effectuer une backup",
        sub: [8,12,13],
        prix: 20
    },

]

var task = [

    {nom: "", prix: 0},
    // 1

    // Initialisation PC
    {nom: "Configuration de windows", prix: 5},
    {nom: "Utilisation d'un compte local", prix: 0},
    {nom: "Nettoyer les applications", prix: 5},
    {nom: "Nettoyer les applications au demarrage", prix: 5},
    {nom: "Installation d'un navigateur et d'une suite bureautique", prix: 5},
    {nom: "Installation des pilotes et mises à jours", prix: 10},
    // 6

    // Désactivation du mode S
    {nom: "Désactivation du mode S", prix: 10},
    // 7

    // Réinstallation OS
    {nom: "Modifier les paramètres du BIOS", prix: 5},
    {nom: "Charger l'iso de Windows 10", prix: 5},
    {nom: "Formater les partitions", prix: 10},
    {nom: "Installer Windows 10", prix: 5},
    // 11

    // Effectuer une backup
    {nom: "Créer un fichier backup", prix: 10},
    {nom: "Restaurer les fichiers", prix: 5},
    // 13

    // Accès fichier refusé
    {nom: "Résolution de l'erreur Accès fichier refusé", prix: 20},
    // 14

    {nom: "Extraction des données depuis le HUB - SSD HDD", prix: 20},


]

var TVA = null;
var heure = 30;
var devise = '€';

var currentTasks = {

}