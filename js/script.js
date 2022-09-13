alert('Ciao, mondo!');
console.log('Ciao, mondo!');
console.log(typeof "Ecco un testo");
console.log(typeof false);
console.log(typeof 0xf2);
console.log(typeof null);
console.log(typeof nonDefinita);

var x; // dichiarazione senza assegnazione

x = -47; // assegnazione di un valore

var y = 26.3; // dichiarazione e assegnazione

//z = 'Mario'; // dichiarazione implicita e assegnazione

//y = 'Rossi'; // assegnazione e cambio tipo



/* Espressioni ed operatori */ 

  // operatori aritmerici

x = y + 12; // operatore di addizione, x ora vale 38.3
console.log(x);

y = 40 - x; // operatore sottrazione, ora y vale 1.7
console.log(y);

z = y * 100; // operatore di addizione, ora z vale 170
console.log(z);

z = z / 5; // operatore di divisione, ora z vale 34
console.log(z);


x = 27 % 4; // x vale 3 (resto della divisione tra 27 e 4)
console.log(x);

y = - x; // operatore di negazione, restituisce il negativo (-3)
console.log(y);


x = ++z; // restituisce il valore attuale di z e poi lo incrementa
         // x ora vale 3 e z vale 35
console.log(x);

y = x++; // incrementa la variabile di uno e restituisce il valore
         // incrementato (y e x valgono 35 entambi)
console.log(y);

z = y--; // come l'operatore ++ ma decrementa anziché incrementare
console.log(z);


var piuGrande = x > 30; // piuGrande contiene ora il valore true
console.log(piuGrande)

var piuPiccolo = x <= 33; // piuPiccolo contiene false
console.log(piuPiccolo)
