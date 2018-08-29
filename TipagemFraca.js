
/* fracamente Tipada  - JS */
let qualquer = 'Legal'
console.log(typeof qualquer) /*Typeof questiona o tipo da variavel */

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

/* A mesma variavel pode ter multiplos valores o que significa tipagem fraca em JS */
/* Boas praticas significa bons nomes para variaveis, que possuem fácil entendimento sobre do que a mesma se trata */

/*Tipo Número */
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
