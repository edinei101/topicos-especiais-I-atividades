//1. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto 
//de Renda, que depende do salário bruto (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde 
//a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde 
//ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade 
//de horas trabalhadas no mês.

//Desconto do IR:
//Salário Bruto até 900 (inclusive) - isento
//Salário Bruto até 1500 (inclusive) - desconto de 5%
//Salário Bruto até 2500 (inclusive) - desconto de 10%
//Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
    
    
  //  **No exemplo o valor da hora é 5 e a quantidade de hora é 220.** 
    
    //Salário Bruto: (5h * R$ 220,00)        : R$ 1100,00
    //(-) IR (5%)                                    : R$   55,00
    //(-) INSS ( 10%)                                : R$  110,00
    //FGTS (11%)                                     : R$  121,00
    //Total de descontos                             : R$  165,00
    //Salário Liquido                                : R$  935,00
    //Impressão na tela conforme o exemplo acima.

    var horaTrabalhada = 200;
    var valorHora = 5;
    const salario = horaTrabalhada * valorHora;
  
    if(salario <= 900.00) {
        let impostoDeRerda = salario * 0;
        let inss = salario * 0.10;
        let fgts = salario * 0.11;
        let totalDeconto = impostoDeRerda + inss + fgts;
        let salarioLiquedo = salario - totalDeconto;
          
        console.log( 'Salário Bruto:                                               R$' +  salario);
        console.log( '(-) IR (0%):                                                 R$' +  impostoDeRerda + ' isento');
        console.log( '(-) INSS ( 10%):                                             R$' +  inss);
        console.log( 'FGTS (11%):                                                  R$' +  fgts);
        console.log( 'Total de Desconto:                                           R$' +  totalDeconto);
        console.log( 'Salario Líquedo:                                             R$' +  salarioLiquedo);
        
    }


    if(salario > 900.00 && salario <= 1500.00) {
      let impostoDeRerda = salario * 0.05;
      let inss = salario * 0.10;
      let fgts = salario * 0.11;
      let totalDeconto = impostoDeRerda + inss + fgts;
      let salarioLiquedo = salario - totalDeconto;
        
      console.log( 'Salário Bruto:                                               R$' +  salario);
      console.log( '(-) IR (5%):                                                 R$' +  impostoDeRerda);
      console.log( '(-) INSS ( 10%):                                             R$' +  inss);
      console.log( 'FGTS (11%):                                                  R$' +  fgts);
      console.log( 'Total de Desconto:                                           R$' +  totalDeconto);
      console.log( 'Salario Líquedo:                                             R$' +  salarioLiquedo);
  }


    if(salario > 1500.00 && salario <= 2500.00) {
      let impostoDeRerda = salario * 0.10;
      let inss = salario * 0.10;
      let fgts = salario * 0.11;
      let totalDeconto = impostoDeRerda + inss + fgts;
      let salarioLiquedo = salario - totalDeconto;
      
      console.log( 'Salário Bruto:                                               R$' +  salario);
      console.log( '(-) IR (10%):                                                R$' +  impostoDeRerda);
      console.log( '(-) INSS ( 10%):                                             R$' +  inss);
      console.log( 'FGTS (11%):                                                  R$' +  fgts);
      console.log( 'Total de Desconto:                                           R$' +  totalDeconto);
      console.log( 'Salario Líquedo:                                             R$' +  salarioLiquedo);
  }
  

  if(salario > 2500.00) {
    let impostoDeRerda = salario * 0.20;
    let inss = salario * 0.10;
    let fgts = salario * 0.11;
    let totalDeconto = impostoDeRerda + inss + fgts;
    let salarioLiquedo = salario - totalDeconto;
    
    console.log( 'Salário Bruto:                                               R$' +  salario);
    console.log( '(-) IR (20%):                                                R$' +  impostoDeRerda);
    console.log( '(-) INSS ( 10%):                                             R$' +  inss);
    console.log( 'FGTS (11%):                                                  R$' +  fgts);
    console.log( 'Total de Desconto:                                           R$' +  totalDeconto);
    console.log( 'Salario Líquedo:                                             R$' +  salarioLiquedo);
}