// Escolha da dificuldade
// torre2Play.addEventListener("click", dificuldade)

// function dificuldade (e) {

//    escolha.style.display = "flex"

// }



function geracaoTorreHanoi(n){
    const jogada = document.createElement('section')
    const body = document.querySelector('body')

    body.appendChild(jogada)
    jogada.innerText = 'Fui criado'
}

geracaoTorreHanoi()

const jogada = document.querySelector('#containerJogada')

jogada.addEventListener('click', selectTower)


let countClick = 0
let disco = ''
let torre = ''
let mudancas = 0
//console.log(qntsClicks)

const showClik = document.createElement('span')

// a função é responsável atualizar a quantidade de trocas realizadas
// precisa confirmar o local do mostrador de contagem
function atualizaClick (mudancas){

    showClik.innerText = mudancas

    jogada.appendChild(showClik)

    console.log(showClik)

}

function selectTower(e) {

    console.log("O target do click é: " + e.target.id)
    
    // a condição abaixo valida se o click foi realizado nas "hastes" da torre
    if(e.target.tagName === 'DIV'){
                
        torre = e.target.id 
        
        // valida a condição de primeiro click
        if(countClick === 0){
           
            disco = selectDisc(torre) // devolve o id do último 'filho' da torre
            
            // a condição abaixo verifica se o primeiro click foi dado numa torre vazia e caso verdadeiro ele não permite que o click avance para o segundo click
            if(disco !== null){
                countClick++ // incremento para validação do segundo click
            }
            
            // se disco null então countclick igual a zero
    
        } else if(countClick === 1){

            console.log("O valor de click é igual a 1")
        
            changeTower(torre,disco) // chama a função que irá movimentar os discos
            countClick = 0 // zera o incremento, voltando a ser o 'primero click'


        }
    }

    // ao fim de cada jogada, a função verifica se há a condição de vitória
    win()
}

// função dedicada a troca dos discos entre as torres
function changeTower(tower, disc){

    const tagTower = document.getElementById(tower) // traz o elemento html específico que irá receber o disco
    const tagDisc = document.getElementById(disc) // traz o elemento html específico que será movimentado

    const DiscTowerChange = document.getElementById(selectDisc(tower)) // busca na torre do 'segundo click' o ultimo elemento para validação da regra de negócio


    // *** validação das regras de negócio ***

    // a condição abaixo verifica se a torre do segundo clique é vazia e permite a troca
    if(selectDisc(tower) === null){

        tagTower.appendChild(tagDisc)

        mudancas++ //#Bonus = implenta a contagem de clicks no jogo. No botão reset, zerar a contagem.
        
        atualizaClick(mudancas) // chama a função que exibe na tela a contagem das trocas

    // a condição abaixo compara os tamanhos do ultimo filho de cada torre e é executada quando o disco do primero click por menor que o disco existe na torre do segundo click
    }else if(tagDisc.clientWidth < DiscTowerChange.clientWidth){

        tagTower.appendChild(tagDisc)

        mudancas++ //#Bonus = implenta a contagem de clicks no jogo. No botão reset, zerar a contagem.
        

        atualizaClick(mudancas) // chama a função que exibe na tela a contagem das trocas
    }

}

// função dedicada a retornar o ID do ultimo filho da torre clicada
function selectDisc(id){
    const torreClicada = document.querySelector(`#${id}`)
    const disco = torreClicada.lastElementChild

    // caso a torre clicada não tenha discos, ele retorna null
    if(disco === null){
        return disco
    }

    return disco.id

}




// ***************** VARIÁVEIS ***************//

const containerPlay = document.querySelector("#containerPlay")
const torre2Play = document.querySelector("#torre2Play")
const containerRegras = document.querySelector("#regras")
const containerJogada = document.querySelector("#containerJogada")
const containerResultado = document.querySelector("#containerResultado")
const escolha = document.querySelector("#escolha")
const torre3 = document.querySelector("#torre3")
const torre1 = document.querySelector("#torre1")
const jogarNovamente = document.querySelector("#jogarNovamente")


// ***************** PLAY BUTTON ***************//

// Escolha da dificuldade
torre2Play.addEventListener("click", dificuldade)

function dificuldade (e) {
    
    escolha.style.display = "flex"
    
}

// ***************** ESCOLHAS ***************//

escolha.addEventListener("click", mostrarJogada)

function mostrarJogada (e){

    escolha.style.display = "none"
    containerPlay.style.display = "none"
    containerJogada.style.display = "flex"

    return e.target.id

}

// ***************** CONDIÇÃO DE VITÓRIA ***************//

function win(){
    if (torre3.childElementCount === 4) {
        containerResultado.style.display = "flex"
    }
}

// ***************** JOGAR DE NOVO ***************//

jogarNovamente.addEventListener("click", reset)

function reset() {
    // busca todos os filhos da torre 3 e joga na torre 1

let arr = torre3.children

arr.forEach(element => {

    torre1.appendChild(element)
    
});
    // esconde a tela de resultado
}