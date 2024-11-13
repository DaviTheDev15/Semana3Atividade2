let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]

a = a.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) 
b = b.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)

let c = a + b;

console.log(c)

//Nesse código utilizo do reduce para somar os valores das listas