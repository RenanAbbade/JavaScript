/* fracamente Tipada  - JS */
let qualquer = 'Legal'
console.log(typeof qualquer) /*Typeof questiona o tipo da variavel */

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

/* A mesma variavel pode ter multiplos valores o que significa tipagem fraca em JS */
/* Boas praticas significa bons nomes para variaveis, que possuem fácil entendimento sobre do que a mesma se trata */

/*------Tipo Número ----*/
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
const avaliacao1 = 9.8
const avaliacao2 = 6.8
const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1+peso2)
/*Transforma em Fixo */ 
console.log(media.toFixed())
/*Transforma em String */ 
console.log(media.toString())
/*Transforma em binário */ 
console.log("Binário =",media.toString(2))
console.log(typeof media)

/*------Tipo Número:Cuidados ----*/
console.log("Número:Cuidados")
console.log(7/0) /*Divide por zero*/
console.log("10"/2)/*Divide por String sem ponto flutuante */
console.log("Show"*2)/*Not a number, JS não multiplica Strings */
console.log((10).toFixed())/*Fixando um 10 sem ser por variavel */

