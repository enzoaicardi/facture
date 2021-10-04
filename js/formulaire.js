// FORMULAIRE

var info = {
    name: '',
    date: '',
    ref: ''
};

var presta = {

    nom: 'Aicardi Enzo',
    adresse: "25 rue d'annonay",
    ville: "43190 Tence",

    siren: "903 680 296",
    siret: "903 680 296"

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
    document.querySelector('.formulaire .ref [name="date"]').value = today;
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

    if(type === 'hours' || type === 'tasks'){

        var total = document.querySelector('.formulaire .task .total');

        if(type === 'hours'){
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
                pt = "Dépannage informatique (logiciel et/ou machine)"; heure=30; break;
            case "cour":
                pt = "Cours d'informatique et médiation numérique"; heure=30; break;
            case "webd":
                pt = "Création, entretient ou mise à jour d'un site web"; heure=45; break;
            case "info":
                pt = "Infographie, réalisation de maquettes numériques"; heure=40; break;
            case "logo":
                pt = "Réalisation d'un logo numérique"; heure=36; break;
            case "mont":
                pt = "Montage d'ordinateur"; heure=30; break;
        }

        updatePrice();
    }

}

function updateLocalI(){
    local_i = localStorage.getItem('ref-'+factType) || 1;
    document.querySelector('.ref [name="numero"]').value = local_i;
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
    client.ville = copyText(['.identity [name="code"]', '.identity [name="ville"]'], '.consommateur p:nth-child(4)');
    client.adresse = copyText(['.identity [name="adresse"]'], '.consommateur p:nth-child(3)');

    let num = document.querySelector('.ref [name="numero"]').value;
    local_i = Number(num);

    info.ref = copyText(['.ref [name="numero"]'], '.prestataire .n');
    info.date = copyText(['.ref [name="date"]'], '.prestataire .d');
    info.date = copyText(['.ref [name="date"]'], '.prestataire .r');
    if(factType === 'd'){
        print.querySelector('.prestataire .r').textContent = 'Devis (non-facturé)';
    }

    print.querySelector('.objet span').textContent = pt;

    function copyText(e, o){
        var t = '';
        for(var i=0; i<e.length; i++){
            t += i === 0 ? '' : ' ';
            t += form.querySelector(e[i]).value;
        }
        print.querySelector(o).textContent = t;
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
                tr += 
                `<tr>
                    <td><h4>${obj.nom}</h4>${ul}</td>
                    <td>${calcType === 'tasks' ? (obj.prix > 0 ? obj.prix+devise : 'offert') : ''}</td>
                </tr>`;
            }

            table_content += tr;

        }

    }

    tbody.innerHTML = table_content;

    // add ending lines of table
    if(calcType === 'hours'){

        let template = 
        `<tr>
            <td><b>Heures</b></td>
            <td>${p.h}h</td>
        </tr>
        <tr>
            <td><b>Taux horaire</b></td>
            <td>${heure+devise}</td>
        </tr>
        <tr class="total">
            <td><b>Total</b></td>
            <td>${(heure*p.h)+devise}</td>
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

