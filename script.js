// exercice 2

// let nombre1=5;
// let nombre2=10;
// console.log(nombre1+nombre2);

// // exercice 3

// let fruits= ["pomme", "banane", "cerise"];
// for (let i = 0; i <= 2; i = i +1);
// console.log(fruits);

// exercice 4

// for (let i = 1; i < 20; i ++)
// if (i % 2 === 0) {
//   console.log(i);
// }

// exercice 5

// const Prenom = "Simon";
// let regex2 = /[aeiouy]/g;
// console.log(Prenom.match(regex2));


// exercice 6 non réussi
// const PHRASE = "Je m'appelle Simon";
// let regex = /[a-zA-Z]/g;
// console.log(PHRASE.match(regex));


// exercice 7 
// let nombres = [2, 1, -5, -10, -20];
// console.log(nombres.slice(2));
// console.log(nombres.slice(0,2));


// let nombres = [2, 1, -20, 6, -5, -10];
// // nombres.forEach((num) => {
// //   if (num > 0) {
// //     console.log(num);
// //   }
// // });

// nombres.forEach((numneg) => {
//   if (numneg < 0) {
//     console.log(numneg);
//   }
// });

// exercices 8
let nombres = [2, 1, 250, -20, 6, -5, 100];
console.log(Math.max(...nombres));
