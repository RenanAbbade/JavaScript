/* Template String */
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
/*No template String posso quebrar uma linha no meio */
const template = `
 Olá 
 ${nome}!`
console.log(concatenacao, template)

// expressões
console.log(`1+1 = ${1+1}`)

/* Função para pegar as letras e converter para maiusculo */
const up = texto => texto.toUpperCase()
/*UP é a função nesse caso, que pega o texto e transforma para maíuscula */
console.log(`Ei... ${up('Cuidado')}!`)


