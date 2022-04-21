const guardie = [{nome:'Mario Rossi',eta: 23},
    {nome:'Antonio Verdi',eta:42},
    {nome:'Gianni Blu',eta:34}];
const prigionieri = [{nome:'Marco Gialli',eta: 31},
    {nome:'Carlo Bianchi',eta:30},
    {nome:'Maria Bianconeri',eta:25}];
const fascicoli = [{id:'Marco Gialli',matricola:1,dataIn:'20/10/1999',dataOut:'20/05/2022',crimine:'omicidio',inVita:true,appello:false},
    {id:'Carlo Bianchi',matricola:2,datain:'20/5/1994',dataout:'20/05/2032',crimine:'rapina',inVita:false,appello:false},
    {id:'Maria Bianconeri',matricola:3,datain:'2/1/1991',dataout:'20/05/2062',crimine:'furto scudetto',inVita:true,appello:true}];

var submitGuardia = document.getElementById('submit4').addEventListener('click', inserisciGuardia),
    arrGuardia=[];

function getInputGuardia() {
    arrGuardia.push(document.getElementById('nomeGuard').value);
    arrGuardia.push(parseInt(document.getElementById('etaGuard').value));
}
function inserisciGuardia() {
    getInputGuardia();
    guardie.push({nome:arrGuardia[0],
        eta:arrGuardia[1]});
    console.log(guardie)
}
var submitPrigioniero = document.getElementById('submit5').addEventListener('click', inserisciPrigioniero),
    arrPrigioniero=[];

function getInputPrigioniero() {
   var nomeprigioniero=document.getElementById('nomePrig').value,
    etaprigioniero=parseInt(document.getElementById('etaPrig').value),
    matricola=parseInt(document.getElementById('matricola').value),
    dataentrata=document.getElementById('datain').value,
    datauscita=document.getElementById('dataout').value,
    crimine=document.getElementById('crimine').value;
    
    arrPrigioniero.push(nomeprigioniero);
    arrPrigioniero.push(etaprigioniero);
    arrPrigioniero.push(matricola);
    arrPrigioniero.push(dataentrata);
    arrPrigioniero.push(datauscita);
    arrPrigioniero.push(crimine);
}
function inserisciPrigioniero() {
    getInputPrigioniero();
    prigionieri.push({nome:arrPrigioniero[0],
        eta:arrPrigioniero[1]});
    fascicoli.push({id:arrPrigioniero[0],
        matricola:arrPrigioniero[2],
        datain:arrPrigioniero[3],
        dataout:arrPrigioniero[4],
        crimine:arrPrigioniero[5],
        inVita:true, appello:true});
        console.log(prigionieri)
}
var bottoneGuardie = document.getElementById('elencaGuard').addEventListener('click', elencaGuardie);

function elencaGuardie() {
    let output= "";
    for (i = 0; i < guardie.length; i++) {
        output += Object.values(guardie[i]);
        output += "\n";
    }
    document.getElementById("output3").innerText = output;
}
var bottonePrigionieri = document.getElementById('elencaPrig').addEventListener('click', elencaPrigionieri);

function elencaPrigionieri() {
    let output= "";
    for (i = 0; i < prigionieri.length; i++) {
        output += Object.values(prigionieri[i]);
        output += "\n";
    }
    document.getElementById("output3").innerText = output;
}
var bottoneFascicoli = document.getElementById('elencaFasc').addEventListener('click', elencaFascicoli);

function elencaFascicoli() {
    let output= "";
    for (i = 0; i < fascicoli.length; i++) {
        output += Object.values(fascicoli[i]);
        output += "\n";
    }
    document.getElementById("output3").innerText = output;
}
    
var bottoneRiepilogo = document.getElementById('riepilogo').addEventListener('click', riepilogo);

function riepilogo() {
    var countmorti=0,
        countevasi=0;

        for(i=0; i < fascicoli.length; i++) {
            if(fascicoli[i].inVita==false) {
                countmorti += 1;
            } else if (fascicoli[i].inVita==true && fascicoli[i].appello==false){
                countevasi += 1;
            }
        }
    let output = `Numero Guardie:${guardie.length}
        Numero Detenuti: ${prigionieri.length}
        Numero Fascicoli: ${fascicoli.length}
        Prigionieri deceduti: ${countmorti}
        Prigionieri evasi: ${countevasi}`;
    document.getElementById('output3').innerText = output;
}
function getInputNome() {
    return document.getElementById("ricerca").value
}

var ricercaFascicolo = document.getElementById('submit6').addEventListener('click', fascicoloByNome);

function fascicoloByNome() {
    var input = getInputNome()
    for (i=0; i < fascicoli.length; i++) {
        if (fascicoli[i].id == input) {
            output = Object.values(fascicoli[i])
        } else {
            output= 'Fascicolo non trovato'
        }
    }
    document.getElementById('output3').innerText = output;
}