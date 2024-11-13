const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
];
// Na linha 1 crio uma array de objetos
   
const estudantesMedias = estudantes.map((estudante) => {
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    let {nome} = estudante;
    return { nome, media: total / estudante.notas.length };
});

// Na linha 9 crio uma nova array que receberá o retorno de map, um novo array
//Aqui map a cada iteração vai utilizar do método reduce para somar as notas e retornar um objeto que contem o nome do aluno e a sua média, obtida por total dividido pela quantidades de notas
   
   
const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90,
   );

// Na linha 19 crio uma nova array que reberá o retorno de filter, uma nova lista, que conterá apenas os alunos com média maior que 90

// Esse algoritmo dada uma array de objetos que contenha nome e notas(um array), retornará um novo array contendo o nome e suas medias e um array contendo apenas os alunos com média acima de 90