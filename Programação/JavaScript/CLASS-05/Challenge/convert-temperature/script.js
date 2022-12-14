function degreeConvert (degree){

    let arrayDegree = Array.from(degree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""))

    //if newDegree = NaN then False
    if (!newDegree) {
        throw new Error('Insira um valor válido (Ex: 10f ou 20c)')
    }

    if (scaleDegree.toLowerCase() == "c") {
        return (newDegree * 9/5 + 32).toLocaleString('pt-BR') + 'f'
    }

    else if (scaleDegree.toLowerCase() == "f"){
        return ((newDegree - 32) * 5/9).toLocaleString('pt-BR') + 'c'
    }

    else {
        throw new Error("Escala inválida (Ex: 10f ou 20c)")
    }
}

try {
    let temperature = '20f'
    document.write(`${temperature.toLowerCase()} =  ${degreeConvert(temperature)}`)
}
catch (error) {
    document.write(error)
}