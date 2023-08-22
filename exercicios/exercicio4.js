//Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//Álcool: até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro
//Gasolina: até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro

//Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado 
//da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente 
//sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90

var volume = 21;
let tipo = 'g';



if(tipo == 'a')
{
    if(volume <=20){
        valorapagar =  0.97 * (volume*1.9);
        console.log('Desconto:                   3%');
        console.log('Valor a Pagar:              R$ '  + valorapagar);
    }

    if(volume > 20){
        valorapagar =  0.95 * (volume*1.9);
        console.log('Desconto:                   5%');
        console.log('Valor a Pagar:              R$ '  + valorapagar);
    }
}

if(tipo == 'g')
{
    if(volume <=20){
        valorapagar =  0.96 * (volume*2.50);
        console.log('Desconto:                   4%');
        console.log('Valor a Pagar:              R$ '  + valorapagar);
    }

    if(volume > 20){
        valorapagar =  0.94 * (volume*2.50);
        console.log('Desconto:                   6%');
        console.log('Valor a Pagar:              R$ '  + valorapagar);
    }
}

