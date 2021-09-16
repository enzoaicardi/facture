// FACTURE DOWNLOAD

var local_i = 1;

function dl(){

    var fact = document.querySelector('.facture')
    var print = fact.querySelector('.print');
    var link = fact.querySelector('.dl');

    html2canvas(print, { windowWidth: 720, allowTaint: true } ).then(function(canvas) {

        // fact.appendChild(canvas);
        var png = canvas.toDataURL("image/png");
        // fact.removeChild(canvas);

        var date = info.date.replace(/[^0-9]/gi,'_');
        var name = info.name.replace(/ /gi,'_');
        var type = factType === 'f' ? 'Facture' : factType === 'd' ? 'Devis' : 'FactureB';

        link.href = png;
        link.download = type+'-'+info.ref+'-'+name+'-'+date+'.png';
        link.click();

    });

}

function closeFact(){
    document.querySelector('.facture').classList.add('h');
}

function finish(){
    if(factType === 'f'){localStorage.setItem('ref-f', local_i+1);}
    if(factType === 'd'){localStorage.setItem('ref-d', local_i+1);}
    if(factType === 'fb'){localStorage.setItem('ref-fb', local_i+1);}

    window.location.reload();
}