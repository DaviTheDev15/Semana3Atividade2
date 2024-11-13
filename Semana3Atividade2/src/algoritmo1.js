let tamanho = prompt('Digite o tamanho da lista de números'); 
// Na linha 1 se utiliza de prompt (um método DOM) para fazer um input
// e armazeno esse valor na variavel tamanho
// Tornei ela uma váriavel Let pois quero alterar o tipo dela para inteiro

tamanho = parseInt(tamanho);
let lista = new Array(tamanho).fill(null); 
// Na linha 4 declaro uma váriavel constante :) que irá conter um novo array
// Aqui se utiliza o método Array passando como parametro uma string.
// assim será criada uma arraylist que contenha o parametro passado.
// Em seguida utilizo do método fill, para preencher a posição da lista com null.
// pois é o parametro passado no método

lista
 .map((item, index) => {
   return index + 1;
 })
 .reduce((acumulador, item) => {
   return acumulador * item;
 });

// Na linha 11 utilizo o método map em lista para retornar um novo Array que irá possuir
// o mesmo tamanho do array original, e esse novo Array irá conter os index da lista + 1
// Na linha 15 utilizo o método reduce no array criado pelo map, para retornar um unico valor que será o produto da multiplicação entre o acumulador e o item

new Array(tamanho)
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);

// Aqui há apenas uma mudança no que o redunce irá fazer, que ao inves de multiplicar, ele soma

//Esse algoritmo após a alteração de tamanho para inteiro, cria uma lista do tamanho da variavel tamanho, se atribuido a lista, pode também retornar o reduce contendo a multiplicação ou soma dos indeces da lista 