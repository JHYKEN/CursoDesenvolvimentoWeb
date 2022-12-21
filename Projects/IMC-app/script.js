const calculateButton = document.querySelector('.calculateButton')

calculateButton.addEventListener('click', (event) => {
    event.preventDefault()
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)

    const imc = (weight / (height/ 100) ** 2).toFixed(2)

    console.log(imc);
    
    if (height && weight) {
        let situation = ''
        if (imc < 18.5) {
            situation = 'Magreza'
        } else if (imc >= 18.5 && imc < 25) {
            situation = 'Peso Normal'
        }else if (imc >= 25 && imc < 30) {
            situation = 'Sobrepeso'
        } else if (imc >= 30 && imc < 35) {
            situation = 'Obesidade I'
        } else if (imc >= 35 && imc < 40) {
            situation = 'Obesidade II'
        } else if (imc >= 40 ) {
                situation = 'Obesidade III'
        }

        const result = document.querySelectorAll('.result')
        result.forEach((result) => {
            result.innerHTML = `Seu IMC é ${imc}
            ${situation}`
        })
        console.log(result);

        let containerModal = document.querySelector('.containerModal')
        containerModal.style.display = 'grid'
    } else {
        alert(`Por favor insira sua altura e peso.`)
    }
})

let containerModal = document.querySelector('.containerModal')
const closeButton = document.querySelector('.closeButton')
closeButton.addEventListener('click', ()=> {
    containerModal.style.display = "none"
}) 