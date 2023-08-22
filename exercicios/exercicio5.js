
//O Hipermercado Assaí está com uma promoção de carnes que é imperdível. Confira:
//                        Até 5 Kg           Acima de 5 Kg
//File Duplo        R$ 4,90 por Kg          R$ 5,80 por Kg

//Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg

//Picanha           R$ 6,90 por Kg          R$ 7,80 por Kg


//Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da 
//promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no 
//cartão Assaí o cliente receberá ainda um desconto de 5% sobre o total a compra

//Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um 
//cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo
//de pagamento, valor do desconto e valor a pagar.

let tipoCarne = 'File Duplo';
//let tipoCarne = 'Alcatra';
//let tipoCarne = 'Picnha';
const peso = 6;
//let formaPagamento = 'dinheiro';
//let formaPagamento = "PIX";
let formaPagamento = 'Cartão';
//let formaPagamento = 'AssaíCad';

if(peso <= 5 )
{
    if(formaPagamento == 'dinheiro' || formaPagamento == 'PIX' || formaPagamento == 'Cartão')
    {
        
        if(tipoCarne == 'File Duplo' ){preco = 4.9}
        if(tipoCarne == 'Alcatra' ){preco = 5.9}
        if(tipoCarne == 'Alcatra' ){preco = 6.9}
        total = (peso * preco) ;
        console.log('Produto:                  '+tipoCarne);
        console.log('Quantidade:               kg ' + peso);
        console.log('Total:                    R$ ' + total);
        console.log('Forma de Pagamento:       ' + formaPagamento);
    }

    if(formaPagamento == 'AssaíCard')
    {
        
        if(tipoCarne == 'File Duplo' ){preco = 4.9}
        if(tipoCarne == 'Alcatra' ){preco = 5.9}
        if(tipoCarne == 'Alcatra' ){preco = 6.9}
        total = (peso * preco)*0.95 ;
        console.log('Produto:                  '+tipoCarne);
        console.log('Quantidade:               kg ' + peso);
        console.log('Total:                    R$ ' + total);
        console.log('Forma de Pagamento:       ' + formaPagamento);
    }
}

else(peso > 5 )
{
    if(formaPagamento == 'dinheiro' || formaPagamento == 'PIX' || formaPagamento == 'Cartão')
    {
        
        if(tipoCarne == 'File Duplo' ){preco = 5.8}
        if(tipoCarne == 'Alcatra' ){preco = 6.8}
        if(tipoCarne == 'Alcatra' ){preco = 7.8}
        total = (peso * preco);
        console.log('Produto:                  '+tipoCarne);
        console.log('Quantidade:               kg ' + peso);
        console.log('Total:                    R$ ' + total);
        console.log('Forma de Pagamento:       ' + formaPagamento);
    }

    if(formaPagamento == 'AssaíCad')
    {
        
        if(tipoCarne == 'File Duplo' ){preco = 5.8}
        if(tipoCarne == 'Alcatra' ){preco = 6.8}
        if(tipoCarne == 'Alcatra' ){preco = 7.8}
        total = (peso * preco)*0.95 ;
        console.log('Produto:                  '+tipoCarne);
        console.log('Quantidade:               kg ' + peso);
        console.log('Total:                    R$ ' + total);
        console.log('Forma de Pagamento:       ' + formaPagamento);
    }
}

