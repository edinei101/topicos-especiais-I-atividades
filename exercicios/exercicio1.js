//**1.** Faça um script que recebe o salário de um colaborador e o  reajuste segundo o seguinte critério, baseado no salário atual: 

//- salários até R$ 280,00 (incluindo) : aumento de 20%
//- salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//- salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//- salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado,
    
   // **informe na tela:**
    
  //  - o salário antes do reajuste;
  //  - o percentual de aumento aplicado;
  //  - o valor do aumento;
  //  - o novo salário, após o aumento.node .\main.js
  
  let valor = 300;
  const salario = valor;

  if(salario <= 280.00) {
    let valorAumento = salario * 0.2;
    let novoSalario = salario + valorAumento;
      
    console.log('O salario antes do reajuste:' + salario + 
      'O percentual de aumento aplicado: 20%' + 
      'O valor do Aumento:' + valorAumento +
      'O novo salario, apos o aumento:' + novoSalario);

  }
  if(salario > 280 && salario <= 700.00) {
    let valorAumento = salario * 0.15;
    let novoSalario = salario + valorAumento;
    
    console.log('O salario antes do reajuste:' + salario + 
      'O percentual de aumento aplicado: 15%' + 
      'O valor do Aumento:' + valorAumento +
      'O novo salario, apos o aumento:' + novoSalario);

  }
  
  if(salario > 700.00 && salario <= 1500.00) {
    let valorAumento = salario * 0.1;
    let novoSalario = salario + valorAumento;
    
    console.log('O salario antes do reajuste:' + salario + 
      'O percentual de aumento aplicado: 10%' + 
      'O valor do Aumento:' + valorAumento +
      'O novo salario, apos o aumento:' + novoSalario);

  }

  if(salario > 1500.00) {
    let valorAumento = salario * 0.05;
    let novoSalario = salario + valorAumento;
    
    console.log('O salario antes do reajuste:' + salario + 
      'O percentual de aumento aplicado: 5%' + 
      'O valor do Aumento:' + valorAumento +
      'O novo salario, apos o aumento:' + novoSalario);

  }
  console.log("Nao aplicou");
  
