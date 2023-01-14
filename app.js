const monstros = [
    {
        id: 1,
        nome: 'God',
        altura: 100,
        resumo: "An enigmatic entity referred as God",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/7/70/God_Profile.png'
    },
    {
        id: 2,
        nome: 'Psykos',
        altura: 1.6,
        resumo: "Conselheira militar da Associação de monstros, e antiga amiga de Fubuki. Ela é uma das líderes da Associação de monstros.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/b/bb/Psykos_profile_manga.png'
    },
    {
        id: 3,
        nome: 'Orochi',
        altura: 40,
        resumo: "Também chamado de Senhor Orochi, ele é um monstro nível dragão e líder da Associação de monstros.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/e/e7/Orochi_Icon.png'
    },
    {
        id: 4,
        nome: 'Black Sperm',
        altura: 1,
        resumo: "Monstro de nível dragão que ocupa a posição de executivo na Associação de monstros. Após o fim da Associaçãod e monstros ele vira o animal de estimação de Saitama.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/d/d7/Black_Sperm_Profile.png'
    },
    {
        id: 5,
        nome: 'Homeless Emperor',
        altura: 1.7,
        resumo: "Ser misterioso de nível dragão e ocupa a posição de executivo na Associação de monstros. Recebeu os poderes e depois foi morto por God.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/6/6a/Homeless_emperor_profile.png'
    },
    {
        id: 6,
        nome: 'Fuhrer Ugly',
        altura: 2.4,
        resumo: "Monstro nível dragão de aparência assustadora, ocupa a posição de executivo na Associação de monstros. Foi morto por Garou.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/1/1b/Fuhrer_Ugly_new_profile.png'
    },
    {
        id: 7,
        nome: 'Garou',
        altura: 1.8,
        resumo: "Humano que se identifica como monstro, chamdo de caçador de herois e auto denomidado Monstro Humano, Garou é um ex-aluno de Bang.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/3/30/Garou_profile2.png'
    },
    {
        id: 8,
        nome: 'Gums',
        altura: 4,
        resumo: "Monstro guloso que devora tudo pela sua frente de nível dragão, ocupa a posição de executivo na Associação de monstros. Foi morto pelo Fuhrer Ugly.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/f/f9/Gums_manga_profile.png'
    },
    {
        id: 9,
        nome: 'Nyan',
        altura: 2.3,
        resumo: "É um gato doméstico que virou um monstro de nível dragão, ele ocupa a posição de executivo na Associação de monstros.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/d/d8/Nyan_Manga_Profile.png'
    },
    {
        id: 10,
        nome: 'Overgrown Rover',
        altura: 20,
        resumo: "É um cão que virou um monstro de nível dragão, ocupa a posição de executivo na Associação de monstros. Sua função é guardar o território da Associação de monstros.",
        foto: 'https://static.wikia.nocookie.net/onepunchman/images/e/eb/Overgrown_Rover.png'
    },
]


const secao = document.querySelector('.monstros')

const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map((monstro) => {
    return `<div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura} </p>
        <p class="resumo">Resumo: ${monstro.resumo}</p>
        <img src="${monstro.foto}"/>
    </div>`
})

secao.innerHTML = todosOsMonstros 