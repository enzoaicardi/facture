// FORMULAIRE

var info = {
    name: '',
    siret: '',
    date: '',
    ref: ''
};

var presta = {

    nom: 'Aicardi Enzo',
    adresse: "25 rue d'annonay",
    ville: "43190 Tence",

    siren: "903 680 296",
    siret: "903 680 296 00014"

};

var client = {};

var pt = "Services informatique";

// set today date
setToday();
function setToday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    var number = dd+mm+yyyy;
    document.querySelector('.formulaire .ref [name="date"]').value = today;
    document.querySelector('.formulaire .ref [name="numero"]').value = number;
}

// functions
function Type(e, type){

    var t = e.currentTarget;
    var bloc = t.parentNode;
    var s = bloc.querySelector('.s');

    if(s){
        s.classList.remove('s');
    }

    t.classList.add('s');

    if(type === 'jours' || type === 'tasks'){

        var total = document.querySelector('.formulaire .task .total');

        if(type === 'jours'){
            total.classList.remove('t');
        }
        else{
            total.classList.add('t');
        }

        calcType = type;
        updatePrice();
    }

    else if(type === 'f' || type === 'd' || type === 'fb'){
        factType = type;
        updateLocalI();
    }

    else{ // cours, depannage, etc...
        presType = type;

        switch (presType) {
            case "depa":
                pt = "Dépannage informatique (logiciel et/ou machine)"; heure=20; break;
            case "hebg":
                pt = "Hébergement et maintenance d'un site web"; heure=20; break;
            case "cour":
                pt = "Cours d'informatique et médiation numérique"; heure=20; break;
            case "webd":
                pt = "Création, entretient ou mise à jour d'un site web"; heure=40; jour=140; break;
            case "info":
                pt = "Infographie, réalisation de maquettes numériques"; heure=35; jour=130; break;
            case "logo":
                pt = "Réalisation d'un logo numérique"; heure=35; jour=130; break;
            case "mont":
                pt = "Montage d'ordinateur"; heure=20; break;
        }

        updatePrice();
    }

}

function updateLocalI(){
    // local_i = localStorage.getItem('ref-'+factType) || 1;
    // document.querySelector('.ref [name="numero"]').value = local_i;
    return;
}
updateLocalI();

function Empty(e){

    var t = e.currentTarget;

    if(t.value !== ''){
        t.style.border = '2px solid hsl(113, 74%, 40%)';
    }else{
        t.style.border = '2px solid red';
    }

}

function Blur(s, n){

    var next = document.querySelectorAll('.formulaire .bloc');

    for(var i=s; i<s+n; i++){
        if(next[i]){next[i].classList.remove('h');}
        else{console.log('vous ciblez un élément non existant');}
    }

}

function Add(){
    var search = document.querySelector('.search');
    var input = search.querySelector('header input');
    var customTitle = document.querySelector('.search .custom h4');

    search.classList.remove('h');
    input.value = '';
    customTitle.textContent = '';

    setTimeout(function(){
        input.focus();
    }, 100);
    

    SearchTask('');
}

function updateData(){

    var facture = document.querySelector('.facture');
    var print = facture.querySelector('.print');
    var form = document.querySelector('.formulaire');

    info.name = client.nom = copyText(['.identity [name="nom"]', '.identity [name="prenom"]'], '.consommateur b');
    client.ville = copyText(['.identity [name="code"]', '.identity [name="ville"]'], '.consommateur p:nth-child(5)');
    client.adresse = copyText(['.identity [name="adresse"]'], '.consommateur p:nth-child(4)');
    client.siret = copyText(['.identity [name="siret"]'], '.consommateur .siret', 'SIRET : ');

    let num = document.querySelector('.ref [name="numero"]').value;
    local_i = Number(num);

    info.ref = copyText(['.ref [name="numero"]'], '.prestataire .n');
    info.date = copyText(['.ref [name="date"]'], '.prestataire .d');
    info.date = copyText(['.ref [name="date"]'], '.prestataire .r');
    if(factType === 'd'){
        print.querySelector('.prestataire .r').textContent = 'Devis (non-facturé)';
    }

    print.querySelector('.objet span').textContent = pt;

    function copyText(e, o, pf){
        pf = pf || '';
        var t = '';
        for(var i=0; i<e.length; i++){
            t += i === 0 ? '' : ' ';
            t += form.querySelector(e[i]).value;
        }
        var tc = pf+t;
        if(!t) tc = '';
        print.querySelector(o).textContent = tc;
        return t;
    }

}

function ExportData(){

    // Take the text data and export to .print
    var facture = document.querySelector('.facture');
    var print = facture.querySelector('.print');
    var tbody = print.querySelector('.calc tbody');
    tbody.innerHTML = '';

    updateData();

    // exporting tasks to table
    let p = updatePrice();

    // add tasks
    var table_content = '';

    for(var key in currentTasks){

        if(currentTasks[key] !== false){

            let tr = ``;
            let obj = cct[Number(key)];
            let sub = obj.sub, ul = '';

            if(sub){
                ul = subTasks(sub);
            }

            if(obj){
                var px = obj.prix || noprice;
                tr += 
                `<tr>
                    <td><h4>${obj.nom}</h4>${ul}</td>
                    <td>${calcType === 'tasks' ? (px === 0 ? 'offert' : px+devise) : ''}</td>
                </tr>`;
            }

            table_content += tr;

        }

    }

    tbody.innerHTML = table_content;

    // add ending lines of table
    if(calcType === 'jours'){

        let template = 
        `<tr>
            <td><b>Jours travaillées</b></td>
            <td>${p.txt}</td>
        </tr>
        <tr>
            <td><b>Taux journalier</b></td>
            <td>${jour+devise}</td>
        </tr>
        <tr class="total">
            <td><b>Total</b></td>
            <td>${(jour*p.t)+devise}</td>
        </tr>`;

        tbody.insertAdjacentHTML('beforeend', template);

    }else{

        tbody.insertAdjacentHTML('beforeend', 
        `<tr class="total">
            <td><b>Total</b></td>
            <td>${p.total+devise}</td>
        </tr>`);

    }

    facture.classList.remove('h');

}

