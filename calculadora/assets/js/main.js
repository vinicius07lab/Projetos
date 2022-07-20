function Calculadora () {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes()
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.realizaConta = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if(!conta) {
                alert('Conta inválida')
                return
            }

            this.display.value = conta
        } catch(e) {
            alert('Conta inválida')
            return
        }
    }

    this.clearDisplay = () => {
        this.display.value = ' '
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => { // arrow function não permite a alteração do this
            const el = e.target

            if (el.classList.contains('btn-num')) {
                this.btnParadisplay(el.innerText) // um metodo dentro de outro precisa da palavra this
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if(el.classList.contains('btn-del')) {
                this.apagaUm()
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta()
            }

            this.display.focus()
        })
    }

    this.btnParadisplay = (valor) => {
        this.display.value += valor
    }
}

const calculadora = new Calculadora()
calculadora.inicia()

