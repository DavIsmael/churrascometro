function catchInput(){
    let duracao = document.getElementById("duracao")
    let adultos = document.getElementById("adultos")
    let criancas = document.getElementById("criancas")    
    let resultado = document.getElementById("resultado")
    let bebida = document.getElementById("bebida")
    let carne = document.getElementById("carne")
    let cerveja = document.getElementById("cerveja")
    let itens = document.getElementById("itens")
    let botao = document.getElementById("botao")
    botao.setAttribute("disabled", true)   
    if((criancas.value == 0 && adultos.value == 0)){
        alert("Você não preencheu os campos necessários, tente novamente.")
        setTimeout(function(){
            botao.removeAttribute("disabled")
        }, 1000)
        return
    }   
    itens.style.display = "block"
    let calculoCarneAdulto = adultos.value * quantidadeCarne(duracao.value)
    let calculoCarneCrianca = (criancas.value * quantidadeCarne(duracao.value)) / 2
    let totalCarne = calculoCarneCrianca + calculoCarneAdulto
    let carneKg = totalCarne / 1000

    let calculoCerveja = adultos.value * quantidadeCerveja(duracao.value)
    let lataCerveja = calculoCerveja / 350

    let calculoBebidaAdulto = adultos.value * quantidadeBebida(duracao.value)
    let calculoBebidaCrianca = (criancas.value * quantidadeBebida(duracao.value)) / 2
    let totalBebida = calculoBebidaCrianca + calculoBebidaAdulto
    let bebidaL = totalBebida / 1000

    resultado.style.color = "dodgerblue"
    carne.innerText = `${carneKg}kg de carne`
    bebida.innerText = `${bebidaL}L de bebida (água ou refrigerante)`
    cerveja.innerText = `${Math.round(lataCerveja)} latas de cerveja`
    
    setTimeout(function(){
        botao.removeAttribute("disabled")
    }, 1000)
}
function quantidadeCarne(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}
function quantidadeCerveja(duracao){
    if (duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}
function quantidadeBebida(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}