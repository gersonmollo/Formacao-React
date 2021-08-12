import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente("Gerson", 1122233309);

const conta = new ContaCorrente(1001, cliente);

// const conta2 = new ContaCorrente();
// conta2.agencia = 1002;
// conta2.cliente = cliente1;

// let valor = 100;
// conta.transferir(valor, conta2);

console.log(cliente);
console.log(conta);
// console.log(conta2);
console.log(ContaCorrente.numeroDeContas);