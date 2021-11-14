
pdfMake.fonts = {
    Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
    }
}

function CreateContract(){

    updateData();

    var p = updatePrice();

    var doc = {
        
        pageSize: 'A4',

        content: [

            {
                text: 'Contrat de prestation de service',
                style: 'title'
            },
            
            `
            
            `,{text: 'Entre les soussignés :', style: {bold: true, italics: true}},`
            M. ${presta.nom},
            situé au ${presta.adresse}, ${presta.ville},
            enregistré au registre du commerce et des sociétés du Puy-en-Velay (Greffe du Tribunal de Commerce),
            sous le numéro ${presta.siret}
            
            Dénommé ci-après LE PRESTATAIRE,
            `,{text: 'ET', style: {bold: true, italics: true}},`
            M./Mme ${client.nom},
            situé au ${client.adresse}, ${client.ville},\n
            représentant la société ________________________________ (forme juridique et dénomination),
            au capital de ____________________________________
            située au __________________________________________
            enregistré au registre du commerce et des sociétés de ________________________________,
            sous le numéro __________________________________
            
            Dénommé ci-après LE CLIENT,
            \nLe Prestataire et Client ci-dessus dénommés sont appelés ensemble «les parties», ou séparément «la partie».
            `,
            {
                text: 'Préambule',
                style: 'h1'
            }
            ,
            `\nConformément aux articles L111-1 et L111-2 du code de la consommation, le Prestataire a délivré au Client toutes les informations pré-contractuelles nécessaires et obligatoires à la conclusion du présent contrat.
            
            Il a été convenu ce qui suit :
            `,
            {
                text: 'Article 1 - Objet',
                style: 'h1'
            }
            ,`
            Le présent contrat est un contrat de prestation de services ayant pour objet la mission suivante :

            _______________________________________________________________________________________________

            _______________________________________________________________________________________________

            _______________________________________________________________________________________________

            _______________________________________________________________________________________________

            _______________________________________________________________________________________________

            `,
            {
                text: 'Article 2 - Durée',
                style: 'h1'
            }
            ,`
            Ce contrat de prestation est conclu pour une durée de _________ jours travaillés.
            Il débutera le ____________________ et se terminera le ____________________
            Il n’est pas renouvelable tacitement, sauf convention contraire entre les parties.
            `,
            {
                text: 'Article 3 - Modalités d’exécution',
                style: 'h1'
            }
            ,
            `\nLe Prestataire s’engage à réaliser la mission qui lui est confiée par le Client de la meilleure manière, et en respectant la réglementation et la législation en vigueur, ainsi que les normes applicables.
            
            Pour ce faire, il mobilisera tous les moyens nécessaires à l’accomplissement de sa mission, tels que la constitution d’une équipe ou l’utilisation d’outils adéquats.
            \nDe son côté, le Client a l’obligation de collaborer. Ainsi, il s’engage à fournir en temps utile l’ensemble des informations dont le Prestataire a besoin pour réaliser la mission. De même, il l’informera dans les plus brefs délais de toute décision impactant sa mission. Dans certains cas, il pourra fournir au Prestataire l’accès à des documents ou lieux sensibles.

            Quoi qu’il en soit, le Prestataire est tenu à une obligation de moyens et non de résultats.
            `,
            {
                text: 'Article 4 - Délais',
                style: 'h1'
            }
            ,
            `\nLe Prestataire s’engage à accomplir sa mission selon un calendrier établi au préalable avec le Client. En cas d’empêchement ou de retard important, il devra en informer le Client dans les plus brefs délais.
            `,
            {
                text: 'Article 5 - Paiement',
                style: 'h1'
            }
            ,
            `\nPour la réalisation des prestations définies à l'Article 1 ci-dessus, le client versera au prestataire la somme de ${p.total} euros (€), payée de la manière suivante :
            
            > 25% soit ${p.total*(0.25)}€ à la signature des présentes,
            > 25% soit ${p.total*(0.25)}€ au _______ jour suivant la signature des présentes,
            > 50% soit ${p.total*(0.5)}€ constituant le solde, à la fin de la mission.
            
            Les frais engagés par le prestataire et nécessaires à l'exécution de la prestation, seront facturés en sus au client, sur présentation d’une note de frais.
            `,{text: 'Selon le cas :', style: {bold: true}},`
            > Le virement est à réaliser sur le compte professionnel de M. ${presta.nom}
            - IBAN : FR76 1680 7003 1137 0045 5619 296
            - BIC : CCBPFRPPGRE${contract?.[presType]?.[3] ? contract[presType][3] : ""}
            `,
            {
                text: 'Article 6 - Confidentialité',
                style: 'h1'
            }
            ,
            `\nPendant l'execution du présent contrat, il peut être nécessaire pour le Client de partager des informations exclusives, y compris les secrets commerciaux, des connaissances et autres informations confidentielles au Prestataire afin de mener à bien la mission détaillée dans l'article 1. Le concepteur ne partagera jamais aucune de ces informations, même après l'exécution du contrat. Le concepteur n'utilisera également jamais aucune de ces informations pour son bénéfice personnel, même après l'exécution du contrat. Le Prestataire s’engage à ne divulguer aucune information, ni aucun document ou concept, relatifs au Client.
            \nDans le cas où il communiquerait des informations ou éléments déjà présents dans le domaine public, dont il avait connaissance avant la signature du présent contrat, ou obtenus de manière légitime, le Prestataire ne pourrait pas être tenu pour responsable de la divulgation.
            `,
            {
                text: 'Article 7 - Propriété',
                style: 'h1'
            }
            ,
            `\nLes informations et documents délivrés par le Client au Prestataire restent la propriété du Client pendant toute la durée du contrat. Le Prestataire n'a aucun droit sur ces informations et ne peut les utiliser que pour répondre à la demande du Client.
            \nTant que la mission n’est pas intégralement payée par le Client, le travail effectué reste la propriété du Prestataire. Une fois le paiement complet réalisé, le Client pourra en jouir comme bon lui semble.${contract?.[presType]?.[7] ? contract[presType][7] : ""}
            `,
            {
                text: 'Article 8 - Garanties et clause de non-responsabilité',
                style: 'h1'
            }
            ,
            `\nLe Prestataire déclare et garantit qu'il a le droit de conclure et d'exécuter le présent contrat. Le Prestataire déclare et garantit en outre qu'il a le droit d'utiliser et de distribuer les conceptions créées pour le client et que ces conceptions n'appartiennent à personne d'autre à la connaissance du Prestataire. Dans le cas où le Prestataire ne dispose pas de ces droits, il devra rembourser tout dommage directement associé que le Client pourrait subir, ou assumera la responsabilité de sorte que le Client ne subisse aucun dommage. 
            \nLe client déclare et garantit qu'il a le droit d'utiliser toute information exclusive détaillée dans l'article 6, mais sans s'y limiter, qu'il peut fournir au Prestataire. Dans le cas où le Client ne dispose pas de ces droits, le Client remboursera tout dommage directement associé que le Prestataire pourrait subir ou assumera la responsabilité de sorte que le Prestataire ne subisse aucun dommage.
            
            LE PRESTATAIRE NE DECLARE NI NE GARANTIT QUE LA PRESTATION CRÉERA DES BÉNÉFICES SUPPLÉMENTAIRES, DES VENTES, DE LA VISIBILITÉ, DE LA RECONNAISSANCE POUR LE CLIENT OU AUTRES. LE PRESTATAIRE N'A AUCUNE RESPONSABILITÉ ENVERS LE CLIENT SI LA PRESTATION NE CONDUIT PAS AU(X) RÉSULTAT(S) SOUHAITÉ(S) PAR LE CLIENT.
            `,
            {
                text: 'Article 9 - Cas de force majeure',
                style: 'h1'
            }
            ,
            `\nLa responsabilité du Prestataire ne pourra être mise en cause si la non-exécution ou le retard de l’exécution de l’une de ses obligations, décrites dans les présentes conditions générales de vente, découle d’un cas de force majeure. Celle-ci s’entend de tout événement extérieur, imprévisible au sens de l’article 1148 du Code Civil.
            \nLe Prestataire n’est pas responsable notamment en cas de d’incendie, inondations, interruption de la fourniture d’énergie ou d’ADSL, ainsi que les grèves totales ou partielles de toute nature entravant la bonne marche de la société, telles que les grèves des transports, des services postaux.
            \nEn cas de force majeure, les obligations du présent Contrat sont suspendues de part et d’autre pendant trente jours.
            `,
            {
                text: 'Article 10 - Résiliation',
                style: 'h1'
            }
            ,
            `\nChaque partie pourra résilier le présent contrat en cas de manquement à l’une des obligations visées aux articles 2, 3, 4, 5, 6 ou 8. Pour ce faire, elle adressera une mise en demeure à l’autre en lettre recommandée avec accusé de réception.
            \nLe présent contrat sera réputé résilié QUINZE (15) jours après la réception de ladite mise en demeure.
            `,
            {
                text: 'Article 11 - Litiges',
                style: 'h1'
            }
            ,
            `\nLe présent contrat est régi par la loi française. En cas de litige, Prestataire et Client s’engagent à chercher en bonne intelligence une solution amiable. En cas de désaccord majeur, le tribunal compétent sera celui du domicile du Prestataire, à savoir : _______________________________






            FAIT À __________________   _________
            Le ________________






            En DEUX (2) exemplaires, un pour chaque partie, toutes les pages doivent être parafées.
            `, {text: 'Précédée de la mention « lu et approuvé » :', style: {italics: true}}, `

            `, {text: `Signature du PRESTATAIRE                                        Signature du CLIENT`, style: {bold: true, alignment: 'center'}}, `





            `,
            
            
        ],
        
        styles: {
            title: {
                fontSize: 22,
                bold: true,
                alignment: 'center'
            },
            h1: {
                fontSize: 18,
                bold: true
            }
        },
        
        defaultStyle: {
            alignment: 'justify'
        }

    }

    pdfMake.createPdf(doc).download(`CONTRAT_prestation_de_service-${client.nom}`);

}

var contract = {

    depa: false,

    cour: false,

    webd: {
        3: `\n\nLe client reconnait que des frais supplémentaires s'appliqueront pour l'hébergement, la maintenance ainsi que la réservation et la configuration du nom de domaine pour le site du client.Ces frais se présentent sous la forme d'un abonnement mensuel de ____________ euros (€) par virement automatique. Ces frais seront appliqués jusqu'à ce que le client demande leur suspension. Le client a connaissance que la suspension des frais entrainera l'arrêt des services.
        
        Formulaire de suspension des frais :\n\nEn remplissant ce fomulaire à l'identique sur les deux contrat, le client suspend les frais complémentaires, mettant de fait fin aux services liées.
        \nDate : __________________________
        Signature du client :\n\n\n`,
        
        7: `\nLe client reconnait toutefois que les sites web ont généralement une structure et/ou une base commune. De fait tous les modèles et toutes les librairies utilisés et/ou créés pendant la durée du contrat restent la propriété du Prestataire.
        \nSauf mention contraire de la part du Client, le Prestataire peut faire mention du travail réalisé dans le cadre du contrat, sur son site personnel ou à toute personne physique.`
    },

    info: {
        7: `\nLe client reconnait toutefois que les différentes maquettes partagent parfois une structure et/ou une base commune. De fait tous les modèles utilisés et/ou créés pendant la durée du contrat restent la propriété du Prestataire.
        \nSauf mention contraire de la part du Client, le Prestataire peut faire mention du travail réalisé dans le cadre du contrat, sur son site personnel ou à toute personne physique.`
    },

    logo: {
        7: `\nLe client reconnait toutefois que les différents logos partagent parfois une structure et/ou une base commune. De fait tous les modèles utilisés et/ou créés pendant la durée du contrat restent la propriété du Prestataire.
        \nSauf mention contraire de la part du Client, le Prestataire peut faire mention du travail réalisé dans le cadre du contrat, sur son site personnel ou à toute personne physique.`
    },

    mont: false

}