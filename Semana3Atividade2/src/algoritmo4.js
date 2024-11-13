const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
// Na linha 1 crio uma array que recebe um array contendo objetos
   const funcionariosPorDepartamento = funcionarios.reduce(
    (acumulador, funcionario) => {
      const departamento = funcionario.departamento;
      if (!acumulador[departamento]) {
        acumulador[departamento] = [];
      }
      acumulador[departamento].push(funcionario);
      return acumulador;
    },
    {},
   );
// Na linha 7 é criado um array que irá receber um objeto, como atributo terá o departamento, que irá conter um array de objeto contendo o nome, salario e departamento.
   const mediasSalarioPorDepartamento = Object.keys(
    funcionariosPorDepartamento,
   ).map((departamento) => {
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    );
    return {
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
   });
   // Na linha 19, crio uma array de objetos, e ele irá possuir os atributos departamento e media, sendo media, a média salarial dos salarios dos funcionarios desse departamento
   
   const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    (departamento) => departamento.media > 65000,
   );
   
   // Na linha33 crio um array de objetos que ao utilizar o método filter, irá conter apenas os departamentos com média salarial maior que 65000
console.log(funcionariosPorDepartamento)
console.log(mediasSalarioPorDepartamento)
console.log(maioresPagamentos)

// Esse algoritmo dada uma lista de objetos, retorna um objeto contendo uma lista com os funcionarios do departamento e duas listas, uma contendo a média salarial do departamento e a outra contendo apenas os departamentos que possuem maior pagamento