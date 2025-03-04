// 8. videó



// alert('Üzenet');
/*
Imput: 
Hány jegyet kér?
Milyen tipusú jegyet kér?  (diák | felnőtt)

A diák jegy ára 300ft
A Felnőtt jegy ára 350ft
Gyugdíjas jegy ára 280ft
Tíznél több jegy vásárlása esetén jár 10% kedvezmény

*/



var darabszám = prompt('Add meg a darabszámot');
var típus = prompt('Add meg a jegy tipúsát!     diák / felnőtt / nyugdíjas');


var típusok = {

   diák: 300,
   felnőtt: 350,
   nyugdíjas: 280
};

console.log(darabszám);
console.log(típus);

var ár = típusok[típus];
var kedvezmény = darabszám > 10 ? 0.9 : 1;

var összeg = darabszám * ár * kedvezmény;

alert(összeg);




// 9. videó
