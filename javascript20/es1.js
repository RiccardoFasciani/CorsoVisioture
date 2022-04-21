
document.getElementById("submit1").addEventListener("click", compare)

function compare() {
    var in1 = parseInt(document.getElementById("input1").value),
    in2 = parseInt(document.getElementById("input2").value);
   
    var g1 = in1,
        g2 = in2,
        randVal = Math.floor(Math.random() * (100 - 1) + 1), 
        res1 = Math.abs(g1-randVal),
        res2 = Math.abs(g2-randVal);
        

    if ((res1 < res2) && res1 !=0 ) {
        document.getElementById("output1").innerText = `Numero=${randVal} Nessuno dei due giocatori ha azzeccato ma il giocatore 1 si è avvicinato di più`
    } else if ((res1 > res2) && res2 != 0 ) {
        document.getElementById("output1").innerText = `Numero=${randVal} Nessuno dei due giocatori ha azzeccato ma il giocatore 2 si è avvicinato di più`
    } else if (res1 == 0 && res2 == 0) {
        document.getElementById("output1").innerText= `Numero=${randVal} Complimenti entrambi i giocatori hanno azzeccato!`
    } else if (res1 == 0){
        document.getElementById("output1").innerText = `Numero=${randVal} Il giocatore 1 ha azzeccato!`
    } else if (res2 == 0) {
        document.getElementById("output1").innerText = `Numero=${randVal} Il giocatore 2 ha azzeccato!`
    }
}