// tipo var 
// foi a primeira forma de declarar variáveis que surgiu no JavaScript
// funciona basicamente em qualquer parte do código

var altura = 5;
var comprimento = 7;

// calcular a área de um quadrado/ retangulo 

var area = altura * comprimento;
//diremos que area é uma variável que guardará o resultado da variável altura multiplicado pela variável comprimento
//não precisamos declarar a variável area, isso acontece pois o node acaba fazendo essa função
// o var tem uma função especial que permite usá-la antes de ser declarada

console.log(area);
//exibir o resultado no console para checarmos qual será a saída



//tipo let 
//mudar a variável de var para let
//Como o var pode ser declarada, usada, substituída, sem muitas regras, isso pode causar um comportamento inesperado no código, ou seja, um bug.
//

let altura = 5;
let comprimento = 7;

var area = altura * comprimento;

//definir a area sem declarar o let?

console.log(area);
//Continua funcionando! Até o momento não da pra notar diferença entre let e var.

// agora vamos exigir que o código precise verificar para fazer o calculo correspondente
//uma comparação para descobrir se o valor da let é um retângulo ou triângulo

let forma = "retângulo"
let altura = 5;
let comprimento = 7;

let area

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);


//tipo const
//manter a aplicação concisa
//protege o fluxo de trabalho da aplicação

const formaa = "quadrado";

const altura = 5;

const comprimento = 7;

const area = altura * comprimento;

console.log(area)


const formaaa = 'quadrado';
const altura = 5;
const comprimento0 = 7;

if (forma === 'quadrado') {
    area = altura comprimento0;
} else {
    area = (altura comprimento0) / 2;
}

console.log(area)
