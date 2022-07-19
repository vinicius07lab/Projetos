const relegio = () => {
    // cria segundos em forma de hora
const criaHoraDosSegundos = (segundos) => {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'GMT'
    })
}

const relogio = document.querySelector('.relogio')
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let segundos = 0
let timer // cria essa variavel para usar no botão pausar, por causa do escopo da função

const iniciaRelegio = () => {
        timer = setInterval(function() {
        segundos++ //let segundos é vizinha dessa função
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target
    
    // usando if eu não preciso selecionar os botãoes como feito acima
    if (el.classList.contains('zerar')){
        clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado')
    segundos = 0 // faz o timer voltar ao zero
    }

    if (el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelegio()
    }

    if (el.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
})

// capturando o evento de click nos botões iniciar zerar e pausar:
// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado') // remove a classe pausado para sair do vermelho do zerado
//     clearInterval(timer)
//     iniciaRelegio()
// })

// pausar.addEventListener('click', function(event) {
//     clearInterval(timer)
//     relogio.classList.add('pausado')
// })

// zerar.addEventListener('click', function(event) {
//     clearInterval(timer)
//     relogio.innerHTML = '00:00:00'
//     segundos = 0 // faz o timer voltar ao zero
// })
}
relegio()
