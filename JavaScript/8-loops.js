console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);

const idadeComprador = 15;
const estaAcompanhada =  true; 
let temPassagemComprada = false;
const destino = `Rio de Janeiro`;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;    
    
let contador = 0;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe");
    }
    contador++;
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe");
    }
}
console.log(listaDeDestinos);