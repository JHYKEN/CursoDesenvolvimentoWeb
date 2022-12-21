const numbersMega = []

while(numbersMega.length < 6 ) {
    let numberDrawn = String(Math.ceil(Math.random() * 60)).padStart(2, 0)

    if(!numbersMega.includes(numberDrawn)){
        numbersMega.push(numberDrawn)
    }
}

document.write(numbersMega.sort((a, b) => a - b).join('-'));