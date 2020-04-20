/* Entendendo null e undefined */
const a = {name:'Teste'} /* A constante A na realidade temo o endereço de tal objeto */
const b = a

b.name = 'Opa'
"Opa"
a
let c = 3 /*Com tipos primitivos, fazemos cópia do valor, já com objetos, é feito por referencia, no qual operamos com o mesmo objeto na memoria, que se mudar a partir de a, b também mudara e vice-versa */
let d = c
d++
console.log(d)


/*UNDEFINED */
console.log("-----------UNDEFINED-------------")
let valor //Não inicializada
console.log(valor)
valor = null // Ausencia de valor, quando quero zerar uma variavel referencia // 
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // N está definido o preço no produto
console.log(produto)
produto.preco = 3.50 //posso dinamicamente adicionar ao objeto
console.log(produto)
console.log(!!produto.preco)
//delete.produto.preco  para retirar o preço do produto
produto.preco = null // Para atribuir um valor não elaborado
console.log(produto)


