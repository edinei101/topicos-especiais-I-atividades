//Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se 
//digitar outro valor deve aparecer valor inválido.


var dia = 1;

if (dia == 1) {
    console.log('Dia da Semana: Domingo')
}

if (dia == 2) {
    console.log('Dia da Semana: Segunda Feira')
}

if (dia == 3) {
    console.log('Dia da Semana: Terça Feira')
}

if (dia == 4) {
    console.log('Dia da Semana: Quarta Feira')
}

if (dia == 5) {
    console.log('Dia da Semana: Quinta Feira')
}

if (dia == 6) {
    console.log('Dia da Semana: Sexta Feira')
}

if (dia == 7) {
    console.log('Dia da Semana: Sábado')
}

if(dia != 1 && dia != 2 && dia != 3 && dia != 4 && dia !=5 && dia != 6 && dia != 7)
{
    console.log('valor inválido');
}