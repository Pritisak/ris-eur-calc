const tecaj = 7.5;
let tekst = '';
let zamjena = '';
let ukupno = 0;
let ukupnoIzr = 0;
let kune = 0;
let kuneIzr = 0;
let euri = 0;
let euriIzr = 0;
let str = '';

function konverzijaUku (){
    tekst = '';
    /*ukupno = document.getElementById('ukupno').value;*/
    tekst = document.getElementById('ukupno').value;
    //console.log("Tekst=" + tekst)
    zamjena = tekst?.replace(',','.');
    //console.log("zamjena=" + zamjena)
    ukupno = parseFloat(zamjena)
    ukupnoIzr = ukupno;
    ukupno = ukupno * tecaj;
    /*console.log("The value ukupno=" + ukupnoIzr);*/
    tekst = ukupno + '';
    zamjena = tekst?.replace('.',',');
    document.getElementById('ukupnord').value = zamjena;
    izracun();
}

function konverzijaKn (){
    //kune = document.getElementById('kune').value;
    tekst = '';
    tekst = document.getElementById('kune').value;
    zamjena = tekst?.replace(',','.');
    kune = parseFloat(zamjena);
    kune = kune / tecaj;
    kuneIzr = kune;
    tekst = kune + '';
    zamjena = tekst?.replace('.',',');
    /*console.log("The value kune=" + kuneIzr);*/
    document.getElementById('kunerd').value = zamjena;
    izracun();
}

function konverzijaEur (){
    //euri = document.getElementById('euri').value;
    tekst = '';
    tekst = document.getElementById('euri').value;
    zamjena = tekst?.replace(',','.');
    euri = parseFloat(zamjena);
    euriIzr = euri;
    euri = euri * tecaj;
    tekst = euri + '';
    zamjena = tekst?.replace('.',',');
    /*console.log("The value euri=" + euriIzr);*/
    document.getElementById('eurird').value = zamjena;
    izracun();
}

function izracun() {
    let suma = 0;
    suma = parseFloat(ukupnoIzr) - (parseFloat(kuneIzr) + parseFloat(euriIzr));
    /*console.log("The value ukupno=" + ukupnoIzr);
    console.log("The value kune=" + kuneIzr);
    console.log("The value euri=" + euriIzr);
    console.log("Sum=" + suma);
    tekst = '';
    zamjena = '';
    console.log("Tekst1=" + tekst);*/
    tekst = suma + '';
    //console.log("Tekst2=" + tekst);
    zamjena = tekst?.replace('.',',');
    document.getElementById('vratird').value = zamjena;
    suma = suma * tecaj;
    /*tekst = '';
    zamjena = '';*/
    tekst = suma + '';
    zamjena = tekst?.replace('.',',');
    document.getElementById('vratiknrd').value = zamjena;
    let displayObj = document.getElementById('vratird');
    if (suma < 0) {
        displayObj.style.color = 'red';
    }else {
        displayObj.style.color = 'green';
    }
}
