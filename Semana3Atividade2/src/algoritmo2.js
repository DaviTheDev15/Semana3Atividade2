const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
// Na linha 1 crio uma array que possui 3 subarrays contendo letras em cada uma delas  
   
let resultado = letras.flat().reduce((objeto, numero) => {
    if (objeto[numero]) {
      objeto[numero] += 1;
    } else {
      objeto[numero] = 1;
    }
    return objeto;
   }, {});

// Na linha 8 crio uma váriavel
// Em seguida utilizo o método flat no array criado na linha 1 para retornar apenas uma lista, formada pelas sublistas.
// Em seguida uso do método reduce para retornar apenas um valor, que será um objeto que conterá a letra e quantas vezes ela se repete no array


//Esse algoritmo recebe uma lista que possa conter sublistas dentro dela e retorna um objeto com o conteudo e quantas vezes ele repete