'use strict'

const Informacoes = [
    {
        nome: "Barbie",
        imagem: "margot.img.png",
        ultimaMensagem: "Tudo pronto! Como est...",
        contato: "Steise",
        tempo: "Há 10 minutos",
        lidas: "4"
    },
    {
        nome: "Ken",
        imagem: "ken.img.png",
        ultimaMensagem: "Onde vcs est...",
        contato: "Barbie",
        tempo: "Há 5 minutos",
        lidas: "5"
    },
    {
        nome: "Dua Lipa",
        imagem: "duolipa.img.png",
        ultimaMensagem: "Já chegaram ?...",
        contato: "Ken",
        tempo: "Há 1 minutos",
        lidas: "2"

    },
    {
        nome: "Staise",
        imagem: "stasie.img.png",
        ultimaMensagem: "CHEGAMOS",
        contato: "Dua Lipa",
        tempo: "agora pouco",
        lidas: "1"

    }
]


const criarItem = (Informacoes) => {

    const imagem = document.createElement('img')
    imagem.src = `./img/${Informacoes.imagem}`
    imagem.alt = Informacoes.name
    imagem.classList.add('img')

        //Part1
    const nome = document.createElement('h1')
    nome.textContent = Informacoes.nome

    const lidas = document.createElement('h2')
    lidas.textContent = Informacoes.lidas

        //Part2
    const ultimaMensagem = document.createElement('p')
    ultimaMensagem.textContent = Informacoes.ultimaMensagem

        //Destinatario
    const contato = document.createElement('div')
    contato.textContent = Informacoes.contato
    contato.classList.add('destinatario')

        //Status
    const tempo = document.createElement('div')
    tempo.textContent = Informacoes.tempo
    tempo.classList.add('status')


        ///////////////////////////////////////////

        const part1 = document.createElement('div')
        part1.replaceChildren(nome, lidas)
        part1.classList.add('part1')

        const part2 = document.createElement('div')
        part2.replaceChildren(ultimaMensagem)

        const all = document.createElement('div')
        all.replaceChildren(part1, part2, tempo)

        const item = document.createElement('div')
        item.replaceChildren(imagem, all,contato)
        item.classList.add('item')



    return item
}

const mostrarItem = (Informacoes) => {
    const itemConteiner = document.getElementById('item-conteiner')
    const item = criarItem(Informacoes)

    itemConteiner.appendChild(item)
}
Informacoes.forEach(mostrarItem)