console.log("---Tipo VAR---")
// foi a primeira forma de declarar variáveis que surgiu no JavaScript
// funciona basicamente em qualquer parte do código


var altura0 = 5;
var comprimento0 = 7;

// calcular a área de um quadrado ou retangulo 

area0 = altura0 * comprimento0;
//diremos que area é uma variável que guardará o resultado da variável altura multiplicado pela variável comprimento
//não precisamos declarar a variável area, isso acontece pois o node acaba fazendo essa função
// o var tem uma função especial que permite usá-la antes de ser declarada

console.log("a area do retangulo/quadrado é:")
console.log(area0);
//exibir o resultado no console para checarmos qual será a saída
//o var pode ser declarada, usada, substituída, sem muitas regras, isso pode causar um comportamento inesperado no código, ou seja, um bug.


console.log("---Tipo LET---")


let altura1 = 5;
let comprimento1 = 7;

area1 = altura1 * comprimento1;
//definir a area sem declarar o letou continuar em var?

console.log("a área do retagulo/quadrado é:")
console.log(area1);
//Continua funcionando! Até o momento não da pra notar diferença entre let e var.

// agora vamos exigir que o código precise verificar para fazer o calculo correspondente.
//uma comparação para descobrir se o valor da let é um retângulo ou triângulo

let forma = "retângulo"
let altura2 = 5;
let comprimento2 = 7;

let area2

// tudo que estiver {} é um blobo de código 

if (forma === 'retângulo') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log("a área do retagulo/quadrado é:")
console.log(area2);
//let area
// a variavel deve ser declarada antes do console.log



console.log("---Tipo CONST---")
//manter a aplicação concisa (imutável)
//protege o fluxo de trabalho da aplicação
// não alterara o valor enquanto estiver em execução 

const forma1 = "quadrado";

const altura3 = 5;

const comprimento3 = 7;

const area3 = altura3 * comprimento3;

console.log("a área do retagulo/quadrado é:")
console.log(area3)




const forma2 = "quadrado";
const altura4 = 5;
const comprimento4 = 7;

if (forma2 === "quadrado") {
    area4 = altura4 * comprimento4;
} else {
    area4 = (altura4 * comprimento4) / 2;
}

console.log("a área do retagulo/quadrado é:")
console.log(area4)



