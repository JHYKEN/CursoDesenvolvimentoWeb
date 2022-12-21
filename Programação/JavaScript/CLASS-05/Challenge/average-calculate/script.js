const nameStudant = prompt("Nome: ")
const nota1 = Number(prompt("Nota 1: "))
const nota2 = Number(prompt("Nota 2: "))

function calcAvarege(nota1, nota2) {
    return (nota1 + nota2) / 2
}

const avarege = calcAvarege(nota1, nota2)

let situation = ''

if (avarege >= 7) {
    situation = 'aprovado(a)!'
}
else {
    situation = 'reprovado(a)!'
}

alert(`${nameStudant} teve média de ${avarege} e foi ${situation}`)


