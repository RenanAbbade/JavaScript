/* Tipo Array */
/* Em JS o array não é necessáriamente fixo como em java */
const valores = [7.7,8.9,9.2,10]
console.log(valores[0], valores[3])
console.log(valores[4]) /*Indice do array não existe */
valores[4] = 10
console.log(valores)
console.log(valores.length) /*variavel length diz quantos elementos tem o array */

valores.push({id:3}, false, null, 'teste') /* Push para adicionar novos elementos no Array */
/* JavaScript é fracamente tipada, por isso pode-se misturar tipos de dados em um array, porém é importante criar arrays de cada tipo de dado */

console.log(valores)
console.log(valores.pop()) /*Pega o ultimo valor do array e retira esse valor */

delete valores[0]
/*Deleta um indice do array */
console.log(valores)
console.log(typeof valores)
