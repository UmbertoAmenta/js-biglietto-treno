/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/


// Chiedere l'età
const userAge = Number(prompt("Inserisci la tua età"))

// Chiedere la distanza (km) che si vuole percorrere
const userReach = Number(prompt("Indica quanti <km> percorrerai sul treno per raggiungere la tua meta"))
    

console.log(userAge + "anni", userReach + "km")



// Calcolare il prezzo totale
const ticketFullPrice = userReach * 0.21


console.log(ticketFullPrice +"€")



// Applicare uno sconto del
//  - SE <18 anni -20%
//  - ALTRIMENTI SE >65 anni -40%
//  - altrimenti prezzo pieno
let ticketFinalPrice = ticketFullPrice
let promo 
if (userAge < 18) {
    promo = ", già scontato del 20%, è pari a"
    ticketFinalPrice = Math.ceil(ticketFullPrice * 0.8)
} else if (userAge > 65) {
    promo = ", già scontato del 40%, è pari a"
    ticketFinalPrice = Math.ceil(ticketFullPrice * 0.6)
} else {
    promo = " è pari a"
}


console.log("prezzo finale", ticketFinalPrice.toFixed(2) + "€")



// Mostrare all'utente il prezzo del biglietto (2 decimali)
if (confirm(`L'importo del biglietto${promo} ${ticketFinalPrice.toFixed(2)}€`)) {
    alert("Puoi pagare e ritirare il biglietto. Buon viaggio")
} else {
    alert("Ci spiace non poterti essere d'aiuto.")
}