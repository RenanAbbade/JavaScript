/* Strings */
const escola = "Renan"

console.log(escola.charAt(4))/*Me dá a letra no indice 4 da String */
console.log(escola.charCodeAt(3)) /*valor deste indice na tabela ASCII*/
console.log(escola.indexOf('R'))
/*Para ver que indice está a letra indicada*/
console.log(escola.substring(1))
/*substring refere-se a capturar os indices da String a partir do indice indicado */
console.log(escola.substring(0,3)) /*Do indice 0 até o 3 */

console.log('Escola '.concat(escola).concat("!"))/*Concatenar*/

console.log(escola.replace(/\w/g,'e')) /*Substitui tudo pela letra e */

console.log('Ana,Maria,Pedro'.split(','))
/*Geração de array com esses elementos pela função split */

