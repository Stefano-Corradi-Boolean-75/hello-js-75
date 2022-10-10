


//alert('Ciao!!!!');

//document.writeln('Ciao JS');

//console.log('questo messaggio è solo in cosole');
//console.log(5);

console.log(document.getElementById('saluto').innerHTML);


console.log(document.getElementById('saluto').innerHTML);
//

// non restituisce un erroro bloccante
console.log(unaVar);

// inizializzo le variabili
const mioNome = "Ugo de Ughi";
// a let posso non dare valori di default
let salutoCompleto;
console.log('salutoCompleto ---------->> ',salutoCompleto);
// var è obsoleta e non la usiamo!
var unaVar = "Sono una var";
unaVar += " e posso cambiare perché mi comporto come una let";
console.log(mioNome);

salutoCompleto = "Ciao ";
// ERRORE BLOCCANTE
//mioNome = "Giuseppe";

// con += concateno
salutoCompleto += mioNome;


// con = sovrascrivo
document.getElementById('saluto').innerHTML = salutoCompleto;
// con += concateno
document.getElementById('saluto2').innerHTML += mioNome;


let nome = "Ugo";
let cognome = "de Ughi";
const nomeCompleto = nome + " " + cognome;

console.log('nomeCompleto',nomeCompleto);

let numero1 = 5;
let numero2 = 7;
let somma = numero1 + numero2;
console.log('somma', somma);

// se uno + fra numero e stringa il numero diveta stringa
console.log(nomeCompleto + somma);

console.log('somma', somma);

const data = "(lunedì 10 ottobre)";

//vecchia modalità di inserimento di una var in una stringa 
//let pensiero = "Oggi " + data + " a Roma è una bella giornata";

// invece con ECMA6 si fa così
let pensiero = `
        Oggi  ${data}
        a Roma è una <strong class="text-danger">bella</strong> giornata
`;

document.getElementById('testo').innerHTML = pensiero;

// operatori matematici
let moltipliazione = numero1 * numero2;
console.log('moltipliazione',moltipliazione);
let sottrazione =  numero2 - numero1;
console.log('sottrazione',sottrazione);
let divisione =  50 / numero1;
console.log('divisione',divisione);

const altroQuasiNumero = "10";
console.log('altroQuasiNumero',altroQuasiNumero);

somma = altroQuasiNumero + numero1;
sottrazione = altroQuasiNumero - numero1;

console.log('somma --> ',somma);
console.log('sottrazione --> ',sottrazione);

const nomeUtente = prompt('come ti chiami?');

document.getElementById('user').innerHTML = nomeUtente;

// da un prompt abbiamo sempre una stringa
const anni = prompt('Quanti anni hai?')

console.log('nomeUtente',nomeUtente);
console.log('anni',anni);