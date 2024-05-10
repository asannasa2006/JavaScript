// Tipo number (Números)

// . Variável: endereço e espaço
// . Armazenamento em memória

const meuNumero = 3;

const primeiroNumero = 3;
const segundoNumero = 2;

// proibido variáveis de mesmo 
// const meuNumero = 5; 

//soma de duas variáveis 

const soma = primeiroNumero + segundoNumero;

// comando de output, printar na tela, ou mostrar na tela

console.log(soma);






// Tipo String  (conjuntos de caracteres)

const string1 = "Hello, ";
const string2 = "Anna!";

//concatenar (juntar duas strings)

const olausuario = string1 + "" +string2;

console.log(olausuario);



//exemplo

const nome2 = "Anna";
const sobrenome = "dos Santos";
const idade = 17;

console.log("Nome: " + nome2);
console.log("Sobrenome: " + sobrenome);
console.log("Idade: " + idade);




//tipo boolean
//declara valor true ou false 

const primeironumero1 = 5;
const segundonumero1 = 10;

/// === comparar tipo e valor 
console.log(primeironumero1 === segundonumero1);


//Declarar variável com valor booleano
const ativo = false ;
let ativo2 = true; //permite a mudança do valor da variável 

const nome5 = "Anna";
const nome7= "Beatriz";
 
console.log(nome5 === nome7);


//tipo nulo
//ausência de valor
// é atribuido como valor de variável

let input = null;

console.log(input);

// tipo underfined 
//ausência de valor, mas com outro tipo
// não é permitido o uso de CONST, pois variáveis do tipo  Const precisam ser inicializadas 


let input2;

console.log(input2);

//underfined e null

console.log (input == input2); //true, valores iguais 
console.log(input === input2);//false, tipos iguais 

