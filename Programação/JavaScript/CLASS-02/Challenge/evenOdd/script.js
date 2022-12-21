const numPalp = Number(prompt("Escreva algum número para saber se o mesmo é ímpar ou par: "))

const result = numPalp % 2 == 0 ? "Par" : "Ímpar"

window.alert(`O número ${numPalp} é ${result}`)

document.write(numPalp)

