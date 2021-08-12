console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);

const idadeComprador = 15;
const estaAcompanhada =  true; 

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else {
//     if (estaAcompanhada) {
//         console.log("Comprador está acompanahdo");
//         listaDeDestinos.splice(1, 1);
//     } else {
//         console.log("Não é maior de idade e nao posso vender");
//     }
    
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e nao posso vender");
}
    

console.log(listaDeDestinos);

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador == 18)
// console.log(idadeComprador === 18)