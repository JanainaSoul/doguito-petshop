import { valida } from './novaValidacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    if(input.dataset.tipo == 'preco'){ //mascara para valores de moedas
        SimpleMaskMoney.setMask(input, {
                prefix: 'R$ ',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'end'
        
        }
            )
    }


    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})